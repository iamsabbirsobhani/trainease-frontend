import Image from 'next/image';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <div className="bg-green-500 w-full h-12 flex justify-center items-center">
        <div className="flex justify-center items-center">
          <p className="text-white text-sm font-semibold">
            <span className="text-white">COVID-19:</span> We are taking
            precautions to keep our customers safe and healthy during your
            travels.
          </p>

          <div className="flex justify-center items-center relative bg-white rounded-full w-[35px] h-[35px] text-green-500 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.707-9.293a1 1 0 00-1.414-1.414L9 8.586V7a1 1 0 10-2 0v1.586L5.707 7.293a1 1 0 00-1.414 1.414L7.586 10l-2.293 2.293a1 1 0 101.414 1.414L9 11.414V13a1 1 0 102 0v-1.586l1.293 1.293a1 1 0 001.414-1.414L10.414 10l2.293-2.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-center p-5 bg-gray-50 ">
        <div>
          <Link href="/">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Ftrainease-logo_1.png?alt=media&token=a921799d-ad95-4956-ace5-d5baba9591c4"
              alt="Picture of the author"
              width={250}
              height={40}
              className=" relative left-5"
              blurDataURL="https://firebasestorage.googleapis.com/v0/b/general-eadd6.appspot.com/o/trainease%2Ftrainease-logo_1.png?alt=media&token=a921799d-ad95-4956-ace5-d5baba9591c4"
            />
          </Link>
        </div>

        <div className=" flex justify-between relative right-5">
          <div>
            <Link href="/">
              <button className="  text-green-800 p-2 text-lg hover:before:border-b-2 ">
                Home
              </button>
            </Link>
          </div>
          <div>
            <Link href="/login">
              <button className="  text-green-800 p-2 text-lg hover:before:border-b-2 ">
                Login
              </button>
            </Link>
          </div>
          <div>
            <button className="  text-green-800 p-2 text-lg hover:before:border-b-2 ">
              Register
            </button>
          </div>
          <div>
            <Link href="/">
              <button className="text-green-800 p-2 text-lg hover:before:border-b-2 ">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
