import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const menu = document.getElementById("menu");

  Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
      item.onmouseover = () => {
        menu.dataset.activeIndex = index;
        console.log(index);
      }
    });

  return (
    <div id='menu'>
      <div id='menu-items'>
        <a href='/' className='menu-item'>Generate Fit</a>
        <a href='/' className='menu-item'>Add Clothes</a>
        <a href='/' className='menu-item'>Credits</a>
      </div>
      <div id='background-img'>    
      </div>
    </div>
  )
}
