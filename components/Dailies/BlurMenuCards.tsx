import React from "react";

export default function BlurMenuCards() {
  const cards = [
    {
      title: "Finance",
      descTitle: "Drafting IMs",
      desc: "Manage and grow your wealth with our expert financial services.",
      color: "bg-linear-to-b from-white to-neutral-300",
    },
    {
      title: "Logistics",
      descTitle: "Freight Invoice",
      desc: "Optimize your supply chain with our cutting-edge logistics solutions.",
      color: "bg-linear-to-b from-sky-100 to-sky-300",
    },
    {
      title: "Finance",
      descTitle: "Pitch deck analysis",
      desc: "Streamline pitch deck reviews and quickly assess and evaluate key investment opportunities.",
      color: "bg-linear-to-b from-orange-300 to-yellow-700",
    },
    {
      title: "Real Estate",
      descTitle: "Inventory Management",
      desc: "Efficiently manage your real estate portfolio with our comprehensive services.",
      color: "bg-linear-to-b from-lime-200 to-lime-600",
    },
    {
      title: "Healthcare",
      descTitle: "Medical Innovations",
      desc: "Stay at the forefront of healthcare with our innovative medical solutions.",
      color: "bg-linear-to-b from-red-200 to-red-400",
    },
    {
      title: "Real Estate",
      descTitle: "Real Estate Development",
      desc: "Transform communities with our expert real estate development services.",
      color: "bg-linear-to-b from-blue-300 to-blue-600",
    },
  ];

  return (
    <div className="z-40 grid grid-cols-2 gap-1 h-[32rem] bg-white p-2 pr-1 rounded-2xl overflow-auto overflow-x-hidden shadow-xl">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          descTitle={card.descTitle}
          desc={card.desc}
          color={card.color}
        />
      ))}
    </div>
  );
}

const Card = ({
  title,
  descTitle,
  desc,
  color,
}: {
  title: string;
  descTitle: string;
  desc: string;
  color: string;
}) => {
  return (
    <div className="bg-[#f2f2f2] h-[15rem] w-[20rem] backdrop-blur-md rounded-lg px-4 py-3 relative group overflow-hidden">
      <div className="group-hover:blur-md transition-all duration-300 h-full w-full relative">
        <h1 className="absolute  text-[0.6rem] text-black/50">{title}</h1>
        <div className="flex relative items-center justify-center h-full w-full">
          <div
            className={`flex items-center justify-center h-2/3 scale-[80%] w-[36%] border rounded-md ${color}`}
          ></div>
        </div>
      </div>
      {desc.length > 71 ? (
        <div className="group-hover:-translate-y-5 transition duration-300 flex bottom-4 flex-col w-full relative">
          <h2 className="flex text-black text-[0.7rem]">{descTitle}</h2>
          <p className="flex w-full mr-3 leading-tight text-[0.5rem] text-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {desc}
          </p>
        </div>
      ) : (
        <div className="group-hover:-translate-y-3 transition duration-300 flex bottom-4 flex-col w-full relative">
          <h2 className="flex text-black text-[0.7rem]">{descTitle}</h2>
          <p className="flex w-full mr-3 leading-tight text-[0.5rem] text-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {desc}
          </p>
        </div>
      )}
      <button className="absolute inset-0 m-auto w-20 h-8 bg-[#f2f2f2]/10 text-white/70 hover:text-white  text-[0.7rem] rounded-full opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
        Open
      </button>
    </div>
  );
};
