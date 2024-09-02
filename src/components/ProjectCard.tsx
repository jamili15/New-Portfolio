"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./lib-components/io/Button";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  text: string;
  href: string;
}

const ProjectCard = ({ image, title, text, href }: Props) => {
  return (
    <div className="w-[450px] h-[280px] rounded-md cursor-pointer">
      <motion.div
        className="flip-card-inner w-full h-full relative"
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6 }}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="flip-card-front w-full h-full bg-cover bg-center text-white rounded-lg p-4 absolute backface-hidden"
        />
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="flip-card-back w-full h-full bg-cover bg-center text-white rounded-lg p-4 absolute backface-hidden"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-50 z-[-1]" />
          <div className="flex flex-col gap-5 py-3 z-[30]">
            <h1 className="text-white text-2xl font-semibold">{title}</h1>
            <p className="text-gray-200 text-[20px]">{text}</p>
            <Link href={href} target="_blank" rel="noopener noreferrer">
              <Button>Learn more</Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
