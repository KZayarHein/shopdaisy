import Image from "next/image";
import { BiSolidStar } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { products } from "@/constants";

function PromoProductsPage() {
  return (
    <section className="px-20 py-5" id="section">
      <div className="text-center mb-6">
        <h3 className="text-4xl font-bold mb-2">Best Deals</h3>
        <p className="text-lg">Just For You</p>
      </div>

      <div className="flex gap-5 flex-wrap items-center justify-center">
        {products.map((p) => (
          <div key={p.id} className="flex flex-col w-44">
            <div className="flex flex-col w-44 border rounded-md shadow ">
              <span className="badge badge-error rounded-none text-white w-fit mx-auto mb-5">
                25% off
              </span>

              <div className="mx-auto w-fit">
                <Image
                  src={p.image}
                  width={150}
                  height={150}
                  alt="pod black"
                  objectFit="contain"
                  className="bg-inherit"
                />
              </div>
            </div>
            <div className="text-center mt-3 space-y-1">
              <p className="text-lg">{p.title}</p>
              <p className="font-bold">{p.discount}</p>
              <p className="text-xs line-through font-medium">{p.price}</p>
              <p className="text-yellow-500 flex items-center justify-center space-x-1 text-sm">
                <BiSolidStar />
                <span>{p.points}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-5">
        <button className="btn btn-wide rounded-full">
          View More
          <MdKeyboardArrowRight className="text-xl" />
        </button>
      </div>
    </section>
  );
}

export default PromoProductsPage;
