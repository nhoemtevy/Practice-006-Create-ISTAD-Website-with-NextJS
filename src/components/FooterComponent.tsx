
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { headers } from 'next/headers';
import Image from 'next/image';

export default function FooterComponent() {
  return (
   <footer className='bg-[#253c95] h-auto py-4 px-16 '>
        <section className='flex justify-between items-center w-full'>
        <section className='logo w-[25%] '>
            <Image alt='logo' width={100} height={100} src={"/assets/logo/CSTAD_120.png"} />
            <p className='text-white font-mono  text-[14px] pt-3 pl-4 tracking-[0.2rem]'>Start your IT career with CSTAD</p>
        </section>
        <section className='w-[75%] flex justify-center mb-14'>
           <nav className='flex w-[75%] justify-between tracking-[2px] text-white'>
                <div className='flex flex-col font-[14px]'>
                    <p className=' tracking-[2px] text-white font-bold pb-4'>LEARN MORE</p>
                    <Link className='hover:underline font-mono text-[14px] tracking-[0.2rem]' href={"/course"}>Course</Link>
                    <Link  className='hover:underline font-mono text-[14px] tracking-[0.2rem]' href={"/itNews"}>IT News</Link>
                    <Link  className='hover:underline font-mono text-[14px] tracking-[0.2rem]' href={"/opportunity"}>Job Opportunity</Link>
                    <Link  className='hover:underline font-mono text-[14px] tracking-[0.2rem]' href={"/"}>Privacy Policy</Link>
                    <Link  className='hover:underline font-mono text-[14px] tracking-[0.2rem]' href={"/itNews"}>FAQ</Link>
                </div>
                <div className='flex flex-col font-[14px]'>
                    <p className=' tracking-[2px] text-white font-bold'>CONTACT US</p>
                    <Link  className='hover:underline font-mono text-[14px] tracking-[0.2rem]' href={"/itNews"}>(+855) 95-990-910</Link>
                    <Link  className='hover:underline font-mono text-[14px] tracking-[0.2rem]' href={"/itNews"}>(+855) 93-990-910</Link>
                    
                </div>
                <div className='flex flex-col font-[14px]'>
                    <p className=' tracking-[2px] text-white font-bold'>FOLLOW US</p>
                    <Link  className='hover:underline font-mono text-[14px] tracking-[0.2rem]' href={"/opportunity"}>Job Opportunity</Link>
                    <Link  className='hover:underline font-mono text-[14px] tracking-[0.2rem]' href={"/opportunity"}>Flolow page</Link>
                </div>
                </nav>
        </section>
        </section>
        <hr />
        <p className='flex justify-center font-mono text-[14px] tracking-[0.2rem] text-white py-4'>© 2024 Center of Science and Technology Advanced Development | All Rights Reserved</p>
   </footer>
  );
}