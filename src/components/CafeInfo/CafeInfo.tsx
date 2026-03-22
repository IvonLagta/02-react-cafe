import css from "./CafeInfo.module.css";

export default function CafeInfo() {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Rejected qwerty</h1>
        <p className={css.description}>
          Please rate our service by selecting one of the options below.
        </p>
      </div>
    </>
  );
}
