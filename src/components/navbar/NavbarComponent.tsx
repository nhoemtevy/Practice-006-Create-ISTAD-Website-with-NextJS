
import Image from 'next/image';
import Link from 'next/link';
export default function NavbarComponent() {
  return (
   <header className='bg-[#253c95] flex justify-between items-center w-full h-auto py-4 px-5 fixed top-0 z-40'>
        <div className='logo flex items-center '>
            <Image alt='logo' width={45} height={45} src={"/assets/logo/CSTAD_120.png"} />
            <p className='text-white font-extrabold text-[20px] pl-4 tracking-[0.25rem]'>CSTAD</p>
        </div>
        <div>
           <nav className='mr-[360px] tracking-[2px] text-white flex gap-8 font-bold'>
              <Link href={"/"}>Home</Link>
              <Link href={"/enrrol"}>Enrrol</Link>
              <Link href={"/course"}>Course</Link>
              <Link href={"/news"}>IT News</Link>
              <Link href={"/opportunity"}>Job Oportunity</Link>
              <Link href={"/about"}>About Us</Link>
           </nav>
        </div>
   </header>
  );
}
