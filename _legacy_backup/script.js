// Cozy Pomodoro Landing Page Script

const themes = {
    cozyLight: {
        '--bg-color': '#ffffff',
        '--text-main': 'rgba(0, 0, 0, 0.87)',
        '--text-muted': 'rgba(0, 0, 0, 0.6)',
        '--text-inverse': '#ffffff',
        '--primary-color': '#ff5722',
        '--primary-hover': '#e64a19',
        '--secondary-color': '#ffccbc',
        '--surface-color': '#ffffff',
        '--surface-raised': '#fffbf7',
        '--border-color': '#ffe0b2',
        '--glass-bg': 'rgba(255, 255, 255, 0.45)', // Standard glass
        '--glass-border': 'rgba(255, 255, 255, 0.6)'
    },
    cozyDark: {
        '--bg-color': '#121212',
        '--text-main': '#ffffff',
        '--text-muted': 'rgba(255, 255, 255, 0.7)',
        '--text-inverse': '#000000', /* Dark text on primary button */
        '--primary-color': '#ff5722',
        '--primary-hover': '#ff8a65',
        '--secondary-color': '#2C2C2C',
        '--surface-color': '#1E1E1E',
        '--surface-raised': '#2C2C2C',
        '--border-color': '#333333',
        '--glass-bg': 'rgba(30, 30, 30, 0.6)', /* Dark glass */
        '--glass-border': 'rgba(255, 255, 255, 0.1)'
    },
    nature: {
        '--bg-color': '#2E4033',
        '--text-main': '#F2F2F2',
        '--text-muted': '#B0BEC5',
        '--text-inverse': '#2E4033',
        '--primary-color': '#8CBA99',
        '--primary-hover': '#A5D6A7',
        '--secondary-color': '#3E5244',
        '--surface-color': '#3E5244',
        '--surface-raised': '#4B6353',
        '--border-color': '#5C7463',
        '--glass-bg': 'rgba(46, 64, 51, 0.6)',
        '--glass-border': 'rgba(140, 186, 153, 0.2)'
    },
    pastel: {
        '--bg-color': '#FFF0F5',
        '--text-main': '#4A4A4A',
        '--text-muted': '#7D7D7D',
        '--text-inverse': '#ffffff',
        '--primary-color': '#FFB7B2',
        '--primary-hover': '#E57373',
        '--secondary-color': '#ffe5e5',
        '--surface-color': '#ffffff',
        '--surface-raised': '#fff6f8',
        '--border-color': '#FFCDD2',
        '--glass-bg': 'rgba(255, 240, 245, 0.5)',
        '--glass-border': 'rgba(255, 183, 178, 0.4)'
    }
};

// Language Dictionary (Loaded from JSON)
let translations = {};

