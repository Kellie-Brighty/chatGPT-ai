import React, { useState } from "react";
import styles from "../index.module.css";
import Link from "next/link";
import { IoReturnUpBack } from "react-icons/io5";
import Lottie from "lottie-react";
import robo from "../../public/age_santa.json";

export default function Age() {
  const gender = localStorage.getItem("enthralled_gender");
  const [age, setAge] = useState();

  return (
    <div className={styles.age_container}>
      <Link href="/gift_process/gender">
        <div className={styles.options_back_btn}>
          <IoReturnUpBack />
        </div>
      </Link>
      <div className={styles.age_inner_flex}>
        <Lottie animationData={robo} className={styles.gender_animation} />
        <div className={styles.age_content_container}>
          <div className={styles.gender_question_container}>
            <p className={styles.gender_question_text}>
              What's your friend's age?
            </p>
          </div>

          <p className={styles.gender_select_title}>
            Write {gender === "male" ? "his" : "her"} age in the input box
          </p>

          <div className={styles.age_input_container}>
            <input
              type="number"
              placeholder="30"
              className={styles.age_input}
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                localStorage.setItem("enthralled_age", e.target.value);
              }}
            />
            <p>years old</p>
          </div>

          {age ? (
            <div className={styles.gender_action_btn_container}>
              <Link href="/gift_process/price_range">
                <p className={styles.next_question}>Next</p>
              </Link>
            </div>
          ) : (
            <div className={styles.gender_action_btn_container}>
              <p className={styles.next_question_disabled}>Next</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
