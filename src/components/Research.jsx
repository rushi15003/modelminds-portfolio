import React from 'react';
import { motion } from 'motion/react';
import { FileText, ExternalLink } from 'lucide-react';

const Research = () => {
    const researchItems = [
        {
            title: 'Goal Based Porfolio Diversification System',
            description: 'Designed a Machine Learning Modeling technique for allocation of capital across market. Published in ICSEM 2026.',
            year: '2026',
            type: 'Conference Paper',
        },
        {
            title: 'Beyond Algorithms: GenAI Philosopher',
            description: 'Proposed a quantization based LLM fine-tuning approach for open source models. Published in IEEE Xplore 2025.',
            year: '2025',
            type: 'Conference Paper'
        },
        {
            title: 'T4E conference: IIT Madras',
            description: 'Presented a poster on implementation of LSTM/GRU/Transformer for forecasting engagement levels of students.',
            year: '2025',
            type: 'Poster Presentation'
        }
    ];

    return (
        <div className="section-padding bg-bg-lightest">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="gradient-text">Research</span>
                </motion.h2>

                <div className="space-y-6">
                    {researchItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-6 hover:scale-[1.02] transition-all duration-300"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-start gap-3 mb-3">
                                        <FileText className="w-5 h-5 text-accent-soft mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-xl font-bold text-text-heading mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-text-body text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col md:items-end gap-2 md:min-w-[180px]">
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 text-xs bg-accent-primary/20 text-accent-primary rounded-full border border-accent-primary/30">
                                            {item.type}
                                        </span>
                                        <span className="text-text-muted text-sm">{item.year}</span>
                                    </div>
                                    {item.link && (
                                        <button
                                            onClick={() => window.open(item.link, '_blank')}
                                            className="flex items-center gap-2 text-accent-soft hover:text-accent-primary transition-colors text-sm font-medium"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            View Paper
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Research;