// Default Fallback (for local testing without server/CORS)
const defaultTranslations = {
    "en": {
        "download": "Download",
        "themes": "Themes",
        "nav_themes": "Theme Pack",
        "nav_privacy": "Privacy",
        "version_badge": "✨ v1.3.0 Now Available",
        "hero_title": "Focus Comfortably.",
        "hero_subtitle": "The minimalist Pomodoro timer for calm productivity.",
        "hero_subtitle_bold": "Full experience is free.",
        "cta_download": "Get App",
        "cta_explore": "Explore Themes",
        "hero_note": "On Android • No Ads • Private",
        "try_theme": "Try style:",
        "social_proof": "Loved by 50,000+ users",
        "early_adopter": "Discover calm focus.",
        "how_title": "Simple Design",
        "how_subtitle": "No clutter. Just flow.",
        "step1_title": "1. Pick Task",
        "step1_desc": "Decide what to do.",
        "step2_title": "2. Start Timer",
        "step2_desc": "Focus for 25 mins.",
        "step3_title": "3. Relax",
        "step3_desc": "Take a short cozy break.",
        "benefit1": "No Ads",
        "benefit2": "Works Offline",
        "benefit3": "100% Private",
        "premium_badge": "Theme Store",
        "premium_title": "Make it Yours.",
        "premium_desc": "Buy individual themes or packs.",
        "one_time": "starts at",
        "feat_themes": "Single Themes & Packs",
        "feat_weather": "Dynamic Weather",
        "feat_support": "Support Indie Dev",
        "feat_no_sub": "No Subscriptions",
        "feat_no_lock": "Forever Unlocked",
        "get_pack": "Visit Store",
        "visit_store": "Visit Store",
        "guarantee": "Purely cosmetic. App remains free.",
        "card1_title": "Vibe Styles",
        "card1_benefit": "Set the Mood",
        "card1_desc": "Solid Color Themes",
        "card2_title": "Cozy Scapes",
        "card2_benefit": "Escape Distraction",
        "card2_desc": "Animated Landscapes",
        "card3_title": "Value Packs",
        "card3_benefit": "Best Value",
        "card3_desc": "3-Theme Collections",
        "card4_title": "Ultimate",
        "card4_benefit": "Full Experience",
        "card4_desc": "4-Theme Specials",
        "whats_new": "✨ New in",
        "release_notes_v130": "New Theme Store: Purchase individual themes or packs!<br>Premium Previews: Try themes before you buy.<br>Visual Updates: Improved colors for 'Calm Lake'.<br>Bug fixes and performance improvements.",
        "release_notes_v120": "🌧️ Rain Themes <br> 🔥 Stats & Streaks <br> 📸 Visual Sharing <br> ⏯️ Smart Auto-Start <br> ✅ Input Validation",
        "faq_title": "Frequent Questions",
        "faq1_q": "Is the app free?",
        "faq1_a": "Yes! The core Pomodoro timer is 100% free.",
        "faq2_q": "What's in the Store?",
        "faq2_a": "You can buy individual themes starting at $0.79 or unlock everything with a pack.",
        "faq3_q": "Is there a subscription?",
        "faq3_a": "No. Pay once, keep forever.",
        "credits": "Credits",
        "privacy": "Privacy Policy",
        "feature_card_1": "Minimalist interface for focus.",
        "feature_card_2": "Calming colors and sounds.",
        "feature_card_3": "Fully customizable.",
        "new_badge": "🔥 New in v1.3.0",
        "critical_title": "Critical Update Engine",
        "critical_desc": "A new engine to deliver critical updates instantly.",
        "feat_stats_title": "Track Your Progress",
        "feat_stats_desc": "Visualize your productivity with the new stats dashboard. Monitor streaks and stay motivated.",
        "feat_share_title": "Share Your Vibe",
        "feat_share_desc": "Generate beautiful shareable cards of your session stats, complete with your current theme background.",
        "feat_rain_title": "Cozy Rain Effects",
        "feat_rain_desc": "Immerse yourself with real-time rain animations. Perfect for deep focus sessions.",
        "new_themes_title": "New Themes",
        "new_themes_desc": "Check out the latest additions to our theme collection.",
        "feat_heatmap_title": "Activity Heatmap",
        "feat_heatmap_desc": "See your daily consistency at a glance with our GitHub-style activity graph.",
        "footer_made_with": "Made with",
        "footer_by": "by",
        "radio_title": "Cozy Radio Preview",
        "radio_loading": "Loading...",
        "feat_sync_title": "Cross-Device Sync",
        "feat_sync_desc": "Save your settings and create an account to access your cozy space from anywhere.",
        "meta_title": "Cozy Pomodoro - Focus Comfortably",
        "meta_desc": "A simple, cozy Pomodoro timer for calm productivity. Full experience is free. No ads, no subs.",
        "faq4_q": "Is my data synced?",
        "faq4_a": "Yes! Create a free account to securely sync your stats, heatmaps, and themes across all your Android devices.",
        "classic_themes_title": "Classic Themes",
        "classic_themes_desc": "The original collection that started it all.",
        "design_flow": "Designed for <strong style='color:var(--primary-color);'>Flow</strong>",
        "design_calm": "Designed for <strong style='color:var(--primary-color);'>Calm</strong>",
        "design_you": "Designed for <strong style='color:var(--primary-color);'>You</strong>",
        "privacy_html": "<h1>Privacy Policy – Cozy Pomodoro (v1.3.0)</h1><p><strong>Last updated:</strong> February 2026<br><strong>Developer:</strong> FatCatGameStudio / Cozy Apps<br><strong>Support email:</strong> fatcatgamestudio.oc@gmail.com<br><strong>Privacy URL:</strong> <a href='https://cozy-pomodoro-landing.vercel.app/#privacy'>https://cozy-pomodoro-landing.vercel.app/#privacy</a></p><h2>1. Overview</h2><p>Cozy Pomodoro is a productivity app based on the Pomodoro technique. The app works offline and stores most settings and progress on-device. If you sign in, Cozy Pomodoro can sync your data across devices using Firebase.</p><h2>2. Data We Collect (and Why)</h2><p>Cozy Pomodoro collects only the data required to provide core functionality and improve stability.</p><h3>2.1 Account & Authentication (Firebase Authentication)</h3><p>When you use Cozy Pomodoro, we use Firebase Authentication to identify your account:</p><ul><li>Anonymous account (guest mode) or Email/Password account.</li><li>Purpose: sign-in, cloud sync, and account management.</li></ul><p>We do not require your real name.</p><h3>2.2 Cloud Sync (Cloud Firestore)</h3><p>If cloud sync is enabled, the app stores app data in Firestore under your account:</p><ul><li>User Progress (e.g., streaks, sessions, stats)</li><li>User Preferences (e.g., timer configuration, selected theme, audio preferences, language)</li></ul><p><strong>Sync behavior:</strong> Sync can run automatically after login and periodically (e.g., every ~5 minutes), and also on key events (session end / preference change), when auto-sync is enabled in the app.</p><p>Purpose: multi-device sync, backup, restore after reinstall.</p><h3>2.3 Device Registry (anti-sharing & device limits)</h3><p>To support device-based limitations and prevent account abuse, Cozy Pomodoro generates a random UUID v4 on each device and stores it locally and in Firestore.</p><ul><li>Device ID: random UUID v4 stored as device_id_v1 (not Android ID / not IDFV)</li><li>Purpose: device registry, enforcing device limits, and account protection</li></ul><h3>2.4 Purchases (RevenueCat + Google Play / App Store)</h3><p>Cozy Pomodoro uses store billing and RevenueCat to manage entitlements:</p><ul><li>App User ID (linked to your Firebase user identifier)</li><li>Purchase/entitlement status</li></ul><p>Cozy Pomodoro does not collect or store your full payment details.</p><h3>2.5 Analytics (Firebase Analytics)</h3><p>We use Firebase Analytics to understand app usage and improve features and performance.</p><ul><li>Events such as screen views and feature usage</li></ul><p>Purpose: product improvement, UX optimization, stability.</p><h3>2.6 Crash Reports (Firebase Crashlytics)</h3><p>We use Crashlytics to collect crash reports and diagnostic data to fix crashes and improve reliability.</p><h2>3. Data We Do NOT Collect</h2><p>Cozy Pomodoro does not intentionally collect:</p><ul><li>precise location</li><li>contacts</li><li>photos/media library access</li><li>sensitive data such as health, financial, biometric, or medical information</li></ul><h2>4. Sharing & Exports</h2><p>When you share content (e.g., a progress card), the app generates a temporary file and opens the system share sheet. We do not automatically save images to your photo gallery.</p><h2>5. Permissions</h2><p>The app requests only permissions required for core features.</p><p><strong>Android:</strong> INTERNET, WAKE_LOCK, POST_NOTIFICATIONS, SCHEDULE_EXACT_ALARM, RECEIVE_BOOT_COMPLETED.<br><strong>iOS:</strong> Notificaciones.</p><h2>6. Data Storage & Security</h2><p>Local data is stored on your device. Cloud data is stored stored in Firebase services (Authentication, Firestore).</p><h2>7. Data Retention</h2><p>We retain cloud data only as needed to provide sync and account features. Local data can be removed by uninstalling the app.</p><h2>8. Delete Account & Data</h2><p>You can delete your account inside the app. This deletes your Firebase Auth account and Firestore data.</p><h2>9. Children’s Privacy</h2><p>Cozy Pomodoro is not designed for children under 13.</p><h2>10. Changes to This Policy</h2><p>We may update this policy occasionally.</p><h2>11. Contact</h2><p>FatCatGameStudio / Cozy Apps<br>Email: fatcatgamestudio.oc@gmail.com</p>",
        "credits_html": "<h1>Credits</h1><p style='margin-bottom: 2rem;'>Thank you to the amazing creators who made this app possible.</p><div class='credit-section'><h3>Music</h3><p><strong>Lo-Fi Tracks</strong> provided by <a href='https://pixabay.com/music/search/lofi/' target='_blank'>Pixabay</a> visuals and artists.</p><p style='font-size: 0.9rem; margin-top: 0.5rem;'>Artists: <em>delosound, fassounds, and more.</em></p></div><div class='credit-section'><h3>Icons</h3><p>Beautiful interface icons by <a href='https://phosphoricons.com' target='_blank'>Phosphor Icons</a>.</p></div><div class='credit-section'><h3>Framework</h3><p>Built with <a href='https://flutter.dev' target='_blank'>Flutter</a>.</p></div>"
    },
    "es": {
        "download": "Descargar",
        "themes": "Temas",
        "nav_themes": "Pack de Temas",
        "nav_privacy": "Privacidad",
        "version_badge": "✨ v1.3.0 Disponible Ahora",
        "hero_title": "Enfócate cómodamente.",
        "hero_subtitle": "El temporizador Pomodoro minimalista para una productividad tranquila.",
        "hero_subtitle_bold": "La experiencia completa es gratis.",
        "cta_download": "Descargar App",
        "cta_explore": "Explorar Temas",
        "hero_note": "Disponible en Android • Sin Anuncios • Privacidad",
        "try_theme": "Prueba un estilo:",
        "social_proof": "Amado por más de 50,000 usuarios",
        "early_adopter": "Únete a los primeros usuarios descubriendo la calma.",
        "how_title": "Diseño Simple",
        "how_subtitle": "Sin desorden. Solo fluidez.",
        "step1_title": "1. Elige Tarea",
        "step1_desc": "Decide qué necesitas hacer.",
        "step2_title": "2. Inicia Timer",
        "step2_desc": "Enfócate por 25 minutos.",
        "step3_title": "3. Relájate",
        "step3_desc": "Toma un breve descanso acogedor.",
        "benefit1": "Sin Anuncios ni Distracciones",
        "benefit2": "Funciona Offline",
        "benefit3": "100% Privado",
        "premium_badge": "Tienda de Temas",
        "premium_title": "Tu Estilo, Tu Elección.",
        "premium_desc": "Compra temas individuales o ahorra con packs. Encuentra el look perfecto.",
        "one_time": "desde",
        "feat_themes": "Temas Individuales y Packs",
        "feat_weather": "Efectos de Clima Dinámicos",
        "feat_support": "Apoya el Desarrollo Indie",
        "feat_no_sub": "Sin Suscripciones",
        "feat_no_lock": "Desbloqueo Permanente",
        "get_pack": "Visitar Tienda",
        "visit_store": "Visitar Tienda",
        "guarantee": "Puramente cosmético. La app es gratis siempre.",
        "card1_title": "Estilos Vibe",
        "card1_benefit": "Crea el Ambiente",
        "card1_desc": "Temas de Color Único",
        "card2_title": "Paisajes Cozy",
        "card2_benefit": "Escapa del Ruido",
        "card2_desc": "Paisajes Animados",
        "card3_title": "Packs de Valor",
        "card3_benefit": "Mejor Valor",
        "card3_desc": "Colecciones de 3 Temas",
        "card4_title": "Ultimate",
        "card4_benefit": "Experiencia Completa",
        "card4_desc": "Packs Especiales de 4",
        "whats_new": "✨ Novedades en",
        "release_notes_v130": "Nueva Tienda de Temas: ¡Compra temas individuales o packs!<br>Vista Previa Premium: Prueba los temas antes de comprar.<br>Mejoras Visuales: Colores ajustados para 'Calm Lake'.<br>Corrección de errores y mejoras de rendimiento.",
        "release_notes_v120": "🌧️ Temas de Lluvia <br> 🔥 Tablero de Rachas <br> 📸 Compartir Visualmente <br> ⏯️ Inicio Automático <br> ✅ Validación Inteligente",
        "faq_title": "Preguntas Frecuentes",
        "faq1_q": "¿La app es gratis?",
        "faq1_a": "¡Sí! El temporizador, las estadísticas y los mapas de calor son 100% gratis y sin anuncios.",
        "faq2_q": "¿Qué hay en la Tienda?",
        "faq2_a": "Puedes comprar temas individuales desde $0.79 o desbloquear todo con un pack.",
        "faq3_q": "¿Hay suscripción?",
        "faq3_a": "No. Trabajamos con Paquetes de pago único. Pagas una vez y es tuyo para siempre.",
        "credits": "Créditos",
        "privacy": "Política de Privacidad",
        "feature_card_1": "Interfaz minimalista diseñada para mantenerte en la zona.",
        "feature_card_2": "Colores y sonidos relajantes para reducir la ansiedad.",
        "feature_card_3": "Configuraciones de temporizador y temas totalmente personalizables.",
        "design_flow": "Diseñado para <strong style='color:var(--primary-color);'>Fluir</strong>",
        "design_calm": "Diseñado para la <strong style='color:var(--primary-color);'>Calma</strong>",
        "design_you": "Diseñado para <strong style='color:var(--primary-color);'>Ti</strong>",
        "new_badge": "🔥 Nuevo en v1.3.0",
        "critical_title": "Motor de Actualizaciones Críticas",
        "critical_desc": "Hemos construido un nuevo motor robusto para entregar actualizaciones críticas al instante.",
        "feat_stats_title": "Sigue tu Progreso",
        "feat_stats_desc": "Visualiza tu productividad con el nuevo Tablero de Estadísticas. Monitorea rachas, tiempo total de enfoque y mantente motivado.",
        "feat_share_title": "Comparte tu Vibe",
        "feat_share_desc": "Genera hermosas tarjetas compartibles de tus estadísticas, completas con el fondo de tu tema actual.",
        "feat_rain_title": "Efectos de Lluvia",
        "feat_rain_desc": "Sumérgete con animaciones de lluvia en tiempo real y ambientes tormentosos. Perfecto para sesiones de enfoque profundo.",
        "new_themes_title": "Nuevos Temas",
        "new_themes_desc": "Descubre las últimas adiciones a nuestra colección de temas.",
        "feat_heatmap_title": "Mapa de Actividad",
        "feat_heatmap_desc": "Visualiza tu constancia diaria de un vistazo con nuestro gráfico de actividad.",
        "faq4_q": "¿Mis datos se sincronizan?",
        "faq4_a": "¡Sí! Crea una cuenta gratis para respaldar tus estadísticas, mapas de calor y temas en todos tus dispositivos Android.",
        "classic_themes_title": "Temas Clásicos",
        "classic_themes_desc": "La colección original con la que empezamos todo.",
        "footer_made_with": "Hecho con",
        "footer_by": "por",
        "radio_title": "Vista Previa Radio Cozy",
        "radio_loading": "Cargando...",
        "feat_sync_title": "Sincroniza en tus Dispositivos",
        "feat_sync_desc": "Guarda tus preferencias y crea una cuenta para acceder a tu espacio cozy desde donde sea.",
        "meta_title": "Cozy Pomodoro - Enfócate Cómodamente",
        "meta_desc": "Un temporizador Pomodoro simple y acogedor. Experiencia completa gratis. Sin anuncios ni suscripciones.",
        "privacy_html": "<h1>Política de Privacidad – Cozy Pomodoro (v1.3.0)</h1><p><strong>Última actualización:</strong> Febrero 2026<br><strong>Desarrollador:</strong> FatCatGameStudio / Cozy Apps<br><strong>Email de soporte:</strong> fatcatgamestudio.oc@gmail.com<br><strong>URL de Privacidad:</strong> <a href='https://cozy-pomodoro-landing.vercel.app/#privacy'>https://cozy-pomodoro-landing.vercel.app/#privacy</a></p><h2>1. Resumen</h2><p>Cozy Pomodoro es una aplicación de productividad basada en la técnica Pomodoro. La app funciona sin conexión y almacena la mayoría de las configuraciones y el progreso en el dispositivo. Si inicias sesión, Cozy Pomodoro puede sincronizar tus datos entre dispositivos usando Firebase.</p><h2>2. Datos que Recopilamos (y Por Qué)</h2><p>Cozy Pomodoro recopila solo los datos requeridos para brindar la funcionalidad principal y mejorar la estabilidad.</p><h3>2.1 Cuenta y Autenticación (Firebase Authentication)</h3><p>Cuando usas Cozy Pomodoro, usamos Firebase Authentication para identificar tu cuenta:</p><ul><li>Cuenta anónima (modo invitado) o cuenta de Correo/Contraseña.</li><li>Propósito: inicio de sesión, sincronización en la nube y gestión de cuentas.</li></ul><p>No requerimos tu nombre real.</p><h3>2.2 Sincronización en la Nube (Cloud Firestore)</h3><p>Si la sincronización en la nube está habilitada, la app almacena datos en Firestore bajo tu cuenta:</p><ul><li>Progreso del Usuario (por ej., rachas, sesiones, estadísticas)</li><li>Preferencias del Usuario (por ej., configuración del temporizador, tema seleccionado, preferencias de audio, idioma)</li></ul><p><strong>Comportamiento de sincronización:</strong> La sincronización puede ejecutarse automáticamente después del inicio de sesión y periódicamente (por ej., cada ~5 minutos), y también en eventos clave (fin de sesión / cambio de preferencia), cuando la autosincronización está habilitada en la app.</p><p>Propósito: sincronización multidispositivo, respaldo, restauración tras reinstalar.</p><h3>2.3 Registro de Dispositivos (anti-compartir y límites de dispositivos)</h3><p>Para admitir limitaciones basadas en dispositivos y prevenir el abuso de cuentas, Cozy Pomodoro genera un UUID v4 aleatorio en cada dispositivo y lo almacena localmente y en Firestore.</p><ul><li>ID de Dispositivo: UUID v4 aleatorio almacenado como device_id_v1 (no Android ID / no IDFV)</li><li>Propósito: registro de dispositivos, aplicación de límites de dispositivos y protección de cuentas.</li></ul><h3>2.4 Compras (RevenueCat + Google Play / App Store)</h3><p>Cozy Pomodoro utiliza facturación de tienda y RevenueCat para gestionar derechos:</p><ul><li>ID de Usuario de App (vinculado a tu identificador de usuario de Firebase)</li><li>Estado de compra/derecho</li></ul><p>Cozy Pomodoro no recopila ni almacena tus detalles de pago completos.</p><h3>2.5 Análisis (Firebase Analytics)</h3><p>Usamos Firebase Analytics para entender el uso de la app y mejorar funciones y rendimiento.</p><ul><li>Eventos como vistas de pantalla y uso de funciones</li></ul><p>Propósito: mejora del producto, optimización de UX, estabilidad.</p><h3>2.6 Informes de Fallos (Firebase Crashlytics)</h3><p>Usamos Crashlytics para recopilar informes de fallos y datos de diagnóstico para corregir errores y mejorar la fiabilidad.</p><h2>3. Datos que NO Recopilamos</h2><p>Cozy Pomodoro no recopila intencionalmente:</p><ul><li>ubicación precisa</li><li>contactos</li><li>acceso a biblioteca de fotos/multimedia</li><li>datos sensibles como información de salud, financiera, biométrica o médica</li></ul><h2>4. Compartir y Exportar</h2><p>Cuando compartes contenido (por ej., una tarjeta de progreso), la app genera un archivo temporal y abre la hoja de compartir del sistema. No guardamos imágenes automáticamente en tu galería de fotos.</p><h2>5. Permisos</h2><p>La app solicita solo los permisos requeridos para funciones principales.</p><p><strong>Android:</strong> INTERNET, WAKE_LOCK, POST_NOTIFICATIONS, SCHEDULE_EXACT_ALARM, RECEIVE_BOOT_COMPLETED.<br><strong>iOS:</strong> Notificaciones.</p><h2>6. Almacenamiento y Seguridad de Datos</h2><p>Los datos locales se almacenan en tu dispositivo. Los datos en la nube se almacenan en servicios de Firebase (Autenticación, Firestore).</p><h2>7. Retención de Datos</h2><p>Retenemos datos en la nube solo según sea necesario para proporcionar funciones de sincronización y cuenta. Los datos locales pueden eliminarse desinstalando la app.</p><h2>8. Eliminar Cuenta y Datos</h2><p>Puedes eliminar tu cuenta dentro de la app. Esto elimina tu cuenta de Firebase Auth y los datos de Firestore.</p><h2>9. Privacidad de los Niños</h2><p>Cozy Pomodoro no está diseñado para niños menores de 13 años.</p><h2>10. Cambios en esta Política</h2><p>Podemos actualizar esta política ocasionalmente.</p><h2>11. Contacto</h2><p>FatCatGameStudio / Cozy Apps<br>Email: fatcatgamestudio.oc@gmail.com</p>",
        "credits_html": "<h1>Créditos</h1><p style='margin-bottom: 2rem;'>Gracias a los increíbles creadores que hicieron posible esta aplicación.</p><div class='credit-section'><h3>Música</h3><p><strong>Pistas Lo-Fi</strong> proporcionadas por visuales y artistas de <a href='https://pixabay.com/music/search/lofi/' target='_blank'>Pixabay</a>.</p><p style='font-size: 0.9rem; margin-top: 0.5rem;'>Artistas: <em>delosound, fassounds, y más.</em></p></div><div class='credit-section'><h3>Iconos</h3><p>Hermosos iconos de interfaz por <a href='https://phosphoricons.com' target='_blank'>Phosphor Icons</a>.</p></div><div class='credit-section'><h3>Framework</h3><p>Creado con <a href='https://flutter.dev' target='_blank'>Flutter</a>.</p></div>"
    }
};

