/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./page.module.css";
import GithubIcon from "@/components/icons/GithubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import { PageWrapper } from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.header}>
            <h1>Marta Gilabert</h1>
            <h2>Software Developer</h2>
          </div>
          <div className={styles.about}>
            <p>
              My experience primarily revolves around working with TypeScript
              and frameworks such as React, Next.js and Angular to develop
              seamless, user-friendly interfaces.
              <br />
              <br /> User experience is at the heart of my work, guiding both
              the creation of new solutions and the implementation of existing
              ones. Collaboration is at the core of my work style; I thrive in
              team environments, enjoy solving technical and business challenges
              together, and celebrate shared and individual successes.
              <br />
              <br />
              Currently learning Swedish 🇸🇪 and UX/UI Design 👩‍💻.
            </p>
            <img
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
            <p>Frontend:</p>
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
            </ul>
            <p>Frameworks:</p>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Angular</li>
            </ul>
            <p>Testing:</p>
            <ul>
              <li>Jest</li>
              <li>Cypress</li>
            </ul>
            <p>Backend & APIs:</p>
            <ul>
              <li>NestJS</li>
              <li>GraphQL</li>
              <li>RESTful API</li>
            </ul>
          </div>

          <div className={styles.experience}>
            <h3>Professional experience:</h3>
            <div>
              <p>
                <strong>Software Engineer @Private</strong> (June 2024 -
                Currently)
              </p>
              <p>Work on Frontend tickets[...]</p>
            </div>
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
                </strong>{" "}
                (April 2021 - September 2022)
              </p>
            </div>
            <Link href="/experience">
              <button className={styles.btn}>Read more</button>
            </Link>
          </div>

          <div className={styles.recommendations}>
            <h3>Projects:</h3>
            <p>
              <strong>Timer App</strong>- Angular web-app deployed with vercel
              that enables the user to create a countdown timer to a date set by
              the user.
            </p>
            <p>
              <strong>Code quizzer</strong>- NextJs web-app deployed with vercel
              to perform web development quizzes and study for interviews with
              flashcards.
            </p>
            <p>
              <strong>Veggie wars</strong>- First ever project, build with
              Vanilla Javascript.
            </p>
            <Link href="/projects">
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
