import globe from '@/public/globe.svg';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!
      <Image src={globe} alt="globe" />
    </>
  );
}
