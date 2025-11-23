document.addEventListener('DOMContentLoaded', function() {

    // M2.1 – Inicialização do Mapa
    var mapa = L.map("map-container", {
        zoomControl: false
    }).setView([-19.9191, -43.9386], 13);

    // Camada base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap'
    }).addTo(mapa);

    // M2.2/M2.3 – Geolocalização e Pin do Usuário
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (pos) {
                var lat = pos.coords.latitude;
                var lng = pos.coords.longitude;
                mapa.setView([lat, lng], 16);

                var userIcon = L.icon({
                    iconUrl: 'https://cdn-icons-png.flaticon.com/512/64/64113.png',
                    iconSize: [38, 38],
                    iconAnchor: [19, 38],
                    popupAnchor: [0, -38]
                });

                L.marker([lat, lng], { icon: userIcon })
                    .addTo(mapa)
                    .bindPopup("Você está aqui.")
                    .openPopup();
            },
            function (err) {
                console.error("Não foi possível obter localização do usuário.", err);
            }
        );
    }

    // M2.4 – Botões de Zoom e Locais Populares
    const zoomButtons = document.querySelectorAll('#zoom button');
    if (zoomButtons.length >= 2) {
        zoomButtons[0].addEventListener('click', () => mapa.zoomIn());
        zoomButtons[1].addEventListener('click', () => mapa.zoomOut());
    }

    document.querySelectorAll(".place-card[data-lat][data-lng]").forEach(card => {
        card.addEventListener("click", function () {
            var lat = parseFloat(this.getAttribute("data-lat"));
            var lng = parseFloat(this.getAttribute("data-lng"));
            mapa.setView([lat, lng], 16);
        });
    });

    // Início do Módulo 3: Lógica de pins e temporizador
    const LOCALSTORAGE_KEY = 'vagas_disponiveis';
    const TEMPO_DE_VIDA_MS = 2 * 60 * 1000;

    const activeMarkers = {}; 

    // Lógica de verificação de Login 
    function getUsuarioLogadoId() {
        const session = localStorage.getItem('userLogado');
        if (session) {
            try {
                const userData = JSON.parse(session);
                return userData.id_usuario; 
            } catch (e) {
                console.error("Erro ao ler sessão:", e);
                return null;
            }
        }
        return null;
    }

    function usuarioEstaLogado() {
        return getUsuarioLogadoId() !== null;
    }

    // Função de Logout
    function fazerLogout() {
        localStorage.removeItem('userLogado');
        localStorage.removeItem('userToken');
        window.location.href = "login.html"; 
    }

    // Função de Atualização da Interface
    function atualizarInterfaceLogin() {
    const authContainer = document.getElementById('auth-container');
    let authButton = document.getElementById('auth-button'); // O botão 'Entrar' inicial
    let logoutButton = document.getElementById('btn-logout'); // O botão 'Sair'

    if (!authContainer) return;

    if (usuarioEstaLogado()) {
        if (!authButton) {
             authButton = document.createElement('button');
             authButton.id = 'auth-button';
             authContainer.prepend(authButton); 
        }

        authButton.textContent = 'Página de Perfil';
        authButton.onclick = () => { 
            window.location.href = 'perfil.html';
        };

        if (!logoutButton) {
            logoutButton = document.createElement('button');
            logoutButton.id = 'btn-logout';
            logoutButton.textContent = 'Sair';
            logoutButton.onclick = fazerLogout; 
            authContainer.appendChild(logoutButton);
        }
        
    } else {
        if (logoutButton) {
            logoutButton.remove();
        }
        
        if (!authButton) {
             authButton = document.createElement('button');
             authButton.id = 'auth-button';
             authContainer.prepend(authButton); 
        }

        authButton.textContent = 'Entrar';
        authButton.onclick = () => {
             window.location.href = 'login.html';
        };
    }
}

    // Lógica de Persistência e Leitura de Dados
    function getPinsSalvos() {
        const pinsJSON = localStorage.getItem(LOCALSTORAGE_KEY);
        if (pinsJSON) {
            return JSON.parse(pinsJSON);
        } else {
            salvarPins(MOCK_PINS); 
            return MOCK_PINS;
        }
    }

    function salvarPins(pins) {
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(pins));
    }

    // Definição dos ícones e renderização deles
    function getIconByType(tipo_vaga) {
        let iconUrl = '';

        switch (tipo_vaga) {
            case 'NORMAL':
                iconUrl = 'assets/img/icon-vaga.png'; 
                break;
            case 'PCD':
                iconUrl = 'assets/img/icon-PCD.png'; 
                break;
            case 'IDOSO':
                iconUrl = 'assets/img/icon-idoso.png';
                break;
            default:
                iconUrl = 'assets/img/icon-vaga.png'; 
                break;
        }
        
        return L.icon({
            iconUrl: iconUrl,
            iconSize: [38, 38],
            iconAnchor: [19, 38],
            popupAnchor: [0, -38],
            className: `pin-vaga pin-${tipo_vaga.toLowerCase()}`
        });
    }

    function renderizarPin(pin) {
        const customIcon = getIconByType(pin.tipo_vaga);
        const marker = L.marker([pin.lat, pin.lng], { icon: customIcon, title: pin.id_pin });

        marker.bindPopup(`
            <h3>Vaga: ${pin.tipo_vaga}</h3>
            <p>Criado por: Usuário #${pin.id_usuario_criador}</p>
            <p>Tempo Restante: <span id="timer-${pin.id_pin}">Calculando...</span></p>
            <button onclick="removerPinManual(${pin.id_pin})">Retirar Vaga</button>
        `);
        
        marker.addTo(mapa);
        activeMarkers[pin.id_pin] = marker;
    }

    function carregarPinsNoMapa() {
        const pins = getPinsSalvos();
        pins.forEach(pin => {
            if (!activeMarkers[pin.id_pin]) {
                renderizarPin(pin);
            }
        });
    }

    // Criação e Salvamento
    function salvarNovoPin(lat, lng, tipo_vaga) {
        const todosPins = getPinsSalvos();
        
        const novoId = Math.max(...todosPins.map(p => p.id_pin), 100) + 1; // 100 como base para Max
        const criadorId = getUsuarioLogadoId() || 0;
        
        const novoPin = {
            id_pin: novoId,
            lat: lat,
            lng: lng,
            timestamp_criacao: Date.now(),
            tipo_vaga: tipo_vaga,
            id_usuario_criador: criadorId
        };

        todosPins.push(novoPin);
        salvarPins(todosPins); 
        renderizarPin(novoPin);
    }
    
    // Conexão do clique no botão "Marcar minha vaga" com o clique no mapa
    function adicionarListenerDeCriacao() {
        const btnMarcarVaga = document.querySelector('#button-container button');
        
        if (!btnMarcarVaga) return;
        
        btnMarcarVaga.addEventListener('click', function() {
            
            if (!usuarioEstaLogado()) {
                alert("Por favor, faça login para marcar uma vaga.");
                return; 
            }

            alert("Clique no mapa onde está sua vaga para marcá-la.");
            
            const clickHandler = function(e) {
                const lat = e.latlng.lat;
                const lng = e.latlng.lng;
                
                const tipoVagaInput = prompt("Qual o tipo de vaga? (NORMAL, PCD, IDOSO)").toUpperCase();
                
                if (tipoVagaInput && ['NORMAL', 'PCD', 'IDOSO'].includes(tipoVagaInput)) {
                    salvarNovoPin(lat, lng, tipoVagaInput);
                } else {
                    alert("Criação cancelada ou tipo inválido.");
                }
                
                mapa.off('click', clickHandler); 
            };

            mapa.on('click', clickHandler);
        });
    }

    // Função de lógica do temporizador
    function removerPinDoMapa(id_pin) {
        if (activeMarkers[id_pin]) {
            activeMarkers[id_pin].remove();
            delete activeMarkers[id_pin];
        }
    }
    
    function checkPins() {
        const pins = getPinsSalvos();
        let pinsParaSalvar = [];
        
        pins.forEach(pin => {
            const tempoDecorrido = Date.now() - pin.timestamp_criacao;
            const tempoRestanteMS = TEMPO_DE_VIDA_MS - tempoDecorrido;

            if (tempoRestanteMS <= 0) {
                removerPinDoMapa(pin.id_pin); 
            } else {
                const segundos = Math.floor(tempoRestanteMS / 1000);
                const minutos = Math.floor(segundos / 60);
                const segundosRestantes = segundos % 60;
                
                const timerElement = document.getElementById(`timer-${pin.id_pin}`);

                if (timerElement) {
                    timerElement.textContent = `${minutos}m ${segundosRestantes}s`;
                }

                pinsParaSalvar.push(pin); 
            }
        });
        
        salvarPins(pinsParaSalvar);
    }

    function iniciarTemporizador() {
        checkPins(); 
        setInterval(checkPins, 5000);
    }

    // Execução dos módulos
    carregarPinsNoMapa(); 
    iniciarTemporizador(); 
    adicionarListenerDeCriacao();
    atualizarInterfaceLogin();
});


window.removerPinManual = function(id_pin) {
    if (confirm("Tem certeza que deseja remover esta vaga?")) {
        
        const LOCALSTORAGE_KEY = 'vagas_disponiveis';
        
        let pins = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || '[]');
        const pinsAtualizados = pins.filter(pin => pin.id_pin !== id_pin);
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(pinsAtualizados));
    }
};