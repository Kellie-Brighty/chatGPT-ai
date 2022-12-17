import React, { useState } from "react";
import styles from "../index.module.css";
import Link from "next/link";
import { IoReturnUpBack } from "react-icons/io5";
import Lottie from "lottie-react";
import robo from "../../public/swing_santa.json";
import robo_loading from "../../public/loading_santa.json";
import robo_tree from "../../public/xmas_tree.json";

export default function Hobbies() {
  const [hobbies, setHobbies] = useState();
  const [loading, setLoading] = useState(false);
  const gender =
    global?.window && localStorage.getItem("enthralled_gender");
  const age = global?.window && localStorage.getItem("enthralled_age");
  const priceMin =
    global?.window && localStorage.getItem("enthralled_min_price");
  const priceMax =
    global?.window && localStorage.getItem("enthralled_max_price");
  const [result, setResult] = useState();

  async function onSubmit() {
    setLoading(true);
    try {
      const response = await fetch("/api/generate-gift", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceMin, priceMax, gender, age, hobbies }),
      });
      const data = await response.json();
      setResult(data.result.replaceAll("\n", "<br />"));
    } catch (err) {
      alert("Failed to generate gift ideas. Please try later.");
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className={styles.loading_container}>
        <div className={styles.loading_container_inner_flex}>
          <Lottie
            animationData={robo_loading}
            className={styles.gender_animation}
          />
          <p className={styles.loading_container_text}>
            Please wait while I fetch you gift ideas for your friend
          </p>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className={styles.result_container}>
        <Link href="/gift_process/price_range">
          <div className={styles.options_back_btn}>
            <IoReturnUpBack />
          </div>
        </Link>

        <div className={styles.result_inner_flex}>
          <Lottie
            animationData={robo_tree}
            className={styles.gender_animation}
          />
          <div>
            <div className={styles.gender_question_container}>
              <p className={styles.gender_question_text}>
                <strong>
                  Ho Ho Ho!! Merry Christmas my friend. Your gift ideas are
                  ready.
                </strong>
              </p>
            </div>
            <div
              className={styles.main_result}
              dangerouslySetInnerHTML={{ __html: result }}
            />
            <div className={styles.result_btn_container}>
              <Link href="/">
                <button
                  className={styles.gender_btn_selected}
                  onClick={() => {
                    localStorage.removeItem("enthralled_age");
                    localStorage.removeItem("enthralled_gender");
                    localStorage.removeItem("enthralled_min_price");
                    localStorage.removeItem("enthralled_max_price");
                  }}
                >
                  Start Again
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.hobbies_container}>
      <Link href="/gift_process/price_range">
        <div className={styles.options_back_btn}>
          <IoReturnUpBack />
        </div>
      </Link>

      <div className={styles.hobbies_inner_flex}>
        <Lottie animationData={robo} className={styles.gender_animation} />
        <div className={styles.age_content_container}>
          <div className={styles.gender_question_container}>
            <p className={styles.gender_question_text}>
              <strong>Finally!!</strong> What is/are the hobby/hobbies of your
              friend?
            </p>
          </div>

          <p className={styles.gender_select_title}>
            If your friend's hobby is more than one(1), list them using commas.
          </p>

          <div className={styles.hobbies_input_container}>
            <input
              type="text"
              placeholder="singing, dancing, football..."
              className={styles.hobbies_input}
              value={hobbies}
              onChange={(e) => {
                setHobbies(e.target.value);
                localStorage.setItem("enthralled_hobbies", e.target.value);
              }}
            />
          </div>

          {hobbies ? (
            <div className={styles.gender_action_btn_container}>
              <button
                onClick={() => onSubmit()}
                className={styles.next_question}
              >
                Get Gift Ideas
              </button>
            </div>
          ) : (
            <div className={styles.gender_action_btn_container}>
              <p className={styles.next_question_disabled}>Get Gift Ideas</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
