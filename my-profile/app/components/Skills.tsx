"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5 / CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Tools & Collaboration",
      skills: ["Git / GitHub", "Figma", "Notion", "Slack", "Jira"],
    },
    {
      title: "Core Competencies",
      skills: ["Semantic Markup", "Responsive Design", "Web Accessibility", "Performance Optimization"],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 px-6 relative bg-background overflow-hidden">
      {/* Decorative leaf blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Capabilities</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto font-light">
            깊이 뿌리내리기 위해 학습한 기술 스택입니다. 도구의 사용법을 넘어, 원리를 이해하고 상황에 맞는 적절한 기술을 선택하려 노력합니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(19,196,0,0.15)] transition-all duration-300 hover:-translate-y-1 group"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-300" />
                {category.title}
              </h3>
              
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {category.skills.map((skill) => (
                  <motion.li 
                    key={skill}
                    variants={itemVariants}
                    className="flex items-center gap-3 text-foreground/80 font-light"
                  >
                    <svg className="w-4 h-4 text-primary opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
