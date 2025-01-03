/* eslint-disable react/no-unescaped-entities */
import { PageWrapper } from "@/components/PageWrapper";
import styles from "./page.module.css";
import Link from "next/link";
export default function Page() {
  return (
    <PageWrapper>
      <div className={styles.page}>
        <h1 className={styles.header}>Recomendations</h1>
        <div className={styles.ctaGroup}>
          <Link href="/">
            <button className={styles.btn}>home</button>
          </Link>
          <Link href="/experience">
            <button className={styles.btn}>experience</button>
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
        <div className={styles.recWrapper}>
          <div className={styles.recCard}>
            <p>
              <strong>Leda Wolf</strong>, Senior Software Engineer
            </p>
            <p>
              Marta’s path has been incredible to watch, she is highly
              intelligent, curious, and persistent. Her observation skills and
              attention to detail that made her such an effective recruiter make
              an even more remarkable software engineer, and hint at a steep,
              promising career. Never underestimate the power of Marta, as she
              does not shy away from any challenge! She learns independently,
              and enthusiastically welcomes feedback as an opportunity for
              continuous self-improvement — a core aspect of her personality.
              Her ability to be direct while radiating warmth and support can
              enrich ANY team dynamic and makes her a joy to work with. She asks
              insightful questions and is never content with vague answers, not
              only furthering her understanding of engineering concepts, but
              teaching you to be thorough and thoughtful yourself.
            </p>
          </div>

          <div className={styles.recCard}>
            <p>
              <strong>Damla Kockar</strong>, Frontend Web Developer
            </p>
            <p>
              Marta and I worked very closely during Ironhack's full stack web
              development bootcamp. She is a very smart and hardworking person
              with very good programming skills, and she keeps improving herself
              every day! She addresses the issues directly and is never afraid
              to ask questions. She is always eager to learn and try out new
              technologies. And she is very good at doing that in an amazingly
              short time, which is the most important quality of a great
              software developer. In addition to all that, working with her was
              always fun, as she has a great sense of humor. I recommend Marta
              without doubt, any team that is in need of an awesome front end
              developer would be lucky to have her!
            </p>
          </div>

          <div className={styles.recCard}>
            <p>
              <strong>Manish Poduval</strong>, Founder at OpenBootcamp
            </p>
            <p>
              What more great things can I say about Marta. Even before the
              bootcamp started she was very eager to learn and expand her
              knowledge. At Ironhack she's built some of the coolest projects
              along with her teammates. She's always 100% committed, cheerful,
              curious to learn new stuff, eager to ask for help and help others
              when needed, in short the perfect person you need in your company.
              I'm sure she'd be a great developer for any company looking for
              one. All the very best Marta :){" "}
            </p>
          </div>
          <div className={styles.recCard}>
            <p>
              <strong>Alvaro Sánchez</strong>, Backend Developer
            </p>
            <p>
              Marta was an exceptional and hardworking student. She really got
              all the concepts really well and every time was eager to learn
              more. She developed three outstanding projects and the last one of
              them was voted as the best of the Bootcamp. I can assure that
              she'll be a great asset for any organization looking for a
              talented Developer.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
