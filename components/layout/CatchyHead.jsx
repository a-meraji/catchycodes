import Head from "next/head";
import React from "react";

export default function CatchyHead(props) {
  const { title } = props;
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link
        rel="icon"
        href="/main-logo-purple.png"
        type="image/icon type"
      ></link>
    </Head>
  );
}
