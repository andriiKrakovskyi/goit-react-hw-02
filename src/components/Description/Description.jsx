import s from './Description.module.css';
import Container from '../Container/Container.jsx';

export default function Description() {
  return (
    <section className={s.description_section}>
      <Container className={s.description_container}>
        <h1 className={s.description_title}>Sip Happens Café</h1>
        <p className={s.description_text}>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </Container>
    </section>
  );
}
