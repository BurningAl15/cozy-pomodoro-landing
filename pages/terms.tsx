import { useLanguage } from '@/contexts/LanguageContext';
import PageTemplate from '@/components/PageTemplate';

export default function Terms() {
    const { t } = useLanguage();

    return (
        <PageTemplate
            title={t('nav_terms')}
            badge={t('badge_terms')}
            icon="📄"
        >
            <div dangerouslySetInnerHTML={{ __html: t('terms_html') }} />
        </PageTemplate>
    );
}
