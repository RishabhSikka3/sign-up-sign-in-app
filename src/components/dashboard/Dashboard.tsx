// // /components/dashboard/Dashboard.tsx
// import React, { useState, useEffect } from "react";
// import { getUsers, User, UsersResponse } from "../../api/dataApi";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const Dashboard: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string>("");
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(0);
//   const navigate = useNavigate(); // Prepare to use navigate

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response: UsersResponse = await getUsers(currentPage);
//         setUsers(response.data);
//         setTotalPages(response.total_pages);
//         setLoading(false);
//       } catch (error) {
//         if (error instanceof Error) {
//           setError(error.message);
//         } else {
//           setError("An unknown error occurred.");
//         }
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [currentPage]);

//   const handlePreviousClick = () => {
//     setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
//   };

//   const handleNextClick = () => {
//     setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);
//   };

//   const handleSignOut = () => {
//     // Logic to handle sign out, e.g., clearing token
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Users List</h1>
//         <button
//           onClick={handleSignOut}
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Sign Out
//         </button>
//       </div>
//       {loading ? (
//         <p className="text-center">Loading...</p>
//       ) : error ? (
//         <p className="text-red-500 text-center">{`Error: ${error}`}</p>
//       ) : (
//         <>
//           <div className="flex flex-wrap justify-center items-center">
//             {users.map((user) => (
//               <div
//                 key={user.id}
//                 className="m-4 bg-white rounded-lg shadow p-4 w-64"
//               >
//                 <img
//                   src={user.avatar}
//                   alt={`${user.first_name} ${user.last_name}`}
//                   className="rounded-full mx-auto w-24 h-24 object-cover"
//                 />
//                 <div className="text-center mt-3">
//                   <p className="text-lg font-semibold">{`${user.first_name} ${user.last_name}`}</p>
//                   <p className="text-sm text-gray-600">{user.email}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-center mt-4">
//             <button
//               onClick={handlePreviousClick}
//               className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
//               disabled={currentPage === 1}
//             >
//               Prev
//             </button>
//             <button
//               onClick={handleNextClick}
//               className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
//               disabled={currentPage === totalPages}
//             >
//               Next
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

// src/components/dashboard/Dashboard.tsx
import React, { useState, useEffect } from "react";
import { getUsers, User, UsersResponse } from "../../api/dataApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response: UsersResponse = await getUsers(currentPage);
        setUsers(response.data);
        setTotalPages(response.total_pages);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePreviousClick = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);
  };

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Users List</h1>
        <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </button>
      </div>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{`Error: ${error}`}</p>
      ) : (
        <>
          <div className="flex flex-wrap justify-center items-center">
            {users.map((user) => (
              <div
                key={user.id}
                className="m-4 bg-white rounded-lg shadow p-4 w-64"
              >
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                  className="rounded-full mx-auto w-24 h-24 object-cover"
                />
                <div className="text-center mt-3">
                  <p className="text-lg font-semibold">{`${user.first_name} ${user.last_name}`}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={handlePreviousClick}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              onClick={handleNextClick}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
