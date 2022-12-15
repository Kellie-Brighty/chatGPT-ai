import React, { useState } from "react";
import Lottie from "lottie-react";
import robo from "../../public/first_santa.json";
import styles from "../index.module.css";
import Link from "next/link";
import { IoReturnUpBack } from "react-icons/io5";

export default function Gender() {
  const [gender, setGender] = useState("male");

  return (
    <div className={styles.gender_container}>
      <Link href="/options">
        <div className={styles.options_back_btn}>
          <IoReturnUpBack />
        </div>
      </Link>
      <div className={styles.gender_inner_flex}>
        <Lottie animationData={robo} className={styles.gender_animation} />
        <div className={styles.gender_content_container}>
          <div className={styles.gender_question_container}>
            <p className={styles.gender_question_text}>
              Ho Ho Ho! Welcome my dear Yelutide friend. What gender are you
              looking to gift?
            </p>
          </div>

          <div className={styles.gender_selector_container}>
            <button
              className={
                gender === "male"
                  ? styles.gender_btn_selected
                  : styles.gender_btn
              }
              onClick={() => setGender("male")}
            >
              Man
            </button>
            <button
              className={
                gender === "female"
                  ? styles.gender_btn_selected
                  : styles.gender_btn
              }
              onClick={() => setGender("female")}
            >
              Woman
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
