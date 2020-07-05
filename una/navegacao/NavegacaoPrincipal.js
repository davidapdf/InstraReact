import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import TelaLogin from '../telas/TelaLogin'
import Tela from '../telas/Tela'
import TelaCadastro from '..//telas/Cadastro'

const NavegacaoTelas = createStackNavigator(

    {
        LoginScreem : TelaLogin,
        Tela_Cadastro:TelaCadastro,
        Screen1: Tela
    }
);
export default createAppContainer(NavegacaoTelas);