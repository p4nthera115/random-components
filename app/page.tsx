"use client";

import DotGrid from "@/components/DotGrid";
import DarkDotGrid from "@/components/DarkDotGrid";
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
import GlassButton, { GlassButtonDarker } from "@/components/Dailies/GlassButton";
import ColorGlassButton from "@/components/Dailies/ColorGlassButton";
import MetallicButton from "@/components/Dailies/MetallicButton";
import Switch from "@/components/Dailies/Switch";
import ColorMetalButton from "@/components/Dailies/ColorMetalButton";
import SoftButton from "@/components/Dailies/SoftButton";
import P4nButtons from "@/components/Dailies/P4nButtons";
import ArrowToTickSlider from "@/components/Dailies/ArrowToTickSlider";
import LineWebsitePageAnimation from "@/components/Dailies/LineWebsitePageAnimation";
import MenuButtons from "@/components/Dailies/MenuButtons";
import DarkModeButton from "@/components/Dailies/DarkModeButton";
import VerificationCode from "../components/Dailies/VerificationCode";
import NewGradients, { BallGradient } from "@/components/Dailies/NewGradients";
import DesignJoyButton from "@/components/Dailies/DesignJoyButton";
import EventsComponent from "@/components/Dailies/EventsComponent";

export default function Home() {
  return (
    <div className="h-dvh w-dvw flex bg-[#f2f2f2] justify-center items-center text-black/70 font-semibold text-sm">
      {/* <div className="h-dvh w-dvw flex bg-neutral-900 justify-center items-center text-black/70 font-semibold text-sm"> */}
      <DotGrid />
      {/* <DarkDotGrid /> */}

      <div className="z-10">
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
        {/* <ColorGlassButton /> */}
        {/* <MetallicButton /> */}
        {/* <Switch /> */}
        {/* <ColorMetalButton /> */}
        {/* <SoftButton /> */}
        {/* <P4nButtons /> */}
        {/* <ArrowToTickSlider /> */}
        {/* <LineWebsitePageAnimation /> */}
        {/* <MenuButtons /> */}
        {/* <DarkModeButton /> */}
        {/* <VerificationCode /> */}
        {/* <GlassButton /> */}
        {/* <GlassButtonDarker /> */}
        {/* <NewGradients /> */}
        {/* <BallGradient /> */}
        {/* <DesignJoyButton /> */}
        <EventsComponent />
      </div>
    </div>
  );
}
