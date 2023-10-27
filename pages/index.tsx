import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const loggedIn = false;
  return (
    <>
      <nav className='fixed top-0 w-[calc(100vw-1rem)] px-2 py-6 z-50 flex justify-between items-center'>
        <Link href={"/"} className="gradient ananda text-6xl px-8">safar</Link>
        <div>
          <Link href={"/profile"}>Profile</Link>
          <Link href={"/recruit"}>Recruitments</Link>
          <Link href={"/safety"}>Safety</Link>
          <Link href={"/tickets"}>Tickets</Link>
        </div>
      </nav>
      <Head>
        <title>Safar</title>
      </Head>
      <div className='w-full'>
        <div className='image overflow-visible h-fit'>
          <Image src={"/trainbg.svg"} alt='' width={10} height={10} className='w-full relative z-10 trainbg' />
          <div className='w-0 h-0 overflow-visible ml-auto'>
            <Image src="/mandalahome.png" alt='' width={256} height={256} className='w-[30vw] right-[30vw] bottom-[32vw] relative mandala' />
          </div>
        </div>
        <div className='m-auto my-10 lg:my-24 w-fit'>
          <p className='welcome ananda w-fit relative top-6 lg:top-9 lg:text-2xl left-1 text-lg'>welcome {loggedIn && "back"} to</p>
          <Image alt='' src={"/safar-logo.png"} className='w-fit lg:w-96' height={200} width={200} />
        </div>
        <div className='flex items-center justify-center gap-6 md:gap-12 my-8 lg:mt-12'>
          {["login", "sign up"].map(text => {
            return (
              <Link key={text} href={"/" + text.replace(/ /g, "")}><button className='border border-[#620045] text-[#610045A3] text-sm md:text-base px-12 md:px-16 lg:px-24 py-1 lg:py-2 bg-transparent'>{text}</button></Link>
            );
          })}
        </div>
        <p className='text-center mb-2 mt-12 lg:text-2xl'>Where to <span className="gradient ananda">explore</span> next?</p>
        <hr className='mx-10' />
        <div className='flex justify-evenly items-center my-2'>
          {["trains", "routes", "dates", "destinations"].map(name => {
            return <Link href={name == "trains" ? "/tickets" : name == "routes" ? "/route" : name == "dates" ? "/date" : name == "destinations" ? "/destination" : "/404"} key={name}><div className='flex flex-col gap-1'><Image src={name + "icon.svg"} alt={name} width={64} height={64} className='w-auto h-7 lg:h-12' /><p className='text-xs lg:text-sm'>{name.toUpperCase()}</p></div></Link>;
          })}
        </div>
        <div className='px-4 sm:px-2 my-6'>
          <h1 className='ananda text-3xl my-4 md:ml-4 lg:ml-8 lg:text-4xl 2xl:text-5xl'>popular packages</h1>
          <div className='flex justify-around max-w-full flex-wrap'>
            {[{ text: "Rail Tour Packages", imgUrl: "/rtp.png" }, { text: "Maharajas Express", imgUrl: "/me.png" }, { text: "International Packages", imgUrl: "/ip.png" }, { text: "Domestic Air Packages", imgUrl: "/dap.png" }].map(obj => {
              return <div key={obj.text} className='w-[45%] mb-3 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12 hover:shadow-lg hover:shadow-black transition cursor-pointer'>
                <Image src={obj.imgUrl} width={200} height={200} alt={obj.text} className='w-full' />
                <div className='w-full h-0'>
                  <p className='relative bottom-12 md:bottom-[3.75rem] lg:bottom-[4.5rem] 2xl:bottom-20 bg-black bg-opacity-70 backdrop-blur text-white flex flex-wrap items-center justify-between px-2 lg:px-4 py-4 text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-white text-balance'>{obj.text}<Image src="/arrow.svg" alt='go there' width={100} height={40} className='ml-auto w-[10%]' /></p>
                </div>
              </div>;
            })}
          </div>
        </div>
        <footer className='bg-[#1F0C3AD6] p-6'>
          <p className='ananda text-white text-3xl'>contact us</p>
          <div className='flex justify-between items-center text-xs text-white flex-wrap'>
            <p className='text-balance mb-3'>Feel free to reach out to us at: </p>
            <div className='flex justify-between gap-3'>
              <button className='border border-[#FF9F45] text-center text-[#FF9F45] underline py-1 px-6'>team@safar.com</button>
              <button className='border border-[#FF9F45] text-center text-[#FF9F45] underline py-1 px-6'>91+ 6969042000</button>
            </div>
          </div>
        </footer>
      </div></>
  );
}
