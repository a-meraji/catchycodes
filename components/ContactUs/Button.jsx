import React from "react";

export default function Button(props) {
  const { clickHandler } = props;
  return (
    <button
      onClick={clickHandler}
      class="
      fixed bottom-32 transform -translate-x-1/2 left-1/2
bg-[#fbeee0]
border-2
border-[#422800]
rounded-[30px]
shadow-[4px_4px_0_0_#422800]
text-[#422800]
cursor-pointer
inline-block
font-semibold
text-[18px]
px-[18px]
leading-[50px]
text-center
no-underline
select-none
hover:bg-white
active:shadow-[2px_2px_0_0_#422800]
active:translate-y-[2px]
md:min-w-[120px]
md:px-[25px]
"
    >
      Contact Us
    </button>
  );
}
