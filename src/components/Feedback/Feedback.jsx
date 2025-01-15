import s from './Feedback.module.css';
import Container from '../Container/Container.jsx';

export default function Feedback({ clicks, totalFeedback, positiveFeedback }) {
  return (
    <section className={s.feedback_section}>
      <Container className={s.feedback_container}>
        <ul className={s.feedback_list}>
          <li>
            <p>Good:{clicks.good}</p>
          </li>
          <li>
            <p>Neutral:{clicks.neutral}</p>
          </li>
          <li>
            <p>Bad:{clicks.bad}</p>
          </li>
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