async function loadLanguage(lang) {
    try {
        const response = await fetch(`locales/${lang}.json`);
        if (!response.ok) throw new Error(`Could not load ${lang}`);
        const data = await response.json();
        translations[lang] = data;
        return data;
    } catch (e) {
        console.warn(`Failed to load language: ${lang}, using fallback/default.`);

        // 1. Try to load requested language from defaultTranslations
        if (defaultTranslations[lang]) {
            translations[lang] = defaultTranslations[lang];
            return defaultTranslations[lang];
        }

        // 2. Fallback to English from defaultTranslations
        if (defaultTranslations['en']) {
            translations[lang] = defaultTranslations['en'];
            return defaultTranslations['en'];
        }
        return null;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Detect Language
    const savedLang = localStorage.getItem('cozy_lang') || navigator.language.slice(0, 2);
    const supportedLangs = ['en', 'es', 'fr', 'de', 'it', 'pt', 'ja', 'ko'];
    let currentLang = supportedLangs.includes(savedLang) ? savedLang : 'en';

    // 2. Load Translations
    const data = await loadLanguage(currentLang);
    if (data) {
        updateContent(currentLang);
    }

    // Theme Switcher Logic
    const themeButtons = document.querySelectorAll('.theme-btn');
    const root = document.documentElement;

    function applyTheme(themeKey) {
        const theme = themes[themeKey];
        if (!theme) return;
        Object.keys(theme).forEach(key => {
            root.style.setProperty(key, theme[key]);
        });
        localStorage.setItem('cozy_theme', themeKey);

        // Update active state
        themeButtons.forEach(b => b.classList.remove('active'));
        const activeBtn = document.querySelector(`.theme-btn[data-theme="${themeKey}"]`);
        if (activeBtn) activeBtn.classList.add('active');
    }

    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            applyTheme(btn.dataset.theme);
        });
    });

    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.addEventListener('change', async (e) => {
            handleLanguageChange(e.target.value);
        });
    }

    // Language Switcher (Buttons)
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            handleLanguageChange(btn.dataset.lang);
        });
    });

    async function handleLanguageChange(newLang) {
        currentLang = newLang;
        localStorage.setItem('cozy_lang', currentLang);
        const newData = await loadLanguage(currentLang);
        if (newData) updateContent(currentLang);

        // Sync select if exists
        if (langSelect) langSelect.value = currentLang;
    }

    function updateContent(lang) {
        const t = translations[lang] || translations['en'];
        if (!t) return;

        window.currentAppLanguage = lang;

        // Update Title & Meta
        if (t.meta_title) {
            document.title = t.meta_title;
        }
        if (t.meta_desc) {
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.content = t.meta_desc;
        }

        // Update Text Content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                if (el.tagName === 'META') el.setAttribute('content', t[key]);
                else if (key.includes('notes') || key.includes('desc') || key.includes('html')) el.innerHTML = t[key];
                else el.textContent = t[key];
            }
        });

        // Update Modals Content
        const privacyBody = document.getElementById('privacy-text');
        if (privacyBody && t.privacy_html) privacyBody.innerHTML = t.privacy_html;

        const creditsBody = document.getElementById('credits-text');
        if (creditsBody && t.credits_html) creditsBody.innerHTML = t.credits_html;

        // Update images if function exists
        if (typeof updateLocalizedImages === 'function') {
            updateLocalizedImages(lang);
        }

        // Update language buttons active state if they exist
        const langButtons = document.querySelectorAll('.lang-btn');
        if (langButtons.length > 0) {
            langButtons.forEach(btn => btn.classList.remove('active'));
            const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
            if (activeBtn) activeBtn.classList.add('active');
        }
    }

    // Check for saved theme
    const savedTheme = localStorage.getItem('cozy_theme') || 'cozyLight';
    applyTheme(savedTheme);

    // Initial check for hash
    if (typeof checkHashOnLoad === 'function') {
        checkHashOnLoad();
    }
});

