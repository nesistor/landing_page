"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Code2, Smartphone, Layout, Terminal, Cloud, Brain } from "lucide-react";

interface Technology {
  name: string;
  description: string;
}

interface Category {
  name: string;
  icon: JSX.Element;
  technologies: Technology[];
}

const categories: Category[] = [
  {
    name: "Backend",
    icon: <Code2 className="w-6 h-6" />,
    technologies: [
      { name: "GoLang", description: "High-performance systems & APIs" },
      { name: "Python", description: "FastAPI & Django applications" },
      { name: "Node.js", description: "Express & NestJS services" },
      { name: "PostgreSQL", description: "Primary database solution" }
    ]
  },
  {
    name: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    technologies: [
      { name: "Flutter", description: "Cross-platform app development" },
      { name: "React Native", description: "Native mobile experiences" },
      { name: "Swift", description: "iOS application development" },
      { name: "Kotlin", description: "Android development" }
    ]
  },
  {
    name: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    technologies: [
      { name: "Vue.js", description: "Progressive web applications" },
      { name: "React", description: "Interactive user interfaces" },
      { name: "Next.js", description: "Server-side rendering" },
      { name: "TailwindCSS", description: "Utility-first styling" }
    ]
  },
  {
    name: "DevOps",
    icon: <Terminal className="w-6 h-6" />,
    technologies: [
      { name: "Kubernetes", description: "Container orchestration" },
      { name: "Terraform", description: "Infrastructure as code" },
      { name: "Docker", description: "Containerization" },
      { name: "GitHub Actions", description: "CI/CD pipelines" }
    ]
  },
  {
    name: "Cloud",
    icon: <Cloud className="w-6 h-6" />,
    technologies: [
      { name: "AWS", description: "S3, EKS, RDS, CloudFront, CloudWatch" },
      { name: "GCP", description: "Google Cloud Platform" },
      { name: "Firebase", description: "Firebase Auth, FireStorage" },
      { name: "Vercel", description: "Edge deployment" }
    ]
  },
  {
    name: "AI/ML",
    icon: <Brain className="w-6 h-6" />,
    technologies: [
      { name: "OpenAI", description: "AI research and deployment" },
      { name: "Pydantic", description: "Data validation and settings management" },
      { name: "Langchain", description: "LLM applications" },
      { name: "Hugging Face", description: "Transformer models" }

    ]
  }
];

const TechStack = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-purple-300">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleCategoryClick(category.name)}
                className="relative"
              >
                <motion.div
                  className={`cursor-pointer group ${
                    expandedCategory === category.name ? 'bg-purple-900/30' : 'bg-black/50'
                  } border border-purple-500/30 hover:border-purple-500 rounded-lg transition-all duration-300`}
                  animate={{
                    height: expandedCategory === category.name ? 'auto' : '120px',
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-purple-200">
                        {category.name}
                      </h3>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedCategory === category.name ? 180 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-purple-400" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedCategory === category.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 space-y-4"
                      >
                        {category.technologies.map((tech) => (
                          <motion.div
                            key={tech.name}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="flex flex-col space-y-1"
                          >
                            <span className="text-purple-300 font-medium">
                              {tech.name}
                            </span>
                            <span className="text-sm text-gray-400">
                              {tech.description}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;