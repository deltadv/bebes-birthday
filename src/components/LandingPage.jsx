import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import { BsHeartPulseFill } from "react-icons/bs";

const LandingPage = ({ isNavOpen }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [hint, setHint] = useState("Hint: deva's favorite.");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const correctPassword = "rethasyalvaardhyageraneta";

    if (password === correctPassword) {
      navigate("/iloveyou");
    } else {
      if (password === "retha") {
        setHint("hint: bener, tapi yang lengkap dong sayang.");
      } else if (password === "rethasyalva") {
        setHint("hint: belum lengkap, sayangku.");
      } else if (password === "lucario") {
        setHint("hint: ya masa password-nya lucario sih..");
      } else if (password === "aku") {
        setHint("hint: HAHAHAHA. ya memang sayang, tapi bukan itu.");
      } else {
        setHint("hint: deva's favorite.");
      }
      setError(true);
    }
  };

  return (
    <div className="relative bg-[#1a1a1a] w-full h-screen flex flex-col justify-center items-center px-4 sm:px-5 md:px-6 overflow-hidden">
      {/* Heart Pulse Icon as an ornament */}
      <BsHeartPulseFill className="text-[#FF1493] text-6xl animate-pulse mb-4" />

      {!isNavOpen && (
        <TypeAnimation
          sequence={[
            "hi, sayang!",
            1000,
            "i love you, i really do.",
            1000,
            "happy birthday.",
            1000,
          ]}
          wrapper="div"
          cursor={true}
          speed={200}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 sm:mt-2 md:mt-3 mb-2 sm:mb-3 md:mb-4 text-center text-shadow-sm"
        />
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-4 w-full max-w-sm flex flex-col items-center gap-3 sm:gap-4 md:gap-5"
      >
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 sm:px-5 sm:py-3 md:px-5 md:py-3 border-2 border-[#FF1493] rounded-full focus:outline-none focus:ring-1 focus:ring-[#FF1493]"
        />
        
        {error && (
          <p className="text-[#D8B4E2] text-xs sm:text-sm mt-1 font-normal">
            {hint}
          </p>
        )}

        <button
          type="submit"
          className="text-white bg-[#FF69B4] hover:bg-[#FF1493] py-2 sm:py-3 px-6 sm:px-7 rounded-full mt-1 transition-all duration-300"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default LandingPage;
