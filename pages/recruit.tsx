import Logo from "@/components/logoLink";
import Image from "next/image";

export default function Recruit() {
  return <>
    <Logo absolute={undefined} />
    <div className="fixed bottom-0 w-screen">
      <Image src="/mandalatophalf.png" alt="" width={512} height={512} className="h-[40vh] w-auto m-auto" />
    </div>
    <div className="px-72 py-36">
      <h1 className="gradient2 text-8xl text-center ananda">recruitment</h1>
      <div className="mt-16 text-2xl flex flex-col gap-6 text-justify">
        <p>No recruitment process is currently underway, however, interested candidates can submit the registration form. </p>
        <a href="https://example.org" className="text-[#BF6E6D] underline">Register Now</a>
      </div>
    </div>
  </>
}