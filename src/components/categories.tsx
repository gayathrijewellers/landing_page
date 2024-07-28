export default function Categories() {
  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <p className="text-3xl">Categories</p>
      <div className="p-2 lg:p-0 flex gap-2 flex-wrap w-full lg:w-1/3">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="flex-grow p-2 border min-h-[200px] min-w-[200px]  cursor-pointer"
          >
            <p>{`Item` + index}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
