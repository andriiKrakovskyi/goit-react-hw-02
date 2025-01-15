import s from './Notification.module.css';
import Container from '../Container/Container.jsx';

export default function Notification({ message }) {
  return (
    <section className={s.notification_section}>
      <Container className={s.notification_container}>
        <p className={s.notification_text}>{message}</p>
      </Container>
    </section>
  );
}
