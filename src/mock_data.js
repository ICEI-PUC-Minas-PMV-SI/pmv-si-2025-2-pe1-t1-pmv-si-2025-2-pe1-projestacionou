// 1. Lista de Usuários Mockados
const mockUsers = [
    {
        id: 1,
        username: "usuario1",
        password: "senha123", // Em um ambiente real, NUNCA armazene senhas em texto puro.
        email: "usuario1@estacionou.com"
    },
    {
        id: 2,
        username: "usuario2",
        password: "senha456",
        email: "usuario2@estacionou.com"
    },
    {
        id: 3,
        username: "admin",
        password: "adminpassword",
        email: "admin@estacionou.com"
    }
];

// Coordenadas de referência para Belo Horizonte (Centro): -19.912998, -43.940933

// 2. Lista de Pins Mockados (Vagas de Estacionamento)
const mockPins = [
    {
        id: "P001",
        latitude: -19.918000, // Próximo ao Centro
        longitude: -43.938000,
        tipoVaga: "Comum", // Tipos: Comum, Preferencial, Idoso, Moto
        disponivel: true,
        temporizador: null, // Em segundos. Null se estiver livre.
        descricao: "Vaga próxima à Praça Sete de Setembro."
    },
    {
        id: "P002",
        latitude: -19.920500, // Próximo à Savassi
        longitude: -43.935500,
        tipoVaga: "Preferencial",
        disponivel: false,
        temporizador: 1800, // 30 minutos
        ocupanteId: 1,
        descricao: "Vaga para gestantes ou pessoas com crianças de colo na Savassi."
    },
    {
        id: "P003",
        latitude: -19.915000, // Próximo à Rodoviária
        longitude: -43.945000,
        tipoVaga: "Idoso",
        disponivel: true,
        temporizador: null,
        descricao: "Vaga reservada para idosos, próximo à Rodoviária de BH."
    },
    {
        id: "P004",
        latitude: -19.910000, // Próximo ao Mercado Central
        longitude: -43.942000,
        tipoVaga: "Moto",
        disponivel: false,
        temporizador: 3600, // 1 hora
        ocupanteId: 2,
        descricao: "Vaga exclusiva para motocicletas perto do Mercado Central."
    }
];
