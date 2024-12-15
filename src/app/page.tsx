import Input from "@/components/input";
import WeatherCard from "@/components/weather-card";

export default function Home() {
  return (
    <div className="font-poppins bg-branding-700 text-white min-h-screen">
      <h1 className="font-medium text-[40px] text-center">
        Seeing the weather of the whole world with{" "}
        <span className="font-bold blue-gradient">Dark Weather!</span>
      </h1>
      <Input placeholder="Search for a city" />
      <WeatherCard />
    </div>
  );
}
