import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container flexCenter paddings innerWidth">
        {/* left-side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover <br /> Most Suitable <br /> Property
            </motion.h1>
          </div>

          <div className="hero-desc flexColStart">
            <span className="secondaryText">
              Find a variety of properties that suit you very easily
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residency for you
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size="25" />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexStart stats">
            <div className="flexColCenter stats">
              <span>
                <span>
                  <CountUp start={8800} end={9000} duration={4} />
                </span>
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stats">
              <span>
                <span>
                  <CountUp start={1950} end={2000} duration={4} />
                </span>
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stats">
              <span>
                <span>
                  {" "}
                  <CountUp end={28} />
                </span>
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/* right-side */}
        <div className="hero-right flexCenter">
          <motion.div className="image-container"
          initial={{x:"7rem" , opacity: 0}}
          animate={{x:0 , opacity: 1}}
          transition={{
            duration: 2,
            type: "spring"
          }}
          >
            <img src="./hero-image.png" alt="hero-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
