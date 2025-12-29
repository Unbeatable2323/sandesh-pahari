"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [isHiringHovered, setIsHiringHovered] = useState(false);
  const [isDownloadHovered, setIsDownloadHovered] = useState(false);
  const [isViewHovered, setIsViewHovered] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Sandesh_Pahari_CV.pdf";
    link.download = "Sandesh_Pahari_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewCV = () => {
    // Open the CV in a new tab for quick viewing
    window.open("/Sandesh_Pahari_CV.pdf", "_blank", "noopener,noreferrer");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="lg:py-16 relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-secondary-600 animate-pulse">
                Hello, I&apos;m{" "}
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-secondary-500"
              >
                <TypeAnimation
                  sequence={["Sandesh", 1000, "Developer", 1000, "Engineer", 1000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  cursor={true}
                />
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl leading-relaxed max-w-2xl"
          >
            Undergraduate Computer Engineering Student at Pokhara University
            School of Engineering. Passionate about creating innovative solutions
            and building impactful projects.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHiringHovered(true)}
              onHoverEnd={() => setIsHiringHovered(false)}
            >
              <Link
                href="/#contact"
                className="relative px-8 py-4 w-full sm:w-fit rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold shadow-lg overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isHiringHovered && (
                    <motion.span
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                    >
                      ✨
                    </motion.span>
                  )}
                  Hire Me
                  {isHiringHovered && (
                    <motion.span
                      initial={{ x: 10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                    >
                      →
                    </motion.span>
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ zIndex: 0 }}
                />
              </Link>
            </motion.div>

            <div className="flex gap-3 w-full sm:w-auto">
              <motion.button
                onClick={handleViewCV}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onHoverStart={() => setIsViewHovered(true)}
                onHoverEnd={() => setIsViewHovered(false)}
                className="relative px-6 py-3 w-full sm:w-fit rounded-full border border-white/10 bg-transparent text-white font-semibold shadow-sm overflow-hidden group transition-all duration-200"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isViewHovered && (
                    <motion.span initial={{ x: -6, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>👁️</motion.span>
                  )}
                  View CV
                </span>
                <motion.div className="absolute inset-0 bg-white/2 opacity-0 group-hover:opacity-5" style={{ zIndex: 0 }} />
              </motion.button>

              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsDownloadHovered(true)}
                onHoverEnd={() => setIsDownloadHovered(false)}
                className="relative px-6 py-3 w-full sm:w-fit rounded-full border-2 bg-transparent text-white font-semibold shadow-lg overflow-hidden group transition-all duration-300"
                style={{ borderImage: "linear-gradient(to right, #EC4899, #8B5CF6) 1" }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isDownloadHovered && (
                    <motion.span initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>⬇️</motion.span>
                  )}
                  Download CV
                  {isDownloadHovered && (
                    <motion.span initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>📄</motion.span>
                  )}
                </span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }} style={{ zIndex: 0 }} />
              </motion.button>
            </div>
          </motion.div>

          {/* Social indicators */}
          <motion.div variants={itemVariants} className="mt-8 flex gap-6">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="text-2xl cursor-pointer"
              title="Developer & Engineer"
            >
              💻
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: -10 }}
              className="text-2xl cursor-pointer"
              title="Problem Solver"
            >
              🧠
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="text-2xl cursor-pointer"
              title="Coffee Enthusiast"
            >
              ☕
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="relative w-full flex justify-center"
          >
            {/* Multiple orbiting circles */}
            <motion.div
              className="absolute w-[280px] h-[280px] lg:w-[440px] lg:h-[440px] rounded-full border-2 border-primary-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[320px] h-[320px] lg:w-[480px] lg:h-[480px] rounded-full border-2 border-secondary-500/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            {/* Main image container */}
            <div className="relative rounded-full bg-gradient-to-br from-primary-500/10 to-secondary-500/10 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center overflow-hidden shadow-2xl">
              <Image
                src="/images/sandesh.jpg"
                alt="Sandesh Pahari"
                className="z-10 rounded-full object-cover w-full h-full"
                width={400}
                height={400}
              />

              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              {/* Pulsing background */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
