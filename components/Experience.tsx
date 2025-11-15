'use client'
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './Section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useSectionView } from '@/lib/hooks';
import { useTheme } from "@/context/Theme-Context";

export default function Experience() {
  const { ref } = useSectionView("Career");
  const { theme } = useTheme();

  // Framer Motion variants for smooth, tasteful reveals
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
  };
  const listVariants = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.06, when: 'beforeChildren' },
    },
  };
  const listItemVariants = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0 },
  };

  return (
  <section id="career" ref={ref} className="relative  mb-16 -mt-6">
      <SectionHeading> Career Highlights </SectionHeading>

      {/* subtle decorative gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <VerticalTimeline lineColor={theme === "light" ? "#9ca3af" : "rgba(255, 255, 255, 0.2)"}>
        {experiencesData.map((item, index: number) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              dateClassName="text-[0.8rem] font-medium text-gray-500 dark:text-gray-400"
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
                border: theme === "light" ? "1px solid #e5e7eb" : "1px solid rgba(255, 255, 255, 0.15)",
              }}
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 text-justify">
                  {item.description}
                </p>

                {Array.isArray((item as any).highlights) && (item as any).highlights.length > 0 && (
                  <motion.ul
                    className="mt-3 list-disc pl-5 space-y-1 text-gray-700 dark:text-white/75"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: index * 0.08 + 0.1 }}
                  >
                    {(item as any).highlights.map((point: string, i: number) => (
                      <motion.li key={i} variants={listItemVariants}>{point}</motion.li>
                    ))}
                  </motion.ul>
                )}

                {Array.isArray((item as any).skills) && (item as any).skills.length > 0 && (
                  <motion.div
                    className="mt-3 flex flex-wrap gap-2"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: index * 0.08 + 0.15 }}
                  >
                    {(item as any).skills.map((skill: string, i: number) => (
                      <motion.span
                        key={i}
                        variants={listItemVariants}
                        className="inline-block rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-white/10 dark:text-white/80"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}