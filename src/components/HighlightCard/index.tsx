import React from 'react';
import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
 } from './style';

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>

      <Footer>
        <Amount>R$ 14.400,00</Amount>
        <LastTransaction>última entrada dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  )
}