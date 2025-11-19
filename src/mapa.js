// =======================
// M2.1 – Inicialização
// =======================
var mapa = L.map("map").setView([-19.9191, -43.9386], 13);

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



// =======================
// M2.4 – Locais Populares
// =======================
document.querySelectorAll("#locais-populares button").forEach(btn => {
    btn.addEventListener("click", function () {

        var lat = parseFloat(this.getAttribute("data-lat"));
        var lng = parseFloat(this.getAttribute("data-lng"));

        mapa.setView([lat, lng], 16);

        L.marker([lat, lng])
            .addTo(mapa)
            .bindPopup("Local Popular: " + this.textContent)
            .openPopup();
    });
});
