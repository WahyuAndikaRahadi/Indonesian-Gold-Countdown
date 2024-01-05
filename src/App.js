import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMessege, setNewYearMessege] = useState(["Sedang Menunggu","Hari🎆🎇","Ulang Tahun🧨🎈","Untuk Diri Gw🥹👌","Cihuyyy😁😎","Mantap Gess🥳"])
  const particlesInitial = async(engine) => {
    await loadFireworksPreset(engine)
  }
  function timeGone() {
    const newYearDate = new Date("January 19, 2024 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = newYearDate - nowDate
    return remainingTime
  }
  return (
    <>
      <Particles 
      init={particlesInitial}
      options={{ preset: "fireworks" }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold z-50 px-4">
          <Typewriter words={newYearMessege} loop={false} cursorStyle={"🥳"} typeSpeed={10} cursor/>
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown date={Date.now() + timeGone()} onComplete={() => setNewYearMessege([
            "Selamat","Ulang","Tahun","Untuk Diri Gw sendiri","Semoga rezeki nya lancar dan panjang umur😁","Aaminn😊"
          ])}/>
        </div>
      </div>
    </>
  );
}

export default App;
