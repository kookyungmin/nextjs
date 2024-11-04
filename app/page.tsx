import type { Metadata } from 'next';

//title, meta 와 같은 head 태그를 수동으로 추가하지 말자
export const metadata: Metadata = {
  title: 'Next.js'
}

export default function Home() {
  return (
    <h1>Hello, Next.js</h1>
  );
}
