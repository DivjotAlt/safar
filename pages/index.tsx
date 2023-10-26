import Image from 'next/image'
import Head from 'next/head';

export default function Home() {
  const loggedIn = true;
  return (
    <>
      <Head>
        <title>Safar</title>
      </Head>
      <div className='w-full'>
        <div className='image overflow-visible h-fit'>
          <Image src={"/trainbg.svg"} alt='' width={10} height={10} className='w-full relative z-10 trainbg' />
          <p className='ananda gradient z-20 absolute top-0 text-2xl pl-6 pt-6'>safar</p>
          <div className='w-0 h-0 overflow-visible ml-auto'>
            <Image src="/mandala.svg" alt='' width={0} height={0} className='w-[50vw] right-[26.666vw] bottom-[30vw] relative mandala' />
          </div>
        </div>
        <div className='m-auto my-10 w-fit'>
          <p className='welcome ananda w-fit relative top-6 left-1'>welcome {loggedIn && "back"} to</p>
          <Image alt='' src={"/safar-logo.png"} className='w-fit' height={200} width={200} />
        </div>
        {loggedIn ?
          <div className='flex flex-col'>
            <p className='font-bold text-center'><span className="gradient">Your</span> journey :</p>
            <input type="text" className='text-[#9D2029A3] border-[#B22222] border-[1px] w-[18rem] m-auto text-center destination-input bg-[#FBFAE5]' placeholder='enter your destination' />
          </div> :
          <div className='flex items-center justify-center gap-12 mb-8'>
            {["login", "sign up"].map(text => {
              return (
                <button key={text} className='button px-8 py-1 bg-transparent'>{text}</button>
              );
            })}
          </div>}
        <p className='font-bold text-center mb-2 mt-12'>Where to <span className="gradient ananda">explore</span> next?</p>
        <hr className='mx-10' />
        <div className='flex justify-evenly items-center my-2'>
          {["trains", "routes", "dates", "destinations"].map(name => {
            return <div className='flex flex-col gap-1' key={name}><Image src={name + "icon.svg"} alt={name} width={64} height={64} className='w-auto h-7' /><p className='text-xs'>{name.toUpperCase()}</p></div>;
          })}
        </div>
        <div className='px-4 sm:px-2 my-6'>
          <h1 className='ananda text-3xl my-4'>popular packages</h1>
          <div className='flex justify-around max-w-full flex-wrap'>
            {[{ text: "Rail Tour Packages", imgUrl: "/rtp.png" }, { text: "Maharajas Express", imgUrl: "/me.png" }, { text: "International Packages", imgUrl: "/ip.png" }, { text: "Domestic Air Packages", imgUrl: "/dap.png" }].map(obj => {
              return <div key={obj.text}>
                <Image src={obj.imgUrl} width={200} height={200} alt={obj.text} className='w-[30vw]' />

              </div>;
            })}
          </div>
        </div>
        <footer className='bg-[#1F0C3AD6] p-6'>
          <p className='ananda text-white text-3xl'>contact us</p>
          <div className='h-32'></div>
        </footer>
      </div></>
  );
}
