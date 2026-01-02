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
        version_badge: "✨ v1.0.2 Available Now",
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
        release_notes_latest: "🔥 Streak Celebration (Flame & Confetti) <br> 🌍 Full Localization (8 Langs) <br> 📱 Mobile UI Polish <br> 🔊 Loud Alarms (100%) <br> 🛠️ Android 15 Support",
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
        design_you: "Designed for <strong style='color:var(--primary-color);'>You</strong>"
    },
    es: {
        download: "Descargar",
        themes: "Temas",
        nav_themes: "Pack de Temas",
        nav_privacy: "Privacidad",
        version_badge: "✨ v1.0.2 Disponible Ahora",
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
        release_notes_latest: "🔥 Celebración de Racha (Llama y Confeti) <br> 🌍 Localización Completa (8 Idiomas) <br> 📱 Mejoras UI Móvil <br> 🔊 Alarmas Fuertes (100%) <br> 🛠️ Soporte Android 15",
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
        design_you: "Diseñado para <strong style='color:var(--primary-color);'>Ti</strong>"
    },
    fr: {
        download: "Télécharger",
        themes: "Thèmes",
        nav_themes: "Pack Thèmes",
        nav_privacy: "Confidentialité",
        version_badge: "✨ v1.0.2 Disponible",
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
        release_notes_latest: "🔥 Célébration de Série (Flamme et Confettis) <br> 🌍 Traduction Complète (8 Langues) <br> 📱 UI Mobile Améliorée <br> 🔊 Alarmes Fortes (100%) <br> 🛠️ Support Android 15",
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
        feature_card_3: "Minuteur et thèmes entièrement personnalisables."
    },
    de: {
        download: "Herunterladen",
        themes: "Themen",
        nav_themes: "Themen-Paket",
        nav_privacy: "Datenschutz",
        version_badge: "✨ v1.0.2 Jetzt Verfügbar",
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
        release_notes_latest: "🔥 Serie-Feier (Flamme & Konfetti) <br> 🌍 Vollständige Übersetzung (8 Sprachen) <br> 📱 Mobile UI Politur <br> 🔊 Laute Alarme (100%) <br> 🛠️ Android 15 Support",
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
        feature_card_3: "Vollständig anpassbar."
    },
    it: {
        download: "Scarica",
        themes: "Temi",
        nav_themes: "Pacchetto Temi",
        nav_privacy: "Privacy",
        version_badge: "✨ v1.0.2 Disponibile Ora",
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
        release_notes_latest: "🔥 Celebrazione Serie (Fiamma e Coriandoli) <br> 🌍 Localizzazione Completa (8 Lingue) <br> 📱 Miglioramenti UI Mobile <br> 🔊 Allarmi Forti (100%) <br> 🛠️ Supporto Android 15",
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
        feature_card_3: "Completamente personalizzabile."
    },
    pt: {
        download: "Baixar",
        themes: "Temas",
        nav_themes: "Pacote de Temas",
        nav_privacy: "Privacidade",
        version_badge: "✨ v1.0.2 Disponível Agora",
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
        release_notes_latest: "🔥 Celebração de Sequência (Chama e Confete) <br> 🌍 Tradução Completa (8 Idiomas) <br> 📱 Melhorias na UI Móvel <br> 🔊 Alarmes Altos (100%) <br> 🛠️ Suporte Android 15",
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
        feature_card_3: "Totalmente personalizável."
    },
    ja: {
        download: "ダウンロード",
        themes: "テーマ",
        nav_themes: "テーマパック",
        nav_privacy: "プライバシー",
        version_badge: "✨ v1.0.2 利用可能",
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
        release_notes_latest: "🔥 ストリークの祭典 (炎と紙吹雪) <br> 🌍 完全ローカライズ (8言語) <br> 📱 モバイルUIの改善 <br> 🔊 大音量アラーム (100%) <br> 🛠️ Android 15 対応",
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
        feature_card_3: "完全にカスタマイズ可能。"
    },
    ko: {
        download: "다운로드",
        themes: "테마",
        nav_themes: "테마 팩",
        nav_privacy: "개인정보",
        version_badge: "✨ v1.0.2 출시 완료",
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
        release_notes_latest: "🔥 연속 달성 축하 (불꽃 & 폭죽) <br> 🌍 전체 언어 지원 (8개국어) <br> 📱 모바일 UI 개선 <br> 🔊 큰 알람 소리 (100%) <br> 🛠️ Android 15 지원",
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
        feature_card_3: "타이머와 테마 완전 맞춤 설정."
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

        // Update active state
        langButtons.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
        if (activeBtn) activeBtn.classList.add('active');
    }

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

    // Dynamic Release Info
    fetch('assets/release_info.json')
        .then(response => response.json())
        .then(data => {
            if (data && data.version) {
                const versionBadge = document.querySelector('.badge-soft');
                if (versionBadge) {
                    // Update text, preserving the sparkles if desired, or just replace
                    // Current format: "✨ v1.0.2 Available Now"
                    // New format: "✨ v[VERSION] - [HIGHLIGHTS]"
                    versionBadge.textContent = `✨ v${data.version.split('+')[0]}`;
                }

                // Update translations object in memory for current session consistency if user switches lang
                // Note: This is a simple override. For full multi-lang support of dynamic content, 
                // we'd need the JSON to have langs or just use English/Universal text for version.
                Object.keys(translations).forEach(lang => {
                    if (translations[lang].version_badge) {
                        translations[lang].version_badge = `✨ v${data.version.split('+')[0]} - ${data.highlights}`;
                    }
                });
            }
        })
        .catch(err => console.log('Release info not found, using default.'));

    console.log("Cozy Pomodoro Landing Page - Fixed Loaded ✨");
});
