import Head from "next/head";
import Link from "next/link";

export default function Home({}) {
  return (
    <>
      <Head>
        <title>KnitToDo</title>
      </Head>
      <section className="max-w-6xl bg-slate-200 mx-auto py-10 mt-20 rounded-xl">
        <h2 className="text-center font-black text-3xl mb-8">KnitToDo</h2>
        <ul className="text-center text-2xl font-semibold text-red-600">
          <li className="inline-block mr-6">
            <Link href="/todolist/ssr/1">SSR</Link>
          </li>
          <li className="inline-block">
            <Link href="/todolist/isr/1">ISR</Link>
          </li>
        </ul>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