// Language to image prefix mapping
const langToImagePrefix = {
    'en': 'EN',
    'es': 'ES',
    'fr': 'FR',
    'de': 'DE',
    'it': 'IT',
    'pt': 'PT',
    'ja': 'JP',
    'ko': 'CO'
};

function updateLocalizedImages(lang) {
    const prefix = langToImagePrefix[lang] || 'EN';
    const themeImg1 = document.getElementById('theme-img-1');
    const themeImg2 = document.getElementById('theme-img-2');

    if (themeImg1) {
        themeImg1.src = `assets/NewThemes_1.2/${prefix}_1.jpeg`;
    }
    if (themeImg2) {
        themeImg2.src = `assets/NewThemes_1.2/${prefix}_2.jpeg`;
    }
}

// --- Modal Logic with History Support ---

// Generic Modal Closer
function closeAllModals() {
    // Hide all modals
    const modals = document.querySelectorAll('.lightbox-modal'); // Assuming modals have this class or similar
    modals.forEach(m => m.style.display = 'none');
    document.body.style.overflow = '';
}

window.openPrivacyMock = function () {
    const modal = document.getElementById('privacy-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        // Push history state so Back button closes modal
        history.pushState({ modal: 'privacy' }, 'Privacy Policy', '#privacy');
    }
};

