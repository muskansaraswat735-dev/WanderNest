import { useState } from "react";

import bgImage from "./assets/travel.jpg";

import { auth } from "./firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ setShowSignup, setIsLoggedIn }){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Login Successful ");
      setIsLoggedIn(true);

    } catch (error) {

      alert(error.message);

    }
  };

  return (

    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >

      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"></div>

      <div className="relative z-10 w-[320px] rounded-[16px] border border-white/20 bg-white/10 backdrop-blur-2xl p-6 shadow-2xl">

        <div className="flex justify-center mb-3">
          <span className="text-4xl">⁀જ➣</span>
        </div>

 <h1
  className="text-4xl text-black text-center"
  style={{ fontFamily: "Cormorant Garamond" }}
>
  WanderNest
</h1>
      
      <p
  className="text-center text-white/60 mt-2 mb-6 text-3xl"
  style={{ fontFamily: "Tangerine" }}
>
  Explore. Dream. Discover.
</p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 outline-none mb-4"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 outline-none mb-6"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-emerald-400 hover:bg-emerald-500 transition-all duration-300 p-4 rounded-2xl text-white text-xl font-bold"
        >
          Login
        </button>

        <p className="text-center text-white/70 mt-6">
          New User?{" "}
          <span
            onClick={() => setShowSignup(true)}
            className="text-emerald-300 font-semibold cursor-pointer"
          >
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;