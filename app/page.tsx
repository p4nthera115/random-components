"use client";

import DotGrid from "@/components/DotGrid";
import MorphMenu from "@/components/MorphMenu";
import MorphSignup from "@/components/MorphSignup";
import Spacing from "@/components/Spacing";
import SpotifyRedesign from "@/components/SpotifyRedesign";
import TileNav from "@/components/TileNav";
import Canvas from "@/components/Canvas";
import BorderRadiusSlider from "@/components/BorderRadiusSlider";
import Sign from "@/components/Dailies/Sign";
import HoverMenu from "@/components/Dailies/HoverMenu";
import BlurMenuCards from "@/components/Dailies/BlurMenuCards";
import SignButton from "@/components/Dailies/SignButton";
import CircleDrag from "@/components/Dailies/CircleDrag";
import TooltipVariation from "@/components/Dailies/TooltipVariation";
import GradientComponent from "@/components/Dailies/GradientComponent";
import Picker from "../components/Dailies/picker";
import GlassButton from "@/components/Dailies/GlassButton";
import MetallicButton from "@/components/Dailies/MetallicButton";
import Switch from "@/components/Dailies/Switch";
import ColorMetalButton from "@/components/Dailies/ColorMetalButton";
import SoftButton from "@/components/Dailies/SoftButton";
import P4nButtons from "@/components/Dailies/P4nButtons";
import ArrowToTickSlider from "@/components/Dailies/ArrowToTickSlider";
import LineWebsitePageAnimation from "@/components/Dailies/LineWebsitePageAnimation";
import MenuButtons from "@/components/Dailies/MenuButtons";

export default function Home() {
  return (
    <div className="h-full w-full flex bg-[#f2f2f2] justify-center items-center text-black/70 font-semibold text-sm">
      <DotGrid />
      {/* <img className="absolute" src="p4n.png" height={300} width={300} /> */}
      {/* <MorphMenu /> */}
      {/* <MorphSignup /> */}
      {/* <Spacing /> */}
      {/* <SpotifyRedesign /> */}
      {/* <TileNav /> */}
      {/* <Canvas /> */}
      {/* <BorderRadiusSlider /> */}
      {/* <Sign /> */}
      {/* <HoverMenu /> */}
      {/* <BlurMenuCards /> */}
      {/* <SignButton /> */}
      {/* <CircleDrag /> */}
      {/* <TooltipVariation /> */}
      {/* <GradientComponent /> */}
      {/* <GlassButton /> */}
      {/* <MetallicButton /> */}
      {/* <Switch /> */}
      {/* <ColorMetalButton /> */}
      {/* <SoftButton /> */}
      {/* <P4nButtons /> */}
      {/* <ArrowToTickSlider /> */}
      <LineWebsitePageAnimation />
      <MenuButtons />
    </div>
  );
}