window.closePrivacyMock = function () {
    const modal = document.getElementById('privacy-modal');
    if (modal && modal.style.display !== 'none') {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        // If we closed it manually, go back in history if state matches
        if (history.state && history.state.modal === 'privacy') {
            history.back();
        }
    }
};

window.openCreditsMock = function () {
    const modal = document.getElementById('credits-modal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        // Push history state so Back button closes modal
        history.pushState({ modal: 'credits' }, 'Credits', '#credits');
    }
};

window.closeCreditsMock = function () {
    const modal = document.getElementById('credits-modal');
    if (modal && modal.style.display !== 'none') {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        // If we closed it manually, go back in history if state matches
        if (history.state && history.state.modal === 'credits') {
            history.back();
        }
    }
};

// Handle Back Button (Popstate)
window.addEventListener('popstate', (event) => {
    // If we pop state, we should close any open modal
    closeAllModals();
});


// Bind Privacy Links (Header and Footer)
const startListeners = () => {
    document.querySelectorAll('a[href="#privacy"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openPrivacyMock();
        });
    });

    // Bind Credits Links (Footer)
    document.querySelectorAll('a[href="#credits"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openCreditsMock();
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Ignore privacy/credits links for smooth scroll
            if (this.getAttribute('href') === '#privacy' || this.getAttribute('href') === '#credits') return;

            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
};
// Run listener binding after load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startListeners);
} else {
    startListeners();
}


