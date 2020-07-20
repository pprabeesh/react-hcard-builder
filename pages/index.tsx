import Layout from "layout";
import Head from "next/head";
import { HCardBuilder } from "components/HCardBuilder";

const App = () => {
  return (
    <Layout>
      <Head>
        <title>React HCard builder</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HCardBuilder />
    </Layout>
  );
};

export default App;
