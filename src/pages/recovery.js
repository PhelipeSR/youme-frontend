import FormRecovery from '../components/form/formRecovery';
import Container from '../components/container';
import '../styles/pages/recovery.css';


export default function Recovery() {
  return (
    <Container mode="recovery sign-up-mode">
      <FormRecovery form="recovery-form"/>
    </Container>
  );
}

