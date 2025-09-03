// import axios from "axios";
// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";

// export const axiosSecure = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   withCredentials: true,
// });

// const UseAxiosSecure = () => {
//   const navigate = useNavigate();
//   const { logOut } = useContext(AuthContext);

//   useEffect(() => {
//     const interceptor = axiosSecure.interceptors.response.use(
//       (response) => response, // Return the response if successful
//       async (error) => {
//         console.log(
//           "Error caught in axiosSecure interceptor --->",
//           error.response
//         );

//         // Handle 401 or 403 errors
//         if (error.response?.status === 401 || error.response?.status === 403) {
//           // Logout the user
//           await logOut();

//           // Navigate to the login page
//           navigate("/login");
//         }

//         // Throw the error to ensure it can be caught in components
//         return Promise.reject(error);
//       }
//     );

//     // Cleanup interceptor when the component is unmounted
//     return () => {
//       axiosSecure.interceptors.response.eject(interceptor);
//     };
//   }, [logOut, navigate]);

//   return axiosSecure;
// };

// export default UseAxiosSecure;
