import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({
  weight: ["300", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Eugene Manikan | Portfolio</title>
        <meta name="description" content="Geneerated by cre"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="bg-stone-900  h-screen">
          <nav className="relative md:fixed top-0 left-0 right-0 px-8 md:px-24 py-8 bg-transparent z-[1] flex flex-row items-center justify-between">
            <Image
              src="/Brand/LOGOGN.svg"
              alt="Eugene"
              width={50}
              height={50}
            />
            <ul
              className={`flex items-center space-x-5 text-white ${opensans.className} font-light`}
            >
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
}
