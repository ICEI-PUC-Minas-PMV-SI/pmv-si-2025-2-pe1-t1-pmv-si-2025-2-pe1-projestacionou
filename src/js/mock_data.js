// Usuário mockados para Login
const MOCK_USERS = [
    {
        id: 1,
        username: 'dev1@estacionou',
        senha: 'dev'
    },
    {
        id: 2,
        username: 'dev2@estacionou',
        senha: 'dev'
    },
];

// Pins Mockados para Simular Colaboração
const MOCK_PINS = [
    {
        id_pin: 101,
        lat: -19.9208,
        lng: -43.9378,
        timestamp_criacao: Date.now() - (5 * 60 * 1000),
        tipo_vaga: 'NORMAL',
        id_usuario_criador: 1
    },
    {
        id_pin: 102,
        lat: -19.9168,
        lng: -43.9318,
        timestamp_criacao: Date.now() - (2 * 60 * 1000),
        tipo_vaga: 'PCD',
        id_usuario_criador: 2
    }
];