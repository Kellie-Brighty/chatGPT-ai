import React, { useState } from "react";
import Lottie from "lottie-react";
import robo from "../public/robo.json";
import styles from "./index.module.css";
import { GrFormClose } from "react-icons/gr";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

const Landing = () => {
  const [notification, setNotification] = useState(true);

  return (
    <div className={styles.landing_main}>
      {notification && (
        <motion.div className={styles.landing_toast}>
          <div>
            <div className={styles.landing_new_update}>
              <MdOutlineSecurityUpdateGood className={styles.update_icon} />
              <p className={styles.landing_tag}>New Update</p>
            </div>
            <p className={styles.landing_notification_text}>
              Our AI can now generate christmas gift ideas
            </p>
          </div>
          <div
            className={styles.close_container}
            onClick={() => setNotification(false)}
          >
            <AiOutlineClose className={styles.landing_toast_close} />
          </div>
        </motion.div>
      )}
      <Lottie
        animationData={robo}
        loop={true}
        className={styles.lottie_animation}
        speed={0.25}
      />
      <div className={styles.landing_text_and_btn}>
        <p className={styles.landing_text}>
          Enthralled AI will tell you all you need to know
        </p>
        <Link href="/options">
          <button className={styles.landing_btn}>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
