# Especificações do Projeto

**Perfis de Usuários**

|Motoristas Diários                                                                                                                                            |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------| |Descrição: 	Indivíduos que utilizam o carro diariamente para realizar atividades do cotidiano em áreas de alta densidade populacional.                        |
|Necessidades: 	Otimização do tempo ao reduzir o período gasto procurando estacionamento; Redução do estresse causado pela busca de vagas de estacionamento.   |

|Motoristas a Trabalho                                                                                                                                         |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Descrição: 	Profissionais que se deslocam a trabalho e dependem de seus veículos para realizarem suas atividades.                                             |
|Necessidades: 	Otimização do tempo ao reduzir o período gasto procurando estacionamento; Encontrar estacionamento que possibilite uma longa permanência e com | |maior custo-benefício.                                                                                                                                        |

|Profissional de entregas (logística urbana)                                                                                                                   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Descrição:	Profissionais de serviços de entrega e coleta que precisam estacionar rapidamente em locais diferentes ao longo do dia para exercer suas atividades| |laborais.                                                                                                                                                     |   
|Necessidades:	Encontrar vagas rápidas e temporárias próximas a restaurantes, empresas e residências; Reduzir risco de multas por estacionar em local proibido;|
|Aumentar sua produtividade e número de entregas diárias ao diminuir o tempo gasto procurando vagas; Trabalhar com mais segurança e previsibilidade.           |

|Estudantes                                                                                                                                                    |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Descrição:	Pessoas que utilizam seus veículos para se deslocarem até a instituição de ensino, e precisam deixá-lo estacionado durante sua permanência no local| |de estudo.                                                                                                                                                    |
|Necessidades:	Buscar vagas de estacionamento próximas à sua instituição de ensino; Poupar tempo para evitar atrasos.                                          |

|Idosos e Pessoas com Deficiência                                                                                                                              |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Descrição:	Pessoas com deficiência e/ou idosas, que utilizam seus veículos para deslocamento e atividades do cotidiano.                                       |
|Necessidades:	Buscar vagas de estacionamento mais próximas de seu destino; Buscar vagas adaptadas para pessoas com necessidades especiais e/ou idosas; Buscar | |vagas reservadas.                                                                                                                                             |

## Personas

**Persona 1:**
Mévio, 34 anos, analista de sistemas, morador de bairro residencial próximo ao centro da cidade, onde as vagas de estacionamento são escassas e muito disputadas.

Mévio usa seu veículo diariamente para ir ao trabalho e, ao fim do dia, para visitar os amigos ou ir até um restaurante. Ele gasta aproximadamente 20 minutos procurando uma vaga próxima de seu destino, o que causa frustração e atrasos.

É familiarizado com tecnologia e usa diversos aplicativos de transporte e navegação, como o Google Maps e o Waze. Ele valoriza ferramentas que economizam tempo e simplificam tarefas.

Mévio tem como objetivo encontrar uma vaga de estacionamento de forma mais rápida e previsível, viabilizando chegar a seus compromissos sem a ansiedade de não ter onde estacionar.

Suas dores são a perda de tempo, pois gasta muito tempo circulando à procura de uma vaga; estresse causado pela incerteza de encontrar estacionamento, o que lhe causa ansiedade; e a falta de informação diante da ausência de uma ferramenta que o informe sobre as vagas disponíveis em tempo real na sua área.

**Persona 2:**
Pármala, 32 anos, corretora/captadora de imóveis autônoma que tem como área de atuação o Centro da cidade de Belo Horizonte, onde o número de vagas de estacionamento disponíveis é escasso e muito pleiteado.

Pármala usa o carro diariamente para visitar/captar imóveis no centro de BH e costuma levar 15–20 min para achar vaga (rua ou estacionamento), gerando atrasos e custos extras. É familiarizada com apps de mobilidade como Waze, Google Maps e Moovit. 

O principal objetivo de Pármala é conseguir encontrar vagas de estacionamento de maneira mais ágil e assertiva, possibilitando a pontualidade em seus compromissos e a economia de dinheiro e gasolina.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                                |PARA ... `MOTIVO/VALOR`                                              |
|--------------------|-------------------------------------------------------------------|---------------------------------------------------------------------|
|Motorista           | Visualizar no mapa as vagas reportadas por outros usuários        | Encontrar estacionamento mais rápido e sem frustração               |
|Motorista           | Adicionar um marcador no mapa indicando vaga livre                | Ajudar outros usuários e contribuir com a comunidade                |
|Motorista           | O mapa centralize na minha localização para identificar onde estou| Ter referência clara de onde estou e ver vagas próximas             |
|Motorista           | Os marcadores de vagas expirem automaticamente após um período    | Evitar ir a vagas já ocupadas e manter os dados atualizados         |
|Motorista           | Uma interface responsiva a diferentes tamanhos de tela            | Usar a aplicação facilmente em movimento                            |
|Motorista           | O sistema aplique ao mapa filtros e preferências salvas do usuário| Estacionar rápido sem reconfigurar nada a cada uso                  |
|Motorista Trabalho/Logística| Ver vagas Próximas a meu destino                          | Otimizar a rota e não perder compromissos com clientes              |
|Motorista Trabalho/Diário/Estudante| Estacionar com mais previsibilidade                | Chegar pontualmente às reuniões e transmitir confiança              |
|Motorista Trabalho/Diário| Encontrar vagas gratuitas na rua                             | Reduzir despesas de trabalho e aumentar o lucro líquido             |
|Motorista           | Atualizar rapidamente a disponibilidade de vagas                  | Contribuir com a comunidade e manter o fluxo de trabalho ágil       |
|Motorista Idoso/PCD | Encontrar vagas reservadas/adaptadas para pessoas com necessidades especiais| Estacionar de forma segura, o mais próximo possível do destino e de forma mais assertiva|

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir que o usuário gerencie suas tarefas | ALTA |  
|RF-002| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   | MÉDIA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser intuitiva e fácil de usar | ALTA | 
|RNF-002| A aplicação deve ser responsiva e adaptável a diferentes telas |  MÉDIA | 
|RNF-003| Os dados serão salvos em Local Storage |  MÉDIA | 
|RNF-004| O processamento deve ocorrer no lado do cliente |  BAIXA | 
|RNF-005| A aplicação deve ser publicada em repositório público |  BAIXA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
