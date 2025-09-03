import { useState } from "react"

export default function depthBlur() {
  return (
    <div className="w-full flex flex-row items-center justify-center gap-20">
      <div className="block bg-gray-900 p-8 rounded-3xl text-white shadow-lg shadow-black/50">
        <pre className="text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed">
          <code>
            <span className="text-gray-100">.depth-blur</span> {"{"}
            {"\n"}
            {"  "}
            <span className="text-sky-400">transition</span>:{" "}
            <span className="text-amber-300">all</span>{" "}
            <span className="text-emerald-400">0.3s</span> ease;{"\n"}
            {"  "}
            <span className="text-sky-400">transform</span>:{" "}
            <span className="text-pink-400">scale</span>(
            <span className="text-emerald-400">0.95</span>);{"\n"}
            {"  "}
            <span className="text-sky-400">filter</span>:{" "}
            <span className="text-pink-400">blur</span>(
            <span className="text-emerald-400">20px</span>);{"\n"}
            {"  "}
            <span className="text-sky-400">opacity</span>:{" "}
            <span className="text-emerald-400">0.3</span>;{"\n"}
            {"}"}
            {"\n\n"}
            <span className="text-gray-100">.depth-blur:hover</span> {"{"}
            {"\n"}
            {"  "}
            <span className="text-sky-400">transform</span>:{" "}
            <span className="text-pink-400">scale</span>(
            <span className="text-emerald-400">1</span>);{"\n"}
            {"  "}
            <span className="text-sky-400">filter</span>:{" "}
            <span className="text-pink-400">blur</span>(
            <span className="text-emerald-400">0</span>);{"\n"}
            {"  "}
            <span className="text-sky-400">opacity</span>:{" "}
            <span className="text-emerald-400">1</span>;{"\n"}
            {"}"}
          </code>
        </pre>
      </div>
      <div>
        <video
          src="/depth-blur.mp4"
          autoPlay
          muted
          loop
          className="w-60 h-60 object-cover rounded-4xl scale-95 blur-md opacity-30 hover:scale-100 hover:blur-none hover:opacity-100 transition duration-300 shadow-lg shadow-black/50"
        ></video>
      </div>
    </div>
  )
}
