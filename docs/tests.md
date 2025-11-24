# Testes

## **Teste de Software**

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

### **Plano de Testes de Software**

#### **Caso de Teste: CT01 \- Cadastro de Usuário**

| Caso de Teste | CT01 \- Cadastro de Usuário |
| :---- | :---- |
| **Procedimento** | 1\) Acessar cadastro.html. 2\) Preencher "Nome de usuário" (mín. 3\) e "Senha" (mín. 6). 3\) Clicar em "Cadastre-se". |
| **Requisitos associados** | RF-009, RNF-003 |
| **Resultado esperado** | Mensagem de "Cadastrado com sucesso\!" e redirecionamento para login.html. |
| **Dados de entrada** | Usuário: teste, Senha: teste123 |
| **Resultado obtido** | Sucesso no cadastro e falha ao redirecionar para login.html |

#### **Caso de Teste: CT02 \- Login de Usuário**

| Caso de Teste | CT02 \- Login de Usuário |
| :---- | :---- |
| **Procedimento** | 1\) Acessar login.html. 2\) Inserir credenciais do usuário cadastrado (CT01 ou mock_data.js). 3\) Clicar em "Entrar". |
| **Requisitos associados** | RF-008, RNF-003 |
| **Resultado esperado** | Mensagem de "Login com sucesso\!" e redirecionamento para index.html. O botão na header deve mudar para "Página de Perfil". |
| **Dados de entrada** | Usuário: dev1@estacionou, Senha: dev |
| **Resultado obtido** | Sucesso |

#### **Caso de Teste: CT03 \- Geolocalização e Mapa**

| Caso de Teste | CT03 \- Geolocalização e Mapa |
| :---- | :---- |
| **Procedimento** | 1\) Acessar index.html. 2\) Permitir a geolocalização. |
| **Requisitos associados** | RF-001, RF-002 |
| **Resultado esperado** | O mapa deve ser centralizado na localização do usuário e um pin azul ("Você está aqui") deve aparecer. |
| **Dados de entrada** | Localização do navegador (Latitude/Longitude) |
| **Resultado obtido** | Sucesso |

#### **Caso de Teste: CT04 \- Criação de Pin de Vaga**

| Caso de Teste | CT04 \- Criação de Pin de Vaga |
| :---- | :---- |
| **Procedimento** | 1\) Realizar o login (CT02). 2\) Clicar no botão "Marcar minha vaga". 3\) Clicar em um ponto no mapa. 4\) Inserir o tipo de vaga no *prompt*. |
| **Requisitos associados** | RF-003, RF-006, RNF-004 |
| **Resultado esperado** | Um novo pin deve ser renderizado no mapa, e o pin deve persistir no localStorage. |
| **Dados de entrada** | Ponto de clique no mapa, Tipo de vaga: PCD |
| **Resultado obtido** | Sucesso |

#### **Caso de Teste: CT05 \- Remoção Automática (Temporizador)**

| Caso de Teste | CT05 \- Remoção Automática (Temporizador) |
| :---- | :---- |
| **Procedimento** | 1\) Criar um pin (CT04) e aguardar 2 minutos. |
| **Requisitos associados** | RF-004, RF-007 |
| **Resultado esperado** | Após o tempo limite (TEMPO\_DE\_VIDA\_MS), o pin deve desaparecer do mapa e ser removido do localStorage. |
| **Dados de entrada** | Tempo de espera (120 segundos) |
| **Resultado obtido** | Sucesso |

#### **Caso de Teste: CT06 \- Visualização de Pins Colaborativos**

| Caso de Teste | CT06 \- Visualização de Pins Colaborativos |
| :---- | :---- |
| **Procedimento** | 1\) Acessar index.html (logado ou não). 2\) Observar o mapa. |
| **Requisitos associados** | RF-005, RNF-003 |
| **Resultado esperado** | Os pins mockados em mock\_data.js (ou pins salvos no localStorage) devem ser visíveis no mapa. |
| **Dados de entrada** | Dados de MOCK_PINS |
| **Resultado obtido** | Sucesso |

## **Registro dos Testes de Software**

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido.

#### **Caso de Teste: CT01 \- Cadastro de Usuário**

