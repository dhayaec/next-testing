import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1>App Router</h1>
      <Link href={'/blog/hello'}>Blog</Link>
    </>
  );
}
