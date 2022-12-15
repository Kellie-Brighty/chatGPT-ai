import React, { useState } from "react";
import styles from "./index.module.css";
import { IoReturnUpBack } from "react-icons/io5";
import Link from "next/link";

export default function Options() {
  const [tagEnabled, setTagEnabled] = useState(false);

  return (
    <div className={styles.options_container}>
      <Link href="/">
        <div className={styles.options_back_btn}>
          <IoReturnUpBack />
        </div>
      </Link>
      <div className={styles.options_inner_flex}>
        <div className={styles.options_box}>
          <img
            src="christmas_gift.jpg"
            alt=""
            className={styles.options_christmas_gift_img}
          />
          <p className={styles.options_box_title}>
            Generate Christmas Gift Ideas
          </p>
          <p className={styles.option_text}>
            Enthralled AI generates three(3) different Christmas gifts ideas
            based on a number of personality requests.
            <br />
            <br /> All you have to do is provide answers to a few questions
            about your friend.
          </p>
          <Link href="/gift_process/gender">
            <button className={styles.options_box_btn}>
              Get christmas gift ideas
            </button>
          </Link>
        </div>
        <div className={styles.options_box}>
          <p className={styles.options_box_coming_soon}>Coming Soon</p>
          <img
            src="business_idea.png"
            alt=""
            className={styles.options_christmas_gift_img}
          />
          <p className={styles.options_box_title}>Business Idea Generator</p>
          <p className={styles.option_text}>
            Our AI will generate unique and topnotch business ideas for your
            brands. <br />
            <br /> This feature will be released soon.
          </p>
          <button
            className={
              tagEnabled
                ? styles.options_box_btn
                : styles.options_box_btn_disabled
            }
          >
            Get business ideas
          </button>
        </div>
      </div>
    </div>
  );
}
