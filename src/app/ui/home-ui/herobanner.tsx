import styles from "../Home.module.css";

export function Herobanner() {
  return (
    <div className={`${styles.herobannerBackground}`}>
      <div className="bg-white bg-opacity-70 p-24 md:p-32">
        <h1 className="sm:text-left md:text-center text-5xl pb-10">
          Your digital travel journal
        </h1>
        <div className="flex sm:justify-start md:justify-center">
          <button
            className={`${styles.heroButton} text-white p-2.5 rounded-2xl md:mt-10`}
          >
            Create your journal
          </button>
        </div>
      </div>
    </div>
  );
}
