/* eslint-disable @next/next/no-img-element */
import { PageWrapper } from "@/components/PageWrapper";
import styles from "./page.module.css";
import Link from "next/link";
import { content } from "@/data";
import { Github } from "@/components/icons/Github";
import { Pointer } from "@/components/icons/Cursor";
import { FigmaIcon } from "@/components/icons/Figma";

export default function Page() {
  const projects = content.projects;

  const handleIcon = (text: string) => {
    if (text === "github") {
      return <Github />;
    } else if (text === "demo") {
      return <Pointer />;
    } else {
      return <FigmaIcon />;
    }
  };

  return (
    <PageWrapper>
      <div className={styles.page}>
        <h1 className={styles.header}>Projects</h1>
        <div className={styles.ctaGroup}>
          <Link href="/">
            <button className={styles.btn}>home</button>
          </Link>
          <Link href="/experience">
            <button className={styles.btn}>experience</button>
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

        {projects.map((singleProject, index) => (
          <div
            className={
              index % 2 ? styles.projectsWrapperInverse : styles.projectsWrapper
            }
            key={index}
          >
            <div className={styles.projects}>
              <h3>{singleProject.title}</h3>
              <p>{singleProject.description}</p>

              <div className={styles.infoTable}>
                <div className={styles.keywordsArea}>
                  <h4>Keywords:</h4>
                  <div className={styles.keywordsGroup}>
                    {singleProject.keywords.map((one, index) => (
                      <p className={styles.keyword} key={index}>
                        {one}
                      </p>
                    ))}
                  </div>
                </div>
                <div className={styles.LinkArea}>
                  <h4>Links:</h4>
                  <div className={styles.linkGroup}>
                    {singleProject.links.map((one, index) => (
                      <Link target="_blank" href={one.link} key={index}>
                        {handleIcon(one.text)}
                        {one.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.info}>
              <img src={singleProject.image} alt="mockup" />
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
