import Head from "next/head";

import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

import './Layout.scss';
import "../../css/index.scss";

import navButtons from '../../config/buttons';

const Layout = (props) => (
  <div className="Layout">
    <Head>
      <title>Next Project</title>
    </Head>
    <Header />
    <div className="Content">{props.children}</div>
    <NavBar navButtons={navButtons}/>
  </div>
);

export default Layout;
