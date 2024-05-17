"use client";
import React from "react";
import { RiNextjsFill, RiNextjsLine } from "react-icons/ri";
import { FaDocker, FaNodeJs, FaReact } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiExpress, SiGraphql, SiKubernetes, SiMicrosoftsqlserver, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiRedux } from "react-icons/si";
import { IoServerOutline } from "react-icons/io5";

function AutomateCarousel() {
  const peoples = [
    { logo: <RiNextjsLine className="w-12 h-12"/> },
    { logo: <SiMysql className="w-12 h-12"/> },
    { logo: <SiPostgresql className="w-12 h-12"/> },
    { logo: <TbBrandCSharp className="w-12 h-12"/> },
    { logo: <FaReact className="w-12 h-12"/> },
    { logo: <FaNodeJs className="w-12 h-12"/> },
    { logo: <IoServerOutline className="w-12 h-12"/> },
    { logo: <SiGraphql className="w-12 h-12"/> },
    { logo: <SiExpress className="w-12 h-12"/> },
    { logo: <SiRedux className="w-12 h-12"/> },
    { logo: <SiMicrosoftsqlserver className="w-12 h-12"/> },
    { logo: <SiMongodb className="w-12 h-12"/> },
    { logo: <SiRedis className="w-12 h-12"/> },
    { logo: <FaDocker className="w-12 h-12"/> },
    { logo: <SiKubernetes className="w-12 h-12"/> },
    { logo: <RiNextjsLine className="w-12 h-12"/> },
    { logo: <SiMysql className="w-12 h-12"/> },
    { logo: <SiPostgresql className="w-12 h-12"/> },
    { logo: <TbBrandCSharp className="w-12 h-12"/> },
  ];
  return (
    <div className="">
      <div className="animation scrollbar-hide  flex w-full gap-x-10 overflow-scroll ">
        {peoples.map((people, index) => (
          <div
            key={index}
            className={`relative text-contPrimary min-w-[120px] max-w-[120px] h-[100px]  rounded-md  p-5 ${
              index === 0 && "first invisible"
            }`}
          >
            <div className="flex items-center gap-x-3 text-[0.6rem] lg:text-xs font-iranBlack">
              {people.logo}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .animation::-webkit-scrollbar {
          display: none;
        }
        .animation {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        /*keyframe animations*/
        .first {
          -webkit-animation: bannermove 35s linear infinite;
          -moz-animation: bannermove 35s linear infinite;
          -ms-animation: bannermove 35s linear infinite;
          animation: bannermove 35s linear infinite;
        }
        @keyframes "bannermove" {
          0% {
            margin-left: -240px;
          }
          100% {
            margin-left: -2320px;
          }
        }
        @-moz-keyframes bannermove {
          0% {
            margin-left: -240px;
          }
          100% {
            margin-left: -2320px;
          }
        }
        @-webkit-keyframes "bannermove" {
          0% {
            margin-left: -240px;
          }
          100% {
            margin-left: -2320px;
          }
        }
        @-ms-keyframes "bannermove" {
          0% {
            margin-left: -240px;
          }
          100% {
            margin-left: -2320px;
          }
        }

        .animation2::-webkit-scrollbar {
          display: none;
        }
        .animation2 {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        /*keyframe animations*/
        .first2 {
          -webkit-animation: bannermove2 40s linear infinite;
          -moz-animation: bannermove2 40s linear infinite;
          -ms-animation: bannermove2 40s linear infinite;
          animation: bannermove2 40s linear infinite;
        }
        @keyframes "bannermove2" {
          0% {
            margin-left: -2340px;
          }
          100% {
            margin-left: 0px;
          }
        }
        @-moz-keyframes bannermove2 {
          0% {
            margin-left: -2340px;
          }
          100% {
            margin-left: 0px;
          }
        }
        @-webkit-keyframes "bannermove2" {
          0% {
            margin-left: -2340px;
          }
          100% {
            margin-left: 0px;
          }
        }
        @-ms-keyframes "bannermove2" {
          0% {
            margin-left: -2340px;
          }
          100% {
            margin-left: 0px;
          }
        }
      `}</style>
    </div>
  );
}

export default AutomateCarousel;
