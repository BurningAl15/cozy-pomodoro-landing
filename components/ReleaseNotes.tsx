import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ReleaseNotes() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="section container release-notes-section" style={{ paddingTop: 0, paddingBottom: '3rem' }}>
            <div className="reveal active" style={{ maxWidth: '650px', margin: '0 auto' }}>
                {/* v1.3.0 Section */}
                <div className="release-card" style={{ marginBottom: '1rem' }}>
                    <motion.div
                        className={`release-header ${openIndex === 0 ? 'active' : ''}`}
                        onClick={() => toggle(0)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                    >
                        <div className="release-title">
                            <span className="release-emoji">✨</span>
                            <span className="release-title-text">{t('whats_new')}</span>
                            <span className="version-badge primary">V1.3.1</span>
                        </div>
                        <motion.div
                            animate={{ rotate: openIndex === 0 ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown size={20} />
                        </motion.div>
                    </motion.div>

                    <AnimatePresence initial={false}>
                        {openIndex === 0 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className="release-content">
                                    <ul className="release-list">
                                        {t('release_notes_v130').split('<br>').map((item, i) => {
                                            const [title, ...descParts] = item.split(':');
                                            const desc = descParts.join(':').trim();
                                            return (
                                                <motion.li
                                                    key={i}
                                                    className="release-item"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                >
                                                    <div className="release-item-text">
                                                        {desc ? (
                                                            <>
                                                                <b>{title.trim()}</b>
                                                                <span>{desc}</span>
                                                            </>
                                                        ) : (
                                                            <span>{item}</span>
                                                        )}
                                                    </div>
                                                </motion.li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* v1.2.0 Section */}
                <div className="release-card">
                    <motion.div
                        className={`release-header ${openIndex === 1 ? 'active' : ''}`}
                        onClick={() => toggle(1)}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                    >
                        <div className="release-title">
                            <span className="release-emoji">✨</span>
                            <span className="release-title-text">{t('whats_new')}</span>
                            <span className="version-badge">V1.2.0</span>
                        </div>
                        <motion.div
                            animate={{ rotate: openIndex === 1 ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown size={20} />
                        </motion.div>
                    </motion.div>

                    <AnimatePresence initial={false}>
                        {openIndex === 1 && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                style={{ overflow: 'hidden' }}
                            >
                                <div className="release-content">
                                    <ul className="release-list">
                                        {t('release_notes_v120').split('<br>').map((item, i) => {
                                            const [title, ...descParts] = item.split(':');
                                            const desc = descParts.join(':').trim();
                                            return (
                                                <motion.li
                                                    key={i}
                                                    className="release-item"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                >
                                                    <div className="release-item-text">
                                                        {desc ? (
                                                            <>
                                                                <b>{title.trim()}</b>
                                                                <span>{desc}</span>
                                                            </>
                                                        ) : (
                                                            <span>{item}</span>
                                                        )}
                                                    </div>
                                                </motion.li>
                                            );
                                        })}
                                    </ul>

                                    <div className="critical-update-section">
                                        <h3>{t('critical_title')}</h3>
                                        <p>{t('critical_desc')}</p>

                                        <motion.div
                                            className="update-image-container"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <img src="assets/ForceUpdate.jpeg" alt="Force Update Feature" />
                                            <div className="image-overlay">
                                                <span>🔍 Click to enlarge</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
