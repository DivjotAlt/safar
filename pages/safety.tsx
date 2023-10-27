import Logo from "@/components/logoLink";
import Image from "next/image";

export default function Safety() {
  return <>
    <Logo absolute={undefined} />
    <Image src="/safetytrain.svg" alt="" width={512} height={512} className="w-screen absolute top-0 z-0" />
    <div className="relative z-10">
      <h1 className="ananda safety-text-shadow text-6xl gradient2 text-center mt-8 h-20">safety tips</h1>
      <div className="flex flex-col gap-6 text-center text-xl">
        <div className="flex justify-around">
          {[
            {
              head: "Hold On During the Journey",
              text: "When standing, hold on to a railing or grab handle to maintain your balance, especially if the train is moving or stopping abruptly."
            },
            {
              head: "Secure Your Belongings",
              text: "Keep your luggage close and secure. Use padlocks on your bags and consider using a cable lock to attach your bags to the luggage rack."
            },
            {
              head: "Mind the Platform Gap",
              text: "Pay attention to announcements and be cautious when stepping on or off the train to avoid getting stuck."
            }
          ].map(obj => {
            return <div key={obj.text} className="max-w-[30vw] bg-[#F78537A6] rounded-3xl px-2 py-6 safety-box-shadow">
              <h1 className="text-[#5E1C00] font-bold">{obj.head}</h1>
              <p className="text-[#5E1C00]">{obj.text}</p>
            </div>
          })}
        </div>
        <div className="flex justify-around">
          {[
            {
              head: "Report Suspicious Activity",
              text: "If you notice any suspicious behavior or unattended baggage, report it to railway authorities or security personnel immediately."
            },
            {
              head: "Avoid Over-crowded Areas",
              text: "Crowded areas are prime spots for pickpockets. Be extra vigilant in stations and on crowded trains."
            },
            {
              head: "Follow Platform Rules",
              text: "Stand behind the yellow line on the platform. It's there for your safety, especially when trains are passing."
            }
          ].map(obj => {
            return <div key={obj.text} className="max-w-[30vw] bg-[#F3C073A6] rounded-3xl px-2 py-6 safety-box-shadow">
              <h1 className="text-[#5E1C00] font-bold">{obj.head}</h1>
              <p className="text-[#5E1C00]">{obj.text}</p>
            </div>
          })}
        </div>
        <div className="flex justify-around">
          {[
            {
              head: "Use Hand Sanitizer and Masks",
              text: "Especially in the context of health emergencies, carry hand sanitizer and masks to maintain hygiene."
            },
            {
              head: "Be Aware of Emergency Exits",
              text: "Familiarize yourself with the location of emergency exits and equipment like hammers for breaking windows in case of emergencies."
            },
            {
              head: "Do Not Lean Out of the Train",
              text: "Avoid leaning out of the train, especially when it's in motion. There's a risk of hitting objects or structures on the side."
            }
          ].map(obj => {
            return <div key={obj.text} className="max-w-[30vw] bg-[#F9EBA9A6] rounded-3xl px-2 py-6 safety-box-shadow">
              <h1 className="text-[#5E1C00] font-bold">{obj.head}</h1>
              <p className="text-[#5E1C00]">{obj.text}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  </>
}