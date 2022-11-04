import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const menu = document.getElementById("menu");

    Array.from(document.getElementsByClassName("menu-item")).forEach(
      (item, index) => {
        item.onmouseover = () => {
          menu.dataset.activeIndex = index;
          console.log(index);
        };
      }
    );
  });
  // const DynamicComponentWithNoSSR = dynamic(() => import('../components/List'), {
  //   ssr: false
  // })

  return (
    <div className="bg">
      <div className='loading-layer'>
        <div className='title-box'>
          <div className="title">
            Fit Generator
          </div>
        </div>
      </div>
      <div id="menu">
        <div id="menu-items">
          <Link href="/" className="menu-item">
            Generate Fit
          </Link>
          <Link href="/" className="menu-item">
            Add Clothes
          </Link>
          <Link href="/" className="menu-item">
            Credits
          </Link>
        </div>
        <div id="background-pattern" />
        <div id="background-img" />
      </div>
    </div>
  );
}
