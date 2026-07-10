"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

export default function Projects() {
  const projects = [
    {
      title: "Botanical Journal",
      description: "나만의 반려식물 성장 일기 서비스. 날짜별 기록 및 알림 기능 구현.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Eco-Friendly Shop",
      description: "친환경 제품 전용 이커머스 플랫폼. 결제 연동 및 반응형 UI 구축.",
      tags: ["Next.js", "Recoil", "Framer Motion"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Markdown Blog",
      description: "정적 사이트 생성기를 활용한 개인 블로그. 다크모드 및 검색 기능 포함.",
      tags: ["Gatsby", "GraphQL", "Styled Components"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Habit Tracker",
      description: "매일의 습관을 기록하고 달성률을 시각화해주는 웹 애플리케이션.",
      tags: ["Vue3", "Pinia", "Chart.js"],
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto font-light">
            지금까지 피워낸 결실들입니다. 다양한 프로젝트를 통해 마주한 문제들을 고민하고 해결해왔습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-[20px] p-8 border border-gray-100 hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Project Image Placeholder - can be replaced with real image */}
              <div className="w-full h-48 bg-gray-50 rounded-xl mb-6 overflow-hidden relative group-hover:bg-primary/5 transition-colors duration-500 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-300 group-hover:text-primary/40 transition-colors duration-500 group-hover:scale-110">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a href={project.links.github} className="text-gray-400 hover:text-primary transition-colors" aria-label="GitHub Repository">
                    <GithubIcon />
                  </a>
                  <a href={project.links.live} className="text-gray-400 hover:text-primary transition-colors" aria-label="Live Demo">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <p className="text-foreground/70 font-light leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-background text-foreground/60 text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
