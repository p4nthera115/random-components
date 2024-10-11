export default function DotGrid() {
  return (
    <div className="fixed w-full h-full z-0">
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(#d8d8d8 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
    </div>
  );
}
