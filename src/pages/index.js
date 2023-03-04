import Head from 'next/head'
import Image from 'next/image'
import { redirect } from 'next/navigation';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello Mobile | Say Hello To The Very Best Of Wireless.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>

        Hello World

      </main>
    </>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  redirect('/savings');

  return {
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    props: {},
    revalidate: 10, // In seconds
  }
}