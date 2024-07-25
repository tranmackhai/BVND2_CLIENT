import React from "react";
import classNames from "classnames";
import Header from "../components/Header";
import Footer from "../components/Footer";

export declare interface DefaultLayoutProps {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
  className?: string;
}

export default function DefaultLayout(props: DefaultLayoutProps): JSX.Element {
  const { children, className } = props;

  return (
    <React.Fragment>
      <div className={classNames("rs-layout", className)}>
        <Header />
        <div className="rs-layout-children">{children}</div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
