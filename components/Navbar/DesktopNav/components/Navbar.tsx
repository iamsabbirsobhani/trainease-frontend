import Image from 'next/image';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
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
            <Link href="/login">
              <Button>Sign In</Button>
            </Link>
          </div>
          <div>
            <Button>Sign Up</Button>
          </div>
        </div>
      </div>
    </>
  );
}
