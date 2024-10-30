"use client";

import style from "./nav.module.scss";
import Link from "next/link";
import ZUGO from "@/../public/ZUGO.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const url = usePathname();

  return (
    <div className={style.navLinks}>
      <Link href="/" className={style.logo}>
        <Image src={ZUGO} alt="zugo.png" />
      </Link>
      <ul className={style.link_list}>
        <li className={`${url === "/" ? style.current : ""}`}>
          <Link href="/">메인</Link>
        </li>
        <li className={`${url === "/recommend" ? style.current : ""}`}>
          <Link href="/recommend">인기추천</Link>
        </li>
        <li>
          <Link href="/">학교정보</Link>
        </li>
        <li>
          <Link href="/">기숙사</Link>
        </li>
        <li>
          <Link href="/">내정보</Link>
        </li>
      </ul>
    </div>
  );
}