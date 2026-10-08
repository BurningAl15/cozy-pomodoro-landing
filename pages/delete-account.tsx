import { useLanguage } from '@/contexts/LanguageContext';
import PageTemplate from '@/components/PageTemplate';
import type { SiteLocale } from '@/locales/legalContent';

const contactEmail = 'fatcatgamestudio.oc@gmail.com';

const copy: Record<SiteLocale, {
    title: string;
    intro: string;
    inAppTitle: string;
    inApp: string;
    webTitle: string;
    web: string;
    button: string;
    subject: string;
    body: string;
    deletionTitle: string;
    deletion: string;
    localTitle: string;
    local: string;
    purchases: string;
    noPassword: string;
}> = {
    en: {
        title: 'Delete your Cozy Pomodoro account',
        intro: 'You can request deletion of your Cozy Pomodoro account and associated cloud data, even if you no longer have the app installed.',
        inAppTitle: 'From the app',
        inApp: 'Open Settings → Account → Delete account. You can choose whether to erase the app data stored on this device as part of that flow.',
        webTitle: 'From this webpage',
        web: 'Email us from the address linked to your Cozy Pomodoro account. We will verify the request and remove the Firebase account and the Cozy cloud data associated with it, including profile, registered devices, focus progress, preferences, and sessions.',
        button: 'Email a deletion request',
        subject: 'Cozy Pomodoro account deletion request',
        body: 'Please delete my Cozy Pomodoro account and associated cloud data.\n\nAccount email:\nCountry/store (optional):\n',
        deletionTitle: 'What deletion covers',
        deletion: 'We will confirm when the account and Cozy-managed cloud data have been deleted. Apple or Google may retain purchase records under their own policies. This request does not issue a refund.',
        localTitle: 'Data on your device',
        local: 'A web request cannot erase data stored locally on a device you still own. Use the in-app deletion flow and select the option to erase local data, or uninstall the app. If the app is no longer installed, the data may already have been removed by the operating system.',
        purchases: 'If you use a different email app, write to',
        noPassword: 'Do not include your password or payment details. We may contact you to verify ownership before completing the request.',
    },
    es: {
        title: 'Eliminar tu cuenta de Cozy Pomodoro',
        intro: 'Puedes solicitar la eliminación de tu cuenta de Cozy Pomodoro y de los datos asociados en la nube, aunque ya no tengas la app instalada.',
        inAppTitle: 'Desde la app',
        inApp: 'Abre Ajustes → Cuenta → Eliminar cuenta. En ese proceso puedes elegir si también borras los datos que la app guarda en este dispositivo.',
        webTitle: 'Desde esta página',
        web: 'Escríbenos desde el correo vinculado a tu cuenta de Cozy Pomodoro. Verificaremos la solicitud y eliminaremos la cuenta de Firebase y los datos en la nube administrados por Cozy asociados a ella: perfil, dispositivos registrados, progreso de enfoque, preferencias y sesiones.',
        button: 'Enviar solicitud de eliminación',
        subject: 'Solicitud para eliminar cuenta de Cozy Pomodoro',
        body: 'Solicito eliminar mi cuenta de Cozy Pomodoro y los datos asociados en la nube.\n\nCorreo de la cuenta:\nPaís/tienda (opcional):\n',
        deletionTitle: 'Qué incluye la eliminación',
        deletion: 'Confirmaremos cuando se eliminen la cuenta y los datos en la nube administrados por Cozy. Apple o Google pueden conservar registros de compra conforme a sus propias políticas. Esta solicitud no genera un reembolso.',
        localTitle: 'Datos en tu dispositivo',
        local: 'Una solicitud web no puede borrar datos guardados localmente en un dispositivo que todavía tienes. Usa el proceso de eliminación dentro de la app y elige borrar los datos locales, o desinstálala. Si ya no está instalada, el sistema operativo quizá ya eliminó esos datos.',
        purchases: 'Si prefieres usar otra aplicación de correo, escríbenos a',
        noPassword: 'No incluyas tu contraseña ni datos de pago. Es posible que te contactemos para verificar que eres titular de la cuenta antes de completar la solicitud.',
    },
    fr: {
        title: 'Supprimer votre compte Cozy Pomodoro',
        intro: 'Vous pouvez demander la suppression de votre compte Cozy Pomodoro et des données cloud associées, même si l’application n’est plus installée.',
        inAppTitle: 'Depuis l’application',
        inApp: 'Ouvrez Réglages → Compte → Supprimer le compte. Vous pouvez également choisir d’effacer les données stockées sur cet appareil.',
        webTitle: 'Depuis cette page',
        web: 'Écrivez-nous depuis l’adresse e-mail liée à votre compte Cozy Pomodoro. Nous vérifierons la demande et supprimerons le compte Firebase et les données cloud Cozy associées : profil, appareils enregistrés, progression, préférences et sessions.',
        button: 'Envoyer une demande de suppression',
        subject: 'Demande de suppression du compte Cozy Pomodoro',
        body: 'Veuillez supprimer mon compte Cozy Pomodoro et les données cloud associées.\n\nE-mail du compte :\nPays/boutique (facultatif) :\n',
        deletionTitle: 'Portée de la suppression',
        deletion: 'Nous confirmerons la suppression du compte et des données cloud gérées par Cozy. Apple ou Google peuvent conserver les justificatifs d’achat selon leurs propres règles. Cette demande ne donne pas droit à un remboursement.',
        localTitle: 'Données sur votre appareil',
        local: 'Une demande web ne peut pas effacer les données stockées sur un appareil que vous possédez encore. Utilisez la suppression dans l’application en choisissant d’effacer les données locales, ou désinstallez l’application.',
        purchases: 'Vous pouvez aussi écrire à',
        noPassword: 'N’incluez pas votre mot de passe ni vos informations de paiement. Nous pourrons vous contacter pour vérifier la propriété du compte.',
    },
    de: {
        title: 'Cozy-Pomodoro-Konto löschen',
        intro: 'Du kannst die Löschung deines Cozy-Pomodoro-Kontos und der zugehörigen Cloud-Daten beantragen, auch wenn die App nicht mehr installiert ist.',
        inAppTitle: 'In der App',
        inApp: 'Öffne Einstellungen → Konto → Konto löschen. Dort kannst du auch die auf diesem Gerät gespeicherten App-Daten löschen lassen.',
        webTitle: 'Über diese Webseite',
        web: 'Schreibe uns von der E-Mail-Adresse, die mit deinem Cozy-Pomodoro-Konto verknüpft ist. Wir prüfen die Anfrage und löschen das Firebase-Konto sowie die zugehörigen Cozy-Cloud-Daten: Profil, registrierte Geräte, Fokusfortschritt, Einstellungen und Sitzungen.',
        button: 'Löschanfrage per E-Mail senden',
        subject: 'Anfrage zur Löschung des Cozy-Pomodoro-Kontos',
        body: 'Bitte lösche mein Cozy-Pomodoro-Konto und die zugehörigen Cloud-Daten.\n\nKonto-E-Mail:\nLand/Store (optional):\n',
        deletionTitle: 'Umfang der Löschung',
        deletion: 'Wir bestätigen, sobald das Konto und die von Cozy verwalteten Cloud-Daten gelöscht wurden. Apple oder Google können Kaufbelege gemäß ihren eigenen Richtlinien aufbewahren. Die Anfrage löst keine Erstattung aus.',
        localTitle: 'Daten auf deinem Gerät',
        local: 'Eine Webanfrage kann keine lokal gespeicherten Daten auf einem Gerät löschen, das du noch besitzt. Nutze die Löschfunktion in der App und wähle das Löschen lokaler Daten, oder deinstalliere die App.',
        purchases: 'Alternativ schreibe an',
        noPassword: 'Sende kein Passwort und keine Zahlungsdaten mit. Wir können dich kontaktieren, um die Kontoinhaberschaft zu bestätigen.',
    },
    it: {
        title: 'Elimina il tuo account Cozy Pomodoro',
        intro: 'Puoi richiedere l’eliminazione del tuo account Cozy Pomodoro e dei dati cloud associati, anche se l’app non è più installata.',
        inAppTitle: 'Dall’app',
        inApp: 'Apri Impostazioni → Account → Elimina account. Puoi scegliere se cancellare anche i dati dell’app salvati sul dispositivo.',
        webTitle: 'Da questa pagina',
        web: 'Scrivici dall’indirizzo email collegato al tuo account Cozy Pomodoro. Verificheremo la richiesta ed elimineremo l’account Firebase e i dati cloud Cozy associati: profilo, dispositivi registrati, progressi, preferenze e sessioni.',
        button: 'Invia richiesta di eliminazione',
        subject: 'Richiesta di eliminazione account Cozy Pomodoro',
        body: 'Elimina il mio account Cozy Pomodoro e i dati cloud associati.\n\nEmail dell’account:\nPaese/store (facoltativo):\n',
        deletionTitle: 'Cosa viene eliminato',
        deletion: 'Confermeremo l’eliminazione dell’account e dei dati cloud gestiti da Cozy. Apple o Google possono conservare i dati di acquisto secondo le proprie politiche. La richiesta non comporta un rimborso.',
        localTitle: 'Dati sul dispositivo',
        local: 'Una richiesta web non può cancellare i dati salvati localmente su un dispositivo che possiedi ancora. Usa la procedura di eliminazione nell’app e scegli di cancellare i dati locali, oppure disinstalla l’app.',
        purchases: 'In alternativa, scrivi a',
        noPassword: 'Non inviare password o dati di pagamento. Potremmo contattarti per verificare che tu sia il titolare dell’account.',
    },
    pt: {
        title: 'Excluir sua conta do Cozy Pomodoro',
        intro: 'Você pode solicitar a exclusão da sua conta Cozy Pomodoro e dos dados associados na nuvem, mesmo se o app não estiver mais instalado.',
        inAppTitle: 'No app',
        inApp: 'Abra Ajustes → Conta → Excluir conta. Você também pode escolher se deseja apagar os dados do app armazenados neste dispositivo.',
        webTitle: 'Nesta página',
        web: 'Escreva para nós usando o e-mail vinculado à sua conta Cozy Pomodoro. Vamos verificar a solicitação e excluir a conta Firebase e os dados Cozy na nuvem associados: perfil, dispositivos registrados, progresso, preferências e sessões.',
        button: 'Enviar solicitação de exclusão',
        subject: 'Solicitação de exclusão da conta Cozy Pomodoro',
        body: 'Exclua minha conta Cozy Pomodoro e os dados associados na nuvem.\n\nE-mail da conta:\nPaís/loja (opcional):\n',
        deletionTitle: 'O que será excluído',
        deletion: 'Vamos confirmar quando a conta e os dados na nuvem gerenciados pelo Cozy forem excluídos. Apple ou Google podem manter registros de compra conforme suas políticas. Esta solicitação não gera reembolso.',
        localTitle: 'Dados no seu dispositivo',
        local: 'Uma solicitação pela web não pode apagar dados armazenados localmente em um dispositivo que você ainda possui. Use o fluxo de exclusão no app e escolha apagar os dados locais, ou desinstale o app.',
        purchases: 'Se preferir usar outro aplicativo de e-mail, escreva para',
        noPassword: 'Não envie sua senha nem dados de pagamento. Podemos entrar em contato para verificar a titularidade da conta.',
    },
    ja: {
        title: 'Cozy Pomodoroアカウントを削除する',
        intro: 'アプリをインストールしていない場合でも、Cozy Pomodoroアカウントと関連するクラウドデータの削除を申請できます。',
        inAppTitle: 'アプリから',
        inApp: '設定 → アカウント → アカウントを削除を開きます。この操作では端末に保存されたアプリデータも削除するか選べます。',
        webTitle: 'このウェブページから',
        web: 'Cozy Pomodoroアカウントに紐づいたメールアドレスからご連絡ください。申請を確認後、Firebaseアカウントと関連するCozyのクラウドデータ（プロフィール、登録済み端末、集中の進捗、設定、セッション）を削除します。',
        button: '削除をメールで申請する',
        subject: 'Cozy Pomodoroアカウント削除の申請',
        body: 'Cozy Pomodoroアカウントと関連するクラウドデータの削除をお願いします。\n\nアカウントのメールアドレス：\n国/ストア（任意）：\n',
        deletionTitle: '削除の対象',
        deletion: 'アカウントとCozyが管理するクラウドデータの削除後に確認します。AppleまたはGoogleは各社のポリシーに従って購入記録を保持する場合があります。この申請は返金を行うものではありません。',
        localTitle: '端末内のデータ',
        local: 'ウェブからの申請では、お客様の端末にローカル保存されたデータを削除できません。アプリの削除手順でローカルデータの消去を選ぶか、アプリをアンインストールしてください。',
        purchases: '別のメールアプリを使う場合はこちらへ',
        noPassword: 'パスワードや決済情報は送らないでください。申請完了前にアカウント所有者の確認をお願いする場合があります。',
    },
    ko: {
        title: 'Cozy Pomodoro 계정 삭제',
        intro: '앱이 설치되어 있지 않아도 Cozy Pomodoro 계정과 관련 클라우드 데이터의 삭제를 요청할 수 있습니다.',
        inAppTitle: '앱에서',
        inApp: '설정 → 계정 → 계정 삭제를 여세요. 이 과정에서 기기에 저장된 앱 데이터도 삭제할지 선택할 수 있습니다.',
        webTitle: '이 웹페이지에서',
        web: 'Cozy Pomodoro 계정에 연결된 이메일 주소로 문의하세요. 요청을 확인한 뒤 Firebase 계정과 관련 Cozy 클라우드 데이터(프로필, 등록 기기, 집중 진행 기록, 설정, 세션)를 삭제합니다.',
        button: '이메일로 삭제 요청 보내기',
        subject: 'Cozy Pomodoro 계정 삭제 요청',
        body: 'Cozy Pomodoro 계정과 관련 클라우드 데이터를 삭제해 주세요.\n\n계정 이메일:\n국가/스토어(선택):\n',
        deletionTitle: '삭제되는 항목',
        deletion: '계정과 Cozy가 관리하는 클라우드 데이터가 삭제되면 확인해 드립니다. Apple 또는 Google은 각 정책에 따라 구매 기록을 보관할 수 있습니다. 이 요청은 환불을 처리하지 않습니다.',
        localTitle: '기기에 저장된 데이터',
        local: '웹 요청으로는 아직 소유하고 있는 기기에 로컬 저장된 데이터를 지울 수 없습니다. 앱의 계정 삭제 과정에서 로컬 데이터 삭제를 선택하거나 앱을 제거하세요.',
        purchases: '다른 이메일 앱을 사용하려면 다음 주소로 연락하세요.',
        noPassword: '비밀번호나 결제 정보를 보내지 마세요. 요청을 완료하기 전에 계정 소유권을 확인하기 위해 연락할 수 있습니다.',
    },
};

export default function DeleteAccount() {
    const { language } = useLanguage();
    const text = copy[language];
    const subject = encodeURIComponent(text.subject);
    const body = encodeURIComponent(text.body);

    return (
        <PageTemplate title={text.title} badge="Cozy Pomodoro" icon="🗑️">
            <p>{text.intro}</p>
            <h2>{text.inAppTitle}</h2>
            <p>{text.inApp}</p>
            <h2>{text.webTitle}</h2>
            <p>{text.web}</p>
            <p style={{ textAlign: 'center', margin: '2rem 0' }}>
                <a className="button button-primary" href={`mailto:${contactEmail}?subject=${subject}&body=${body}`}>
                    {text.button}
                </a>
            </p>
            <p>{text.purchases} <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
            <p>{text.noPassword}</p>
            <h2>{text.deletionTitle}</h2>
            <p>{text.deletion}</p>
            <h2>{text.localTitle}</h2>
            <p>{text.local}</p>
        </PageTemplate>
    );
}
