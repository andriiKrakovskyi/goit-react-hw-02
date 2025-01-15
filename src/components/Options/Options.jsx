import s from './Options.module.css';
import Container from '../Container/Container.jsx';

export default function Options({
  updateFeedback,
  resetFeedback,
  showResetButton,
}) {
  return (
    <section className={s.options_section}>
      <Container className={s.options_container}>
        <ul className={s.options_list_btn}>
          <li>
            <button
              className={s.options_btn_good}
              onClick={() => updateFeedback('good')}
            >
              Good
            </button>
          </li>
          <li>
            <button
              className={s.options_btn_neutral}
              onClick={() => updateFeedback('neutral')}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              className={s.options_btn_bad}
              onClick={() => updateFeedback('bad')}
            >
              Bad
            </button>
          </li>

          {showResetButton && (
            <li>
              <button onClick={resetFeedback}>Reset</button>
            </li>
          )}
        </ul>
      </Container>
    </section>
  );
}
