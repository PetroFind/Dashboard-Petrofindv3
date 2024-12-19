import React from 'react';

import { Container, Filter, FilterButton, Header, Box } from './styles';

import Layout from '../../components/layout';

import InformationContainer from './components/container'
import Events from './components/events';
import Select from './components/select';
import Column from './components/column';
import Input from './components/input';

const Main = () => {

    return (
        <Layout>
            <Container>
                <Events />
                <Filter>
                    <Input width="275px" title="Buscar Nome" />
                    <Select width="200px" title="Selecionar Estado" />
                    <Input width="125px" title="Buscar ID" />
                    <Select width="200px" title="Selecionar Tipo" />
                    <FilterButton>Aplicar Filtro</FilterButton>
                </Filter>
                <Header>
                
                    <Column filter={true} width="18.75%" title="estado"></Column>
                    <Column filter={true} width="25%" title="nome"></Column>
                    <Column filter={true} width="9.375%" title="Cód."></Column>
                    <Column filter={true} width="12.5%" title="tipo"></Column>
                    <Column filter={true} width="15.625%" title="informação"></Column>
                    <Column filter={true} width="18.75%" title="data de criação"></Column>
                </Header>
                <Box>
                    <InformationContainer/>
                    <InformationContainer/>
                    <InformationContainer/>
                </Box>
            </Container>
        </Layout>
    )
}

export default Main