import Head from "next/head";
import { FC } from "react";
import Header from "./components/Header/Header";
import LayoutProps from "./LayoutProps";

const Layout: FC<LayoutProps> = ({
  children,
  title = "Hamburger Menu Tutorial",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
