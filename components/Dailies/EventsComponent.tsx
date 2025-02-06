"use client";

import { useState } from "react";
import { IconType } from "react-icons";
import { IoMusicalNotes } from "react-icons/io5";
import { HiMoon, HiMapPin, HiCurrencyDollar, HiCalendar, HiMiniPaintBrush, HiBookmark, HiPaintBrush } from "react-icons/hi2";
import { HiFire } from "react-icons/hi";

type Tab = {
  name: string;
  icon?: IconType;
  style?: string;
};

interface CardProps {
  tag: string;
  icon: IconType;
  color: string;
  title: string;
  location: string;
  price: string;
}

export default function EventsComponent() {
  const [active, setActive] = useState("");

  const tabs: Tab[] = [
    { name: "All" },
    { name: "Music", icon: IoMusicalNotes, style: "text-[0.8rem] translate-y-[-0.3px] text-rose-400" },
    { name: "Nightlife", icon: HiMoon, style: "text-[0.8rem] translate-y-[-0.2px] text-purple-500" },
    { name: "Sports", icon: HiFire, style: "text-[0.9rem] translate-y-[-0.3px] text-orange-400" },
    { name: "Arts & Culture", icon: HiPaintBrush, style: "text-[0.9rem] translate-y-[-0.3px] text-lime-300" },
  ];

  const buttons: Tab[] = [
    { name: "Place", icon: HiMapPin },
    { name: "Price", icon: HiCurrencyDollar },
    { name: "Date", icon: HiCalendar },
  ];

  const cards: CardProps[] = [
    {
      tag: "arts & culture",
      icon: HiMiniPaintBrush,
      color: "text-lime-300",
      title: "Abstract Horizons",
      location: "Modern Arts Center",
      price: "$39+"
    },
    {
      tag: "nightlife",
      icon: HiMoon,
      color: "text-purple-500",
      title: "After Hours Neon",
      location: "Cloud Nine Club",
      price: "Free"
    },
    {
      tag: "nightlife",
      icon: HiMoon,
      color: "text-purple-500",
      title: "After Hours Neon",
      location: "Cloud Nine Club",
      price: "Free"
    },
  ];

  console.log(active)

  const tabStyle = "rounded-full border-[0.5px] border-neutral-800 snap-start py-1.5 px-2 flex flex-row gap-1 justify-center items-center";
  const activeTabStyle = tabStyle + " bg-white text-black transition duration-300";

  return (
    <main className="flex flex-col w-62 text-white font-medium">
      <header className="relative w-full bg-neutral-950 rounded-t-xl p-3 py-2 flex flex-col gap-2">
        <h1 className="text-lg tracking-tight">Explore Events</h1>

        <nav className="flex flex-row gap-1.5 text-[0.5rem] overflow-x-auto whitespace-nowrap scroll-smooth scroll-snap-x snap-mandatory">
          {/* GRADIENT */}
          <div className="absolute right-2 flex bg-linear-to-l from-black to-transparent h-8 w-8 pointer-events-none"></div>
          <button
            key={tabs[0].name}
            onClick={() => active === tabs[0].name ? setActive("") : setActive(tabs[0].name)}
            className={active !== tabs[0].name ? tabStyle + " px-2.5" : activeTabStyle + " px-2.5"}
          >
            {tabs[0].name}
          </button>
          {tabs.slice(1).map((tab) => (
            <button
              key={tab.name}
              onClick={() => active === tab.name ? setActive("") : setActive(tab.name)}
              className={active !== tab.name ? tabStyle : activeTabStyle}
            >
              {tab.icon && <tab.icon className={tab.style} />}
              {tab.name}
            </button>
          ))}
        </nav>

        <div className="h-12 border-[0.5px] border-neutral-800 rounded-[14px] flex flex-row gap-0.5 p-[2px]">
          {buttons.map((button) => (
            <button
              key={button.name}
              className="cursor-pointer h-full w-full rounded-xl bg-[#141414] hover:bg-neutral-800/60 transition flex flex-col gap-1 justify-center items-center text-[0.6rem]"
            >
              {button.icon && <button.icon className="opacity-50" />}
              {button.name}
            </button>
          ))}
        </div>
      </header>


      {/* FOLD */}
      <div className={`w-full h-0 ${active ? "border-t-12" : "delay-400 border-t-0"} transition-all border-x-5 border-b-0 border-transparent border-t-[#1a1a1a] mx-auto`}></div>
      <div className={`w-full h-0 ${active ? "border-b-12" : "delay-400 border-b-0"} transition-all border-x-5 border-t-0 border-transparent border-b-neutral-800 mx-auto`}>
        <div className="flex absolute bg-neutral-900 h-2 w-[14.9rem] -translate-y-0.5 -z-10"></div>
      </div>

      <section className="w-full bg-neutral-950 rounded-b-xl p-2 flex flex-col gap-2">
        <ul className={`flex ${active ? "delay-300 h-69" : "h-0"} transition-all ease-in-out duration-300 flex-col gap-2 overflow-scroll`}>
          {cards.map((card, i) => (active.toLowerCase() === card.tag || active === "All") && (
            <li
              className={`${active ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"} transition-all delay-500 duration-300 ${i > 0 && "delay-700"}`}
              key={i}>
              <Card
                tag={card.tag}
                icon={card.icon}
                color={card.color}
                title={card.title}
                location={card.location}
                price={card.price}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function Card({ tag, icon: Icon, color, title, location, price }: CardProps) {
  return (
    <article className="relative w-full flex rounded-xl bg-[#141414] hover:bg-neutral-900 border-[0.5px] border-neutral-700 transition p-2.5 flex-col gap-4 overflow-hidden">
      <header className="flex justify-between text-[0.35rem] tracking-wider opacity-60">
        <h2><Icon className={`text-[0.8rem] inline-block mr-1.5 ${color}`} />{tag.toUpperCase()}</h2>
        <time dateTime="2024-12-28T22:00">28 DEC 22:00</time>
      </header>

      <div className="absolute top-6 left-0 flex flex-row gap-1.5 -translate-x-[3px]">
        {[...Array(29)].map((_, i) => (
          <div
            key={i}
            className="flex h-[1px] w-[4px] bg-neutral-700/50 rounded-full"
          ></div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-1">
        <div className="size-8 rounded-md bg-neutral-700"></div>
        {/* <button
          type="button"
          aria-label="Bookmark event"
          className="cursor-pointer size-8 rounded-full border-[0.5px] border-neutral-700/80 flex justify-center items-center"
        >
          <HiBookmark className="size-3 text-neutral-500" />
        </button> */}
        <BookmarkButton />
      </div>

      <footer className="flex justify-between items-center">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-[0.65rem]">{title}</h3>
          <address className="text-[0.5rem] tracking opacity-60 not-italic">
            <HiMapPin className="inline-block mr-1 text-[0.8rem]" />{location}
          </address>
        </div>
        <p className="tracking-wide">
          {price.startsWith("$") ? (
            <><span className="opacity-50">$</span>{price.slice(1)}</>
          ) : (
            price
          )}
        </p>
      </footer>
    </article>
  );
}

function BookmarkButton() {


  return (
    <div className="relative ">
      <button
        type="button"
        aria-label="Bookmark event"
        className=" cursor-pointer size-8 rounded-full border-[0.5px] border-neutral-700/80 flex justify-center items-center hover:bg-neutral-800/30"
      >
        <HiBookmark className="size-3 text-white opacity-40 " />

        {/* <div className="absolute inset-0  flex items-center justify-center opacity-0 hover:rotate-180 hover:opacity-100 transition-all ease-out duration-500">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="size-[0.1rem] rounded-full bg-white absolute pointer-events-none transition-all"
              style={{
                transform: `rotate(${i * 24}deg) translate(12px) rotate(-${i * 36}deg)`
              }}
            ></div>
          ))}
        </div> */}
      </button>

    </div>
  );
}