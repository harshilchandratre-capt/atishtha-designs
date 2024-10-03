'use client'
import React from "react";
import styles from "@/app/styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className={`${styles.footerBg} bg-gray-800 text-white px-10 py-6 flex flex-col items-center justify-center`}
    >
      <div className="flex w-full md:w-[60%] h-auto md:h-48 flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-start justify-center gap-2 tracking-wide">
          <p>
            <i className="ri-map-pin-2-line"></i>&nbsp;&nbsp;813, Golden Square,
            near D-Mart, Chokdi, Bholav, Bharuch, Gujarat 392001
          </p>
          <p>
            <i className="ri-mail-line"></i>
            &nbsp;&nbsp;atisthadesigns210@gmail.com
          </p>
          <p>
            <i className="ri-whatsapp-line"></i>&nbsp;&nbsp;9876543210
          </p>
        </div>
        <div className="w-full md:w-[12%] flex flex-col items-center justify-between gap-4">
          <Image
            src="/logo.svg"
            width={80}
            height={80}
            alt="Atishtha Designs Logo"
          />
          <div className="w-max flex items-center justify-between gap-6">
            <i className="ri-instagram-line" aria-label="Instagram"></i>
            <i className="ri-facebook-fill" aria-label="Facebook"></i>
            <i className="ri-twitter-x-fill" aria-label="Twitter"></i>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 tracking-wide text-[#dadada] mt-4 md:mt-2">
        <label>© 2024 All Rights Reserved, Atishtha Designs</label>
        <label>
          Made with <i className="ri-cup-fill"></i> and{" "}
          <i className="ri-heart-2-fill"></i> by{" "}
          <i className="ri-github-fill"></i>/
          <Link href="https://github.com/harshilchandratre" target="_blank" rel="noopener noreferrer">
            harshilchandratre
          </Link>
        </label>
      </div>
    </footer>
  );
};

export default Footer;
