import { useState } from "react";
import bgImage from "./assets/travel.jpg";

import { auth, db } from "./firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

function Signup({ setShowSignup }) {

  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
 const [fullName, setFullName] = useState("");
const [phone, setPhone] = useState("");
  const handleSignup = async () => {

if (!fullName || !phone || !email || !password)  {
  alert("Please fill all fields");
  return;
}

    try {

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        fullName,
        phone,
        email,
        
      });

      alert("Signup Successful ");

      setShowSignup(false);

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>


      <div className="relative z-10 w-[340px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[20px] p-6">

        <h1 className="text-black text-5xl text-center mb-2">
          ⁀જ➣
        </h1>

        <p className="text-white/70 text-center mb-6">
          Create your account
        </p>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-4 rounded-2xl bg-white/10 text-white outline-none mb-4"
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-4 rounded-2xl bg-white/10 text-white outline-none mb-4"
          onChange={(e) => setPhone(e.target.value)}
        />



        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-4 rounded-2xl bg-white/10 text-white outline-none mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-4 rounded-2xl bg-white/10 text-white outline-none mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-emerald-400 hover:bg-emerald-500 p-4 rounded-2xl text-white text-2xl font-bold"
        >
          Sign Up 
        </button>

        <p className="text-center text-white/70 mt-5">
          Already User?{" "}
          <span
            onClick={() => setShowSignup(false)}
            className="text-emerald-300 cursor-pointer font-semibold"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Signup;