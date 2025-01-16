import s from './Feedback.module.css';
import Container from '../Container/Container.jsx';

export default function Feedback({
  clicks,
  totalFeedback,
  positiveFeedback,
  btnOptions,
}) {
  return (
    <section className={s.feedback_section}>
      <Container className={s.feedback_container}>
        <ul className={s.feedback_list}>
          {btnOptions.map((feedbackType) => (
            <li key={feedbackType}>
              <p>
                {feedbackType}: {clicks[feedbackType]}
              </p>
            </li>
          ))}

          <li>
            <p>Total:{totalFeedback}</p>
          </li>
          <li>
            <p>Positive:{positiveFeedback}%</p>
          </li>
        </ul>
      </Container>
    </section>
  );
}
