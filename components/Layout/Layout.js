import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import Head from "next/head";
import './Layout.scss';
import "../../css/index.scss";

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
