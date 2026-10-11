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
    en: { title: 'Cozy Pomodoro 1.5.0', items: ['See your focus progress at a glance with home screen widgets for iPhone and Android.', 'Get back to your cozy focus sessions with a smoother, more reliable app launch.', 'Enjoy the themes and packs you bought, with purchases unlocking the right content.'] },
    es: { title: 'Cozy Pomodoro 1.5.0', items: ['Consulta tu progreso de enfoque de un vistazo con widgets para iPhone y Android.', 'Vuelve a tus sesiones de concentración con una apertura de la app más fluida y fiable.', 'Disfruta los temas y paquetes que compraste; cada compra desbloquea su contenido.'] },
    fr: { title: 'Cozy Pomodoro 1.5.0', items: ['Consultez votre progression d’un coup d’œil grâce aux widgets iPhone et Android.', 'Retrouvez vos sessions de concentration avec une ouverture de l’app plus fluide et fiable.', 'Profitez des thèmes et packs achetés : chaque achat débloque le bon contenu.'] },
    de: { title: 'Cozy Pomodoro 1.5.0', items: ['Sieh deinen Fokusfortschritt auf einen Blick mit Widgets für iPhone und Android.', 'Starte deine Konzentrationssessions wieder mit einem zuverlässigeren App-Start.', 'Nutze deine gekauften Designs und Pakete; jeder Kauf schaltet die passenden Inhalte frei.'] },
    it: { title: 'Cozy Pomodoro 1.5.0', items: ['Controlla i tuoi progressi a colpo d’occhio con i widget per iPhone e Android.', 'Riprendi le tue sessioni di concentrazione con un avvio dell’app più fluido e affidabile.', 'Usa i temi e i pacchetti acquistati: ogni acquisto sblocca i contenuti giusti.'] },
    pt: { title: 'Cozy Pomodoro 1.5.0', items: ['Veja seu progresso de foco rapidamente com widgets para iPhone e Android.', 'Volte às suas sessões de concentração com uma abertura do app mais fluida e confiável.', 'Aproveite os temas e pacotes que comprou: cada compra libera o conteúdo certo.'] },
    ja: { title: 'Cozy Pomodoro 1.5.0', items: ['iPhoneとAndroidのウィジェットで、集中の進み具合をひと目で確認できます。', 'アプリをよりスムーズかつ安定して起動し、すぐに集中を再開できます。', '購入したテーマやパックを、正しく使えるようになりました。'] },
    ko: { title: 'Cozy Pomodoro 1.5.0', items: ['iPhone과 Android 위젯에서 집중 진행 상황을 한눈에 확인하세요.', '더 부드럽고 안정적으로 앱을 열고 집중 세션을 이어가세요.', '구매한 테마와 팩을 제대로 이용할 수 있습니다.'] },
};
