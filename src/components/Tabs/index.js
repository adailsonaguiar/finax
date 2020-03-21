import React from 'react';
import {TabsContainer, TabItem, TitleCard, IconArea, ImageIcon} from './styles';
import despesaIcon from '../../assets/cardIcons/despesa.png';
import receitaIcon from '../../assets/cardIcons/receita.png';
import transacoesIcon from '../../assets/cardIcons/transacoes.png';
import contasIcon from '../../assets/cardIcons/contas.png';

const Tabs = ({translateY, navigation}) => {
  return (
    <TabsContainer showsHorizontalScrollIndicator={false}>
      <TabItem onPress={() => console.log('teste')}>
        <IconArea>
          <ImageIcon source={despesaIcon} />
        </IconArea>
        <TitleCard>Despesas</TitleCard>
      </TabItem>
      <TabItem onPress={() => console.log('teste')}>
        <IconArea>
          <ImageIcon source={transacoesIcon} />
        </IconArea>
        <TitleCard>Transações</TitleCard>
      </TabItem>
      <TabItem onPress={() => console.log('teste')}>
        <IconArea>
          <ImageIcon source={receitaIcon} />
        </IconArea>
        <TitleCard>Receita</TitleCard>
      </TabItem>
      <TabItem onPress={() => navigation.navigate('Contas')}>
        <IconArea>
          <ImageIcon source={contasIcon} />
        </IconArea>
        <TitleCard>Contas</TitleCard>
      </TabItem>
    </TabsContainer>
  );
};

export default Tabs;
