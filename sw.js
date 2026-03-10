self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', (e) => {
  // Apenas deixa a requisição passar, sem cache complexo por enquanto
});
