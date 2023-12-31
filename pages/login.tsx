import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/logoLink";

export default function Login() {
  return <>
    <Logo absolute={undefined} />
    <Image src={"/mandalahalf.png"} alt="" width={500} height={500} className="fixed left-0 rotate-180 h-screen hidden lg:block" />
    <div className="heading ml-auto mt-12">
      <h1 className="gradient2 ananda text-center h-28 text-8xl">log in</h1>
      <div className="px-6 md:px-32">
        <div className="flex flex-col gap-8 mt-8">
          <input type="text" className="logininput bg-transparent w-full border border-[#6980AB] py-3 px-4 text-xl" placeholder="username" />
          <input type="password" className="logininput bg-transparent w-full border border-[#6980AB] py-3 px-4 text-xl" placeholder="password" />
        </div>
        <hr className="my-12 bg-[#6980AB78]" />
        <div className="flex flex-col gap-8">
          {["Apple", "Google", "Facebook"].map(name => {
            return <button key={name} className="w-full text-[#9D2029A3] border border-[#6980AB] text-xl py-3 text-center">Login with {name}</button>;
          })}
          <p className="text-center">Don&apos;t have an account? <Link href={"/signup"} className="text-[#C0706F] underline text-lg">Sign Up</Link></p>
        </div>
        <Link href="/profile"><button className="m-auto mt-10 w-60 border border-[#620045] text-[#610045A3] px-10 py-2 block text-xl">log in</button></Link>
      </div>
    </div>
  </>
}