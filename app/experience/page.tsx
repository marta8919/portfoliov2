import { PageWrapper } from "@/components/PageWrapper";
import styles from "./page.module.css";
import Link from "next/link";
export default function Page() {
  return (
    <PageWrapper>
      <div className={styles.page}>
        <h1 className={styles.header}>Professional Experience</h1>
        <div className={styles.ctaGroup}>
          <Link href="/">
            <button className={styles.btn}>home</button>
          </Link>
          <Link href="/recommendations">
            <button className={styles.btn}>recommendations</button>
          </Link>
          <Link
            href="https://www.canva.com/design/DAGaIYrvgPs/MnvxtLsc7F829gBf3PPXcQ/view?utm_content=DAGaIYrvgPs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h84378adcc1"
            target="_blank"
          >
            <button className={styles.btn}>cv</button>
          </Link>
          <Link
            href={"https://linkedin.com/in/martagilabertgu"}
            target="_blank"
          >
            <button className={styles.btn}>linkedIn</button>
          </Link>
        </div>
        <div className={styles.experienceWrapper}>
          <div className={styles.experience}>
            <h3>
              Software engineer{" "}
              <Link target="_blank" href="https://grover.com">
                @Grover
              </Link>
            </h3>
            <p>August 2022 - February 2024</p>
            <p>Münich, Germany (Remote)</p>
            <ul>
              <li>
                Work closely with cross-functional teams, including Product
                Owners and UX/UI Designers.
              </li>
              <li>
                Uphold high code quality standards through rigorous testing
                practices, including manual testing, unit testing with Jest and
                e2e testing with Cypress.
              </li>
              <li>
                Participate in discussions with Product Owners and Designers to
                work on possible solutions to increase the conversion rate of
                clients.
              </li>
              <li>
                Champion Lead of a project to turn the B2B registration from an
                old package to a new SPA, integrating it with the internal
                checkout package. This project implied discussions with
                developers, other teams, Product Owners and Design team. The
                result was a reduction of steps, meaning a smoother process for
                the client, resulting in a higher conversion rate.
              </li>
              <li>
                Worked on a CI/CD environment, microservices and microfronted
                architecture.
              </li>
              <li>
                The working methodology was agile, having dailies and retros
                every two weeks.
              </li>
            </ul>
          </div>
          <div className={styles.techstack}>
            <h4>Tech stack</h4>
            <ul>
              <li>Typescript</li>
              <li>NextJS</li>
              <li>React</li>
              <li>GraphQL</li>
              <li>Jest</li>
              <li>Cypress</li>
              <li>Styled-components</li>
              <li>React-testing-library</li>
            </ul>
          </div>
          <div className={styles.info}>
            <h4>Reason to change</h4>
            <p>
              Moving to northern Sweden, not possible to maintain the contract.
            </p>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.experienceWrapper}>
          <div className={styles.experience}>
            <h3>
              Software engineer{" "}
              <Link href="https://getvoiceline.com" target="_blank">
                @Voiceline
              </Link>
            </h3>
            <p>April 2021 - July 2022</p>
            <p>Münich, Germany (on site)</p>
            <ul>
              <li>Joined as the first employee on a very early start-up.</li>
              <li>
                Worked very closely with the two co-founders to develop an MVP,
                from design discussions to technical discussions.
              </li>
              <li>
                Implementation of new solutions primarily, on the frontend side.
              </li>
              <li>Improving the existing code and bug fixed.</li>
              <li>
                Lead the transition from Javascript to Typescript, and
                implementation of Storybook.
              </li>
            </ul>
          </div>
          <div className={styles.techstack}>
            <h4>Tech stack</h4>
            <ul>
              <li>Typescript</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Storybook</li>
            </ul>
          </div>
          <div className={styles.info}>
            <h4>Reason to change</h4>
            <p>
              Seeking the opportunity to face new challenges on a larger scale
              and a focus on clean code.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