// Cozy Radio Logic w/ Artists
const tracks = [
    { name: "Coffee Lofi", artist: "delosound", src: "assets/music/track1.mp3" },
    { name: "Lofi Study", artist: "fassounds", src: "assets/music/track2.mp3" }
];

const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const trackNameEl = document.getElementById('track-name');
const trackArtistEl = document.getElementById('track-artist');
const radioWidget = document.querySelector('.radio-widget');

let isPlaying = false;
let currentTrackIndex = -1;

function playRandomTrack() {
    let nextIndex;
    do {
        nextIndex = Math.floor(Math.random() * tracks.length);
    } while (nextIndex === currentTrackIndex && tracks.length > 1);

    currentTrackIndex = nextIndex;
    playTrack(currentTrackIndex);
}

function playTrack(index) {
    const track = tracks[index];
    if (audioPlayer) {
        audioPlayer.src = track.src;
        if (trackNameEl) trackNameEl.textContent = track.name;

        const currentLang = window.currentAppLanguage || 'en';
        const byText = (translations[currentLang] && translations[currentLang].footer_by) ? translations[currentLang].footer_by : "by";
        if (trackArtistEl) trackArtistEl.textContent = byText + " " + track.artist;

        audioPlayer.play().then(() => {
            isPlaying = true;
            updatePlayButton();
        }).catch(err => {
            console.error("Audio playback failed:", err);
            isPlaying = false;
            updatePlayButton();
        });
    }
}

