import styles from "./styles.module.scss";

const Page = (data: {
  [index: string]: string | number | Date | { [index: string]: any };
}) => {
  return (
    <div className={styles.page__wrapper}>
      <div className={styles.page__curriculum}></div>
    </div>
  );
};

export default Page;
