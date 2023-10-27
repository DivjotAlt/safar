import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/logoLink";

export default function SignUp() {
  return <>
    <Logo absolute={undefined} />
    <Image src={"/mandalahalf.png"} alt="" width={500} height={500} className="fixed right-0 h-screen" />
    <div className="heading mr-auto mt-12">
      <h1 className="gradient2 ananda text-center h-28 text-8xl">sign up</h1>
      <div className="px-32">
        <div className="flex flex-col gap-8 mt-8">
          <input type="text" className="logininput bg-transparent w-full border border-[#6980AB] py-3 px-4 text-xl" placeholder="enter a username" />
          <input type="password" className="logininput bg-transparent w-full border border-[#6980AB] py-3 px-4 text-xl" placeholder="enter a password" />
        </div>
        <hr className="my-12 bg-[#6980AB78]" />
        <div className="flex flex-col gap-8">
          {["Apple", "Google", "Facebook"].map(name => {
            return <button key={name} className="w-full text-[#9D2029A3] border border-[#6980AB] text-xl py-3 text-center">Sign up with {name}</button>;
          })}
          <p className="text-center">Already have an account? <Link href={"/login"} className="text-[#C0706F] underline text-lg">Login</Link></p>
        </div>
      </div>
    </div>
  </>
}