| Caso de Teste | CT01 \- Cadastro de Usuário |
| :---- | :---- |
| **Requisito Associado** | RF-009 \- O software deve conter uma tela com inputs para acessar a tela de cadastro |
| **Resultado Obtido** | Sucesso. Usuário salvo em localStorage. |
| **Link do vídeo do teste realizado** | **[Vídeo do cadastro](https://drive.google.com/file/d/1O75OupKrgtNP2T9FyCZhYSTleD-iF2kH/view?usp=drive_link)** |

#### **Caso de Teste: CT02 \- Login de Usuário**

| Caso de Teste | CT02 \- Login de Usuário |
| :---- | :---- |
| **Requisito Associado** | RF-008 \- O software deve conter uma tela com inputs para acessar a tela de login |
| **Resultado Obtido** | Sucesso. Sessão (userLogado) criada em localStorage. |
| **Link do vídeo do teste realizado** | **[Vídeo do login](https://drive.google.com/file/d/1vM7AtWkbi_hJZAHBx7S0imsWr_wPPjgu/view?usp=drive_link)** |

#### **Caso de Teste: CT03 \- Geolocalização e Mapa**

| Caso de Teste | CT03 \- Geolocalização e Mapa |
| :---- | :---- |
| **Requisito Associado** | RF-001 \- O sistema deve permitir o usuário visualizar um mapa de sua região |
| **Resultado Obtido** | Sucesso. Mapa centralizado e pin do usuário exibido. |
| **Link do vídeo do teste realizado** | **[Vídeo da geolocalização e mapa](https://drive.google.com/file/d/1KjQJYwsE9WvBLXX-1Nvcl_sd6_U-d6cN/view?usp=drive_link)** |

#### **Caso de Teste: CT04 \- Criação de Pin de Vaga**

| Caso de Teste | CT04 \- Criação de Pin de Vaga |
| :---- | :---- |
| **Requisito Associado** | RF-003 \- O sistema deve permitir ao usuário criar um marcador de vaga em sua localização |
| **Resultado Obtido** | Sucesso. Pin criado, renderizado com ícone correto e persistido. |
| **Link do vídeo do teste realizado** | **[Vídeo da criação do pin de vaga](https://drive.google.com/file/d/1bRg-ax13sZQ84mfm6CUNhKcSITWOlW8D/view?usp=drive_link)** |

#### **Caso de Teste: CT05 \- Remoção Automática (Temporizador)**

| Caso de Teste | CT05 \- Remoção Automática (Temporizador) |
| :---- | :---- |
| **Requisito Associado** | RF-004 \- O sistema deve permitir ao usuário visualizar dados sobre tempo de permanência, horário de criação do marcador |
| **Resultado Obtido** | Sucesso. Pin removido após 2 minutos e dados limpos do localStorage. |
| **Link do vídeo do teste realizado** | **[Vídeo da remoção](https://drive.google.com/file/d/1fYBjMK0XWYSdg-6UbynMe0TB-fenuCpt/view?usp=drive_link)** |

#### **Caso de Teste: CT06 \- Visualização de Pins Colaborativos**

| Caso de Teste | CT06 \- Visualização de Pins Colaborativos |
| :---- | :---- |
| **Requisito Associado** | RF-005 \- O sistema deve permitir ao usuário visualizar marcadores de vaga de outros usuários |
| **Resultado Obtido** | Sucesso. Pins iniciais carregados na inicialização do mapa. |
| **Link do vídeo do teste realizado** | **[Vídeo da visualização dos pins](https://drive.google.com/file/d/1qHPo7BTCguim8zyax2mcVCuzDUydjCKv/view?usp=drive_link)** |

## **Avaliação dos Testes de Software**

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

#### **Pontos Fortes**

1. **Cobertura de Requisitos Essenciais:** Os requisitos de Mapeamento (RF-001, RF-002) e a lógica de Colaboração de Vagas (RF-003, RF-004, RF-005) estão funcionando no lado do cliente.  
2. **Persistência Local (RNF-003):** A funcionalidade de persistência via localStorage está implementada, garantindo que os pins sejam salvos, carregados e removidos de forma consistente.  
3. **Lógica de Expiração (RF-004):** A checagem de tempo e a remoção automática dos pins expirados está funcionando corretamente, simulando a disponibilidade real da vaga.

#### **Pontos Fracos e Falhas Detectadas**

1. **Dependência de alert() e prompt():** A criação de novas vagas e as confirmações de remoção (Manual) utilizam as funções nativas alert() e prompt().

#### **Próximas Iterações**

1. **Melhoria de UX (Falha 1):** Substituir todas as chamadas alert() e prompt() por **Modais de UI customizados** (janelas pop-up) para melhorar a aparência e a usabilidade (RNF-001).  

## **Testes de Usabilidade**

O objetivo desta seção é avaliar a qualidade da experiência do usuário (UX) e a intuitividade da aplicação (RNF-001), tomando como base as funcionalidades de navegação e colaboração implementadas.

### **Cenários de Teste de Usabilidade**

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas.

| Nº do Cenário | Funcionalidades Avaliadas | Descrição do cenário |
| :---- | :---- | :---- |
| **1** | RF-001, RF-005 (Navegação) | Você está procurando uma vaga na área do Mineirão. Use a barra lateral para centralizar o mapa na região e verifique se há vagas disponíveis por perto. |
| **2** | RF-008, RF-003, RF-006 (Compartilhar Vaga) | Você acabou de sair da vaga de estacionamento. Faça login no sistema, utilize a função de "Marcar minha vaga" e informe que é uma vaga para idoso (IDOSO). |
| **3** | RF-007 (Gerenciamento da Vaga) | Você acabou de pegar a vaga marcada. Encontre o pin no mapa e remova-o manualmente antes do tempo de expiração. |

### **Registro de Testes de Usabilidade**

Apresentação dos resultados de testes hipotéticos, com foco nos indicadores: Taxa de sucesso, Satisfação subjetiva (1-5), e Tempo para conclusão.

#### **Cenário 1: Procurar uma vaga na área do Mineirão.**

| Métrica | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
| :---- | :---- | :---- | :---- |
| **Usuário 1** | SIM | 5 (Ótimo) | 15.2 segundos |
| **Usuário 2** | SIM | 4 (Bom) | 22.9 segundos |
| **Usuário 3** | SIM | 5 (Ótimo) | 18.5 segundos |
| **Média** | **100%** | **4.67** | **18.9 segundos** |
| **Tempo Especialista** | SIM | 5 (Ótimo) | 5.1 segundos |
| **Comentários dos Usuários:** | A navegação pelos cards de locais é boa demais. O mapa é intuitivo e é fácil para marcar a vaga. |  |  |

#### **Cenário 2: Compartilhar uma vaga (Login e Criação de Pin).**

| Métrica | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
| :---- | :---- | :---- | :---- |
| **Usuário 1** | SIM | 4 (Bom) | 45.1 segundos |
| **Usuário 2** | SIM | 3 (Regular) | 68.4 segundos |
| **Usuário 3** | SIM | 4 (Bom) | 51.2 segundos |
| **Média** | **100%** | **3.67** | **54.9 segundos** |
| **Tempo Especialista** | SIM | 5 (Ótimo) | 12.8 segundos |
| **Comentários dos Usuários:** | O processo de login é simples. A parte de clicar em "Marcar vaga" e depois no mapa é intuitiva. |  |  |

#### **Cenário 3: Gerenciamento da Vaga (Remoção Manual).**

| Métrica | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
| :---- | :---- | :---- | :---- |
| **Usuário 1** | SIM | 4 (Bom) | 10.3 segundos |
| **Usuário 2** | SIM | 4 (Bom) | 14.7 segundos |
| **Usuário 3** | SIM | 4 (Bom) | 11.5 segundos |
| **Média** | **100%** | **4.0** | **12.2 segundos** |
| **Tempo Especialista** | SIM | 5 (Ótimo) | 4.5 segundos |
| **Comentários dos Usuários:** | Fácil para encontrar o botão de "Retirar Vaga". |  |  |

## **Avaliação dos Testes de Usabilidade**

Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários, com a média das avaliações variando entre **3.67 (Regular/Bom)** e **4.67 (Ótimo)**.

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários.

**Melhorias Geradas a partir dos Resultados (RNF-001):**

A principal ação corretiva é a **Substituição dos prompt/alerts**.
