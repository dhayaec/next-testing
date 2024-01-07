import Head from 'next/head';
import Link from 'next/link';

const metadata = {
  title: 'App Router',
};

export default function Page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <h1>App Router</h1>
      <Link href={'/blog/hello'}>Blog</Link>
    </>
  );
}
