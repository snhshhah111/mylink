"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, BookOpen } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-primary" strokeWidth={1.5} />,
      title: "꾸준한 성장",
      description: "매일 물을 주고 가꾸는 식물처럼, 작지만 확실한 배움을 쌓아갑니다."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" strokeWidth={1.5} />,
      title: "사용자 중심",
      description: "기술 그 자체보다 기술을 통해 전달되는 따뜻한 경험을 고민합니다."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" strokeWidth={1.5} />,
      title: "기록의 힘",
      description: "시행착오를 기록하고 공유하며, 함께 성장하는 생태계를 지향합니다."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-foreground/80 leading-relaxed font-light"
          >
            <p className="text-lg">
              안녕하세요! 코드로 세상에 작은 변화를 만들어가는 개발자 황승희입니다. 
              복잡한 문제를 단순하게 해결하는 과정에서 즐거움을 느낍니다.
            </p>
            <p className="text-lg">
              마치 하나의 씨앗이 큰 나무로 자라나듯, 처음 작성한 한 줄의 코드가
              누군가에게 편리함을 주는 서비스로 발전하는 과정을 사랑합니다.
              자연스러운 UI/UX와 유지보수하기 좋은 코드를 작성하는 것을 목표로 합니다.
            </p>
            <p className="text-lg">
              기술이라는 단단한 흙 위에, 공감과 소통이라는 물을 주어
              건강한 프로덕트를 키워내고 싶습니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-6"
          >
            {values.map((value, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-background rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  {value.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
