import { useLanguage } from '@/contexts/LanguageContext';
import PageTemplate from '@/components/PageTemplate';
import { termsContent } from '@/locales/legalContent';

export default function Terms() {
    const { t, language } = useLanguage();

    return (
        <PageTemplate
            title={t('nav_terms')}
            badge={t('badge_terms')}
            icon="📄"
        >
            <div dangerouslySetInnerHTML={{ __html: termsContent[language] }} />
        </PageTemplate>
    );
}
