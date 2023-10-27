import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/logoLink";

export default function SignUp() {
  return <>
    <Logo absolute={undefined} />
    <Image src={"/mandalahalf.png"} alt="" width={500} height={500} className="fixed right-0 h-screen" />
    <div className="heading mr-auto mt-12">
      <h1 className="gradient2 ananda text-center h-28 text-8xl w-screen my-12">profile</h1>
      <div className="px-32">
        <div className="flex justify-start gap-16 items-center h-64 mb-16">
          <div><Image src={"/maheshji.png"} alt="profile picture" width={256} height={256} className="h-64" /></div>
          <div className="h-64 text-2xl flex flex-col justify-center items-center">
            <div>
              <p>Name: Mahesh</p>
              <p>Username: mahesh_dalle69</p>
              <p>Email: mahesh.dalle@amogus.com</p>
              <p>Phone no.: 1234206900</p>
            </div>
          </div>
        </div>
        <div className="text-[#511845] text-xl">
          <div className="mb-8">
            <p className="font-bold text-3xl">Upcoming journeys:</p>
            <p><span className="text-[#985A7F]">27/10/23:</span> Delhi to Mumbai - Rajdhani Express (1A)</p>
          </div>
          <div>
            <p className="font-bold text-3xl">Past trips:</p>
            {[
              {
                date: "04/02/23",
                text: "Delhi to Haridwar - Shatabdi Express (EC)"
              },
              {
                date: "08/06/23",
                text: "Treasures of India Journey - Maharajas Express"
              },
              {
                date: "18/07/23",
                text: "Mumbai to Goa - Tejas Express (EC)"
              }
            ].map(obj => {
              return <p key={obj.text}><span className="text-[#985A7F]">{obj.date}: </span> {obj.text}</p>
            })}
          </div>
        </div>
      </div>
    </div>
  </>
}