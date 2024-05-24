import MorphMenu from "@/components/MorphMenu";
import MorphSignUp from "@/components/MorphSignUp";

export default function Home() {
  return (
    <div className="p-8 h-full w-full flex justify-evenly">
      <MorphMenu />
      <MorphSignUp />
    </div>
  );
}
