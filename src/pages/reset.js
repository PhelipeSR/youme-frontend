import FormReset from '../components/form/formReset';
import Container from '../components/container';
import '../styles/pages/recovery.css';


export default function Recovery() {
  return (
    <Container mode="recovery sign-up-mode">
      <FormReset form="recovery-form"/>
    </Container>
  );
}

