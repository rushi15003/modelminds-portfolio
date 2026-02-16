import React from 'react';
import { motion } from 'motion/react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'AI/ML',
            skills: [
                'Machine Learning',
                'Deep Learning',
                'Natural Language Processing',
                'Transformers',
                'LLM Fine-tuning',
                'Reinforcement Learning',
                'Time Series Analysis',
                'RAG',
                'Agentic AI'
            ],
        },
        {
            title: 'Tools & Frameworks',
            skills: [
                'Python',
                'PyTorch',
                'HuggingFace',
                'Scikit-learn',
                'FastAPI',
                'LangChain',
                'Github',
                'Flask',
                'PostgreSQL',
                'Qdrant'
            ],
        },
        {
            title: 'Frontend & Deployment',
            skills: [
                'React',
                'HTML & CSS',
                'REST APIs',
                'Docker',
                'Git',
                'CI/CD'
            ],
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
        hidden: { opacity: 0, scale: 0.8 },
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
                    <span className="gradient-text">Skills</span>
                </motion.h2>

                <div className="space-y-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                        >
                            <h3 className="text-2xl font-bold text-text-heading mb-6 text-center md:text-left">
                                {category.title}
                            </h3>

                            <motion.div
                                className="flex flex-wrap gap-3 justify-center md:justify-start"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        className="px-6 py-3 bg-surface-card/40 border border-accent-soft/30 rounded-full text-text-heading font-medium hover:border-accent-primary hover:shadow-lg hover:shadow-accent-soft/20 transition-all duration-300 cursor-default"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
