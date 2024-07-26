export default function Hero() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-full">
      <h1 className="font-bold text-6xl">Gayathri Jewellers</h1>
      <p className="tracking-tighter text-xs text-center w-1/3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
        consequuntur officia delectus nihil cumque? Commodi tempora, sequi
        reiciendis minus quas quisquam! Error esse voluptas facere quo tenetur.
        Laborum, id iste!
      </p>
      <div className="flex flex-row gap-4">
        <button className="border px-4 py-2">Browse Collections</button>
        <button className="border px-4 py-2">About Us</button>
      </div>
    </div>
  );
}
