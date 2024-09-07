export default function DotGrid() {
  return (
    <div className="fixed w-full h-full">
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(#0000001b 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
    </div>
  );
}
