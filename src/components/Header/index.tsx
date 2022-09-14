import logo from '../../assets/logo.png';
import { HeaderWrapper } from './style';

export function Header() {
    return (
        <HeaderWrapper>
            <img src={logo} alt="Logotipo" title='Logotipo To-do-list' />      
        </HeaderWrapper>
    );
}