function togglePlayPause() {
    if (!audioPlayer) return;
    if (currentTrackIndex === -1) {
        playRandomTrack();
    } else {
        if (isPlaying) {
            audioPlayer.pause();
            isPlaying = false;
        } else {
            audioPlayer.play();
            isPlaying = true;
        }
        updatePlayButton();
    }
}

function updatePlayButton() {
    if (playPauseBtn) playPauseBtn.textContent = isPlaying ? "⏸" : "▶";

    // Toggle Breathing Animation on Widget
    if (radioWidget) {
        if (isPlaying) {
            radioWidget.classList.add('playing');
        } else {
            radioWidget.classList.remove('playing');
        }
    }
}

if (playPauseBtn) playPauseBtn.addEventListener('click', togglePlayPause);
if (audioPlayer) audioPlayer.addEventListener('ended', playRandomTrack);

// Initial State
if (trackNameEl) trackNameEl.textContent = "Click Play to Focus";
if (trackArtistEl) trackArtistEl.textContent = "";

// Sticky CTA Logic
const stickyCta = document.getElementById('sticky-cta');
const heroSection = document.querySelector('.hero');

if (stickyCta && heroSection) {
    window.addEventListener('scroll', () => {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        if (heroBottom < 0) {
            stickyCta.classList.remove('hidden');
        } else {
            stickyCta.classList.add('hidden');
        }
    });
}

