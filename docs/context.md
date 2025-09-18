# Introdução

O problema da mobilidade é comum em diversos países ao redor do mundo. Curiel et al. (2021) enfatizam que o número de automóveis cresceu significativamente nas últimas décadas, sendo o principal responsável pelo aumento da poluição atmosférica, contribuindo com cerca de 4% do total de dióxido de carbono emitido globalmente. Atualmente, são produzidos mais de 80 milhões de veículos por ano em todo o mundo. Os autores ainda destacam que as cidades demandam investimentos crescentes em infraestrutura e na ampliação de seus espaços, o que, de maneira geral, tem sido realizado de forma altamente ineficiente.

Outro fator que agrava a situação é a frota de veículos de carga e descarga nos grandes centros urbanos. Estudos como o de Silva e Alho (2017) ressaltam que, nas últimas décadas, o aumento simultâneo da frota de veículos e do consumo de bens intensificou o transporte de cargas dentro das cidades, gerando impactos negativos como poluição, congestionamentos e escassez de vagas de estacionamento.

Em um estudo relevante, Silva et al. (2024) demonstram que o problema das vagas não se restringe apenas aos veículos de passeio, mas também às destinadas à carga e descarga em cidades brasileiras. A pesquisa, realizada em São João Del Rei e Itajubá, ambas cidades localizadas no estado de Minas Gerais, utilizou modelos de geração de viagens de carga e constatou que, em média, essas regiões recebem 539 e 709 viagens diárias, respectivamente. Tal situação é crítica, pois as vagas destinadas a essa finalidade representam apenas 18% da demanda em São João Del Rei e 34,5% em Itajubá.

Diversos estudos (Holguin-Veras et al., 2018; Campbell et al., 2018; Flora et al., 2019; Oliveira et al., 2021; kijewska et al., 2022) evidenciam que a escassez de vagas para carga e descarga é um problema crônico nos grandes centros urbanos. Isso tende a agravar também a falta de vagas para veículos de passeio, uma vez que mais espaços precisarão ser destinados a mitigar a demanda da logística urbana, especialmente diante do aumento no consumo de bens.

Outro aspecto que acentua o problema refere-se ao tempo de permanência nas vagas. Como demonstrado por Dowling et al. (2018), quando as vagas são pagas, os motoristas tendem a utilizá-las pelo tempo máximo permitido, reduzindo ainda mais a rotatividade e agravando a escassez de unidades disponíveis.

## Problema

Esse projeto busca responder a seguinte pergunta: “É viável criar uma ferramenta web de front-end, utilizando apenas recursos de geolocalização e armazenamento local, que simule de forma eficaz uma plataforma colaborativa para a identificação e o compartilhamento de vagas de estacionamento em tempo real em uma área urbana?”

## Objetivos

Criar uma ferramenta web de front-end, utilizando apenas recursos de geolocalização e armazenamento local, que simule de forma eficaz uma plataforma colaborativa para a identificação e o compartilhamento de vagas de estacionamento em tempo real em uma área urbana

**Objetivos Específicos**

·	Desenvolver a estrutura básica com uma interface intuitiva para o mapa e para os controles de utilização da aplicação, garantindo a usabilidade e a acessibilidade da aplicação em diferentes tamanhos de tela.
·	Integrar um mapa para a visualização dinâmica da área de estacionamento. Além disso, será utilizado geolocalização do navegador para obter a latitude e longitude do usuário para centralizar o mapa na sua posição atual.
·	Gerenciar a exibição de marcadores (pins) de vagas no mapa com base nas coordenadas salvas, bem como detectar cliques no mapa e criar dinamicamente marcadores de vagas nas coordenadas do clique.
·	Utilizar o localStorage do navegador para salvar as informações de cada vaga (coordenadas e horário de criação), garantindo que os dados permaneçam mesmo após o recarregamento da página.
·	Criar uma função de temporização para simular a rotatividade de vagas, removendo os marcadores do mapa e os dados do localStorage após um período de tempo pré-determinado.

## Justificativa

Este projeto propõe o desenvolvimento de uma aplicação web front-end otimizada para dispositivos móveis, que simula uma plataforma colaborativa destinada ao compartilhamento de informações sobre a disponibilidade de vagas de estacionamento em uma área urbana específica.

A ferramenta permitirá que os usuários indiquem a localização de vagas livres e visualizem aquelas reportadas por outros participantes. As informações sobre cada vaga de estacionamento desaparecerão automaticamente após um período de tempo predefinido, simulando a alta rotatividade característica do trânsito urbano.

A proposta surge da necessidade de enfrentar um dos desafios mais recorrentes das cidades modernas: a dificuldade de encontrar vagas de estacionamento. Esse problema contribui para congestionamentos, aumento da poluição e desperdício de tempo. Ao simular uma aplicação que disponibiliza informações em tempo quase real sobre a oferta de vagas, o projeto busca evidenciar como a tecnologia, aliada à colaboração social, podem oferecer soluções para otimizar o fluxo de tráfego e melhorar a experiência urbana.

O objetivo central não é apenas desenvolver uma aplicação funcional, mas também validar o conceito de que recursos como geolocalização e armazenamento local de dados podem ser aplicados para resolver problemas práticos de maneira simples e eficiente, sem a necessidade de um back-end complexo.

## Público-Alvo

O público alvo são pessoas que utilizam seus automóveis frequentemente e buscam vagas de estacionamento de forma mais ágil e assertiva nos principais centros urbanos do Brasil.

O público se estende a profissionais que se deslocam diariamente, estudantes que precisam estacionar perto de universidades, pessoas com necessidades especiais, moradores e visitantes de bairros com estacionamento limitado. Indivíduos de diferentes faixas etárias, mas com foco em quem busca soluções práticas e rápidas para otimizar o tempo e reduzir o estresse no trânsito.
