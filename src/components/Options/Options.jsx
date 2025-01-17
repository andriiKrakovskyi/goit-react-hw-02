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
          {/* {btnOptions.map((feedbackType) => (
            <li key={feedbackType}>
              <button
                className={`${s.options_btn} ${
                  s[`options_btn_${feedbackType.toLowerCase()}`]
                }`}
                onClick={() => updateFeedback(feedbackType)}
              >
                {feedbackType}
              </button>
            </li>
          ))} */}

          {btnOptions.map((feedbackType) => {
            const randomColor = `#${Math.floor(
              Math.random() * 16777215,
            ).toString(16)}`;
            return (
              <li key={feedbackType}>
                <button
                  className={`${s.options_btn} ${
                    s[`options_btn_${feedbackType.toLowerCase()}`]
                  }`}
                  style={{ backgroundColor: randomColor }}
                  onClick={() => updateFeedback(feedbackType)}
                >
                  {feedbackType}
                </button>
              </li>
            );
          })}

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
