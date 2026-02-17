"use client";

import { AnimationItem } from "@/entities/animation";
import { motion } from "framer-motion";

export const AnimationList = () =>  {

    return (
        <div className="flex flex-col w-full text-white">
            <div className="">
                <h2 className="text-4xl font-semibold tracking-tight">
                Animation table
                </h2>
                <p className="p-5 pl-0 text-sm text-neutral-400 max-w-xl">
                This my animations
                </p>
            </div>
            <div className="grid grid-cols-3 gap-10 items-center">
                 <AnimationItem>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{opacity: [1, 0.3, 1], width: ["100%", "30%", "100%"]}}
                        transition={{ duration: 5, repeat: Infinity,}}
                        className="absolute -inset-1 bg-indigo-300 -z-10 shadow-[0_0px_40px_20px_rgba(256,256,256,0.06)]"
                    ></motion.div>
                </AnimationItem> 
                <AnimationItem>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{opacity: [1, 0.3, 1], height: ["100%", "30%", "100%"]}}
                        transition={{ duration: 5, repeat: Infinity,}}
                        className="absolute -inset-1 bg-indigo-300 -z-10 shadow-[0_0px_40px_20px_rgba(256,256,256,0.06)]"
                    ></motion.div>
                </AnimationItem> 
                <AnimationItem>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{opacity: [1, 0.3, 1], left: ["0%", "70%", "0%"]}}
                        transition={{ duration: 5, repeat: Infinity}}
                        className="absolute -inset-1 bg-indigo-300 -z-10 shadow-[0_0px_40px_20px_rgba(256,256,256,0.06)]"
                    ></motion.div>
                </AnimationItem> 
            </div>
        </div>
    )
}