// Scroll Reveal Animation Logic
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, {
    root: null,
    threshold: 0.15, // Trigger when 15% visible
    rootMargin: "0px"
});

revealElements.forEach(el => revealObserver.observe(el));


// Initialize Swiper (Check if Swiper exists)
if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: "auto",
        spaceBetween: 40,
        loop: true,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        speed: 1000,
    });
}

// Check for hash on load
function checkHashOnLoad() {
    if (window.location.hash === '#privacy') {
        const modal = document.getElementById('privacy-modal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            // Replace state so we have the state object but don't duplicate the history entry
            history.replaceState({ modal: 'privacy' }, 'Privacy Policy', '#privacy');
        }
    } else if (window.location.hash === '#credits') {
        const modal = document.getElementById('credits-modal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            history.replaceState({ modal: 'credits' }, 'Credits', '#credits');
        }
    }
}

// --- Mouse Parallax Logic ---
const parallaxLayers = document.querySelectorAll('.parallax-layer');
if (parallaxLayers.length > 0) {
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        parallaxLayers.forEach((layer, index) => {
            const speed = (index + 1) * 2; // Different speeds
            layer.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
        });
    });
}

// --- Staggered Animation Injection ---
const featureCards = document.querySelectorAll('.feature-card-lg');
featureCards.forEach((card, index) => {
    card.classList.add('reveal');
    // Add stagger delay class based on index (1, 2, 3)
    card.classList.add(`stagger-${(index % 3) + 1}`);
    // Re-observe since we added classes dynamically
    revealObserver.observe(card);
});

// --- Lightbox Functions ---
function openLightbox(imageSrc) {
    const modal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    if (modal && lightboxImg) {
        lightboxImg.src = imageSrc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scroll when modal is open
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    }
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// --- Random Hero Image Logic ---
const heroImages = [
    "alpine_marketing-carousel.webp", "autumn_warmth_marketing-carousel.webp",
    "calm_lake_marketing-carousel.webp", "city_lights_marketing-carousel.webp",
    "cosmic_vibe_marketing-carousel.webp", "cozy_cafe_marketing-carousel.webp",
    "cozy_dark_marketing-carousel.webp", "cozy_light_marketing-carousel.webp",
    "cyberpunk_marketing-carousel.webp", "forest_house_marketing-carousel.webp",
    "forest_vibes_marketing-carousel.webp", "golden_hour_marketing-carousel.webp",
    "lavender_dreams_marketing-carousel.webp", "minimal_cozy_marketing-carousel.webp",
    "mountain_mist_marketing-carousel.webp", "nature_marketing-carousel.webp",
    "neon_city_marketing-carousel.webp", "ocean_breeze_marketing-carousel.webp",
    "ocean_marketing-carousel.webp", "pastel_marketing-carousel.webp",
    "rainy_day_marketing-carousel.webp", "rainy_window_marketing-carousel.webp",
    "royal_library_marketing-carousel.webp", "sakura_garden_marketing-carousel.webp",
    "sakura_season_marketing-carousel.webp", "secret_garden_marketing-carousel.webp",
    "spring_marketing-carousel.webp", "storm_window_marketing-carousel.webp",
    "summer_vibes_marketing-carousel.webp", "sunny_day_marketing-carousel.webp",
    "sunset_serenity_marketing-carousel.webp", "winter_home_marketing-carousel.webp"
];

const heroImgEl = document.getElementById('hero-image');
// Ensure it runs after DOM content is loaded, or if script is deferred/at end of body:
if (heroImgEl) {
    // Only change it if we have images
    if (heroImages.length > 0) {
        const randomHeroIndex = Math.floor(Math.random() * heroImages.length);
        heroImgEl.src = `assets/carousel/${heroImages[randomHeroIndex]}`;
    }
}

console.log("Cozy Pomodoro Landing Page - Loaded Logic ✨");
