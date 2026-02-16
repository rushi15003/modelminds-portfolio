import React from 'react';
import { motion } from 'motion/react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'LLM Fine-tuning: Philosopher AI',
            description: 'An AI-powered conversational chatbot that engages users in meaningful discussions on philosophical topics, using the Stanford Encyclopedia of Philosophy for context-aware responses.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
            tech: ['Python', 'PyTorch', 'HuggingFace', 'PEFT', 'Web Scrapping'],
            github: 'https://github.com/rushi15003/Philosopher_AI',
        },
        {
            title: 'AI Powered Podcast Summarizer',
            description: 'An AI-driven tool that transcribes YouTube podcast videos and generates concise, easy-to-understand summaries.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
            tech: ['NLP', 'Python', 'Summarization Models', 'Flask'],
            github: 'https://github.com/Pranali0315/AI-Podcast-Summarizer'
        },
        {
            title: 'Vidhaan',
            description: 'An AI chatbot that simplifies complex constitutional language, providing accurate, context-based answers for students and legal aspirants.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
            tech: ['RAG', 'Qdrant', 'Python', 'LLMs'],
            github: 'https://github.com/rushi15003/RAG_Constitution_of_India'
        },
        {
            title: 'Daily Research Digest',
            description: 'An intelligent research agent which gives us summaries and insights on daily latest news on preferred topics',
            image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=600&fit=crop',
            tech: ['Python', 'Langchain', 'LangGraph', 'APIs', 'Flask', 'Agentic AI'],
            github: 'https://github.com/rushi15003/Personal-Daily-Research-Digest'
        },
        {
            title: 'Time Series Forecasting',
            description: 'A project developed for the IITB EdTech Internship 2025 that addresses Time-Series Forecasting of Engagement Levels. The core objective is to build predictive models that forecast future student engagement by analyzing multimodal physiological and eye-tracking signals.',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop',
            tech: ['Python', 'LSTM', 'Transformer', 'PyTorch', 'Pandas', 'Plotly'],
            github: 'https://github.com/rushi15003/Engagement-forecasting'
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <div className="section-padding bg-bg-section">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="gradient-text">Projects</span>
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="h-full"
                        >
                            <Card className="h-full bg-surface-card/20 border border-surface-card/40 hover:border-accent-soft/50 transition-all duration-300 overflow-hidden">
                                <CardHeader floated={false} className="h-56 m-0 rounded-none">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody className="p-6">
                                    <Typography variant="h5" className="mb-3 text-text-heading font-bold">
                                        {project.title}
                                    </Typography>
                                    <Typography className="text-text-body text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </Typography>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs bg-accent-soft/20 text-accent-primary rounded-full border border-accent-soft/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </CardBody>
                                <CardFooter className="pt-0 p-6 flex gap-3">
                                    <Button
                                        size="sm"
                                        className="flex items-center gap-2 bg-accent-primary hover:bg-accent-primary-hover transition-all normal-case text-bg-lightest"
                                        onClick={() => window.open(project.github, '_blank')}
                                    >
                                        <Github className="w-4 h-4" />
                                        Code
                                    </Button>
                                    {project.demo && (
                                        <Button
                                            size="sm"
                                            variant="outlined"
                                            className="flex items-center gap-2 border-accent-soft text-accent-soft hover:bg-accent-soft hover:text-bg-lightest transition-all normal-case"
                                            onClick={() => window.open(project.demo, '_blank')}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Demo
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
