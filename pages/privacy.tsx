import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import PageTemplate from '@/components/PageTemplate';
import { privacyContent } from '@/locales/legalContent';
import type { SiteLocale } from '@/locales/legalContent';

const deletionLabels: Record<SiteLocale, string> = {
    en: 'Request account deletion outside the app',
    es: 'Solicitar la eliminación de la cuenta desde la web',
    fr: 'Demander la suppression du compte sur le site',
    de: 'Kontolöschung über die Website beantragen',
    it: 'Richiedi la cancellazione dell’account dal sito',
    pt: 'Solicitar a exclusão da conta pelo site',
    ja: 'ウェブサイトからアカウント削除を申請する',
    ko: '웹사이트에서 계정 삭제 요청',
};

export default function Privacy() {
    const { t, language } = useLanguage();

    return (
        <PageTemplate
            title={t('nav_privacy')}
            badge={t('badge_privacy')}
            icon="🛡️"
        >
            <div dangerouslySetInnerHTML={{ __html: privacyContent[language] }} />
            <p style={{ marginTop: '2rem', textAlign: 'center' }}>
                <Link href="/delete-account" className="nav-link" style={{ fontWeight: 700 }}>
                    {deletionLabels[language]}
                </Link>
            </p>
        </PageTemplate>
    );
}
