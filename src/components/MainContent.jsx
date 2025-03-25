// MainContent.js
import React from 'react';
import Chatbot from './ChatBot';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import { motion, AnimatePresence } from "framer-motion";

const pixelPageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 5 }, // 进入前：稍微缩小并向下
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 500 } }, // 进入时：弹跳
  exit: { opacity: 0, scale: 0.9, y: -5, transition: { duration: 0.2 } } // 退出时：上浮并消失
};

function MainContent({ currentPage }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPage}
        variants={pixelPageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
              >

        {currentPage === "chatbot" && <div className="min-h-screen flex">
                            <Chatbot />
                          </div>}
        {currentPage === "aboutMe" && <AboutMe />}
        {currentPage === "portfolio" && <Portfolio />}
      </motion.div>
    </AnimatePresence>
  );
}

export default MainContent;
