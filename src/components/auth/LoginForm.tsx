// // src/components/LoginForm.tsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser, LoginRequest } from "../../api/authApi";
// import Input from "../shared/Input";
// import Button from "../shared/Button";

// const LoginForm: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string>("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const userData: LoginRequest = { email, password };
//       const response = await loginUser(userData);
//       console.log("Login successful. Token:", response.token);
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
//         <div className="flex items-center justify-between">
//           <Button type="submit" colorScheme="blue">
//             Login
//           </Button>
//           <Button
//             type="button"
//             colorScheme="gray"
//             onClick={() => navigate("/register")}
//           >
//             Register
//           </Button>
//         </div>
//         {error && <p className="text-red-500 text-xs italic">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

// src/components/auth/LoginForm.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { useDispatch, useSelector } from "../../redux/hooks"; // Adjust the import path according to your project structure
import { performLogin } from "../../redux/actions/authActions";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch(); // Now using the typed version from 'src/hooks.ts'
  const navigate = useNavigate();

  // Select isAuthenticated from the state
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(performLogin({ email, password }));
  };

  const error = useSelector((state) => state.auth.error); // Using the typed useSelector

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
        <div className="flex items-center justify-between">
          <Button type="submit" colorScheme="blue">
            Login
          </Button>
          <Button
            type="button"
            colorScheme="gray"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </div>
        {error && <p className="text-red-500 text-xs italic">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
