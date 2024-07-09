import styles from "../Home.module.css";

export function Herobanner() {
  return (
    <div className={`${styles.herobannerBackground} p-32`}>
      <div className="bg-white bg-opacity-70 rounded-2xl p-24">
        <h1 className="text-center text-5xl p-8">
          Your digital travel journal
        </h1>
        <button className={`${styles.heroButton} text-white p-2.5 rounded-2xl`}>
          Create your own journal
        </button>
      </div>
    </div>
  );
}
