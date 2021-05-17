import React from "react";
import Link from "next/Link";
import Head from "next/Head";

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="http://localhost:3000">
        <header>Podcasts</header>
      </Link>

      {children}
      <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
      `}</style>

      <style jsx>
        {`
          header {
            color: #fff;
            background: #8756ca;
            padding: 15px;
            text-align: center;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
