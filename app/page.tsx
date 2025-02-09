"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Code2, 
  Music, 
  MessageCircle,
  ChevronRight,
  Play,
  CodeXml,
  Cloud,
  BrainCircuit
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ParticleBackground from "@/components/ParticleBackground";
import TechStack from "@/components/TechStack";
import ProjectCard from "@/components/ProjectCard";
import TimelineItem from "@/components/TimelineItem";
import ChatPanel from "@/components/ChatPanel";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const projects = [
    {
      title: "Vocale App",
      description: "Cross-platform mobile application built with Flutter",
      detailedDescription: "Vocale application - is an application not only for sharing texts but also sheet music. Notes is a universal musical language, and Vocale was created to use this language even more freely!",
      link: "https://play.google.com/store/apps/details?id=com.vocale.vocale&hl=en-US&pli=1",
      tags: ["Flutter", "Firebase", "Mobile"],
      image: "/images/vocale.png"
    },
    {
      title: "GovAssist",
      description: "AI-powered assistant for government services",
      detailedDescription: "An innovative AI solution that streamlines government service access. Utilizes advanced NLP models for document understanding, implements RAG for accurate information retrieval, and features a user-friendly interface. Built with Python, FastAPI, and modern AI/ML technologies.",
      link: "https://github.com/nesistor/GovAssist",
      tags: ["Python", "AI/ML", "NLP"],
      image: "/images/GovAssist.png"
    },
    {
      title: "SentinelNet",
      description: "Security-focused network monitoring tool",
      detailedDescription: "A robust network security monitoring solution built with Go. Features real-time threat detection, automated response systems, and comprehensive logging. Deployed using Kubernetes for scalability and includes advanced metrics visualization with Prometheus and Grafana.",
      link: "https://github.com/karolmalicki/sentinelnet",
      tags: ["GoLang", "Kubernetes", "Security"],
      image: "/images/SeninelNet.png"
    },
    {
      title: "Navicare-AI",
      description: "AI-powered creative healthcare platform",
      detailedDescription: "Navicare AI is an advanced platform leveraging artificial intelligence to enhance patient journey mapping and optimize care pathways. Designed to improve patient outcomes and streamline healthcare delivery, Navicare AI empowers healthcare providers with actionable insights, predictive analytics, and personalized care strategies. ",
      link: "https://github.com/Trimph-A/Navicare-AI/blob/main/backend/ai/ai_processing.py",
      tags: ["React", "Python", "AI/ML"],
      image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const experience = [
    {
      "title": "Lablab.ai",
      "role": "AI Developer",
      "period": "2023 - Present",
      "description": "7 innovative AI/ML Projects. I developed Python scripts using libraries such as OpenAI, Pydantic, and Langchain, and worked with a wide range of models including Grok, Gemini 1.5 Flash, and Llama 3.2 (spanning multi-billion and 1B parameters). I also implemented RAG by creating embeddings with these models and identifying correlations between them."
    },
    {
      title: "Marchesini Group S.p.A",
      role: "AI Engineer",
      period: "2022 - 2023",
      description: "Implemented AI solutions for document processing & IoT systems"
    },
    {
      title: "Vocale Sp. z o.o.",
      role: "Frontend Developer",
      period: "2021 - 2022",
      description: "Leading frontend development using Flutter & Vue.js"
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen flex items-center justify-center"
        style={{ y: backgroundY }}
      >
        <div className="text-center z-10 space-y-6">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Karol Malicki
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-purple-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Software Engineer
          </motion.p>
          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              variant="outline"
              className="bg-black/50 border-purple-500 hover:bg-purple-500/20 transition-colors"
              onClick={() => window.open('https://github.com/nesistor', '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              className="bg-purple-500 hover:bg-purple-600 transition-colors"
              onClick={() => window.open('https://www.linkedin.com/in/karol-malicki/', '_blank')}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-purple-300">About Me</h2>
            <p className="text-lg text-gray-300">
              Passionate software engineer with a focus on AI/ML and full-stack development.
              I thrive in hackathons and love building innovative solutions that push the boundaries
              of technology. My expertise spans from mobile development to cloud architecture,
              with a special interest in artificial intelligence and machine learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStack />

      {/* Projects */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-300 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-300 mb-12">Experience</h2>
          <div className="space-y-12">
            {experience.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-300 mb-12">Music & Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/50 border-purple-500/50 p-6">
              {isVideoPlaying ? (
                // Osadzenie wideo, gdy isVideoPlaying === true
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/OLy_JZUlJho?start=3650&autoplay=1"
                    title="Coding Focus Playlist"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                // Widok z przyciskiem Play, gdy wideo nie jest odtwarzane
                <div className="flex items-center space-x-4">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full hover:bg-purple-500/20"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <Play className="h-6 w-6" />
                  </Button>
                  <div>
                    <h3 className="text-lg font-semibold">Coding Focus Playlist</h3>
                    <p className="text-sm text-gray-400">Curated for deep work sessions</p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-purple-300 mb-12">Core Software Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: CodeXml,
                title: "Fullstack Development",
                description: "Kompleksowe rozwiązania webowe z użyciem React, Next.js i Node.js"
              },
              {
                icon: Cloud,
                title: "Cloud Architecture",
                description: "Wdrożenia AWS/GCP i optymalizacja infrastruktury chmurowej"
              },
              {
                icon: BrainCircuit,
                title: "AI/ML Solutions",
                description: "Implementacja modeli machine learning i systemów AI"
              }
            ].map((skill, index) => (
              <div key={index} className="p-6 bg-black/50 border border-purple-500/30 rounded-lg">
                <skill.icon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative mt-20 bg-black border-t border-purple-500/30">
        <div className="max-w-6xl mx-auto py-8 px-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Karol Malicki. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Panel */}
      <ChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Chat Toggle Button */}
      {!isChatOpen && (
        <Button
          variant="outline"
          className="fixed bottom-6 right-6 bg-black/50 border-purple-500"
          onClick={() => setIsChatOpen(true)}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Chat with AI
        </Button>
      )}
    </div>
  );
}