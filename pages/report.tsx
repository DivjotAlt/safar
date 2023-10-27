import Logo from "@/components/logoLink";
import Image from "next/image";

export default function Report() {
  return <>
    <Logo absolute={undefined} />
    <div className="fixed bottom-0 w-screen">
      <Image src="/mandalatophalf.png" alt="" width={512} height={512} className="h-[40vh] w-auto m-auto" />
    </div>
    <div className="px-72 py-36">
      <h1 className="gradient2 text-7xl text-center ananda h-20">facing any issues?</h1>
      <div className="mt-16 text-2xl flex flex-col gap-6 text-justify">
        <textarea placeholder="leave your feedback here" className="border-[3px] text-[#BF6E6D] border-[#61193F91] bg-transparent min-w-[32rem] max-w-[48rem] m-auto px-4 py-2 w-full h-64" />
      </div>
    </div>
  </>
}