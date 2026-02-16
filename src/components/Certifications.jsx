import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            name: 'Introduction to Machine Learning',
            platform: 'Coursera',
            issuer: 'Duke University',
            year: '2025'
        },
        {
            name: 'Generative AI with Large Language Models',
            platform: 'Coursera',
            issuer: 'AWS and DeepLearning.AI',
            year: '2025'
        },
        {
            name: 'Generative AI and Accelerated Computing',
            platform: 'IIIT Nagpur',
            issuer: 'NVIDIA',
            year: '2025',
            credential: 'https://coursera.org',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 },
        },
    };

    return (
        <div className="section-padding bg-bg-section">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="gradient-text">Certifications</span>
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-6 hover:scale-105 transition-all duration-300 flex flex-col"
                            variants={itemVariants}
                        >
                            <div className="flex items-start gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-accent-soft/20 flex-shrink-0">
                                    <Award className="w-6 h-6 text-accent-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-text-heading mb-2 leading-tight">
                                        {cert.name}
                                    </h3>
                                    <p className="text-sm text-text-body mb-1">{cert.issuer}</p>
                                    <p className="text-xs text-text-muted">{cert.platform}</p>
                                </div>
                            </div>

                            <div className="mt-auto flex items-center justify-between">
                                <span className="text-sm text-text-muted">{cert.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Certifications;
