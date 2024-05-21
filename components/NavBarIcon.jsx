import React from "react";

export default function NavBarIcon(props) {
  const { title } = props;
  return <div className="cursor-pointer">{title}</div>;
}
