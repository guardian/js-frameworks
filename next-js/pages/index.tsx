import type { NextPage } from "next";
import Head from "next/head";
import Counter from "../components/Counter";
// import { Footer } from "@guardian/src-footer"
import { footer, header, logo, main } from "../styles/main.css";


type Framework = {
  port: number,
  name: string,
}

const frameworks: Framework[] = [
  { port: 3001, name: "NextJS" },
  { port: 3002, name: "Astro" },
  { port: 3003, name: "Svelte Kit" },
];

const framework = frameworks[0].name;

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Guardian | {framework}</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- this is slow – do not use it for production Guardian sites --> */}
        <link
          href="https://assets.guim.co.uk/static/frontend/fonts/font-faces.css"
          rel="stylesheet"
        />
      </Head>

      <header className={header}>
        <h1 className={logo}>The Guardian</h1>
        <h2>{framework}</h2>
      </header>

      <main className={main}>
        <p>This is the {framework} implementation of a simple page.</p>

        <p>
          You can see other implementation here, provided you ran
          <code>pnpm -r build-and-preview</code> in the top folder
        </p>

        <ul>
          {frameworks.map((framework) => {
            const { port, name } = framework;
            return (
              <li>
                <a href={`http://localhost:${port}`}>
                  {name}: port {port}
                </a>
              </li>
            );
          })}
        </ul>

        <Counter />

        <h3>Drawbacks</h3>
        <ul>
          <li>No Preact support (I think?)</li>
          <li>No Partial hydration</li>
        </ul>
      </main>

      <footer className={footer}>
        (This footer cannot be imported from Source without the Emotion runtime)
      </footer>
    </div>
  );
};

export default Home;
