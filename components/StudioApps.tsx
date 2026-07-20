import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AppWindow, ExternalLink } from 'lucide-react';
import { useStoreLinks } from '@/hooks/useAppRegistry';

export default function StudioApps() {
    const { language } = useLanguage();
    const noxLinks = useStoreLinks('noxNotes');
    const safebiteLinks = useStoreLinks('safebite');

    const textMap: Record<string, any> = {
        en: {
            title: "More from FatCat Game Studio",
            subtitle: "Our Apps",
            desc: "Discover other tools we've built to improve your digital life.",
            btn: "Get it on Play Store",
            apps: [
                { id: "noxNotes", name: "Nox Notes: Aesthetic Journal", desc: "Your minimal, dark-mode focused note taking app.", logo: "/logos/noxnotes-logo.png" },
                { id: "safebite", name: "SafeBite: Milk Label Scan", desc: "Analyze your food ingredients for a healthier diet.", logo: "/logos/safebite-logo.png" }
            ]
        },
        es: {
            title: "Más de FatCat Game Studio",
            subtitle: "Nuestras Apps",
            desc: "Descubre otras herramientas que hemos creado para mejorar tu vida digital.",
            btn: "Ver en Play Store",
            apps: [
                { id: "noxNotes", name: "Nox Notes: Aesthetic Journal", desc: "Tu aplicación minimalista de notas con modo oscuro.", logo: "/logos/noxnotes-logo.png" },
                { id: "safebite", name: "SafeBite: Milk Label Scan", desc: "Analiza los ingredientes de tu comida para una dieta más sana.", logo: "/logos/safebite-logo.png" }
            ]
        },
        fr: {
            title: "Plus de FatCat Game Studio",
            subtitle: "Nos Applications",
            desc: "Découvrez d'autres outils que nous avons créés pour améliorer votre vie numérique.",
            btn: "Voir sur le Play Store",
            apps: [
                { id: "noxNotes", name: "Nox Notes: Aesthetic Journal", desc: "Votre application de prise de notes minimaliste avec mode sombre.", logo: "/logos/noxnotes-logo.png" },
                { id: "safebite", name: "SafeBite: Milk Label Scan", desc: "Analysez les ingrédients de vos aliments pour une alimentation plus saine.", logo: "/logos/safebite-logo.png" }
            ]
        },
        de: {
            title: "Mehr von FatCat Game Studio",
            subtitle: "Unsere Apps",
            desc: "Entdecken Sie weitere Tools, die wir entwickelt haben, um Ihr digitales Leben zu verbessern.",
            btn: "Im Play Store ansehen",
            apps: [
                { id: "noxNotes", name: "Nox Notes: Aesthetic Journal", desc: "Ihre minimalistische Notiz-App mit Dark-Mode-Fokus.", logo: "/logos/noxnotes-logo.png" },
                { id: "safebite", name: "SafeBite: Milk Label Scan", desc: "Analysieren Sie die Zutaten Ihrer Lebensmittel für eine gesündere Ernährung.", logo: "/logos/safebite-logo.png" }
            ]
        },
        it: {
            title: "Altro da FatCat Game Studio",
            subtitle: "Le nostre App",
            desc: "Scopri altri strumenti che abbiamo creato per migliorare la tua vita digitale.",
            btn: "Vedi sul Play Store",
            apps: [
                { id: "noxNotes", name: "Nox Notes: Aesthetic Journal", desc: "La tua app per appunti minimalista focalizzata sulla modalità scura.", logo: "/logos/noxnotes-logo.png" },
                { id: "safebite", name: "SafeBite: Milk Label Scan", desc: "Analizza gli ingredienti del tuo cibo per una dieta più sana.", logo: "/logos/safebite-logo.png" }
            ]
        },
        pt: {
            title: "Mais da FatCat Game Studio",
            subtitle: "Nossos Apps",
            desc: "Descubra outras ferramentas que criamos para melhorar sua vida digital.",
            btn: "Ver na Play Store",
            apps: [
                { id: "noxNotes", name: "Nox Notes: Aesthetic Journal", desc: "Seu aplicativo de notas minimalista com modo escuro.", logo: "/logos/noxnotes-logo.png" },
                { id: "safebite", name: "SafeBite: Milk Label Scan", desc: "Analise os ingredientes da sua comida para uma dieta mais saudável.", logo: "/logos/safebite-logo.png" }
            ]
        },
        ja: {
            title: "FatCat Game Studioのその他のアプリ",
            subtitle: "私たちのアプリ",
            desc: "あなたのデジタルライフを向上させるために私たちが構築した他のツールを見つけてください。",
            btn: "Play ストアで見る",
            apps: [
                { id: "noxNotes", name: "Nox Notes: Aesthetic Journal", desc: "ダークモードに焦点を当てたミニマルなメモアプリ。", logo: "/logos/noxnotes-logo.png" },
                { id: "safebite", name: "SafeBite: Milk Label Scan", desc: "より健康的な食事のために食品の成分を分析します。", logo: "/logos/safebite-logo.png" }
            ]
        },
        ko: {
            title: "FatCat Game Studio의 더 많은 앱",
            subtitle: "우리의 앱",
            desc: "디지털 라이프를 향상시키기 위해 우리가 만든 다른 도구들을 발견하세요.",
            btn: "Play 스토어에서 보기",
            apps: [
                { id: "noxNotes", name: "Nox Notes: Aesthetic Journal", desc: "다크 모드에 초점을 맞춘 미니멀한 메모 앱입니다.", logo: "/logos/noxnotes-logo.png" },
                { id: "safebite", name: "SafeBite: Milk Label Scan", desc: "더 건강한 식단을 위해 음식의 성분을 분석하세요.", logo: "/logos/safebite-logo.png" }
            ]
        }
    };

    const t = textMap[language] || textMap['en'];
    const appLinks: Record<string, { ios: string | null; android: string | null }> = {
        noxNotes: noxLinks,
        safebite: safebiteLinks,
    };

    return (
        <section className="section container reveal" style={{ backgroundColor: 'var(--surface-color)', borderRadius: 'var(--radius-lg)', padding: '4rem', marginBottom: '4rem' }}>
            <div className="section-header text-center">
                <span className="badge-soft">
                    <AppWindow size={14} style={{ display: 'inline', marginRight: '6px' }} />
                    {t.subtitle}
                </span>
                <h2 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>{t.title}</h2>
                <p style={{ maxWidth: '600px', margin: '1rem auto', fontSize: '1.1rem', color: 'var(--text-light)' }}>
                    {t.desc}
                </p>
            </div>

            <div className="features-grid" style={{ marginTop: '3rem' }}>
                {t.apps.map((app: any, idx: number) => (
                    <div key={idx} className="feature-card-lg" style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', textAlign: 'center' }}>
                        {app.logo ? (
                            <img src={app.logo} alt={`${app.name} logo`} style={{ width: '64px', height: '64px', borderRadius: '16px', marginBottom: '1rem', objectFit: 'cover' }} />
                        ) : (
                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', backgroundColor: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <AppWindow size={32} color="var(--primary-color)" />
                            </div>
                        )}
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{app.name}</h3>
                        <p style={{ flexGrow: 1 }}>{app.desc}</p>
                        
                        <div style={{ display: 'flex', gap: '8px', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {appLinks[app.id]?.android && (
                                <a 
                                    href={appLinks[app.id].android as string} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ transition: 'transform 0.2s ease' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <img src="/assets/google-play-badge.png" alt="Get it on Google Play" style={{ height: '36px', width: 'auto' }} />
                                </a>
                            )}
                            {appLinks[app.id]?.ios && (
                                <a 
                                    href={appLinks[app.id].ios as string} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ transition: 'transform 0.2s ease' }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <img src="/assets/app-store-badge.svg" alt="Download on the App Store" style={{ height: '26px', width: 'auto', marginTop: '5px' }} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
