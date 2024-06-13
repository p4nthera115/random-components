import Image from "next/image";

export default function Background() {
  return (
    <>
      <div className="bg-gradient-to-t from-white/50 to-transparent w-full h-1/4 fixed z-10 bottom-0"></div>
      <Image
        src={"/augen-bg.png"}
        alt="bg-image"
        fill={true}
        className="object-contain object-bottom border-black bg-fixed"
      />
    </>
  );
}
