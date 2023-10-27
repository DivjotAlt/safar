import Image from "next/image";

export default function Tickets() {
  return <div>
    <Image src={"/mandalafourth.png"} alt="" width={400} height={400} className="rotate-180 fixed w-44 sm:w-64 md:w-96" />
    <Image src={"/mandalafourth.png"} alt="" width={400} height={400} className="fixed bottom-0 right-0 w-44 sm:w-64 md:w-96" />
    <h1 className="ananda gradient2 text-5xl text-center pt-20">buy tickets</h1>
  </div>
}