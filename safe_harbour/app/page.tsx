import Image from "next/image";
import { lusitana } from './ui/fonts';
import { ArrowRightIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-row p-0">
      <div className="mt-4 flex grow min-w-1/2 flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-10 rounded-lg bg-gray-50 px-6 py-10 md: 2-2/5 md:px-20">
          <div className="w-full flex flex-row items-center gap-2 text-2xl">
            <div className="w-35 flex flex-col items-center justify-center gap-2">
              <div className="h-0 w-0 border-b-[20px] border-l-[15px] border-r-[1px] border-b-black border-l-transparent border-r-transparent"/>
              <div className="h-0 w-0 border-t-[30px] border-l-[40px] border-r-[30px] border-t-black border-l-transparent border-r-transparent"/>
            </div>
            <p className="text-blue-500"> <strong> Safe Harbour </strong> </p>
          </div>


          <div className="w-full flex flex-col items-center justify-center gap-10"/>


          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className}`}>
            <strong> Welcome To Your Harbour </strong> : Your Shelter From The High Seas
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            <Link
              href="/login/create_account"
              className="flex items-center gap-5 self-start rounded-lg bg-transparent px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-400 md:text-base"
            >
              <span>Create an Account</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/high-seas.jpg"
        fill
        style={{
          objectFit: 'cover', 
          zIndex: -999,
        }}        
        alt="High seas"
      />

    </main>
  );
}
