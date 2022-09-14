import EmptyImg from '../../../assets/empty.png';
import { Container } from './style';

export function Empty() {
    return (
        <Container>
            <img src={EmptyImg} alt="Documento sem conteúdo" title='Listagem vazia' />
            <h4>Você ainda não tem tarefas cadastradas</h4>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </Container>
    );
}