import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/modules");
  };

  return (
    <div className="flex flex-col gap-4 items-center mt-12">
      <p className="md:text-6xl text-3xl text-center font-semibold text-gray-50">
        Run <span className="text-blue-500">Aptos</span> Dapps on any web environment
      </p>
      <p className="text-gray-400 font-medium max-w-2xl mx-auto text-center">
        Access Aptos dApps across Web2 and Web3 environments. Easily create and share APT-links on platforms like X,
        YouTube, and Reddit to unlock webAPTOS 🌟.
      </p>

      <Button onClick={handleGetStarted} size={"lg"} className="bg-blue-500 rounded-full hover:bg-blue-400 text-white font-semibold ">
        Get Started
      </Button>

      {/* Todo; add image  */}
      <img src="/icons/bg.png" className="rounded-md mt-10 mb-1" />
    </div>
  );
};
