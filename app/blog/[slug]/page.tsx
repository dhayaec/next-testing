import Head from 'next/head';

type Params = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Params) {
  return (
    <>
      <Head>
        <title>{params.slug}</title>
      </Head>
      <h1>Slug: {params.slug}</h1>
    </>
  );
}
