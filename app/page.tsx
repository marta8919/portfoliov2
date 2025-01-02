import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import GithubIcon from "@/icons/GithubIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import EmailIcon from "@/icons/EmailIcon";
import { PageWrapper } from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.header}>
            <h1>Marta Gilabert</h1>
            <h2>Frontend developer</h2>
          </div>
          <div className={styles.about}>
            <p>
              My experience primarily revolves around working with TypeScript
              and frameworks like React and Next.js to develop seamless,
              user-friendly interfaces. User experience is at the heart of my
              work, guiding both the creation of new solutions and the
              implementation of existing ones. Collaboration is at the core of
              my work style; I thrive in team environments, enjoy solving
              technical and business challenges together, and celebrate shared
              and individual successes.
              <br />
              Currently learning Swedish 🇸🇪 and UX/UI design 👩‍💻.
            </p>
            <Image
              src={
                "https://res.cloudinary.com/martacloud/image/upload/v1735840376/Ilustracio%CC%81n_sin_ti%CC%81tulo_2_bqhrcn.png"
              }
              alt="self-portrait"
              width={400}
              height={400}
              className={styles.pic}
            />
          </div>
          <div className={styles.techstack}>
            <h3>Tech stack:</h3>
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>NextJS</li>
              <li>Jest</li>
              <li>Styled-components</li>
              <li>CSS Modules</li>
              <li>GraphQL</li>
              <li>NestJS</li>
            </ul>
          </div>

          <div className={styles.experience}>
            <h3>Professional experience:</h3>
            <div>
              <p>
                <strong>
                  Software Engineer{" "}
                  <Link href={"https://grover.com"}>@Grover</Link>
                </strong>{" "}
                (August 2022 - February 2024)
              </p>
              <p>
                Work closely with cross-functional teams, including Product
                Owners and UX/UI Designers[...]
              </p>
            </div>
            <div>
              <p>
                <strong>
                  Software Engineer{" "}
                  <Link href={"https://getvoiceline.com"}>@Voiceline</Link>
                </strong>
                (April 2021 - September 2022)
              </p>
            </div>
            <Link href="/experience">
              <button className={styles.btn}>Read more</button>
            </Link>
          </div>

          <div className={styles.recommendations}>
            <h3>Recommendations:</h3>
            <p>
              <strong>Leda Wolf - Software Engineer:</strong> Marta’s path has
              been incredible to watch, she is highly intelligent, curious, and
              persistent[...]
            </p>

            <p>
              <strong>Damla Kockar - Frontend Developer</strong> Marta and I
              worked very closely during Ironhacks full stack web development
              bootcamp. She is a very smart and hardworking[...]
            </p>
            <Link href="/recommendations">
              <button className={styles.btn}>Read more</button>
            </Link>
          </div>

          <div className={styles.contact}>
            <h3>Reach out!</h3>
            <div className={styles.iconsWrapper}>
              <Link href={"mailto:martaggdev@gmail.com"}>
                <EmailIcon />
              </Link>
              <Link
                href={"https://linkedin.com/in/martagilabertgu"}
                target="_blank"
              >
                <LinkedInIcon />
              </Link>
              <Link href={"https://github.com/marta8919"} target="_blank">
                <GithubIcon />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
}
