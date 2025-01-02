import { PageWrapper } from "@/components/PageWrapper";
import styles from "./page.module.css";
import Link from "next/link";
export default function Page() {
  return (
    <PageWrapper>
      <div className={styles.page}>
        <h1>Recommendations page</h1>
        <Link href="/">
          <button>go Home</button>
        </Link>
      </div>
    </PageWrapper>
  );
}
