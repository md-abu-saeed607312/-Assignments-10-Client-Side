// const SignUp = () => {
//   return (
//     <div className="max-w-md bg-amber-100 p-7 rounded-lg space-y-3">
//       <div className="text-center font-bold text-3xl">Sing Up Form</div>
//       {/* Name  */}
//       <div className=" flex flex-col">
//         <label htmlFor="">Name</label>
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Your Name"
//           required
//           className="p-1.5 rounded-lg"
//         />
//       </div>
//       {/* email  */}
//       <div className=" flex flex-col">
//         <label htmlFor="">Email</label>
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Your email"
//           required
//           className="p-1.5 rounded-lg"
//         />
//       </div>
//       {/* Photo Url*/}
//       <div className=" flex flex-col">
//         <label htmlFor="">Photo URL</label>
//         <input
//           type="url"
//           name="photo"
//           placeholder="Enter Your Photo Url"
//           required
//           className="p-1.5 rounded-lg"
//         />
//       </div>
//       {/* email  */}
//       <div className=" flex flex-col">
//         <label htmlFor="">Password Create</label>
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter Your Password"
//           required
//           className="p-1.5 rounded-lg"
//         />
//       </div>
//       <div className="bg-blue-600 font-bold text-center p-2 mt-3.5 rounded-lg">
//         <button>Submit</button>
//       </div>
//       <div className=" border-b bg-black mt-6"></div>
//     </div>
//   );
// };

// export default SignUp;

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TheContext } from "../Auth Provider/AuthProvider";
import { toast } from "react-toastify";

const SignUp = () => {
  const naviget = useNavigate();
  const { createUser, setUser, updateUser } = useContext(TheContext);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const email = e.target.email.value;
    const photo = e.target.Photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    setError("");

    // পাসওয়ার্ড চেক করার জন্য সঠিক regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    // পাসওয়ার্ড ভ্যালিডেশন
    if (!passwordRegex.test(password)) {
      setError(
        "Password validation: Must contain uppercase, and lowercase letters, and be at least 6 characters long."
      );
      return;
    }
    

    if (!name || !email || !password || !confirmPassword || !photo) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const data = result.user;
        updateUser(name, photo); // Display Name And Photo Url
        setUser(data);
        naviget("/");
        e.target.reset();
        toast("successfully Create Uesr");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Your Name"
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 "
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 "
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Photo URL</label>
            <input
              type="url"
              name="Photo"
              placeholder="Enter Your Photo"
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 "
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create Your Password"
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300 "
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="confirm Your Password"
              className="w-full p-2 mt-1 border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-3 text-center">
          if you have an account?
          <Link to="/login" className="font-bold text-lg text-blue-400">
            {" "}
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
