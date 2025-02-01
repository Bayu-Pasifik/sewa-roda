'use client';
import React from "react";
import { useSpring, animated } from "react-spring";

const LandingPage: React.FC = () => {
  // Animasi untuk judul
  const titleAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { mass: 1, tension: 120, friction: 14 },
  });

  // Animasi untuk subjudul dengan delay
  const subtitleAnimation = useSpring({
    delay: 200,
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { mass: 1, tension: 120, friction: 14 },
  });

  // Animasi untuk tombol call-to-action dengan delay lebih lanjut
  const buttonAnimation = useSpring({
    delay: 400,
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
      <h1
        // style={titleAnimation}
        className="text-white text-4xl md:text-6xl font-bold mb-4 text-center"
      >
        Selamat Datang di Sewaroda
      </h1>
      <p
        // style={subtitleAnimation}
        className="text-white text-lg md:text-2xl mb-8 text-center max-w-2xl"
      >
        Rental mobil cepat, mudah, dan terpercaya. Nikmati kemudahan penyewaan
        mobil untuk setiap kebutuhan perjalanan Anda.
      </p>
      <button
        // style={buttonAnimation}
        className="bg-white text-blue-500 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition"
      >
        Mulai Pesan Sekarang
      </button>
    </div>
  );
};

export default LandingPage;
