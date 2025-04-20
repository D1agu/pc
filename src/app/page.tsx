import Image from "next/image";
export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white flex">
      {/* Lewa część */}
      <div className="w-1/2 z-10 flex gap-6 flex-col justify-center items-center">
        <Image
          src="/logoCorrect.jpg"
          alt="Logo"
          width={400}
          height={400}
          quality={100}
          className="rounded-full w-1/2 h-1/2 object-cover"
        />
        <p className="text-5xl font-bold italic">
          Witold &quot;Diagu Nypel&quot;
        </p>
      </div>

      {/* Żółta warstwa z clip-path */}
      <div className="absolute top-0 right-0 w-3/5 h-full flex flex-col clip-diagonal bg-yellow-500 items-center justify-center">
        <h2 className="text-6xl font-extrabold border-black border-2 p-[24px]">
          Hej
        </h2>
      </div>
    </div>
  );
}
