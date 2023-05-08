import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 relative">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex justify-between">
        <div className="flex flex-col">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Ftrainease-logo_1.png?alt=media&token=a921799d-ad95-4956-ace5-d5baba9591c4"
            alt="Picture of the author"
            width={250}
            height={40}
            className=" relative left-5 grayscale-100"
            blurDataURL="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Ftrainease-logo_1.png?alt=media&token=a921799d-ad95-4956-ace5-d5baba9591c4"
          />
          <p className=" mt-3 font-semibold ml-5">&copy; 2023 TrainEase</p>
        </div>
        <div className=" flex flex-col">
          <a href="#" className="text-gray-400 hover:text-gray-300 px-3 py-2">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 px-3 py-2">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 px-3 py-2">
            Contact Us
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 px-3 py-2">
            Contact Us
          </a>
        </div>
        <div className=" flex flex-col">
          <a href="#" className="text-gray-400 hover:text-gray-300 px-3 py-2">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 px-3 py-2">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 px-3 py-2">
            Contact Us
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 px-3 py-2">
            Contact Us
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 px-3 py-2">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
