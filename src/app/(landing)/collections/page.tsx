export default function Collections() {
  return (
    <div className="p-2">
      <div className="border border-neutral-600 flex justify-center items-center font-bold text-3xl p-16 mt-20">
        Discounts
      </div>

      <div className="px-4 flex justify-center mt-12">
        <div className="w-full lg:w-4/5">
          <div id="collection_tab" className="flex gap-2 mb-4">
            <span className="border border-neutral-500 p-2 cursor-pointer">
              Collection 1
            </span>
            <span className="border border-neutral-500 p-2 cursor-pointer">
              Collection 2
            </span>
            <span className="border border-neutral-500 p-2 cursor-pointer">
              Collection 3
            </span>
          </div>

          <div id="collection_body" className="flex flex-wrap gap-4">
            {[...Array(20)].map((_, index) => (
              <div
                key={index}
                id="collection_item"
                className="border border-neutral-400 h-[200px] flex-1 min-w-[250px] flex-shrink-0"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
