import { useAppContext } from "../Context/AppContext";
import GradientText from "../GradientText/GradientText";
import styles from "./main.module.css";
import Typewriter from "typewriter-effect";
import ChessPuzzle from "../ChessPuzzle/ChessPuzzle";

import { Button, Text } from "@nextui-org/react";

export default function Main({ device }) {
  return (
    <div className={styles.main} id="home">
      <div className={styles.content}>
        <Text
          h3={device === "lg"}
          h5={device !== "lg"}
          className={styles.h3}
          css={{ color: "$gray700" }}
        >
          Hi, my name is
        </Text>
        <GradientText
          text="Nagraj"
          h2
          size={device === "lg" ? "$8xl" : "6xl"}
          className={device === "lg" ? styles.h1 : styles.h1small}
          weight="semibold"
        />
        <Text
          h2={device === "lg"}
          h5={device !== "lg"}
          size={device === "lg" ? "$2xl" : "$xl"}
          css={{
            color: "$gray700",
            display: "flex",
            flexDirection: device === "lg" ? "row" : "column",
          }}
        >
          Data Scientist 💻 &nbsp; &nbsp;
          <Typewriter
            options={{
              strings: [
                "ML at Purdue University 🎓",
                "Curious 🧠",
                "Creative 💭",
                "Solution Oriented 💡",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 30,
            }}
          />
        </Text>
        <br />
        <br />

        <Text
          h3={device === "lg"}
          h5={device !== "lg"}
          className={styles.h3}
          css={{ color: "$gray700" }}
        >
          I am currently seeking <strong>full-time</strong> opportunities and
          will be available to begin new professional challenges in the{" "}
          <strong>US</strong> from <strong>September 3, 2024</strong>, under{" "}
          <strong>
            F1 <em>OPT</em>
          </strong>{" "}
          visa status
        </Text>
        <br />

        <Button
          bordered
          className={styles.button}
          css={{
            borderColor: "orange !important",

            position: "relative",
            overflow: "hidden",

            "& a": {
              color: "transparent",
              background: "linear-gradient(45deg, orange, purple)",
              "-webkit-background-clip": "text",
              "background-clip": "text",
              textDecoration: "none",
            },
          }}
        >
          <a
            href="assets/nagraj_resume_June2024.pdf"
            title="Take a look !"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </Button>
      </div>
      {device !== "sm" &&
        device !== "xs" && ( // Conditionally render ChessPuzzle based on device
          <div className={styles.chessPuzzle}>
            <ChessPuzzle />
          </div>
        )}
    </div>
  );
}
