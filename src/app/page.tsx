"use client";

import { motion, useInView, Variant, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Showcase from "@/components/Showcase";
import Contact from "@/components/Contact";

interface AnimatedSectionProps {
  children: ReactNode;
  animation: Variants;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animation}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-black via-black to-yellow-300/30 overflow-hidden"
      id="hero"
    >
      <AnimatedSection animation={fadeInUp}>
        <Hero />
        <h2
          className="text-3xl font-bold text-white mb-16 text-center mt-16"
          id="products"
        >
          Nossos Produtos
        </h2>
      </AnimatedSection>

      <AnimatedSection animation={scaleIn}>
        <Pricing />
        <h2
          className="text-3xl font-bold text-white mb-12 text-center mt-16"
          id="showcase"
        >
          Showcases
        </h2>
      </AnimatedSection>

      <AnimatedSection animation={slideInLeft}>
        <Showcase />
        <h2
          className="text-3xl font-bold text-white mb-12 text-center"
          id="contact"
        ></h2>
      </AnimatedSection>

      <AnimatedSection animation={fadeIn}>
        <Contact />
      </AnimatedSection>
    </div>
  );
}
