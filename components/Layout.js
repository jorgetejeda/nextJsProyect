import Header from "./Header";
import NavBar from "./NavBar";
import Head from "next/head";

const Layout = (props) => (
  <div className="Layout">
    <Head>
      <title>Next Project</title>
    </Head>
    <Header />
    <div className="Content">{props.children}</div>
    <NavBar />
  </div>
);

export default Layout;
