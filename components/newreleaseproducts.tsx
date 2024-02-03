import { newProducts } from "@/constants";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

function NewReleaseProductsPage() {
  return (
    <section className="px-20 py-5 mb-5">
      <div className="text-center mb-6">
        <h3 className="text-4xl font-bold mb-2">
          <span className="text-red-500">New</span> Releasesd
        </h3>
        <p className="text-lg tracking-tight">Try Our Latest Flavors Here</p>
      </div>

      <div className="flex items-center flex-wrap justify-center gap-1">
        {newProducts.map((p) => (
          <div key={p.id} className="relative">
            <div className="w-[230px] h-[230px] relative">
              <Image
                src={p.image}
                fill
                alt={p.description}
                className="rounded-md"
              />
            </div>
            <div className="absolute top-0 z-10">
              <p className="text-sm font-medium opacity-75 text-white px-3">
                {p.description} <br />
                {p.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-5">
        <button className="btn md:btn-wide rounded-full">
          View More
          <MdKeyboardArrowRight className="text-xl" />
        </button>
      </div>
    </section>
  );
}

export default NewReleaseProductsPage;
