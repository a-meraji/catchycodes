"use client";
import React from "react";

export default function Footer() {
  return (
    <div className="orange-glass -mx-[10vw] mt-4 lg:mt-0">
      <div className="footer-shadow-inner flex flex-col gap-2 lg:gap-0  items-center pt-4 text-white">
        <div className="flex flex-col pb-2  pt-4  text-center  lg:flex-row lg:gap-24">
          <div>
            <div className="lg:mt-10 -mt-4 !text-Gray100 font-14Bold">
              Contact With Us
            </div>
            <div className="lg:mt-3 flex gap-4">
              <div
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://t.me/betatik", "_blank");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40ZM20.8648 15.0092C19.0736 15.7543 15.4936 17.2963 10.1249 19.6354C9.2531 19.9821 8.79642 20.3212 8.75485 20.6528C8.68458 21.2133 9.38643 21.434 10.3422 21.7345C10.4722 21.7754 10.6069 21.8177 10.745 21.8626C11.6853 22.1683 12.9501 22.5259 13.6077 22.5401C14.2042 22.553 14.8699 22.3071 15.6049 21.8024C20.621 18.4163 23.2104 16.7049 23.3729 16.668C23.4876 16.6419 23.6465 16.6092 23.7542 16.7049C23.8619 16.8006 23.8513 16.9819 23.8399 17.0305C23.7704 17.3269 21.0154 19.8882 19.5896 21.2137C19.1452 21.6269 18.8299 21.92 18.7654 21.987C18.6211 22.1369 18.4739 22.2788 18.3325 22.4151C17.459 23.2572 16.8039 23.8887 18.3688 24.92C19.1208 25.4156 19.7226 25.8254 20.323 26.2342C20.9786 26.6807 21.6326 27.1261 22.4787 27.6807C22.6942 27.822 22.9001 27.9688 23.1006 28.1118C23.8637 28.6557 24.5492 29.1444 25.3961 29.0665C25.8882 29.0212 26.3965 28.5585 26.6546 27.1784C27.2647 23.9169 28.464 16.8501 28.7411 13.9381C28.7654 13.6829 28.7348 13.3564 28.7103 13.2131C28.6858 13.0698 28.6345 12.8655 28.4482 12.7144C28.2276 12.5353 27.8869 12.4976 27.7346 12.5001C27.0419 12.5125 25.9792 12.882 20.8648 15.0092Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.75 27.125C17 27.875 18.5 28.25 20 28.25C24.625 28.25 28.25 24.5 28.25 20.125C28.25 17.875 27.5 15.875 25.875 14.25C24.25 12.75 22.25 11.875 20 11.875C15.5 11.875 11.75 15.625 11.75 20.125C11.75 21.625 12.125 23.125 13 24.5L13.25 24.875L12.375 27.875L15.5 27L15.75 27.125ZM22.75 21.25C23 21.25 24.25 21.875 24.5 22C24.5389 22.0195 24.5779 22.0359 24.6163 22.0521C24.8248 22.1402 25.0195 22.2223 25.125 22.75C25.25 22.75 25.25 23.25 25 23.875C24.875 24.375 23.875 25 23.375 25C23.2903 25 23.2092 25.0072 23.1225 25.0148C22.6977 25.0524 22.14 25.1018 20.375 24.375C18.1844 23.4988 16.6656 21.3749 16.2392 20.7785C16.1789 20.6942 16.1405 20.6405 16.125 20.625C16.1037 20.5824 16.0607 20.5145 16.0039 20.4249C15.7274 19.9883 15.125 19.0372 15.125 18C15.125 16.75 15.75 16.125 16 15.875C16.25 15.625 16.5 15.625 16.625 15.625H17.125C17.25 15.625 17.5 15.625 17.625 16C17.875 16.5 18.375 17.75 18.375 17.875C18.375 17.9167 18.3889 17.9583 18.4028 18C18.4306 18.0833 18.4583 18.1667 18.375 18.25C18.3125 18.3125 18.2813 18.375 18.25 18.4375C18.2188 18.5 18.1875 18.5625 18.125 18.625L17.75 19C17.625 19.125 17.5 19.25 17.625 19.5C17.75 19.75 18.25 20.625 19 21.25C19.8439 21.9884 20.5097 22.2817 20.8473 22.4304C20.9097 22.4579 20.961 22.4805 21 22.5C21.25 22.5 21.375 22.5 21.5 22.375C21.5625 22.25 21.7188 22.0625 21.875 21.875C22.0312 21.6875 22.1875 21.5 22.25 21.375C22.375 21.125 22.5 21.125 22.75 21.25Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM20 10C22.625 10 25.125 11 27 12.875C28.875 14.75 30 17.25 30 19.875C30 25.375 25.5 29.875 20 29.875C18.375 29.875 16.75 29.375 15.25 28.625L10 30L11.375 25C10.5 23.5 10 21.75 10 20C10 14.5 14.5 10 20 10Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/betatik/",
                    "_blank"
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM10.25 16.625V30H14.5V16.625H10.25ZM10 12.375C10 13.75 11 14.75 12.375 14.75C13.75 14.75 14.75 13.75 14.75 12.375C14.75 11 13.75 10 12.375 10C11.125 10 10 11 10 12.375ZM25.75 30H29.75V21.75C29.75 17.625 27.25 16.25 24.875 16.25C22.75 16.25 21.25 17.625 20.875 18.5V16.625H16.875V30H21.125V22.875C21.125 21 22.375 20 23.625 20C24.875 20 25.75 20.625 25.75 22.75V30Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.instagram.com/betatik.co/?hl=en",
                    "_blank"
                  );
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20 23.5C18.125 23.5 16.5 22 16.5 20C16.5 18.125 18 16.5 20 16.5C21.875 16.5 23.5 18 23.5 20C23.5 21.875 21.875 23.5 20 23.5Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.25 11.5H15.75C14.75 11.625 14.25 11.75 13.875 11.875C13.375 12 13 12.25 12.625 12.625C12.3283 12.9217 12.1881 13.2185 12.0186 13.5771C11.9739 13.6717 11.9271 13.7707 11.875 13.875C11.8557 13.933 11.8333 13.994 11.8094 14.0594C11.6786 14.4167 11.5 14.9047 11.5 15.75V24.25C11.625 25.25 11.75 25.75 11.875 26.125C12 26.625 12.25 27 12.625 27.375C12.9217 27.6717 13.2185 27.8119 13.5771 27.9814C13.6717 28.0261 13.7706 28.0728 13.875 28.125C13.933 28.1443 13.994 28.1667 14.0594 28.1906C14.4167 28.3214 14.9047 28.5 15.75 28.5H24.25C25.25 28.375 25.75 28.25 26.125 28.125C26.625 28 27 27.75 27.375 27.375C27.6717 27.0783 27.8119 26.7815 27.9814 26.4229C28.0261 26.3283 28.0728 26.2293 28.125 26.125C28.1443 26.067 28.1667 26.006 28.1906 25.9406C28.3214 25.5833 28.5 25.0953 28.5 24.25V15.75C28.375 14.75 28.25 14.25 28.125 13.875C28 13.375 27.75 13 27.375 12.625C27.0783 12.3283 26.7815 12.1881 26.4229 12.0186C26.3284 11.974 26.2292 11.9271 26.125 11.875C26.067 11.8557 26.006 11.8333 25.9406 11.8094C25.5833 11.6786 25.0953 11.5 24.25 11.5ZM20 14.625C17 14.625 14.625 17 14.625 20C14.625 23 17 25.375 20 25.375C23 25.375 25.375 23 25.375 20C25.375 17 23 14.625 20 14.625ZM26.75 14.5C26.75 15.1904 26.1904 15.75 25.5 15.75C24.8096 15.75 24.25 15.1904 24.25 14.5C24.25 13.8096 24.8096 13.25 25.5 13.25C26.1904 13.25 26.75 13.8096 26.75 14.5Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM15.75 9.625H24.25C25.375 9.75 26.125 9.875 26.75 10.125C27.5 10.5 28 10.75 28.625 11.375C29.25 12 29.625 12.625 29.875 13.25C30.125 13.875 30.375 14.625 30.375 15.75V24.25C30.25 25.375 30.125 26.125 29.875 26.75C29.5 27.5 29.25 28 28.625 28.625C28 29.25 27.375 29.625 26.75 29.875C26.125 30.125 25.375 30.375 24.25 30.375H15.75C14.625 30.25 13.875 30.125 13.25 29.875C12.5 29.5 12 29.25 11.375 28.625C10.75 28 10.375 27.375 10.125 26.75C9.875 26.125 9.625 25.375 9.625 24.25V15.75C9.75 14.625 9.875 13.875 10.125 13.25C10.5 12.5 10.75 12 11.375 11.375C12 10.75 12.625 10.375 13.25 10.125C13.875 9.875 14.625 9.625 15.75 9.625Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
