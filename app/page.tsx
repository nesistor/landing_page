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
  Play
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
      detailedDescription: "A sophisticated mobile application that revolutionizes voice communication. Built with Flutter for cross-platform compatibility, featuring real-time voice processing, custom audio filters, and seamless cloud integration with Firebase. Implements advanced state management with Riverpod and follows clean architecture principles.",
      link: "https://play.google.com/store/apps/details?id=com.vocale.app",
      tags: ["Flutter", "Firebase", "Mobile"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "GovAssist AI",
      description: "AI-powered assistant for government services",
      detailedDescription: "An innovative AI solution that streamlines government service access. Utilizes advanced NLP models for document understanding, implements RAG for accurate information retrieval, and features a user-friendly interface. Built with Python, FastAPI, and modern AI/ML technologies.",
      link: "https://github.com/karolmalicki/govassist",
      tags: ["Python", "AI/ML", "NLP"],
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "SentinelNet",
      description: "Security-focused network monitoring tool",
      detailedDescription: "A robust network security monitoring solution built with Go. Features real-time threat detection, automated response systems, and comprehensive logging. Deployed using Kubernetes for scalability and includes advanced metrics visualization with Prometheus and Grafana.",
      link: "https://github.com/karolmalicki/sentinelnet",
      tags: ["GoLang", "Kubernetes", "Security"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "AICanvas",
      description: "AI-powered creative design platform",
      detailedDescription: "A cutting-edge design platform that combines AI with creative tools. Features image generation with Stable Diffusion, style transfer algorithms, and collaborative design workflows. Built with React and Python, utilizing WebGL for hardware-accelerated graphics processing.",
      link: "https://github.com/karolmalicki/aicanvas",
      tags: ["React", "Python", "AI/ML"],
      image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const experience = [
    {
      title: "Vocale Sp. z o.o.",
      role: "Frontend Developer",
      period: "2022 - Present",
      description: "Leading frontend development using Flutter & Vue.js"
    },
    {
      title: "Marchesini Group S.p.A",
      role: "AI Engineer",
      period: "2021 - 2022",
      description: "Implemented AI solutions for document processing & IoT systems"
    },
    {
      title: "Lablab.ai Hackathons",
      role: "AI Developer",
      period: "2020 - Present",
      description: "Multiple winning projects in AI/ML hackathons"
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
            Software Engineer & AI Enthusiast
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
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button
              className="bg-purple-500 hover:bg-purple-600 transition-colors"
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
              <div className="flex items-center space-x-4">
                <Button size="icon" variant="outline" className="rounded-full hover:bg-purple-500/20">
                  <Play className="h-6 w-6" />
                </Button>
                <div>
                  <h3 className="text-lg font-semibold">Coding Focus Playlist</h3>
                  <p className="text-sm text-gray-400">Curated for deep work sessions</p>
                </div>
              </div>
            </Card>
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
      <Button
        variant="outline"
        className="fixed bottom-6 right-6 bg-black/50 border-purple-500"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        Chat with AI
      </Button>
    </div>
  );
}