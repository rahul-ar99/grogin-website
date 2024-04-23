import Image from "next/image";
import Mainpage from "./mainpage/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Mainpage />
    </main>
  );
}
