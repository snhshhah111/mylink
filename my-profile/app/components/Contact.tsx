"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center p-4 bg-primary/5 rounded-full mb-8 text-primary">
            <Mail className="w-8 h-8" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Let&apos;s Grow Together</h2>
          <p className="text-lg text-foreground/70 font-light mb-12 leading-relaxed">
            새로운 씨앗을 심고 숲을 가꿔나갈 기회를 찾고 있습니다.<br />
            협업 문의나 커피챗, 어떤 이야기든 환영합니다!
          </p>
          
          <a
            href="mailto:snhshhah111@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium text-lg transition-all hover:bg-primary-hover hover:shadow-lg hover:-translate-y-1 mb-16"
          >
            이메일 보내기
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex justify-center gap-6 border-t border-gray-100 pt-12"
        >
          <a href="mailto:snhshhah111@gmail.com" className="p-3 bg-background rounded-full text-foreground/50 hover:text-primary hover:bg-primary/5 transition-all duration-300" aria-label="Email">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://github.com/snhshhah111" target="_blank" rel="noopener noreferrer" className="p-3 bg-background rounded-full text-foreground/50 hover:text-primary hover:bg-primary/5 transition-all duration-300" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="#" className="p-3 bg-background rounded-full text-foreground/50 hover:text-primary hover:bg-primary/5 transition-all duration-300" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="#" className="p-3 bg-background rounded-full text-foreground/50 hover:text-primary hover:bg-primary/5 transition-all duration-300" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </motion.div>

        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 text-sm text-foreground/40 font-light"
        >
          © {new Date().getFullYear()} 황승희. All rights reserved.<br />
          Designed with nature in mind.
        </motion.p>
      </div>
    </section>
  );
}
