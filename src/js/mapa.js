
document.addEventListener('DOMContentLoaded', function() {

    // =======================
    // M2.1 – Inicialização
    // =======================
    var mapa = L.map("map-container", {
        zoomControl: false  // removendo os botoes padrões pq temos um personalizados
    }).setView([-19.9191, -43.9386], 13);

    // Camada base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap'
    }).addTo(mapa);


    // =======================
    // M2.2 – Geolocalização
    // =======================
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (pos) {

                var lat = pos.coords.latitude;
                var lng = pos.coords.longitude;

                // Centraliza no usuário
                mapa.setView([lat, lng], 16);

                // M2.3 – Pin da posição do usuário
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
                alert("Não foi possível obter localização do usuário.");
                console.error(err);
            }
        );
    } else {
        alert("Geolocalização não suportada.");
    }

       // função que aplica a funcionalidade de zoom através dos botões personalizados
    // =======================
    // Botões de Zoom
    // =======================
    const zoomButtons = document.querySelectorAll('#zoom button');

    if (zoomButtons.length >= 2) {
        
        zoomButtons[0].addEventListener('click', function() {
            mapa.zoomIn();
        });

        
        zoomButtons[1].addEventListener('click', function() {
            mapa.zoomOut();
        });
    }


    // =======================
    // M2.4 – Locais Populares
    // =======================
    document.querySelectorAll(".place-card[data-lat][data-lng]").forEach(card => {
        card.addEventListener("click", function () {

            var lat = parseFloat(this.getAttribute("data-lat"));
            var lng = parseFloat(this.getAttribute("data-lng"));

            mapa.setView([lat, lng], 16);

            L.marker([lat, lng])
                .addTo(mapa)
                .bindPopup("Local Popular: " + this.querySelector('p').textContent)
                .openPopup();
        });
    });

});
