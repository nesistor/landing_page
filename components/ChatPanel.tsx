"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatPanel = ({ isOpen, onClose }: ChatPanelProps) => {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    const aiMessage = { text: "This is a simulated AI response.", isUser: false };
    setTimeout(() => {
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed right-0 top-0 h-full w-96 bg-black/90 border-l border-purple-500/30 shadow-xl"
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-purple-500/30 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-purple-200">AI Assistant</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="hover:text-purple-400"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? "bg-purple-500/20 text-purple-200"
                        : "bg-gray-800/50 text-gray-200"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-purple-500/30">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-2 rounded-lg bg-black/50 border border-purple-500/30 focus:border-purple-500 focus:outline-none text-white"
              />
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatPanel;