import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const images = [
  {
    id: 1,
    image: "/testproduct-purple.jpg",
    color: "purple",
    title: "testproduct",
    description: "Grapefruit Berry",
  },
  {
    id: 2,
    image: "/testproduct-green.jpg",
    color: "green",
    title: "testproduct",
    description: "Sour Apple Melon",
  },
];

function ShowcasePage() {
  return (
    <section className="px-20 pxy-5 mb-5 relative">
      <div className="flex flex-col  md:flex-row gap-3">
        {images.map((img) => (
          <div
            key={img.id}
            className={`bg-${img.color}-800 rounded-md flex items-center`}
          >
            <div className="w-[150px] h-[200px] md:w-[300px] md:h-[350px] relative">
              <Image
                src={img.image}
                fill
                alt={img.title}
                className="rounded-md rounded-r-none"
              />
            </div>

            <div className="text-center text-white flex-1 md:w-[890px]">
              <h2 className="text-2xl md:text-5xl font-bold mb-1">
                Try New Flavor
              </h2>
              <p className="text-sm md:text-lg mb-3">{img.description}</p>
              <a className="btn-sm rounded-full py-2 md:btn-md bg-gray-600 hover:bg-gray-500 cursor-pointer opacity-85">
                <span className="text-white">View</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute hidden md:flex justify-between transform -translate-y-1/2 right-5 top-1/2 z-10">
        {/* <a
          href="#slide1"
          className="btn md:min-h-[126px] bg-opacity-75 bg-gray-700 hover:bg-gray-600"
        >
          <FaArrowLeft className="text-white" />
        </a> */}

        <a className="btn md:min-h-[126px] bg-opacity-75 bg-gray-700 hover:bg-gray-600">
          <FaArrowRight className="text-white" />
        </a>
      </div>
    </section>
  );
}

export default ShowcasePage;
