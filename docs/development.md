# Programação de Funcionalidades

A seção a seguir detalha a implementação do sistema por meio da associação dos requisitos funcionais e não-funcionais com os artefatos de código-fonte criados. O sistema utiliza a arquitetura *client-side* (RNF-004) e persistência de dados no localStorage (RNF-003).

## **Requisitos Atendidos**

As tabelas a seguir apresentam o relacionamento entre os requisitos e os artefatos criados, bem como os responsáveis por cada módulo de implementação.

### **Requisitos Funcionais**

| ID | Descrição do Requisito | Responsável | Artefato Criado |
| :---- | :---- | :---- | :---- |
| **RF-001** | O sistema deve permitir o usuário visualizar um mapa de sua região | José Guilherme, Matheus Câmara e Mateus Santos | index.html |
| **RF-002** | O mapa deve ser centralizado com base na geolocalização do dispositivo do usuário | José Guilherme, Matheus Câmara e Mateus Santos | index.html |
| **RF-003** | O sistema deve permitir ao usuário criar um marcador de vaga em sua localização | Mateus Santos | index.html |
| **RF-004** | O sistema deve permitir ao usuário visualizar dados sobre tempo de permanência, horário de criação do marcador | Mateus Santos | index.html |
| **RF-005** | O sistema deve permitir ao usuário visualizar marcadores de vaga de outros usuários | Mateus Santos | index.html |
| **RF-006** | O sistema deve permitir ao usuário visualizar qual o tipo da vaga de estacionamento | Mateus Santos | index.html |
| **RF-007** | O sistema deve permitir ao usuário visualizar e manipular informações sobre os marcadores de vaga | José Guilherme, Matheus Câmara e Mateus Santos | index.html |
| **RF-008** | O software deve conter uma tela com inputs para acessar a tela de login | João Pedro e Lucas | login.html |
| **RF-009** | O software deve conter uma tela com inputs para acessar a tela de cadastro | João Pedro e Lucas | cadastro.html |
| **RF-010** | O sistema deve permitir ao usuário cadastrar seu estacionamento particular | Todos | **Funcionalidade futura (MOCK)** |
| **RF-011** | O sistema deve conter uma página destinada ao proprietário de estacionamento | Todos | **Funcionalidade futura (MOCK)** |
| **RF-012** | O sistema deve informar ao usuário a disponibilidade de vagas no estacionamento particular | Todos | **Funcionalidade futura (MOCK)** |

### **Requisitos Não Funcionais**

| ID | Descrição do Requisito | Responsável | Artefato Criado |
| :---- | :---- | :---- | :---- |
| **RNF-001** | A aplicação deve ser intuitiva e fácil de usar | Todos | Todos os artefatos |
| **RNF-002** | A aplicação deve ser responsiva e adaptável a diferentes telas | Todos | style.css (global) |
| **RNF-003** | Os dados serão salvos em Local Storage | Mateus Santos | mock_data.js (core logic) |
| **RNF-004** | O processamento deve ocorrer no lado do cliente | Todos | (core logic) |
| **RNF-005** | A aplicação deve ser publicada em repositório público | Todos | Repositório Github |

## **Descrição das Estruturas de Dados**

A principal estrutura de dados utilizada no projeto é o objeto **Vaga (ou Marcador)**, que representa uma vaga de estacionamento compartilhada por um usuário no mapa. Esses objetos são serializados em JSON e armazenados no localStorage do navegador.

### **Vaga (Marcador)**

| Nome | Tipo | Descrição | Exemplo |
| :---- | :---- | :---- | :---- |
| **id** | Texto (UUID) | Identificador único do marcador de vaga, gerado no momento da criação. | 6b86b273-34a6-4074-9840-02a82110c3c6 |
| **latitude** | Número (Float) | Posição geográfica (coordenada de latitude) do marcador. | \-19.9168 |
| **longitude** | Número (Float) | Posição geográfica (coordenada de longitude) do marcador. | \-43.9340 |
| **tipoVaga** | Texto | Tipo de vaga registrada: NORMAL, PCD, ou IDOSO. | PCD |
| **criadoEm** | Número (Inteiro) | Timestamp (milisegundos) do momento exato da criação da vaga. Usado para RF-004 e temporizador. | 1678886400000 |
| **expiraEm** | Número (Inteiro) | Timestamp (milisegundos) do momento em que a vaga deve ser removida automaticamente (fim do tempo de permanência). | 1678887600000 |
| **idUsuario** | Texto | ID do usuário que criou o marcador, usado para gerenciamento (RF-007). | mateus.santos |

### **User (Usuário)**

| Nome | Tipo | Descrição | Exemplo |
| :---- | :---- | :---- | :---- |
| **username** | Texto | Nome de usuário único utilizado para login (RF-008). | fulano.silva |
| **password** | Texto | Senha do usuário (armazenada de forma insegura no localStorage). | password |
| **id** | Texto (UUID) | Identificador único da sessão do usuário. | u-22b64b |

## **Instruções para Acesso e Verificação**

Para acessar e verificar a implementação das funcionalidades, siga os passos abaixo no ambiente de hospedagem:

1. **Acesso Inicial:** Abra o arquivo index.html no navegador.  
2. **Verificação de Requisitos de Mapeamento (RF-001, RF-002, RF-005):**  
   * O mapa deve carregar imediatamente e solicitar permissão de geolocalização.  
   * Após a permissão, o mapa deve centralizar na posição do dispositivo (RF-002).  
   * Marcadores de vagas *mockados* (simulando outros usuários) devem ser visíveis no mapa (RF-005).  
3. **Verificação de Autenticação (RF-009, RF-008):**  
   * Acesse cadastro.html para criar um novo usuário (RF-009).  
   * Acesse login.html e utilize as credenciais criadas para logar (RF-008).  
4. **Verificação de Criação e Gestão de Vagas (RF-003, RF-006, RF-004, RF-007):**  
   * Após o login, clique no botão "Marcar minha vaga".  
   * Clique em qualquer ponto do mapa para criar o marcador (RF-003).  
   * Um *prompt* solicitará o tipo de vaga, garantindo o registro do **RF-006**.  
   * Verifique se o pin aparece no mapa. Aguarde **2 minutos** para confirmar a remoção automática (temporizador) que verifica o **RF-004** e **RF-007**.  
   * Inspecione o localStorage do navegador para confirmar que a *string* JSON da lista de vagas foi persistida (RNF-003).
