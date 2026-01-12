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

// Language Dictionary (Full Implementation)
const translations = {
    en: {
        download: "Download",
        themes: "Themes",
        nav_themes: "Theme Pack",
        nav_privacy: "Privacy",
        version_badge: "✨ v1.2.0 Available Now",
        hero_title: "Focus comfortably.",
        hero_subtitle: "The minimal Pomodoro timer for calm productivity.",
        hero_subtitle_bold: "Full experience is free. Themes optional.",
        cta_download: "Download App",
        cta_explore: "Explore Themes",
        hero_note: "Available on Android • No Ads • Privacy First",
        try_theme: "Try a style:",
        social_proof: "Loved by 50,000+ focusers worldwide",
        early_adopter: "Join the first users discovering calm focus.",
        how_title: "Simple by Design",
        how_subtitle: "No clutter. Just flow.",
        step1_title: "1. Pick a Task",
        step1_desc: "Decide what needs to be done.",
        step2_title: "2. Start Timer",
        step2_desc: "Focus for 25 minutes (or customize).",
        step3_title: "3. Relax",
        step3_desc: "Take a short cozy break.",
        benefit1: "No Ads or Distractions",
        benefit2: "Works Offline",
        benefit3: "100% Privacy Friendly",
        premium_badge: "Premium Pack",
        premium_title: "Make it yours.",
        premium_desc: "Unlock the full collection of cozy themes to match your mood, time of day, or aesthetic.",
        one_time: "one-time",
        feat_themes: "8+ Premium Themes",
        feat_weather: "Dynamic Weather Effects",
        feat_support: "Support Indie Development",
        feat_no_sub: "No Subscriptions",
        feat_no_lock: "No Locked Features",
        get_pack: "Get Theme Pack",
        guarantee: "Purely cosmetic. App remains free forever.",
        whats_new: "✨ What's New in",
        release_notes_latest: "🌧️ Immersive Rain Themes <br> 🔥 Stats & Streak Dashboard <br> 📸 Visual Sharing Cards <br> ⏯️ Smart Auto-Start <br> ✅ Input Validation",
        faq_title: "Frequently Asked Questions",
        faq1_q: "Is the app free?",
        faq1_a: "Yes! The core Pomodoro timer, stats, and standard features are 100% free with no ads.",
        faq2_q: "What plays in the Theme Pack?",
        faq2_a: "The Theme Pack is a one-time purchase of $3.99 that unlocks all premium color themes and weather animations.",
        faq3_q: "Is there a subscription?",
        faq3_a: "No. We hate subscriptions too. You pay once for the Theme Pack and keep it forever.",
        credits: "Credits",
        privacy: "Privacy Policy",
        feature_card_1: "Minimalist interface designed to keep you in the zone.",
        feature_card_2: "Soothing colors and sounds to reduce anxiety.",
        feature_card_3: "Fully customizable timer settings and themes.",
        design_flow: "Designed for <strong style='color:var(--primary-color);'>Flow</strong>",
        design_calm: "Designed for <strong style='color:var(--primary-color);'>Calm</strong>",
        design_you: "Designed for <strong style='color:var(--primary-color);'>You</strong>",
        new_badge: "🔥 New in v1.2.0",
        critical_title: "Critical Updates Engine",
        critical_desc: "We've built a robust new engine to deliver critical updates instantly.",
        feat_stats_title: "Track Your Progress",
        feat_stats_desc: "Visualize your productivity with our new Stats Dashboard. Monitor streaks, total focus time, and stay motivated every day.",
        feat_share_title: "Share Your Vibe",
        feat_share_desc: "Generate beautiful, shareable cards of your session stats, complete with your current theme's background.",
        feat_rain_title: "Cozy Rain Effects",
        feat_rain_desc: "Immerse yourself with real-time rain animations and stormy ambiances. Perfect for deep focus sessions.",
        new_themes_title: "New Themes",
        new_themes_desc: "Check out the latest additions to our theme collection."
    },
    es: {
        download: "Descargar",
        themes: "Temas",
        nav_themes: "Pack de Temas",
        nav_privacy: "Privacidad",
        version_badge: "✨ v1.2.0 Disponible Ahora",
        hero_title: "Enfócate cómodamente.",
        hero_subtitle: "El temporizador Pomodoro minimalista para una productividad tranquila.",
        hero_subtitle_bold: "La experiencia completa es gratis.",
        cta_download: "Descargar App",
        cta_explore: "Explorar Temas",
        hero_note: "Disponible en Android • Sin Anuncios • Privacidad",
        try_theme: "Prueba un estilo:",
        social_proof: "Amado por más de 50,000 usuarios",
        early_adopter: "Únete a los primeros usuarios descubriendo la calma.",
        how_title: "Diseño Simple",
        how_subtitle: "Sin desorden. Solo fluidez.",
        step1_title: "1. Elige Tarea",
        step1_desc: "Decide qué necesitas hacer.",
        step2_title: "2. Inicia Timer",
        step2_desc: "Enfócate por 25 minutos.",
        step3_title: "3. Relájate",
        step3_desc: "Toma un breve descanso acogedor.",
        benefit1: "Sin Anuncios ni Distracciones",
        benefit2: "Funciona Offline",
        benefit3: "100% Privado",
        premium_badge: "Pack Premium",
        premium_title: "Hazlo tuyo.",
        premium_desc: "Desbloquea la colección completa de temas acogedores para combinar con tu estado de ánimo.",
        one_time: "pago único",
        feat_themes: "8+ Temas Premium",
        feat_weather: "Efectos de Clima Dinámicos",
        feat_support: "Apoya el Desarrollo Indie",
        feat_no_sub: "Sin Suscripciones",
        feat_no_lock: "Sin Funciones Bloqueadas",
        get_pack: "Obtener Pack de Temas",
        guarantee: "Puramente cosmético. La app es gratis siempre.",
        whats_new: "✨ Novedades en",
        release_notes_latest: "🌧️ Temas de Lluvia <br> 🔥 Tablero de Rachas <br> 📸 Compartir Visualmente <br> ⏯️ Inicio Automático <br> ✅ Validación Inteligente",
        faq_title: "Preguntas Frecuentes",
        faq1_q: "¿La app es gratis?",
        faq1_a: "¡Sí! La aplicación funciona genial gratis y sin anuncios.",
        faq2_q: "¿Qué incluye el Pack?",
        faq2_a: "El Pack de Temas desbloquea todos los temas, con animaciones, fondos y looks únicos por $3.99.",
        faq3_q: "¿Hay suscripción?",
        faq3_a: "No. Odiamos las suscripciones. Pagas una vez y es tuyo para siempre.",
        credits: "Créditos",
        privacy: "Política de Privacidad",
        feature_card_1: "Interfaz minimalista diseñada para mantenerte en la zona.",
        feature_card_2: "Colores y sonidos relajantes para reducir la ansiedad.",
        feature_card_3: "Configuraciones de temporizador y temas totalmente personalizables.",
        design_flow: "Diseñado para <strong style='color:var(--primary-color);'>Fluir</strong>",
        design_calm: "Diseñado para la <strong style='color:var(--primary-color);'>Calma</strong>",
        design_you: "Diseñado para <strong style='color:var(--primary-color);'>Ti</strong>",
        new_badge: "🔥 Nuevo en v1.2.0",
        critical_title: "Motor de Actualizaciones Críticas",
        critical_desc: "Hemos construido un nuevo motor robusto para entregar actualizaciones críticas al instante.",
        feat_stats_title: "Sigue tu Progreso",
        feat_stats_desc: "Visualiza tu productividad con el nuevo Tablero de Estadísticas. Monitorea rachas, tiempo total de enfoque y mantente motivado.",
        feat_share_title: "Comparte tu Vibe",
        feat_share_desc: "Genera hermosas tarjetas compartibles de tus estadísticas, completas con el fondo de tu tema actual.",
        feat_rain_title: "Efectos de Lluvia",
        feat_rain_desc: "Sumérgete con animaciones de lluvia en tiempo real y ambientes tormentosos. Perfecto para sesiones de enfoque profundo.",
        new_themes_title: "Nuevos Temas",
        new_themes_desc: "Descubre las últimas adiciones a nuestra colección de temas."
    },
    fr: {
        download: "Télécharger",
        themes: "Thèmes",
        nav_themes: "Pack Thèmes",
        nav_privacy: "Confidentialité",
        version_badge: "✨ v1.2.0 Disponible",
        hero_title: "Concentrez-vous confortablement.",
        hero_subtitle: "Le minuteur Pomodoro minimaliste pour une productivité calme.",
        hero_subtitle_bold: "Expérience complète gratuite.",
        cta_download: "Télécharger",
        cta_explore: "Voir les Thèmes",
        hero_note: "Sur Android • Sans Pubs • Privé",
        try_theme: "Essayez un style :",
        early_adopter: "Rejoignez les premiers utilisateurs découvrant le calme.",
        how_title: "Conception Simple",
        how_subtitle: "Pas de désordre. Juste le flux.",
        step1_title: "1. Choisissez une tâche",
        step1_desc: "Décidez ce qui doit être fait.",
        step2_title: "2. Lancez le minuteur",
        step2_desc: "Concentrez-vous 25 minutes.",
        step3_title: "3. Détendez-vous",
        step3_desc: "Prenez une courte pause confortable.",
        benefit1: "Pas de Pubs ni Distractions",
        benefit2: "Fonctionne hors ligne",
        benefit3: "100% Respectueux de la vie privée",
        premium_badge: "Pack Premium",
        premium_title: "Faites-le vôtre.",
        premium_desc: "Débloquez la collection complète de thèmes confortables.",
        one_time: "paiement unique",
        feat_themes: "8+ Thèmes Premium",
        feat_weather: "Météo Dynamique",
        feat_support: "Soutenez le Développement Indé",
        feat_no_sub: "Pas d'abonnement",
        feat_no_lock: "Pas de fonctionnalités bloquées",
        get_pack: "Obtenir le Pack",
        guarantee: "Purement cosmétique. L'appli reste gratuite.",
        whats_new: "✨ Quoi de neuf en",
        release_notes_latest: "🌧️ Thèmes Pluvieux <br> 🔥 Stats & Séries <br> 📸 Partage Visuel <br> ⏯️ Démarrage Auto <br> ✅ Validation Intelligente",
        faq_title: "Questions Fréquentes",
        faq1_q: "L'appli est-elle gratuite ?",
        faq1_a: "Oui ! Le minuteur Pomodoro de base est 100% gratuit sans publicité.",
        faq2_q: "Que contient le Pack ?",
        faq2_a: "Le Pack Thèmes débloque tous les thèmes premium et la météo pour 3,99 $.",
        faq3_q: "Y a-t-il un abonnement ?",
        faq3_a: "Non. Payez une fois, gardez-le pour toujours.",
        credits: "Crédits",
        privacy: "Politique de Confidentialité",
        feature_card_1: "Interface minimaliste pour rester dans la zone.",
        feature_card_2: "Couleurs et sons apaisants.",
        feature_card_3: "Minuteur et thèmes entièrement personnalisables.",
        new_badge: "🔥 Nouveau dans la v1.2.0",
        critical_title: "Moteur de Mises à Jour Critiques",
        critical_desc: "Un nouveau moteur robuste pour fournir des mises à jour critiques instantanément.",
        feat_stats_title: "Suivez vos Progrès",
        feat_stats_desc: "Visualisez votre productivité avec le nouveau tableau de bord. Surveillez vos séries et restez motivé.",
        feat_share_title: "Partagez votre Vibe",
        feat_share_desc: "Générez de belles cartes partageables de vos stats, avec l'arrière-plan de votre thème actuel.",
        feat_rain_title: "Effets de Pluie",
        feat_rain_desc: "Immergez-vous avec des animations de pluie en temps réel. Parfait pour une concentration profonde.",
        new_themes_title: "Nouveaux Thèmes",
        new_themes_desc: "Découvrez les derniers ajouts à notre collection de thèmes."
    },
    de: {
        download: "Herunterladen",
        themes: "Themen",
        nav_themes: "Themen-Paket",
        nav_privacy: "Datenschutz",
        version_badge: "✨ v1.2.0 Jetzt Verfügbar",
        hero_title: "Konzentrieren Sie sich bequem.",
        hero_subtitle: "Der minimalistische Pomodoro-Timer für ruhige Produktivität.",
        hero_subtitle_bold: "Vollständige Erfahrung ist kostenlos.",
        cta_download: "App Laden",
        cta_explore: "Themen Erkunden",
        hero_note: "Auf Android • Keine Werbung • Privat",
        try_theme: "Stil testen:",
        early_adopter: "Entdecken Sie ruhigen Fokus.",
        how_title: "Einfaches Design",
        how_subtitle: "Kein Durcheinander. Nur Flow.",
        step1_title: "1. Aufgabe wählen",
        step1_desc: "Entscheiden Sie, was zu tun ist.",
        step2_title: "2. Timer starten",
        step2_desc: "Fokus für 25 Minuten.",
        step3_title: "3. Entspannen",
        step3_desc: "Machen Sie eine kurze gemütliche Pause.",
        benefit1: "Keine Werbung",
        benefit2: "Funktioniert Offline",
        benefit3: "100% Datenschutz",
        premium_badge: "Premium Paket",
        premium_title: "Machen Sie es zu Ihrem.",
        premium_desc: "Schalten Sie alle gemütlichen Themen frei.",
        one_time: "einmalig",
        feat_themes: "8+ Premium Themen",
        feat_weather: "Dynamisches Wetter",
        feat_support: "Indie-Entwicklung unterstützen",
        feat_no_sub: "Kein Abo",
        feat_no_lock: "Keine gesperrten Funktionen",
        get_pack: "Paket Hinzufügen",
        guarantee: "Rein kosmetisch. App bleibt kostenlos.",
        whats_new: "✨ Neu in",
        release_notes_latest: "🌧️ Regenthemen <br> 🔥 Statistik & Serien <br> 📸 Visuelles Teilen <br> ⏯️ Smart Auto-Start <br> ✅ Eingabevalidierung",
        faq_title: "Häufige Fragen",
        faq1_q: "Ist die App kostenlos?",
        faq1_a: "Ja! Der Kern-Pomodoro-Timer ist 100% kostenlos.",
        faq2_q: "Was ist im Paket?",
        faq2_a: "Das Themen-Paket schaltet alle Premium-Farben für 3,99 $ frei.",
        faq3_q: "Gibt es ein Abo?",
        faq3_a: "Nein. Einmal zahlen, für immer behalten.",
        credits: "Credits",
        privacy: "Datenschutzerklärung",
        feature_card_1: "Minimalistisches Interface für Fokus.",
        feature_card_2: "Beruhigende Farben und Töne.",
        feature_card_3: "Vollständig anpassbar.",
        new_badge: "🔥 Neu in v1.2.0",
        critical_title: "Kritische Update-Engine",
        critical_desc: "Eine neue Engine, um kritische Updates sofort bereitzustellen.",
        feat_stats_title: "Verfolgen Sie Ihren Fortschritt",
        feat_stats_desc: "Visualisieren Sie Ihre Produktivität mit dem neuen Statistik-Dashboard. Überwachen Sie Serien und bleiben Sie motiviert.",
        feat_share_title: "Teilen Sie Ihren Vibe",
        feat_share_desc: "Erstellen Sie schöne Karten Ihrer Sitzungsstatistiken, komplett mit Ihrem aktuellen Themenhintergrund.",
        feat_rain_title: "Gemütliche Regeneffekte",
        feat_rain_desc: "Tauchen Sie ein in Echtzeit-Regenanimationen. Perfekt für tiefe Fokussitzungen.",
        new_themes_title: "Neue Themen",
        new_themes_desc: "Entdecken Sie die neuesten Ergänzungen unserer Themensammlung."
    },
    it: {
        download: "Scarica",
        themes: "Temi",
        nav_themes: "Pacchetto Temi",
        nav_privacy: "Privacy",
        version_badge: "✨ v1.2.0 Disponibile Ora",
        hero_title: "Mettiti a fuoco comodamente.",
        hero_subtitle: "Il timer Pomodoro minimalista per una produttività calma.",
        hero_subtitle_bold: "Esperienza completa gratuita.",
        cta_download: "Scarica App",
        cta_explore: "Esplora Temi",
        hero_note: "Su Android • No Pubblicità • Privacy",
        try_theme: "Prova uno stile:",
        early_adopter: "Unisciti ai primi utenti che scoprono la calma.",
        how_title: "Design Semplice",
        how_subtitle: "Nessun disordine. Solo flusso.",
        step1_title: "1. Scegli Attività",
        step1_desc: "Decidi cosa fare.",
        step2_title: "2. Avvia Timer",
        step2_desc: "Focus per 25 minuti.",
        step3_title: "3. Rilassati",
        step3_desc: "Fai una breve pausa accogliente.",
        benefit1: "No Pubblicità",
        benefit2: "Funziona Offline",
        benefit3: "100% Privacy Friendly",
        premium_badge: "Pacchetto Premium",
        premium_title: "Fallo tuo.",
        premium_desc: "Sblocca la collezione completa di temi accoglienti.",
        one_time: "una tantum",
        feat_themes: "8+ Temi Premium",
        feat_weather: "Meteo Dinamico",
        feat_support: "Supporta lo Sviluppo Indie",
        feat_no_sub: "Nessun Abbonamento",
        feat_no_lock: "Nessuna Funzione Bloccata",
        get_pack: "Ottieni Pacchetto",
        guarantee: "Puramente cosmetico. L'app rimane gratuita.",
        whats_new: "✨ Novità in",
        release_notes_latest: "🌧️ Temi Pioggia <br> 🔥 Statistiche & Serie <br> 📸 Condivisione Visiva <br> ⏯️ Avvio Automatico <br> ✅ Convalida Input",
        faq_title: "Domande Frequenti",
        faq1_q: "L'app è gratuita?",
        faq1_a: "Sì! Il timer Pomodoro base è gratuito al 100%.",
        faq2_q: "Cosa c'è nel pacchetto?",
        faq2_a: "Il Pacchetto Temi sblocca tutti i temi premium per $3.99.",
        faq3_q: "C'è un abbonamento?",
        faq3_a: "No. Paghi una volta, è tuo per sempre.",
        credits: "Crediti",
        privacy: "Informativa Privacy",
        feature_card_1: "Interfaccia minimalista.",
        feature_card_2: "Colori e suoni rilassanti.",
        feature_card_3: "Completamente personalizzabile.",
        new_badge: "🔥 Nuovo nella v1.2.0",
        critical_title: "Motore di Aggiornamenti Critici",
        critical_desc: "Abbiamo costruito un nuovo motore robusto per fornire aggiornamenti critici istantaneamente.",
        feat_stats_title: "Segui i tuoi Progressi",
        feat_stats_desc: "Visualizza la tua produttività con la nuova Dashboard Statistiche. Monitora le serie e rimani motivato.",
        feat_share_title: "Condividi il tuo Vibe",
        feat_share_desc: "Genera bellissime schede condivisibili delle tue statistiche, complete dello sfondo del tuo tema attuale.",
        feat_rain_title: "Effetti Pioggia",
        feat_rain_desc: "Immergiti con animazioni di pioggia in tempo reale. Perfetto per sessioni di focus profondo.",
        new_themes_title: "Nuovi Temi",
        new_themes_desc: "Scopri le ultime aggiunte alla nostra collezione di temi."
    },
    pt: {
        download: "Baixar",
        themes: "Temas",
        nav_themes: "Pacote de Temas",
        nav_privacy: "Privacidade",
        version_badge: "✨ v1.2.0 Disponível Agora",
        hero_title: "Foque confortavelmente.",
        hero_subtitle: "O temporizador Pomodoro minimalista para produtividade calma.",
        hero_subtitle_bold: "Experiência completa grátis.",
        cta_download: "Baixar App",
        cta_explore: "Explorar Temas",
        hero_note: "No Android • Sem Anúncios • Privacidade",
        try_theme: "Teste um estilo:",
        early_adopter: "Descubra o foco calmo.",
        how_title: "Design Simples",
        how_subtitle: "Sem bagunça. Apenas fluxo.",
        step1_title: "1. Escolha a Tarefa",
        step1_desc: "Decida o que fazer.",
        step2_title: "2. Inicie o Timer",
        step2_desc: "Foco por 25 minutos.",
        step3_title: "3. Relaxe",
        step3_desc: "Faça uma pausa aconchegante.",
        benefit1: "Sem Anúncios",
        benefit2: "Funciona Offline",
        benefit3: "100% Privacidade",
        premium_badge: "Pacote Premium",
        premium_title: "Faça do seu jeito.",
        premium_desc: "Desbloqueie a coleção completa de temas.",
        one_time: "pagamento único",
        feat_themes: "8+ Temas Premium",
        feat_weather: "Clima Dinâmico",
        feat_support: "Apoie o Desenvolvimento Indie",
        feat_no_sub: "Sem Assinaturas",
        feat_no_lock: "Sem Bloqueios",
        get_pack: "Obter Pacote",
        guarantee: "Puramente cosmético. App grátis para sempre.",
        whats_new: "✨ Novidades na",
        release_notes_latest: "🌧️ Temas de Chuva <br> 🔥 Estatísticas e Sequências <br> 📸 Compartilhamento Visual <br> ⏯️ Início Automático <br> ✅ Validação Inteligente",
        faq_title: "Perguntas Frequentes",
        faq1_q: "O app é grátis?",
        faq1_a: "Sim! O timer Pomodoro é 100% grátis.",
        faq2_q: "O que vem no pacote?",
        faq2_a: "O Pacote desbloqueia todos os temas coloridos por $3.99.",
        faq3_q: "Tem assinatura?",
        faq3_a: "Não. Pague uma vez, tenha para sempre.",
        credits: "Créditos",
        privacy: "Política de Privacidade",
        feature_card_1: "Interface minimalista.",
        feature_card_2: "Cores e sons relaxantes.",
        feature_card_3: "Totalmente personalizável.",
        new_badge: "🔥 Novo na v1.2.0",
        critical_title: "Motor de Atualizações Críticas",
        critical_desc: "Um novo motor robusto para entregar atualizações críticas instantaneamente.",
        feat_stats_title: "Acompanhe seu Progresso",
        feat_stats_desc: "Visualize sua produtividade com o novo Painel de Estatísticas. Monitore sequências e mantenha-se motivado.",
        feat_share_title: "Compartilhe seu Vibe",
        feat_share_desc: "Gere belos cartões compartilháveis de suas estatísticas, completos com o fundo do seu tema atual.",
        feat_rain_title: "Efeitos de Chuva",
        feat_rain_desc: "Mergulhe com animações de chuva em tempo real. Perfeito para sessões de foco profundo.",
        new_themes_title: "Novos Temas",
        new_themes_desc: "Confira as últimas adições à nossa coleção de temas."
    },
    ja: {
        download: "ダウンロード",
        themes: "テーマ",
        nav_themes: "テーマパック",
        nav_privacy: "プライバシー",
        version_badge: "✨ v1.2.0 利用可能",
        hero_title: "快適に集中。",
        hero_subtitle: "穏やかな生産性のためのミニマルなポモドーロタイマー。",
        hero_subtitle_bold: "完全無料体験。テーマはオプション。",
        cta_download: "アプリを入手",
        cta_explore: "テーマを見る",
        hero_note: "Android対応 • 広告なし • プライバシー重視",
        try_theme: "スタイルを試す:",
        early_adopter: "穏やかな集中を発見しましょう。",
        how_title: "シンプルなデザイン",
        how_subtitle: "無駄なし。フローのみ。",
        step1_title: "1. タスクを選ぶ",
        step1_desc: "やるべきことを決める。",
        step2_title: "2. タイマー開始",
        step2_desc: "25分間集中する。",
        step3_title: "3. リラックス",
        step3_desc: "短い休憩を取る。",
        benefit1: "広告・邪魔なし",
        benefit2: "オフライン対応",
        benefit3: "100% プライバシー",
        premium_badge: "プレミアムパック",
        premium_title: "あなたらしく。",
        premium_desc: "居心地の良いテーマコレクションを解除。",
        one_time: "一回払い",
        feat_themes: "8+ プレミアムテーマ",
        feat_weather: "ダイナミック天気",
        feat_support: "開発をサポート",
        feat_no_sub: "サブスクなし",
        feat_no_lock: "機能制限なし",
        get_pack: "パックを入手",
        guarantee: "見た目だけです。アプリはずっと無料。",
        whats_new: "✨ 新機能",
        release_notes_latest: "🌧️ 雨のテーマ <br> 🔥 統計とストリーク <br> 📸 ビジュアル共有 <br> ⏯️ スマート自動開始 <br> ✅ 入力検証",
        faq_title: "よくある質問",
        faq1_q: "無料ですか？",
        faq1_a: "はい！基本機能は100%無料です。",
        faq2_q: "パックの内容は？",
        faq2_a: "テーマパックは$3.99ですべての色と天気を解除します。",
        faq3_q: "サブスクですか？",
        faq3_a: "いいえ。一度払えばずっと使えます。",
        credits: "クレジット",
        privacy: "プライバシーポリシー",
        feature_card_1: "集中するためのミニマルUI。",
        feature_card_2: "リラックスできる色と音。",
        feature_card_3: "完全にカスタマイズ可能。",
        new_badge: "🔥 v1.2.0の新機能",
        critical_title: "クリティカルアップデートエンジン",
        critical_desc: "重要なアップデートを即座に配信するための堅牢な新しいエンジン。",
        feat_stats_title: "進捗を追跡",
        feat_stats_desc: "新しい統計ダッシュボードで生産性を可視化。ストリークを監視し、モチベーションを維持しましょう。",
        feat_share_title: "バイブスを共有",
        feat_share_desc: "現在のテーマの背景を含む、セッション統計の美しい共有カードを作成します。",
        feat_rain_title: "居心地の良い雨効果",
        feat_rain_desc: "リアルタイムの雨のアニメーションで没入感を高めます。深い集中セッションに最適です。",
        new_themes_title: "新しいテーマ",
        new_themes_desc: "テーマコレクションの最新追加をチェックしてください。"
    },
    ko: {
        download: "다운로드",
        themes: "테마",
        nav_themes: "테마 팩",
        nav_privacy: "개인정보",
        version_badge: "✨ v1.2.0 출시 완료",
        hero_title: "편안하게 집중하세요.",
        hero_subtitle: "차분한 생산성을 위한 미니멀 포모도로 타이머.",
        hero_subtitle_bold: "모든 기능 무료. 테마는 선택.",
        cta_download: "앱 다운로드",
        cta_explore: "테마 둘러보기",
        hero_note: "Android용 • 광고 없음 • 개인정보 보호",
        try_theme: "스타일 체험:",
        early_adopter: "차분한 집중을 경험해보세요.",
        how_title: "심플한 디자인",
        how_subtitle: "군더더기 없이. 오직 몰입.",
        step1_title: "1. 할 일 선택",
        step1_desc: "무엇을 할지 결정하세요.",
        step2_title: "2. 타이머 시작",
        step2_desc: "25분간 집중하세요.",
        step3_title: "3. 휴식",
        step3_desc: "짧고 편안한 휴식을 취하세요.",
        benefit1: "광고 및 방해 없음",
        benefit2: "오프라인 지원",
        benefit3: "100% 개인정보 보호",
        premium_badge: "프리미엄 팩",
        premium_title: "나만의 스타일로.",
        premium_desc: "모든 코지 테마 컬렉션을 잠금 해제하세요.",
        one_time: "일회성 결제",
        feat_themes: "8+ 프리미엄 테마",
        feat_weather: "다이내믹 날씨 효과",
        feat_support: "인디 개발자 후원",
        feat_no_sub: "구독 없음",
        feat_no_lock: "기능 제한 없음",
        get_pack: "테마 팩 받기",
        guarantee: "꾸미기 전용입니다. 앱은 평생 무료입니다.",
        whats_new: "✨ 새로운 기능",
        release_notes_latest: "🌧️ 비 테마 <br> 🔥 통계 및 연속 달성 <br> 📸 시각적 공유 <br> ⏯️ 스마트 자동 시작 <br> ✅ 입력 유효성 검사",
        faq_title: "자주 묻는 질문",
        faq1_q: "무료인가요?",
        faq1_a: "네! 기본 타이머 기능은 100% 무료입니다.",
        faq2_q: "팩에는 뭐가 있나요?",
        faq2_a: "테마 팩은 $3.99로 모든 테마와 날씨 효과를 제공합니다.",
        faq3_q: "구독형인가요?",
        faq3_a: "아니요. 한 번 구매하면 평생 소장합니다.",
        credits: "크레딧",
        privacy: "개인정보 처리방침",
        feature_card_1: "몰입을 돕는 미니멀 인터페이스.",
        feature_card_2: "불안을 줄여주는 차분한 색상과 소리.",
        feature_card_3: "타이머와 테마 완전 맞춤 설정.",
        new_badge: "🔥 v1.2.0의 새로운 기능",
        critical_title: "크리티컬 업데이트 엔진",
        critical_desc: "중요한 업데이트를 즉시 제공하기 위해 강력한 새 엔진을 구축했습니다.",
        feat_stats_title: "진행 상황 추적",
        feat_stats_desc: "새로운 통계 대시보드로 생산성을 시각화하세요. 연속 달성을 모니터링하고 매일 동기를 부여받으세요.",
        feat_share_title: "나만의 바이브 공유",
        feat_share_desc: "현재 테마 배경이 포함된 세션 통계의 아름다운 공유 카드를 생성하세요.",
        feat_rain_title: "아늑한 비 효과",
        feat_rain_desc: "실시간 비 애니메이션으로 몰입감을 높이세요. 깊은 집중 세션에 완벽합니다.",
        new_themes_title: "새로운 테마",
        new_themes_desc: "테마 컬렉션의 최신 추가 항목을 확인하세요."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher Logic
    const themeButtons = document.querySelectorAll('.theme-btn');
    const root = document.documentElement;

    function applyTheme(themeKey) {
        const theme = themes[themeKey];
        if (theme) {
            Object.entries(theme).forEach(([property, value]) => {
                root.style.setProperty(property, value);
            });
            themeButtons.forEach(b => b.classList.remove('active'));
            const activeBtn = document.querySelector(`.theme-btn[data-theme="${themeKey}"]`);
            if (activeBtn) activeBtn.classList.add('active');
        }
    }

    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            applyTheme(btn.getAttribute('data-theme'));
        });
    });

    // Default Theme
    const defaultBtn = document.querySelector('.theme-btn[data-theme="cozyLight"]');
    if (defaultBtn) defaultBtn.classList.add('active');


    // Language Switcher Logic
    const langButtons = document.querySelectorAll('.lang-btn');

    function setLanguage(lang) {
        // Fallback to English if lang not fully defined in this demo
        const dict = translations[lang] || translations['en'];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            } else if (translations['en'][key]) {
                el.innerHTML = translations['en'][key]; // Fallback
            }
        });

        // Update localized theme images
        updateLocalizedImages(lang);

        // Update active state
        langButtons.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
        if (activeBtn) activeBtn.classList.add('active');
    }

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

    // Privacy Policy Content (HTML Blocks)
    const privacyContent = {
        en: `
            <h1>Privacy Policy – Cozy Pomodoro</h1>
            <p><strong>Last updated:</strong> December 2025<br>
            <strong>Developer:</strong> FatCatGameStudio / Cozy Apps<br>
            <strong>Email:</strong> fatcatgamestudio@gmail.com</p>

            <h2>1. Overview</h2>
            <p>Cozy Pomodoro is a productivity application based on the Pomodoro technique. The app operates entirely on-device and does not collect, store, or transmit personal data.</p>

            <h2>2. Data We Do NOT Collect</h2>
            <p>The app does NOT collect:</p>
            <ul>
                <li>Personal information (name, email, phone)</li>
                <li>Location data</li>
                <li>Contacts, calendar, or files</li>
                <li>Usage analytics or behavioral data</li>
                <li>Device identifiers</li>
                <li>Sensitive data (health, financial, biometric)</li>
            </ul>

            <h2>3. Data Stored Locally</h2>
            <p>The app stores only non-personal settings locally using shared preferences:</p>
            <ul>
                <li>Selected theme</li>
                <li>Timer durations</li>
                <li>Language</li>
                <li>Music and alarm preferences</li>
                <li>Streaks and daily goals</li>
                <li>Session history</li>
                <li>UI preferences</li>
            </ul>
            <p>All data remains on the device and is removed upon uninstall.</p>

            <h2>4. Internet Access & Audio Usage</h2>
            <p>The app uses local audio files and optional streaming without transmitting any personal data.</p>

            <h2>5. No Advertising or Tracking</h2>
            <p>The app includes no ads, analytics, or tracking tools.</p>

            <h2>6. In-App Purchases</h2>
            <p>Purchases are securely handled by Google Play Billing or Apple App Store. The app does not process or store payment details.</p>

            <h2>7. Permissions Used</h2>
            <ul>
                <li><strong>WAKE_LOCK:</strong> Keeps screen active during focus sessions</li>
                <li><strong>Internet:</strong> Only for optional streaming</li>
            </ul>

            <h2>8. Children’s Privacy</h2>
            <p>Not intended for children under 13. No data collection.</p>

            <h2>9. Security Practices</h2>
            <p>All data stays on-device; the app does not communicate with external servers.</p>

            <h2>10. Contact</h2>
            <p>FatCatGameStudio / Cozy Apps<br>fatcatgamestudio@gmail.com</p>
        `,
        es: `
            <h1>Política de Privacidad – Cozy Pomodoro</h1>
            <p><strong>Última actualización:</strong> Diciembre 2025<br>
            <strong>Desarrollador:</strong> FatCatGameStudio / Cozy Apps<br>
            <strong>Email:</strong> fatcatgamestudio@gmail.com</p>

            <h2>1. Resumen</h2>
            <p>Cozy Pomodoro es una aplicación de productividad basada en la técnica Pomodoro. La aplicación funciona completamente en el dispositivo y no recopila, almacena ni transmite datos personales.</p>

            <h2>2. Datos que NO Recopilamos</h2>
            <p>La aplicación NO recopila:</p>
            <ul>
                <li>Información personal (nombre, email, teléfono)</li>
                <li>Datos de ubicación</li>
                <li>Contactos, calendario o archivos</li>
                <li>Análisis de uso o datos de comportamiento</li>
                <li>Identificadores del dispositivo</li>
                <li>Datos sensibles (salud, financieros, biométricos)</li>
            </ul>

            <h2>3. Datos Almacenados Localmente</h2>
            <p>La aplicación solo almacena configuraciones no personales localmente:</p>
            <ul>
                <li>Tema seleccionado</li>
                <li>Duración del temporizador</li>
                <li>Idioma</li>
                <li>Preferencias de música y alarma</li>
                <li>Rachas y objetivos diarios</li>
                <li>Historial de sesiones</li>
                <li>Preferencias de interfaz</li>
            </ul>
            <p>Todos los datos permanecen en el dispositivo y se eliminan al desinstalar.</p>

            <h2>4. Acceso a Internet y Audio</h2>
            <p>La aplicación utiliza archivos de audio locales y streaming opcional sin transmitir datos personales.</p>

            <h2>5. Sin Publicidad ni Rastreo</h2>
            <p>La aplicación no incluye anuncios, análisis ni herramientas de rastreo.</p>

            <h2>6. Compras en la App</h2>
            <p>Las compras son manejadas de forma segura por Google Play Billing o Apple App Store. La aplicación no procesa ni almacena detalles de pago.</p>

            <h2>7. Permisos Utilizados</h2>
            <ul>
                <li><strong>WAKE_LOCK:</strong> Mantiene la pantalla activa durante las sesiones de enfoque</li>
                <li><strong>Internet:</strong> Solo para streaming opcional</li>
            </ul>

            <h2>8. Privacidad de los Niños</h2>
            <p>No está destinado a niños menores de 13 años. Sin recopilación de datos.</p>

            <h2>9. Prácticas de Seguridad</h2>
            <p>Todos los datos permanecen en el dispositivo; la aplicación no se comunica con servidores externos.</p>

            <h2>10. Contacto</h2>
            <p>FatCatGameStudio / Cozy Apps<br>fatcatgamestudio@gmail.com</p>
        `,
        fr: `
            <h1>Politique de Confidentialité – Cozy Pomodoro</h1>
            <p><strong>Dernière mise à jour :</strong> Décembre 2025<br>
            <strong>Développeur :</strong> FatCatGameStudio / Cozy Apps<br>
            <strong>Email :</strong> fatcatgamestudio@gmail.com</p>

            <h2>1. Aperçu</h2>
            <p>Cozy Pomodoro est une application de productivité basée sur la technique Pomodoro. L'application fonctionne entièrement sur l'appareil et ne collecte, ne stocke ni ne transmet de données personnelles.</p>

            <h2>2. Données que nous ne collectons PAS</h2>
            <p>L'application ne collecte PAS :</p>
            <ul>
                <li>Informations personnelles (nom, email, téléphone)</li>
                <li>Données de localisation</li>
                <li>Contacts, calendrier ou fichiers</li>
                <li>Analyses d'utilisation ou données comportementales</li>
                <li>Identifiants de l'appareil</li>
                <li>Données sensibles (santé, financières, biométriques)</li>
            </ul>

            <h2>3. Données stockées localement</h2>
            <p>L'application stocke uniquement des paramètres non personnels localement :</p>
            <ul>
                <li>Thème sélectionné</li>
                <li>Durées du minuteur</li>
                <li>Langue</li>
                <li>Préférences musicales et d'alarme</li>
                <li>Séries et objectifs quotidiens</li>
                <li>Historique des sessions</li>
                <li>Préférences de l'interface utilisateur</li>
            </ul>
            <p>Toutes les données restent sur l'appareil et sont supprimées lors de la désinstallation.</p>

            <h2>4. Accès Internet et Audio</h2>
            <p>L'application utilise des fichiers audio locaux et un streaming optionnel sans transmettre de données personnelles.</p>

            <h2>5. Pas de publicité ni de suivi</h2>
            <p>L'application ne contient aucune publicité, analyse ou outil de suivi.</p>

            <h2>6. Achats intégrés</h2>
            <p>Les achats sont gérés en toute sécurité par Google Play Billing ou Apple App Store. L'application ne traite ni ne stocke les détails de paiement.</p>

            <h2>7. Autorisations utilisées</h2>
            <ul>
                <li><strong>WAKE_LOCK :</strong> Garde l'écran actif pendant les sessions de concentration</li>
                <li><strong>Internet :</strong> Uniquement pour le streaming optionnel</li>
            </ul>

            <h2>8. Confidentialité des enfants</h2>
            <p>Non destiné aux enfants de moins de 13 ans. Aucune collecte de données.</p>

            <h2>9. Pratiques de sécurité</h2>
            <p>Toutes les données restent sur l'appareil ; l'application ne communique pas avec des serveurs externes.</p>

            <h2>10. Contact</h2>
            <p>FatCatGameStudio / Cozy Apps<br>fatcatgamestudio@gmail.com</p>
        `,
        de: `
            <h1>Datenschutzerklärung – Cozy Pomodoro</h1>
            <p><strong>Stand:</strong> Dezember 2025<br>
            <strong>Entwickler:</strong> FatCatGameStudio / Cozy Apps<br>
            <strong>E-Mail:</strong> fatcatgamestudio@gmail.com</p>

            <h2>1. Übersicht</h2>
            <p>Cozy Pomodoro ist eine Produktivitäts-App basierend auf der Pomodoro-Technik. Die App arbeitet vollständig auf dem Gerät und sammelt, speichert oder überträgt keine personenbezogenen Daten.</p>

            <h2>2. Daten, die wir NICHT sammeln</h2>
            <p>Die App sammelt KEINE:</p>
            <ul>
                <li>Persönlichen Informationen (Name, E-Mail, Telefon)</li>
                <li>Standortdaten</li>
                <li>Kontakte, Kalender oder Dateien</li>
                <li>Nutzungsanalysen oder Verhaltensdaten</li>
                <li>Gerätekennungen</li>
                <li>Sensiblen Daten (Gesundheit, Finanzen, Biometrie)</li>
            </ul>

            <h2>3. Lokal gespeicherte Daten</h2>
            <p>Die App speichert nur nicht-personenbezogene Einstellungen lokal:</p>
            <ul>
                <li>Ausgewähltes Thema</li>
                <li>Timer-Dauer</li>
                <li>Sprache</li>
                <li>Musik- und Alarmpräferenzen</li>
                <li>Serien und tägliche Ziele</li>
                <li>Sitzungsverlauf</li>
                <li>UI-Einstellungen</li>
            </ul>
            <p>Alle Daten verbleiben auf dem Gerät und werden bei der Deinstallation entfernt.</p>

            <h2>4. Internetzugang & Audio-Nutzung</h2>
            <p>Die App verwendet lokale Audiodateien und optionales Streaming, ohne persönliche Daten zu übertragen.</p>

            <h2>5. Keine Werbung oder Tracking</h2>
            <p>Die App enthält keine Werbung, Analysen oder Tracking-Tools.</p>

            <h2>6. In-App-Käufe</h2>
            <p>Käufe werden sicher über Google Play Billing oder Apple App Store abgewickelt. Die App verarbeitet oder speichert keine Zahlungsdetails.</p>

            <h2>7. Verwendete Berechtigungen</h2>
            <ul>
                <li><strong>WAKE_LOCK:</strong> Hält den Bildschirm während der Fokus-Sitzungen aktiv</li>
                <li><strong>Internet:</strong> Nur für optionales Streaming</li>
            </ul>

            <h2>8. Privatsphäre von Kindern</h2>
            <p>Nicht für Kinder unter 13 Jahren bestimmt. Keine Datenerfassung.</p>

            <h2>9. Sicherheitspraktiken</h2>
            <p>Alle Daten bleiben auf dem Gerät; die App kommuniziert nicht mit externen Servern.</p>

            <h2>10. Kontakt</h2>
            <p>FatCatGameStudio / Cozy Apps<br>fatcatgamestudio@gmail.com</p>
        `,
        it: `
            <h1>Informativa sulla Privacy – Cozy Pomodoro</h1>
            <p><strong>Ultimo aggiornamento:</strong> Dicembre 2025<br>
            <strong>Sviluppatore:</strong> FatCatGameStudio / Cozy Apps<br>
            <strong>Email:</strong> fatcatgamestudio@gmail.com</p>

            <h2>1. Panoramica</h2>
            <p>Cozy Pomodoro è un'applicazione di produttività basata sulla tecnica del Pomodoro. L'app funziona interamente sul dispositivo e non raccoglie, conserva o trasmette dati personali.</p>

            <h2>2. Dati che NON raccogliamo</h2>
            <p>L'app NON raccoglie:</p>
            <ul>
                <li>Informazioni personali (nome, email, telefono)</li>
                <li>Dati sulla posizione</li>
                <li>Contatti, calendario o file</li>
                <li>Analisi dell'utilizzo o dati comportamentali</li>
                <li>Identificatori del dispositivo</li>
                <li>Dati sensibili (salute, finanziari, biometrici)</li>
            </ul>

            <h2>3. Dati archiviati localmente</h2>
            <p>L'app archivia localmente solo impostazioni non personali:</p>
            <ul>
                <li>Tema selezionato</li>
                <li>Durate del timer</li>
                <li>Lingua</li>
                <li>Preferenze musicali e allarmi</li>
                <li>Serie e obiettivi giornalieri</li>
                <li>Cronologia delle sessioni</li>
                <li>Preferenze dell'interfaccia utente</li>
            </ul>
            <p>Tutti i dati rimangono sul dispositivo e vengono rimossi alla disinstallazione.</p>

            <h2>4. Accesso a Internet e utilizzo audio</h2>
            <p>L'app utilizza file audio locali e streaming opzionale senza trasmettere dati personali.</p>

            <h2>5. Nessuna pubblicità o tracciamento</h2>
            <p>L'app non include annunci, analisi o strumenti di tracciamento.</p>

            <h2>6. Acquisti in-app</h2>
            <p>Gli acquisti sono gestiti in modo sicuro da Google Play Billing o Apple App Store. L'app non elabora né archivia i dettagli di pagamento.</p>

            <h2>7. Autorizzazioni utilizzate</h2>
            <ul>
                <li><strong>WAKE_LOCK:</strong> Mantiene lo schermo attivo durante le sessioni di focus</li>
                <li><strong>Internet:</strong> Solo per lo streaming opzionale</li>
            </ul>

            <h2>8. Privacy dei bambini</h2>
            <p>Non destinato a bambini di età inferiore ai 13 anni. Nessuna raccolta dati.</p>

            <h2>9. Pratiche di sicurezza</h2>
            <p>Tutti i dati restano sul dispositivo; l'app non comunica con server esterni.</p>

            <h2>10. Contatto</h2>
            <p>FatCatGameStudio / Cozy Apps<br>fatcatgamestudio@gmail.com</p>
        `,
        pt: `
            <h1>Política de Privacidade – Cozy Pomodoro</h1>
            <p><strong>Última atualização:</strong> Dezembro 2025<br>
            <strong>Desenvolvedor:</strong> FatCatGameStudio / Cozy Apps<br>
            <strong>Email:</strong> fatcatgamestudio@gmail.com</p>

            <h2>1. Visão Geral</h2>
            <p>O Cozy Pomodoro é um aplicativo de produtividade baseado na técnica Pomodoro. O aplicativo opera inteiramente no dispositivo e não coleta, armazena ou transmite dados pessoais.</p>

            <h2>2. Dados que NÃO Coletamos</h2>
            <p>O aplicativo NÃO coleta:</p>
            <ul>
                <li>Informações pessoais (nome, email, telefone)</li>
                <li>Dados de localização</li>
                <li>Contatos, calendário ou arquivos</li>
                <li>Análises de uso ou dados comportamentais</li>
                <li>Identificadores do dispositivo</li>
                <li>Dados sensíveis (saúde, financeiros, biométricos)</li>
            </ul>

            <h2>3. Dados Armazenados Localmente</h2>
            <p>O aplicativo armazena apenas configurações não pessoais localmente:</p>
            <ul>
                <li>Tema selecionado</li>
                <li>Durações do temporizador</li>
                <li>Idioma</li>
                <li>Preferências de música e alarme</li>
                <li>Sequências e metas diárias</li>
                <li>Histórico de sessões</li>
                <li>Preferências de interface do usuário</li>
            </ul>
            <p>Todos os dados permanecem no dispositivo e são removidos na desinstalação.</p>

            <h2>4. Acesso à Internet e Uso de Áudio</h2>
            <p>O aplicativo usa arquivos de áudio locais e streaming opcional sem transmitir dados pessoais.</p>

            <h2>5. Sem Publicidade ou Rastreamento</h2>
            <p>O aplicativo não inclui anúncios, análises ou ferramentas de rastreamento.</p>

            <h2>6. Compras no Aplicativo</h2>
            <p>As compras são gerenciadas com segurança pelo Google Play Billing ou Apple App Store. O aplicativo não processa ou armazena detalhes de pagamento.</p>

            <h2>7. Permissões Usadas</h2>
            <ul>
                <li><strong>WAKE_LOCK:</strong> Mantém a tela ativa durante as sessões de foco</li>
                <li><strong>Internet:</strong> Apenas para streaming opcional</li>
            </ul>

            <h2>8. Privacidade de Crianças</h2>
            <p>Não destinado a crianças menores de 13 anos. Sem coleta de dados.</p>

            <h2>9. Práticas de Segurança</h2>
            <p>Todos os dados permanecem no dispositivo; o aplicativo não se comunica com servidores externos.</p>

            <h2>10. Contato</h2>
            <p>FatCatGameStudio / Cozy Apps<br>fatcatgamestudio@gmail.com</p>
        `,
        ja: `
            <h1>プライバシーポリシー – Cozy Pomodoro</h1>
            <p><strong>最終更新日:</strong> 2025年12月<br>
            <strong>開発者:</strong> FatCatGameStudio / Cozy Apps<br>
            <strong>メール:</strong> fatcatgamestudio@gmail.com</p>

            <h2>1. 概要</h2>
            <p>Cozy Pomodoroは、ポモドーロ・テクニックに基づいた生産性向上アプリです。このアプリは完全にデバイス上で動作し、個人データを収集、保存、または送信することはありません。</p>

            <h2>2. 収集しないデータ</h2>
            <p>このアプリは以下を収集しません：</p>
            <ul>
                <li>個人情報（名前、メール、電話番号）</li>
                <li>位置情報データ</li>
                <li>連絡先、カレンダー、またはファイル</li>
                <li>使用状況分析または行動データ</li>
                <li>デバイス識別子</li>
                <li>機密データ（健康、金融、生体情報）</li>
            </ul>

            <h2>3. ローカルに保存されるデータ</h2>
            <p>アプリは、共有設定を使用して個人を特定しない設定のみをローカルに保存します：</p>
            <ul>
                <li>選択されたテーマ</li>
                <li>タイマーの期間</li>
                <li>言語</li>
                <li>音楽とアラームの設定</li>
                <li>ストリークと毎日の目標</li>
                <li>セッション履歴</li>
                <li>UI設定</li>
            </ul>
            <p>すべてのデータはデバイスに残り、アンインストール時に削除されます。</p>

            <h2>4. インターネットアクセスとオーディオ使用</h2>
            <p>アプリは、個人データを送信することなく、ローカルオーディオファイルとオプションのストリーミングを使用します。</p>

            <h2>5. 広告や追跡なし</h2>
            <p>アプリには、広告、分析、または追跡ツールは含まれていません。</p>

            <h2>6. アプリ内課金</h2>
            <p>購入はGoogle Play BillingまたはApple App Storeによって安全に処理されます。アプリは支払いの詳細を処理または保存しません。</p>

            <h2>7. 使用される権限</h2>
            <ul>
                <li><strong>WAKE_LOCK:</strong> 集中セッション中に画面をアクティブに保ちます</li>
                <li><strong>Internet:</strong> オプションのストリーミングのみ</li>
            </ul>

            <h2>8. 子供のプライバシー</h2>
            <p>13歳未満の子供を対象としていません。データ収集はありません。</p>

            <h2>9. セキュリティプラクティス</h2>
            <p>すべてのデータはデバイス上に留まります。アプリは外部サーバーと通信しません。</p>

            <h2>10. お問い合わせ</h2>
            <p>FatCatGameStudio / Cozy Apps<br>fatcatgamestudio@gmail.com</p>
        `,
        ko: `
            <h1>개인정보 처리방침 – Cozy Pomodoro</h1>
            <p><strong>최종 업데이트:</strong> 2025년 12월<br>
            <strong>개발자:</strong> FatCatGameStudio / Cozy Apps<br>
            <strong>이메일:</strong> fatcatgamestudio@gmail.com</p>

            <h2>1. 개요</h2>
            <p>Cozy Pomodoro는 포모도로 기법을 기반으로 한 생산성 애플리케이션입니다. 이 앱은 전적으로 기기에서 작동하며 개인 데이터를 수집, 저장 또는 전송하지 않습니다.</p>

            <h2>2. 수집하지 않는 데이터</h2>
            <p>이 앱은 다음을 수집하지 않습니다:</p>
            <ul>
                <li>개인 정보 (이름, 이메일, 전화번호)</li>
                <li>위치 데이터</li>
                <li>연락처, 캘린더 또는 파일</li>
                <li>사용 분석 또는 행동 데이터</li>
                <li>기기 식별자</li>
                <li>민감한 데이터 (건강, 금융, 생체 인식)</li>
            </ul>

            <h2>3. 로컬에 저장되는 데이터</h2>
            <p>이 앱은 shared preferences를 사용하여 비개인 설정만 로컬에 저장합니다:</p>
            <ul>
                <li>선택된 테마</li>
                <li>타이머 지속 시간</li>
                <li>언어</li>
                <li>음악 및 알람 기본 설정</li>
                <li>연속 달성 및 일일 목표</li>
                <li>세션 기록</li>
                <li>UI 환경 설정</li>
            </ul>
            <p>모든 데이터는 기기에 남아 있으며 제거 시 삭제됩니다.</p>

            <h2>4. 인터넷 액세스 및 오디오 사용</h2>
            <p>이 앱은 개인 데이터를 전송하지 않고 로컬 오디오 파일 및 선택적 스트리밍을 사용합니다.</p>

            <h2>5. 광고 또는 추적 없음</h2>
            <p>이 앱에는 광고, 분석 또는 추적 도구가 포함되어 있지 않습니다.</p>

            <h2>6. 인앱 구매</h2>
            <p>구매는 Google Play Billing 또는 Apple App Store를 통해 안전하게 처리됩니다. 앱은 결제 세부 정보를 처리하거나 저장하지 않습니다.</p>

            <h2>7. 사용된 권한</h2>
            <ul>
                <li><strong>WAKE_LOCK:</strong> 집중 세션 동안 화면을 켜진 상태로 유지</li>
                <li><strong>Internet:</strong> 선택적 스트리밍 전용</li>
            </ul>

            <h2>8. 아동 개인정보 보호</h2>
            <p>13세 미만 어린이를 대상으로 하지 않습니다. 데이터 수집 없음.</p>

            <h2>9. 보안 관행</h2>
            <p>모든 데이터는 기기에 머무릅니다. 앱은 외부 서버와 통신하지 않습니다.</p>

            <h2>10. 연락처</h2>
            <p>FatCatGameStudio / Cozy Apps<br>fatcatgamestudio@gmail.com</p>
        `
    };

    // Credits Content (Localized HTML)
    const creditsContent = {
        en: `
            <h1>Credits</h1>
            <p style="margin-bottom: 2rem;">Thank you to the amazing creators who made this app possible.</p>
            
            <div class="credit-section">
                <h3>Music</h3>
                <p><strong>Lo-Fi Tracks</strong> provided by <a href="https://pixabay.com/music/search/lofi/" target="_blank">Pixabay</a> visuals and artists.</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">Artists: <em>delosound, fassounds, and more.</em></p>
            </div>

            <div class="credit-section">
                <h3>Icons</h3>
                <p>Beautiful interface icons by <a href="https://phosphoricons.com" target="_blank">Phosphor Icons</a>.</p>
            </div>

            <div class="credit-section">
                <h3>Framework</h3>
                <p>Built with <a href="https://flutter.dev" target="_blank">Flutter</a>.</p>
            </div>
        `,
        es: `
            <h1>Créditos</h1>
            <p style="margin-bottom: 2rem;">Gracias a los increíbles creadores que hicieron posible esta aplicación.</p>
            
            <div class="credit-section">
                <h3>Música</h3>
                <p><strong>Pistas Lo-Fi</strong> proporcionadas por visuales y artistas de <a href="https://pixabay.com/music/search/lofi/" target="_blank">Pixabay</a>.</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">Artistas: <em>delosound, fassounds, y más.</em></p>
            </div>

            <div class="credit-section">
                <h3>Iconos</h3>
                <p>Hermosos iconos de interfaz por <a href="https://phosphoricons.com" target="_blank">Phosphor Icons</a>.</p>
            </div>

            <div class="credit-section">
                <h3>Framework</h3>
                <p>Creado con <a href="https://flutter.dev" target="_blank">Flutter</a>.</p>
            </div>
        `,
        fr: `
            <h1>Crédits</h1>
            <p style="margin-bottom: 2rem;">Merci aux créateurs incroyables qui ont rendu cette application possible.</p>
            
            <div class="credit-section">
                <h3>Musique</h3>
                <p><strong>Pistes Lo-Fi</strong> fournies par <a href="https://pixabay.com/music/search/lofi/" target="_blank">Pixabay</a> et ses artistes.</p>
            </div>

            <div class="credit-section">
                <h3>Icônes</h3>
                <p>Belles icônes d'interface par <a href="https://phosphoricons.com" target="_blank">Phosphor Icons</a>.</p>
            </div>

            <div class="credit-section">
                <h3>Framework</h3>
                <p>Construit avec <a href="https://flutter.dev" target="_blank">Flutter</a>.</p>
            </div>
        `,
        de: `
            <h1>Danksagung</h1>
            <p style="margin-bottom: 2rem;">Danke an die tollen Schöpfer, die diese App möglich gemacht haben.</p>
            
            <div class="credit-section">
                <h3>Musik</h3>
                <p><strong>Lo-Fi Tracks</strong> bereitgestellt von <a href="https://pixabay.com/music/search/lofi/" target="_blank">Pixabay</a>.</p>
            </div>

            <div class="credit-section">
                <h3>Icons</h3>
                <p>Schöne Interface-Icons von <a href="https://phosphoricons.com" target="_blank">Phosphor Icons</a>.</p>
            </div>

            <div class="credit-section">
                <h3>Framework</h3>
                <p>Erstellt mit <a href="https://flutter.dev" target="_blank">Flutter</a>.</p>
            </div>
        `,
        it: `
            <h1>Crediti</h1>
            <p style="margin-bottom: 2rem;">Grazie ai fantastici creatori che hanno reso possibile questa app.</p>
            
            <div class="credit-section">
                <h3>Musica</h3>
                <p><strong>Brani Lo-Fi</strong> forniti da <a href="https://pixabay.com/music/search/lofi/" target="_blank">Pixabay</a>.</p>
            </div>

            <div class="credit-section">
                <h3>Icone</h3>
                <p>Icone bellissime di <a href="https://phosphoricons.com" target="_blank">Phosphor Icons</a>.</p>
            </div>

            <div class="credit-section">
                <h3>Framework</h3>
                <p>Costruito con <a href="https://flutter.dev" target="_blank">Flutter</a>.</p>
            </div>
        `,
        pt: `
            <h1>Créditos</h1>
            <p style="margin-bottom: 2rem;">Obrigado aos incríveis criadores que tornaram este aplicativo possível.</p>
            
            <div class="credit-section">
                <h3>Música</h3>
                <p><strong>Faixas Lo-Fi</strong> fornecidas por <a href="https://pixabay.com/music/search/lofi/" target="_blank">Pixabay</a>.</p>
            </div>

            <div class="credit-section">
                <h3>Ícones</h3>
                <p>Lindos ícones de interface por <a href="https://phosphoricons.com" target="_blank">Phosphor Icons</a>.</p>
            </div>

            <div class="credit-section">
                <h3>Framework</h3>
                <p>Criado com <a href="https://flutter.dev" target="_blank">Flutter</a>.</p>
            </div>
        `,
        ja: `
            <h1>クレジット</h1>
            <p style="margin-bottom: 2rem;">このアプリを可能にしてくれた素晴らしいクリエイターに感謝します。</p>
            
            <div class="credit-section">
                <h3>音楽</h3>
                <p><strong>Lo-Fiトラック</strong>提供: <a href="https://pixabay.com/music/search/lofi/" target="_blank">Pixabay</a>.</p>
            </div>

            <div class="credit-section">
                <h3>アイコン</h3>
                <p>美しいインターフェースアイコン: <a href="https://phosphoricons.com" target="_blank">Phosphor Icons</a>.</p>
            </div>

            <div class="credit-section">
                <h3>フレームワーク</h3>
                <p>開発: <a href="https://flutter.dev" target="_blank">Flutter</a>.</p>
            </div>
        `,
        ko: `
            <h1>크레딧</h1>
            <p style="margin-bottom: 2rem;">이 앱을 가능하게 해 준 놀라운 창작자들에게 감사드립니다.</p>
            
            <div class="credit-section">
                <h3>음악</h3>
                <p><strong>Lo-Fi 트랙</strong> 제공: <a href="https://pixabay.com/music/search/lofi/" target="_blank">Pixabay</a>.</p>
            </div>

            <div class="credit-section">
                <h3>아이콘</h3>
                <p>아름다운 인터페이스 아이콘: <a href="https://phosphoricons.com" target="_blank">Phosphor Icons</a>.</p>
            </div>

            <div class="credit-section">
                <h3>프레임워크</h3>
                <p>개발: <a href="https://flutter.dev" target="_blank">Flutter</a>.</p>
            </div>
        `
    };

    function updateLocalizedImages(lang) {
        const prefix = langToImagePrefix[lang] || 'EN';
        const themeImg1 = document.getElementById('theme-img-1');
        const themeImg2 = document.getElementById('theme-img-2');

        // Update Privacy Policy Content based on language
        const privacyTextEl = document.getElementById('privacy-text');
        if (privacyTextEl) {
            privacyTextEl.innerHTML = privacyContent[lang] || privacyContent['en'];
        }

        const creditsTextEl = document.getElementById('credits-text');
        if (creditsTextEl) {
            creditsTextEl.innerHTML = creditsContent[lang] || creditsContent['en'];
        }

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
        // The state is now null (or whatever previous state was), so we just ensure cleanliness
        closeAllModals();
    });


    // Bind Privacy Links (Header and Footer)
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

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Auto-Language Detection
    function detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const shortLang = browserLang.split('-')[0]; // Simplify 'en-US' to 'en'

        console.log(`Detected Language: ${browserLang} -> ${shortLang}`);

        if (translations[shortLang]) {
            setLanguage(shortLang);
        } else {
            console.log("Language not supported, falling back to English.");
            setLanguage('en');
        }
    }

    // Initialize with Detection
    detectLanguage();

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Cozy Radio Logic with Artists
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
        audioPlayer.src = track.src;
        trackNameEl.textContent = track.name;
        if (trackArtistEl) trackArtistEl.textContent = "by " + track.artist;

        audioPlayer.play().then(() => {
            isPlaying = true;
            updatePlayButton();
        }).catch(err => {
            console.error("Audio playback failed:", err);
            isPlaying = false;
            updatePlayButton();
        });
    }

    function togglePlayPause() {
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
        playPauseBtn.textContent = isPlaying ? "⏸" : "▶";

        // Toggle Breathing Animation on Widget
        if (isPlaying) {
            radioWidget.classList.add('playing');
        } else {
            radioWidget.classList.remove('playing');
        }
    }

    playPauseBtn.addEventListener('click', togglePlayPause);
    audioPlayer.addEventListener('ended', playRandomTrack);

    // Initial State
    trackNameEl.textContent = "Click Play to Focus";
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

    revealElements.forEach(el => revealObserver.observe(el));

    console.log("Cozy Pomodoro Landing Page - Fixed Loaded ✨");
});

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
