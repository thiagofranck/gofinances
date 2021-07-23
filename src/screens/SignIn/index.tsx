import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/apple.svg'
import GoogleSvg from '../../assets/google.svg'
import LogoSvg from '../../assets/logo.svg'

import { 
  Container,
  Header,
  TitleWraper,
  Title,
  SignInTitle,
  Footer,


} from './styles'

export function SignIn() {
  return (
    <Container>
      <Header>
        <TitleWraper>
          <LogoSvg 
            width={RFValue(120)}
            height={RFValue(68)}
          />

          <Title>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito simples
          </Title>

        </TitleWraper>
        
        <SignInTitle>
          Faça seu login com {'\n'}
          uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>

      </Footer>

    </Container>
  )
}