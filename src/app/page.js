import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-[100vw] h-[80vh] bg-slate-800 text-white flex flex-col justify-center items-center text-xl lgl:text-5xl font-bold">
      Welcome To the 19FutureTech Blog's <br />{" "}
      <span className="lgl:text-4xl text-lg">
        Where you can share you thought
      </span>
      <Link href="/home">
        <button className=" my-10 px-4 py-2 lgl:py-4 rounded-md text-textGreen text-[13px] border border-textGreen  hover:bg-hoverColor duration-300">
          Enter to start
        </button>
      </Link>
    </main>
  );
}
