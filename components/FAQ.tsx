import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        { q: t('faq1_q'), a: t('faq1_a') },
        { q: t('faq2_q'), a: t('faq2_a') },
        { q: t('faq3_q'), a: t('faq3_a') },
        { q: t('faq4_q'), a: t('faq4_a') },
    ];

    return (
        <section className="faq-section container reveal active" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
            <h2 className="section-title text-center" style={{ marginBottom: '2rem' }}>{t('faq_title')}</h2>

            <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                        <motion.div
                            className="faq-header"
                            onClick={() => toggle(index)}
                            whileHover={{ backgroundColor: 'var(--surface-raised)' }}
                            whileTap={{ scale: 0.99 }}
                        >
                            <h4>{faq.q}</h4>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="faq-icon"
                            >
                                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                            </motion.div>
                        </motion.div>

                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    className="faq-body"
                                    style={{ overflow: 'hidden' }}
                                >
                                    <div className="faq-content-inner">
                                        <p>{faq.a}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}
