// Service Worker para PWA - Terço Digital
const CACHE_NAME = 'terco-digital-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/terco',
  'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap',
];

// Instalar o Service Worker
self.addEventListener('install', (event) => {
  console.log('📦 Service Worker: Instalando...');

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Service Worker: Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('📦 Service Worker: Todos os arquivos foram cacheados');
        return self.skipWaiting();
      })
  );
});

// Ativar o Service Worker
self.addEventListener('activate', (event) => {
  console.log('🔄 Service Worker: Ativando...');

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log(
                '🗑️ Service Worker: Removendo cache antigo:',
                cacheName
              );
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ Service Worker: Ativado e funcionando');
        return self.clients.claim();
      })
  );
});

// Interceptar requisições
self.addEventListener('fetch', (event) => {
  // Só interceptar requisições GET
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Retornar do cache se existir
      if (response) {
        console.log('📋 Service Worker: Servindo do cache:', event.request.url);
        return response;
      }

      // Caso contrário, buscar da rede
      console.log('🌐 Service Worker: Buscando da rede:', event.request.url);
      return fetch(event.request)
        .then((response) => {
          // Verificar se a resposta é válida
          if (
            !response ||
            response.status !== 200 ||
            response.type !== 'basic'
          ) {
            return response;
          }

          // Clonar a resposta
          const responseToCache = response.clone();

          // Adicionar ao cache
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Se estiver offline e não estiver no cache, mostrar página offline
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
    })
  );
});

// Eventos de mensagem do app principal
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Notificações push (opcional para futuras funcionalidades)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [200, 100, 200],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey,
      },
      actions: [
        {
          action: 'explore',
          title: 'Abrir Terço',
          icon: '/icon-192x192.png',
        },
        {
          action: 'close',
          title: 'Fechar',
          icon: '/icon-192x192.png',
        },
      ],
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

// Clique em notificação
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(clients.openWindow('/'));
  }
});

console.log('📿 Service Worker do Terço Digital carregado!');
