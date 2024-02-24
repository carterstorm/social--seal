import consultationFormStyles from "./consultationFormStyles.module.scss";

export const ConsultationForm = () => {
  return (
    <form className={consultationFormStyles.consultationForm}>
      <header className={consultationFormStyles.consultationForm__header}>
        <h2 className={consultationFormStyles.consultationFormHeading}>
          Free Consultation
        </h2>
      </header>
      <section className={consultationFormStyles.consultationForm__section}>
        <input
          type="text"
          placeholder="Name"
          className={consultationFormStyles.consultationFormInput}
        />
        <input
          type="email"
          placeholder="Email Address"
          className={consultationFormStyles.consultationFormInput}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className={consultationFormStyles.consultationFormInput}
        />
        <button
          type="submit"
          className={consultationFormStyles.consultationFormButton}>
          pick best time to call
        </button>
      </section>
    </form>
  );
};
