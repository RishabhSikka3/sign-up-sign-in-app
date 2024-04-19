// // src/components/RegisterForm.tsx
// import React, { useState } from "react";
// import { registerUser, RegisterRequest } from "../../api/authApi";
// import { useNavigate } from "react-router-dom";
// import Input from "../shared/Input";
// import Button from "../shared/Button";

// const RegisterForm: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string>("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const userData: RegisterRequest = { email, password };
//       const response = await registerUser(userData);
//       console.log("Registration successful. Token:", response.token);
//       navigate("/dashboard");
//     } catch (error) {
//       if (error instanceof Error) {
//         setError(error.message);
//       } else {
//         setError("An unknown error occurred.");
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form
//         className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//         onSubmit={handleSubmit}
//       >
//         <div className="mb-2">
//           <Input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <Input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="flex items-center justify-center">
//           <Button type="submit" colorScheme="blue">
//             Register
//           </Button>
//         </div>
//         {error && <p className="text-red-500 text-xs italic">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;

// src/components/auth/RegisterForm.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { useDispatch, useSelector } from "../../redux/hooks";
import { performRegistration } from "../../redux/actions/authActions";

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state: any) => state.auth.error);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(performRegistration({ email, password }));
    navigate("/dashboard"); // Redirect on successful registration (you may want to check for actual success if needed).
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-2">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <Button type="submit" colorScheme="blue">
            Register
          </Button>
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
