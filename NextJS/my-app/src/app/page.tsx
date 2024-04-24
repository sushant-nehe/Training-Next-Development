import Image from "next/image";

export default function Home() {
  return (
    <div className="justify-center">
        <Image src="/nextjs.png" alt={"Next.JS Logo"} width={750} height={500}></Image>
    </div>
  )
}