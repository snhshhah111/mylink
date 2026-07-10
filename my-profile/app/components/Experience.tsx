"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      period: "2023.03 - Present",
      role: "Frontend Developer",
      company: "Company Name",
      description: "사용자 경험 개선 및 신규 기능 개발. 사내 디자인 시스템 구축 참여 및 컴포넌트 재사용성 30% 증가.",
    },
    {
      period: "2022.01 - 2023.02",
      role: "Web Publisher / Junior Developer",
      company: "Agency Corp",
      description: "다양한 웹사이트의 마크업 및 인터랙션 구현. 반응형 웹 최적화 및 웹 접근성 지침(KWCAG) 준수.",
    },
    {
      period: "2021.06 - 2021.12",
      role: "Frontend Bootcamp",
      company: "Education Institute",
      description: "React 중심의 프론트엔드 심화 과정 수료. 다수의 팀 프로젝트 리딩 및 협업 경험.",
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l border-gray-100 ml-3 md:ml-6 space-y-12 pb-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Node (Leaf motif) */}
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-primary rounded-full ring-4 ring-white shadow-sm" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              
              <h4 className="text-lg text-foreground/80 mb-3">{exp.company}</h4>
              <p className="text-foreground/70 font-light leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
