import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [loader, setLoader] = useState();
  const [menuStatus, setMenuStatus] = useState();

  useEffect(() => {
    setLoader(document.getElementsByClassName("loading-layer"));
    setMenuStatus(document.getElementsByClassName("page"));
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

  const handleClickTitle = () => {
    setLoader(...loader, (loader["0"]["dataset"]["status"] = "inactive"));
    setMenuStatus(
      ...menuStatus,
      (menuStatus["0"]["dataset"]["status"] = "active")
    );
  };
  // const DynamicComponentWithNoSSR = dynamic(() => import('../components/List'), {
  //   ssr: false
  // })

  return (
    <div className="bg">
      <div className="loading-layer" data-status="active">
        <div className="title-box">
          <div className="title" onClick={handleClickTitle}>
            <div className="letter"> F </div>
            <div className="letter"> i </div>
            <div className="letter"> t </div>
            <div className="letter">&nbsp;</div>
            <div className="flip5">
              <div className="letter"> G </div>
              <div className="letter"> X </div>
              <div className="letter"> K </div>
              <div className="letter"> L </div>
              <div className="letter"> 3 </div>
            </div>
            <div className="flip5-2">
              <div className="letter"> e </div>
              <div className="letter"> i </div>
              <div className="letter"> u </div>
              <div className="letter"> l </div>
              <div className="letter"> o </div>
            </div>
            <div className="letter"> n </div>
            <div className="letter"> e </div>
            <div className="letter"> r </div>
            <div className="letter"> a </div>
            <div className="letter"> t </div>
            <div className="letter"> o </div>
            <div className="letter"> r </div>
          </div>
        </div>
      </div>
      <div className="page">
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
    </div>
  );
}
