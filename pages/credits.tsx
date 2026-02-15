import { useLanguage } from '@/contexts/LanguageContext';
import PageTemplate from '@/components/PageTemplate';

export default function Credits() {
    const { t } = useLanguage();

    return (
        <PageTemplate
            title={t('credits')}
            badge={t('badge_credits')}
            icon="💝"
        >
            <div dangerouslySetInnerHTML={{ __html: t('credits_html') }} />
        </PageTemplate>
    );
}
