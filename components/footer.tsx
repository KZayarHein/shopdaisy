import { RiShieldKeyholeLine } from "react-icons/ri";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="flex items-start flex-wrap px-20 py-5 gap-5">
        {/* Customer Service */}
        <div className="flex w-64 flex-col space-y-3">
          <h5 className="text-lg font-medium">Customer Service</h5>
          <div className="flex items-center space-x-3">
            <div>
              <RiShieldKeyholeLine className="text-xl" />
            </div>
            <p className="text-sm">Terms & Privacy Policy</p>
          </div>

          <div className="flex items-center space-x-3">
            <div>
              <FaArrowRotateLeft />
            </div>
            <p className="text-sm">Return Policy</p>
          </div>
        </div>

        {/* Language */}
        <div className="flex w-64 flex-col space-y-3">
          <h5 className="text-lg font-medium">Language</h5>
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              name="radio-2"
              className="radio-xs cursor-pointer radio-primary"
              checked
            />
            <span className="text-sm">Myanmar (Unicode)</span>
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              name="radio-2"
              className="radio-xs cursor-pointer radio-primary"
              checked
            />
            <span className="text-sm">Myanmar (Zawgyi)</span>
          </div>
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              name="radio-2"
              className="radio-xs cursor-pointer radio-primary "
              checked
            />
            <span className="text-sm">English</span>
          </div>
        </div>

        {/* Contact */}
        <div className="flex w-64 flex-col space-y-3">
          <h5 className="text-lg font-medium">Contact Us</h5>
          <div className="flex items-start space-x-3">
            <div>
              <IoLocationOutline className="text-xl" />
            </div>
            <p className="text-sm">
              Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana, Thingangyun
              Tsp, Yangon.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div>
              <CiPhone className="text-xl" />
            </div>
            <p className="text-sm">09458489458</p>
          </div>
        </div>

        {/* Download */}
        <div className="flex w-64 flex-col space-y-3">
          <h5 className="text-lg font-medium">Download Our App</h5>

          <Image src="/qr-code.jpg" width={130} height={130} alt="qr-code" />
        </div>

        {/* Payment */}
        <div className="flex w-64 flex-col space-y-3">
          <h5 className="text-lg font-medium">Payment</h5>

          <div className="flex">
            <div className="w-20 h-10 relative cursor-pointer">
              <Image
                src="/wave-pay.jpg"
                fill
                objectFit="contain"
                alt="wave log"
              />
            </div>
            <div className="w-20 h-10 relative cursor-pointer">
              <Image
                src="/kbz-pay.jpg"
                fill
                objectFit="contain"
                alt="kbz log"
              />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex w-64 flex-col space-y-3">
          <h5 className="text-lg font-medium">Follow Us On</h5>

          <div className="flex">
            <div className="w-10 h-10 relative cursor-pointer ">
              <Image src="/facebook-1.jpg" fill alt="wave log" />
            </div>
            <div className="w-10 h-10 relative cursor-pointer">
              <Image src="/instagram-1.jpg" fill alt="kbz log" />
            </div>
            <div className="w-10 h-10 relative cursor-pointer">
              <Image src="/viber.jpg" fill alt="kbz log" />
            </div>
            <div className="w-10 h-10 relative cursor-pointer">
              <Image src="/telegram.jpg" fill alt="kbz log" />
            </div>
            <div className="w-10 h-10 relative cursor-pointer">
              <Image src="/twitter.jpg" fill alt="kbz log" />
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-center mt-5 py-5">
        &copy; Copyright 2024 C by D Co., Ltd. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
