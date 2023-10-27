import Link from "next/link";

export default function Logo({ absolute }: { absolute: boolean | undefined | null }) {
  return <div className={`${absolute ? "absolute" : "fixed"} top-4 left-0 z-50`}><Link href={"/"} className="gradient ananda text-6xl px-8">safar</Link></div>
}