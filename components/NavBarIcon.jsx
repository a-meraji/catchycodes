import Link from "next/link";
import React from "react";

export default function NavBarIcon(props) {
  const { title, url } = props;
  return <Link href={url} className="cursor-pointer">{title}</Link>;
}
