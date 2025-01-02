import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* first row */}
        <div className={styles.header}>
          <h1>Marta Gilabert</h1>
          <h3>Frontend developer</h3>
        </div>
        <div className={styles.about}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa!
            Delectus facere cum quae, eius, numquam expedita ex quod deserunt
            exercitationem necessitatibus, quis placeat beatae. Cumque vel
            similique ex maxime.
          </p>
        </div>
        <div className={styles.techstack}>
          Teck stack:
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
          </ul>
        </div>
        {/* second row */}
        <div className={styles.experience}>
          <p>Professional experience</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            laborum voluptatibus sit sint eligendi ducimus, reiciendis
            consectetur delectus, excepturi in tempora eveniet optio velit magni
            nam blanditiis dolorum aut doloribus!
          </p>
        </div>
        <div className={styles.recommendations}>
          <p>Recommendations</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum soluta
            aut enim aperiam aliquam ut voluptatibus earum error! Laudantium ea
            velit explicabo soluta quasi ratione facilis, ipsam enim error
            libero?
          </p>
        </div>
        <div className={styles.contact}>
          <p>Get in touch</p>
        </div>
      </main>
    </div>
  );
}
