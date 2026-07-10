"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-leaf/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100"
        >
          <Leaf className="w-8 h-8 text-primary" strokeWidth={1.5} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6"
        >
          자연 속에서 <br className="md:hidden" />
          <span className="text-primary">성장하는 사람</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-foreground/70 mb-10 max-w-2xl font-light leading-relaxed"
        >
          꾸준한 기록과 성장을 통해 단단한 뿌리를 내리는 프론트엔드 개발자입니다. 매일 조금씩 잎사귀를 틔워내듯, 사용자를 위한 더 나은 경험을 만들어갑니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="#about"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium overflow-hidden transition-all hover:bg-primary-hover hover:shadow-lg hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-2">
              알아보기
            </span>
          </a>
        </motion.div>
      </div>

      {/* Floating Leaves Animation */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/6 text-primary/20"
      >
        <Leaf size={24} />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 right-1/6 text-leaf/30"
      >
        <Leaf size={32} />
      </motion.div>
    </section>
  );
}
