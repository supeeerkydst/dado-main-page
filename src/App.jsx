import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import './index.css';

const sections = ["Skills", "Projects", "Activities", "Affiliations", "Gallery", "Contact"];

export default function Portfolio() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Cover Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-900/60 to-black text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-purple-400 drop-shadow-lg"
        >
          Your Name
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="text-xl mt-4 text-purple-200"
        >
          Multiversal UI Architect | Cyberpunk Coder | Dreamweaver
        </motion.p>
      </section>

      {/* Section Renderer */}
      {sections.map((section, i) => (
        <motion.section
          key={section}
          id={section.toLowerCase()}
          className="py-20 px-6 md:px-20 bg-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-purple-300 mb-10 text-center uppercase tracking-wider">
            {section}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl p-[2px] bg-gradient-to-tr from-purple-700 to-black hover:from-purple-500 transition-all"
              >
                <Card className="bg-black text-white h-40 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 flex items-center justify-center text-center text-lg text-purple-100">
                    {section} Card {item}
                  </CardContent>
                </Card>
                <div className="absolute inset-0 rounded-2xl border-2 border-purple-500 animate-pulse blur-sm opacity-30"></div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      ))}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-gradient-to-t from-black to-purple-950">
        <h2 className="text-3xl font-semibold text-purple-300 mb-10 text-center uppercase tracking-wider">
          Contact
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <Button variant="ghost" className="text-purple-200 flex items-center gap-2 hover:text-purple-400">
            <Mail size={20} /> your@email.com
          </Button>
          <Button variant="ghost" className="text-purple-200 flex items-center gap-2 hover:text-purple-400">
            <Github size={20} /> github.com/yourhandle
          </Button>
          <Button variant="ghost" className="text-purple-200 flex items-center gap-2 hover:text-purple-400">
            <Linkedin size={20} /> linkedin.com/in/yourprofile
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-sm text-purple-600 bg-black border-t border-purple-800">
        © 2025 Your Name | Powered by Vibranium & Cyberpunk Dreams
      </footer>
    </div>
  );
}
