import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import robo from "../../public/first_santa.json";
import styles from "../index.module.css";
import Link from "next/link";
import { IoReturnUpBack } from "react-icons/io5";

export default function Gender() {
  const [gender, setGender] = useState("male");

  useEffect(() => {
    localStorage.setItem("enthralled_gender", "male");
  }, []);

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

          <p className={styles.gender_select_title}>Select gender</p>

          <div className={styles.gender_selector_container}>
            <button
              className={
                gender === "male"
                  ? styles.gender_btn_selected
                  : styles.gender_btn
              }
              onClick={() => {
                setGender("male");
                localStorage.setItem("enthralled_gender", "man");
              }}
            >
              Man
            </button>
            <button
              className={
                gender === "female"
                  ? styles.gender_btn_selected
                  : styles.gender_btn
              }
              onClick={() => {
                setGender("female");
                localStorage.setItem("enthralled_gender", "woman");
              }}
            >
              Woman
            </button>
          </div>

          <div className={styles.gender_action_btn_container}>
            <Link href="/gift_process/age">
              <p className={styles.next_question}>Next</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
