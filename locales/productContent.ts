export type SiteLocale = 'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'ja' | 'ko';

export const priceDisclosure: Record<SiteLocale, string> = {
    en: 'Current prices are shown by Apple App Store or Google Play and may vary by country.',
    es: 'Los precios vigentes aparecen en App Store o Google Play y pueden variar según el país.',
    fr: 'Les prix en vigueur sont affichés par l’App Store ou Google Play et peuvent varier selon le pays.',
    de: 'Die aktuellen Preise werden im App Store oder bei Google Play angezeigt und können je nach Land variieren.',
    it: 'I prezzi aggiornati sono mostrati nell’App Store o su Google Play e possono variare in base al Paese.',
    pt: 'Os preços atuais são exibidos na App Store ou no Google Play e podem variar conforme o país.',
    ja: '現在の価格はApp StoreまたはGoogle Playに表示され、国によって異なる場合があります。',
    ko: '현재 가격은 App Store 또는 Google Play에 표시되며 국가별로 다를 수 있습니다.',
};

export const releaseNotes150: Record<SiteLocale, { title: string; items: string[] }> = {
    en: { title: 'Cozy Pomodoro 1.5.0', items: ['Keep your focus or break timer visible on the iPhone Lock Screen with Live Activities, including quick pause and resume controls.', 'See daily focus progress and streaks at a glance with home screen widgets for iPhone and Android.', 'Resume your iOS focus music together with the timer after using Live Activity controls, plus reliability fixes for Android widgets.'] },
    es: { title: 'Cozy Pomodoro 1.5.0', items: ['Mantén visible el timer de enfoque o descanso en la pantalla bloqueada del iPhone con Live Activities y controles rápidos para pausar y reanudar.', 'Consulta tus metas y rachas de enfoque con widgets de inicio para iPhone y Android.', 'En iOS, la música retoma junto con el timer al usar los controles de Live Activities; Android recibe correcciones de estabilidad para sus widgets.'] },
    fr: { title: 'Cozy Pomodoro 1.5.0', items: ['Gardez le minuteur de concentration ou de pause visible sur l’écran verrouillé de l’iPhone avec les Live Activities et leurs commandes pause/reprise.', 'Consultez vos objectifs et séries de concentration avec les widgets d’écran d’accueil sur iPhone et Android.', 'Sur iOS, la musique reprend avec le minuteur après une action Live Activity ; Android bénéficie de correctifs de fiabilité des widgets.'] },
    de: { title: 'Cozy Pomodoro 1.5.0', items: ['Behalte den Fokus- oder Pausentimer mit Live Activities und schnellen Pause-/Fortsetzen-Tasten auf dem iPhone-Sperrbildschirm im Blick.', 'Sieh tägliche Fokusziele und Serien mit Startbildschirm-Widgets auf iPhone und Android.', 'Unter iOS setzt die Musik nach Live-Activity-Steuerung zusammen mit dem Timer fort; Android erhält Zuverlässigkeitskorrekturen für Widgets.'] },
    it: { title: 'Cozy Pomodoro 1.5.0', items: ['Tieni il timer di concentrazione o pausa visibile nella schermata di blocco dell’iPhone con Live Activities e controlli rapidi di pausa/ripresa.', 'Visualizza obiettivi e serie di concentrazione con i widget sulla schermata Home di iPhone e Android.', 'Su iOS la musica riprende insieme al timer dopo i controlli Live Activity; Android include correzioni di affidabilità per i widget.'] },
    pt: { title: 'Cozy Pomodoro 1.5.0', items: ['Veja o timer de foco ou pausa na tela bloqueada do iPhone com Live Activities e controles rápidos para pausar e retomar.', 'Acompanhe suas metas e sequências de foco com widgets na tela inicial do iPhone e Android.', 'No iOS, a música volta junto com o timer após usar os controles da Live Activity; no Android, há correções de estabilidade dos widgets.'] },
    ja: { title: 'Cozy Pomodoro 1.5.0', items: ['Live ActivitiesでiPhoneのロック画面に集中・休憩タイマーを表示し、一時停止や再開をすばやく操作できます。', 'iPhoneとAndroidのホーム画面ウィジェットで、毎日の目標や連続記録を確認できます。', 'iOSではLive Activityの操作後にタイマーと音楽が一緒に再開し、Androidではウィジェットの安定性を改善します。'] },
    ko: { title: 'Cozy Pomodoro 1.5.0', items: ['Live Activities로 iPhone 잠금 화면에서 집중 또는 휴식 타이머를 확인하고 빠르게 일시 정지하거나 다시 시작하세요.', 'iPhone과 Android 홈 화면 위젯에서 일일 집중 목표와 연속 기록을 확인하세요.', 'iOS에서는 Live Activity 조작 후 타이머와 음악이 함께 다시 시작하며 Android 위젯 안정성이 개선됩니다.'] },
};
