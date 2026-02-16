
import { BotHelpData } from './types';

export const HELP_DATA: Record<string, BotHelpData> = {
  rolbet: {
    name: 'Rol Bet',
    prefix: 'B!',
    categories: [
      {
        id: 'tickets',
        title: 'Tickets & Bienvenidas',
        icon: '🎟️',
        commands: [
          { name: 'B!ticket', description: 'Crea un panel de tickets personalizado.' },
          { name: 'B!añadir (ID o mención)', description: 'Añade un usuario al ticket actual.' },
          { name: 'B!setbienvenida', description: 'Configura el mensaje para nuevos usuarios.' },
          { name: 'B!setdespedida', description: 'Configura el mensaje de despedida.' },
          { name: 'Auto-roles', description: 'Asigna hasta 5 roles automáticos.' },
          { name: 'Anti-bots', description: 'Activa protección contra bots.' },
          { name: 'Auto-nombre', description: 'Cambia apodos automáticamente.' }
        ]
      },
      {
        id: 'moderation',
        title: 'Moderación',
        icon: '🛠️',
        commands: [
          { name: 'B!warn', description: 'Advertir usuario.' },
          { name: 'B!unwarn', description: 'Quitar advertencia.' },
          { name: 'B!mute', description: 'Silenciar usuario.' },
          { name: 'B!ban', description: 'Banear usuario.' },
          { name: 'B!lock', description: 'Bloquear canal.' },
          { name: 'B!modlogs', description: 'Configurar canal de registros.' }
        ]
      },
      {
        id: 'music',
        title: 'Música',
        icon: '🎵',
        commands: [
          { name: '/play', description: 'Reproducir canción.' },
          { name: '/pausar', description: 'Pausar música.' },
          { name: '/saltar', description: 'Siguiente canción.' },
          { name: '/volume', description: 'Ajustar volumen.' }
        ]
      },
      {
        id: 'security',
        title: 'Anti-Raid & IA',
        icon: '🛡️',
        commands: [
          { name: 'B!antilink', description: 'Filtro anti-enlaces (on/off).' },
          { name: 'B!ask', description: 'Sistema de IA avanzado (Ej: B!ask crea una imagen de un perro).' },
          { name: 'B!verify', description: 'Sistema de verificación para usuarios.' }
        ]
      }
    ]
  },
  minibet: {
    name: 'Mini Rol Bet',
    prefix: 'M!',
    categories: [
      {
        id: 'fun',
        title: 'Diversión',
        icon: '🤣',
        commands: [
          { name: 'M!ahorcado', description: 'Juego del ahorcado entre amigos.' },
          { name: 'M!rps', description: 'Piedra, papel o tijeras.' }
        ]
      },
      {
        id: 'economy',
        title: 'Economía',
        icon: '💰',
        commands: [
          { name: 'M!perfil', description: 'Ver tu perfil de usuario.' },
          { name: 'M!daily', description: 'Reclamar recompensa diaria.' },
          { name: 'M!work', description: 'Trabajar para ganar dinero.' },
          { name: 'M!bal', description: 'Ver balance bancario.' },
          { name: 'M!shop', description: 'Tienda de artículos.' },
          { name: 'M!bj', description: 'Jugar Blackjack.' }
        ]
      },
      {
        id: 'pokemon',
        title: 'Pokémon',
        icon: '🎮',
        commands: [
          { name: 'M!pokemon', description: 'Ver un Pokémon aleatorio.' },
          { name: 'M!catch', description: 'Capturar un Pokémon.' },
          { name: 'M!invpoke', description: 'Ver tu inventario Pokémon.' }
        ]
      },
      {
        id: 'events',
        title: 'San Valentín',
        icon: '🌹',
        commands: [
          { name: 'M!confesion', description: 'Enviar una confesión a alguien.' },
          { name: 'M!ship', description: 'Ver compatibilidad entre dos usuarios.' },
          { name: 'M!regalo', description: 'Enviar un regalo especial.' }
        ]
      }
    ]
  }
};

export const PRIVACY_POLICY = {
  update: '13/01/2026',
  content: `En Rol Bet y Mini Rol Bet, la privacidad es prioritaria.
  
1. Información recopilada: IDs de usuario y servidor, datos necesarios para tickets y configuración, metadatos técnicos (roles y canales). No almacenamos conversaciones privadas.
2. Uso de la información: Funcionamiento del bot, gestión de soporte y seguridad del sistema.
3. Seguridad: Datos protegidos, no se comparte información ni almacenamos datos personales sensibles.
4. Derechos del usuario: Puedes solicitar eliminación de datos desde el servidor de soporte.
5. Terceros: Aplican también las políticas de Discord.`
};

export const TERMS_SERVICE = {
  update: '13/01/2026',
  content: `Al usar Rol Bet aceptas:
  
1. Cumplir normas de Discord: El uso indebido resultará en baneo.
2. Uso correcto: Prohibido contenido ilegal o abuso del bot.
3. Responsabilidad: Los administradores son responsables del uso.
4. Disponibilidad: No garantizamos servicio ininterrumpido.
5. Modificaciones: Los términos pueden actualizarse.
6. Contacto: Disponible en el servidor de soporte.`
};
