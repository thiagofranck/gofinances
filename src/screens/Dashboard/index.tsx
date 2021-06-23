import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import { 
  Container, 
  Header, 
  UserWrapper,
  UserInfo, 
  Photo, 
  User, 
  UserGreeting, 
  UserName,
  Icon,
  HighLightCards,
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/30628736?v=4'}}/>
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Thiago</UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>
      </Header>

      <HighLightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighLightCards>
    </Container>
  )
}
