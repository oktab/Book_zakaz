import React, { useState } from "react";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import useAuthStore from "../../store/auth";
import { useNavigate } from "react-router";
import { loginUser, registerUser } from "../../api/auth";

const ModernLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" })
  const login = useAuthStore((state) => state.login)
  const registerStore = useAuthStore((state) => state.register);
  const navigate = useNavigate()

  const [register, setRegister] = useState({ name: "", email: "", password: "" })

  const [isRegistering, setIsRegistering] = useState(false);

  const formRegisterHandle = async (e) => {
    e.preventDefault();

    try {
      const res = await registerStore(register);

      navigate("/");
    } catch (error) {
      console.log("❌ Register error:", error.response);
      alert(error.response?.data?.message || "Server xatosi");
    }
  }

  const formHandle = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form)
      console.log(res);

      login(res.data.token)
      navigate("/")
    } catch (error) {
      alert("Login xato: " + error.responsive?.data?.message || "Server xatosi")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-indigo-100 font-[Montserrat]">
      <div
        className={`relative bg-white rounded-[20px] shadow-2xl w-[768px] max-w-full min-h-[480px] overflow-hidden transition-all duration-700 ${isRegistering ? "animate-[move_0.6s] register-active" : ""
          }`}
      >
        <div
          className={`absolute top-0 h-full w-1/2 transition-all duration-700 z-10 ${isRegistering
            ? "translate-x-full opacity-100 z-50"
            : "opacity-0 z-10"
            }`}
        >
          <form
            onSubmit={formRegisterHandle}
            className="bg-white h-full flex flex-col items-center justify-center px-10"
          >
            <h1 className="text-2xl font-bold">Create Account</h1>
            <div className="flex gap-2 my-4">
              {[FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn].map(
                (Icon, idx) => (
                  <a
                    href="#"
                    key={idx}
                    className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-indigo-600"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
            <span className="text-sm text-gray-500">
              or use your email for registration
            </span>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setRegister({ ...register, name: e.target.value })}
              className="w-full my-2 px-4 py-2 rounded-md bg-gray-200 outline-none text-sm"
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setRegister({ ...register, email: e.target.value })}
              className="w-full my-2 px-4 py-2 rounded-md bg-gray-200 outline-none text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setRegister({ ...register, password: e.target.value })}
              className="w-full my-2 px-4 py-2 rounded-md bg-gray-200 outline-none text-sm"
            />
            <button className="mt-4 px-10 py-2 rounded-md text-white font-semibold uppercase text-sm bg-[#512da8] hover:bg-indigo-800">
              Sign Up
            </button>
          </form>
        </div>

        <div
          className={`absolute top-0 h-full w-1/2 left-0 transition-all duration-700 z-20 ${isRegistering ? "translate-x-full" : ""
            }`}
        >
          <form
            onSubmit={formHandle}
            className="bg-white h-full flex flex-col items-center justify-center px-10"
          >
            <h1 className="text-2xl font-bold">Sign In</h1>
            <div className="flex gap-2 my-4">
              {[FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn].map(
                (Icon, idx) => (
                  <a
                    href="#"
                    key={idx}
                    className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-indigo-600"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
            <span className="text-sm text-gray-500">
              or use your email password
            </span>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full my-2 px-4 py-2 rounded-md bg-gray-200 outline-none text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full my-2 px-4 py-2 rounded-md bg-gray-200 outline-none text-sm"
            />
            <a href="#" className="text-xs text-[#512da8] mt-2">
              Forgot your password?
            </a>
            <button className="mt-4 px-10 py-2 rounded-md text-white font-semibold uppercase text-sm bg-[#512da8] hover:bg-indigo-800">
              Sign In
            </button>
          </form>
        </div>
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full transition-all duration-700 bg-[#512da8] text-white flex flex-col items-center justify-center text-center px-10 z-30 ${isRegistering ? "-translate-x-full rounded-r-[100px]" : "rounded-l-[100px]"
            }`}
        >
          {isRegistering ? (
            <>
              <h1 className="text-2xl font-bold">Welcome Back!</h1>
              <p className="text-sm my-2">
                Enter your personal details to use all of our site features
              </p>
              <button
                className="mt-4 px-10 py-2 border border-white rounded-md font-semibold text-sm uppercase"
                onClick={() => setIsRegistering(false)}
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold">Hello, Friend!</h1>
              <p className="text-sm my-2">
                Register with your personal details to use all of our site
                features
              </p>
              <button
                className="mt-4 px-10 py-2 border border-white rounded-md font-semibold text-sm uppercase"
                onClick={() => setIsRegistering(true)}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernLogin;
