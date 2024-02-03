import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

function MemberShipPage() {
  return (
    <section className="px-20 py-5 mb-5">
      <div className="flex items-center flex-wrap gap-1 justify-center">
        <div className="relative">
          <div className="w-[400px] h-[200px] md:w-[750px] md:h-[405px] relative ">
            <Image
              src="/showcase-main-1.jpg"
              fill
              alt="showcase main"
              className="rounded-md"
            />
          </div>
          <div className="absolute top-1/3 md:top-1/2 left-5 md:left-10 text-white z-10 ">
            <h3 className=" text-2xl md:text-5xl font-bold mb-3">
              Membership Program
            </h3>
            <p className="mb-3 text-xs md:text-sm text-black opacity-75">
              Be a Vape Pi member and get our <br /> special exclusive offers
            </p>
            <a className="btn-sm rounded-full py-2 md:btn-md bg-gray-600 hover:bg-gray-500 cursor-pointer opacity-85">
              <span className="text-white">View</span>
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="w-[200px] h-[200px] md:h-[405px] relative">
            <Image
              src="/showcase-2.jpg"
              fill
              alt="showcase 1"
              className="rounded-md"
            />
          </div>

          <div className="flex items-start justify-between absolute z-10 bottom-0 text-white bg-gray-800 w-full px-4 opacity-95 py-5 rounded-md">
            <div>
              <h3 className="text-xl font-bold">Devices</h3>
              <p className="text-xs opacity-75">Find the best for you here!</p>
            </div>
            <MdKeyboardArrowRight className="text-xl cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="relative">
            <div className="w-[200px] h-[200px] relative">
              <Image
                src="/showcase-1.jpg"
                fill
                alt="showcase 1"
                className="rounded-md"
              />
            </div>

            <div className="flex items-start justify-between absolute z-10 bottom-0 text-white bg-gray-800 w-full px-4 opacity-95 py-5 rounded-md">
              <div>
                <h3 className="text-xl font-bold">Pods</h3>
                <p className="text-xs opacity-75">
                  Variety of choices available
                </p>
              </div>
              <MdKeyboardArrowRight className="text-xl cursor-pointer" />
            </div>
          </div>
          <div className="relative">
            <div className="w-[200px] h-[200px] relative">
              <Image
                src="/showcase-3.jpg"
                fill
                alt="showcase 1"
                className="rounded-md"
              />
            </div>

            <div className="flex items-start justify-between absolute z-10 bottom-0 text-white bg-gray-800 w-full px-4 opacity-95 py-5 rounded-md">
              <div>
                <h3 className="text-xl font-bold">Disposable</h3>
                <p className="text-xs opacity-75">
                  Easy, clean & superb flavor
                </p>
              </div>
              <MdKeyboardArrowRight className="text-xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MemberShipPage;
