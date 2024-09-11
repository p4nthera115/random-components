import MorphMenu from "@/components/MorphMenu";
import MorphSignup from "@/components/MorphSignup";
import Spacing from "@/components/Spacing";
import SpotifyRedesign from "@/components/SpotifyRedesign";
import TileNav from "@/components/TileNav";
import Canvas from "@/components/Canvas";
import BorderRadiusSlider from "@/components/BorderRadiusSlider";
import Sign from "@/components/Dailies/Sign";
import HoverMenu from "@/components/Dailies/HoverMenu";
import DotGrid from "@/components/DotGrid";
import BlurMenuCards from "@/components/Dailies/BlurMenuCards";

export default function Home() {
  return (
    <div className="h-full w-full flex bg-[#f2f2f2] justify-center items-center text-black/70 font-semibold text-sm">
      <DotGrid />
      {/* <MorphMenu /> */}
      {/* <MorphSignup /> */}
      {/* <Spacing /> */}
      {/* <SpotifyRedesign /> */}
      {/* <TileNav /> */}
      {/* <Canvas /> */}
      {/* <BorderRadiusSlider /> */}
      {/* <Sign /> */}
      {/* <HoverMenu /> */}
      <BlurMenuCards />
    </div>
  );
}
