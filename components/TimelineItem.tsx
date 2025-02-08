"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  role: string;
  period: string;
  description: string;
}

const TimelineItem = ({ title, role, period, description }: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-8 border-l border-purple-500/30"
    >
      <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-0 ring-4 ring-black" />
      <div className="mb-2">
        <h3 className="text-xl font-semibold text-purple-200">{title}</h3>
        <div className="text-sm text-purple-400">{role}</div>
        <div className="text-sm text-gray-500">{period}</div>
      </div>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default TimelineItem;