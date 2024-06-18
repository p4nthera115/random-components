import Image from "next/image";

export default function AlbumCarousel() {
  const albumObj = [
    { name: "Section.80", year: "2011", cover: "/section80.jpg" },
    { name: "good kid, m.A.A.d city", year: "2012", cover: "/gkmc.jpg" },
    { name: "To Pimp a Butterfly", year: "2015", cover: "/tpab.webp" },
    { name: "DAMN.", year: "2016", cover: "/damn.png" },
    {
      name: "Mr. Morale & the Big Steppers",
      year: "2022",
      cover: "/mmatbs.webp",
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-b from-[#A4998C] to-transparent absolute h-full w-full"></div>
      <div className="p-6 flex flex-col h-full w-full gap-6 z-20">
        <section className="h-[40%] flex flex-row gap-10 p-8 rounded-3xl bg-[#d3ccc3]/50 items-center ">
          <div className="h-full bg-black rounded-3xl aspect-square flex relative ">
            <Image
              src={"/kdotdisplay.jpeg"}
              alt="kdotdisplay"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
          {/* <div className="rounded-3xl w-full flex-row p-10 gap-10 bg-black flex overflow-hidden relative items-center"> */}
          <h1 className="h-1/4 text-8xl font-bold flex items-center z-20 text-white/95">
            Kendrick Lamar
          </h1>
          {/* </div> */}
        </section>

        <section className=" rounded-3xl h-3/4 inline-flex flex-row p-10 gap-12 w-full justify-evenly items-center">
          {albumObj.map((album, i) => (
            <article className="rounded-lg bg-white/20 p-4 w-72 max-h-96 inline-flex flex-col gap-4">
              <div className="h-64 w-64 bg-black rounded relative">
                <Image src={album.cover} alt={album.name} fill />
              </div>
              <h2 className="text-2xl truncate">{album.name}</h2>
              <p className="font-bold text-white/50">{album.year}</p>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
