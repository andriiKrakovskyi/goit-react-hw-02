import s from './Options.module.css';
import Container from '../Container/Container.jsx';

export default function Options({
  updateFeedback,
  resetFeedback,
  showResetButton,
  btnOptions,
}) {
  return (
    <section className={s.options_section}>
      <Container className={s.options_container}>
        <ul className={s.options_list_btn}>
          {btnOptions.map((feedbackType) => (
            <li key={feedbackType}>
              <button onClick={() => updateFeedback(feedbackType)}>
                {feedbackType}
              </button>
            </li>
          ))}

          {showResetButton && (
            <li>
              <button className={s.options_btn_reset} onClick={resetFeedback}>
                Reset
              </button>
            </li>
          )}
        </ul>
      </Container>
    </section>
  );
}
