import React, { useState } from "react";
import styles from "../index.module.css";
import Link from "next/link";
import { IoReturnUpBack } from "react-icons/io5";
import Lottie from "lottie-react";
import robo from "../../public/christmas_wreath.json";

export default function PriceRange() {
  const [min, setMin] = useState();
  const [max, setMax] = useState();

  return (
    <div className={styles.price_container}>
      <Link href="/gift_process/age">
        <div className={styles.options_back_btn}>
          <IoReturnUpBack />
        </div>
      </Link>

      <div className={styles.price_inner_flex}>
        <Lottie animationData={robo} className={styles.gender_animation} />
        <div className={styles.age_content_container}>
          <div className={styles.gender_question_container}>
            <p className={styles.gender_question_text}>
              What's the price range of the gift you have in mind?
            </p>
          </div>

          <p className={styles.gender_select_title}>
            Write price from Min to Max value
          </p>

          <div className={styles.price_input_container}>
            <div className={styles.min_price_container}>
              <p className={styles.price_range_title}>Min</p>
              <div className={styles.price_input_box}>
                <p>$</p>
                <input
                  type="number"
                  placeholder="0"
                  className={styles.input}
                  value={min}
                  onChange={(e) => {
                    setMin(Number.parseInt(e.target.value));
                    global?.window && localStorage.setItem(
                      "enthralled_min_price",
                      Number.parseInt(e.target.value)
                    );
                  }}
                />
              </div>
            </div>

            <div className={styles.min_price_container}>
              <p className={styles.price_range_title}>Max</p>
              <div className={styles.price_input_box}>
                <p>$</p>
                <input
                  type="number"
                  placeholder="0"
                  className={styles.input}
                  value={max}
                  onChange={(e) => {
                    setMax(Number.parseInt(e.target.value));
                    global?.window && localStorage.setItem(
                      "enthralled_max_price",
                      Number.parseInt(e.target.value)
                    );
                  }}
                />
              </div>
            </div>
          </div>

          {min && max ? (
            <div className={styles.gender_action_btn_container}>
              <Link href="/gift_process/hobbies">
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
