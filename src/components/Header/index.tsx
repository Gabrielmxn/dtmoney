import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface ModalInterface  {
  onOpenNewTransactionModal: () => void;
}
export function Header({ onOpenNewTransactionModal }: ModalInterface){
  return(
    <Container >
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
       
      </Content>
      
    </Container>
  )
}