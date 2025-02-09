"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  detailedDescription: string;
  link: string;
  tags: string[];
  image: string;
  index: number;
}

const ProjectCard = ({ title, description, detailedDescription, link, tags, image, index }: ProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: 100,
      y: -100,
      rotateX: 45,
      rotateY: -45
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: i * 0.2
      }
    })
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isFlipped) {
      window.open(link, '_blank');
    } else {
      setIsFlipped(true);
    }
    e.stopPropagation();
  };

  return (
    <motion.div
      className="perspective-1000"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      onClick={handleClick}
    >
      <motion.div
        className="relative w-full h-[400px] cursor-pointer preserve-3d transition-transform duration-700"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        onMouseLeave={() => setIsFlipped(false)}
      >
        {/* Front of the card */}
        <div 
          className="absolute w-full h-full backface-hidden bg-black/80 overflow-hidden"
          style={{ 
            transform: 'translateZ(2px)',
            zIndex: isFlipped ? 0 : 1,
            backfaceVisibility: 'hidden' as const,
            pointerEvents: isFlipped ? 'none' : 'auto'
          }}
        >
          <div className="h-full rounded-lg overflow-hidden bg-black/50 border border-purple-500/30 hover:border-purple-500 transition-colors">
            <div
              className="h-1/2 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-purple-200">{title}</h3>
              <p className="text-gray-400">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full text-sm bg-purple-900/50 text-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back of the card */}
        <div 
          className="absolute w-full h-full backface-hidden overflow-hidden"
          style={{ 
            transform: 'rotateY(180deg) translateZ(2px)',
            zIndex: isFlipped ? 1 : 0,
            backfaceVisibility: 'hidden' as const,
            pointerEvents: isFlipped ? 'auto' : 'none'
          }}
        >
          <div className="h-full rounded-lg overflow-hidden bg-purple-900 border border-purple-500 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-200">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{detailedDescription}</p>
            </div>
            <div className="flex justify-end">
              <button className="flex items-center text-purple-300 hover:text-purple-200 transition-colors">
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;