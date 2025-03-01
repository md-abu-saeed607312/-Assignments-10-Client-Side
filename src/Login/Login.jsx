import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TheContext } from "../Auth Provider/AuthProvider";
import { toast } from "react-toastify";
const Login = () => {
  const locationUsed=useLocation()
  const notify = () => toast.success('Successfully Login');
  const notifyerror = () => toast.error('Login fail');
  const { signIn, setUser, signupWithGoogle} = useContext(TheContext);
  const [error, setError] = useState();
  const naviget = useNavigate();

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        e.target.reset();
        naviget(locationUsed?.state?locationUsed.state:"/");
        notify()

      })
      .catch((error) => {
        setError(error?.message);
        notifyerror()
      });
  };
  const googleSignUpHandel = () => {
    signupWithGoogle()
    .then((result) => {
      console.log(result);
      naviget("/")
      notify ()
    }).catch((error) => {
      console.log(error);
      notifyerror()
    });
  
  };

  return (
    <>
      <form action="" onSubmit={handelLogin}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className=""> Left Site </div>
          {/* Right Site  */}
          <div className="bg-gray-100 rounded-2xl p-6 max-w-xl drop-shadow-lg">
            <h2 className="text-3xl text-center font-extrabold">Login</h2>
            {/* Email  */}
            <div className="md:px-8">
              <div className="mt-4">
                <label
                  htmlFor="inputname"
                  className="block text-gray-800 font-semibold text-lg"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="block w-full rounded-md py-2 px-2  ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />
                </div>
              </div>
              {/* Password  */}
              <div>
                <label
                  htmlFor="inputname"
                  className="block mt-3 text-gray-800 font-semibold text-lg"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="block w-full rounded-md py-2 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />
                </div>
                <a href="">forget Password ?</a>
              </div>
              <div>
                <button className="bg-linear-to-r from-cyan-500 to-blue-500 w-full p-2 text-center mt-5 text-lg text-white rounded-full">
                  Login
                </button>
              </div>
              {error && <p className="text-red-500 mb-4">{error.message}</p>}
              <div
                onClick={googleSignUpHandel}
                className="border w-full p-2 mt-3 font-bold text-lg text-center rounded-full flex items-center gap-2 justify-center"
              >
                <FaGoogle></FaGoogle>
                Google
              </div>
              <div className=" mt-5 text-center">Dont have an account</div>
              <Link to="/signup">
                <div className="border p-2 my-6  font-bold text-lg text-center rounded-full">
                  Create Your Account
                </div>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;


