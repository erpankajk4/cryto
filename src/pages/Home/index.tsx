import { darkVideo, lightVideo } from '@/assets';
import Wrapper from '@/components/Wrappers';
import { cn } from '@/utils';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';
import { useState } from 'react';

export default function Home() {
    const { scrollYProgress } = useScroll();
    const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#ffffff', '#0a0a0a']);
    const textColor = useTransform(scrollYProgress, [0, 1], ['#494949', '#c0c0c0']);
    const mediaOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const [isEnd, setIsEnd] = useState(false);
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
      setIsEnd(latest > 0.5); 
    });

    const gridItemLength = window.innerWidth <= 768 ? 4 : 12;
  return (
    <motion.div
      className='relative h-[200vh] !py-20'
      style={{ backgroundColor, color: textColor }}
      transition={{ duration: 0.3 }}
    >
    <Wrapper containerClassName="sticky top-20">
    <motion.h1
      className={cn("text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold !mb-12 2xl:!mb-16", isEnd ? 'text-end' : 'text-start', 
      )}
    >
      Remarkable <br />
      Mining Experience.
    </motion.h1>
      <div className='relative'>
      <video
        src={darkVideo}
        autoPlay
        loop   
        muted   
        className="w-full h-96 object-cover rounded-4xl"
      />
      <motion.video
        src={lightVideo}
        autoPlay
        loop
        muted 
        style={{ opacity: mediaOpacity }}
        className="w-full h-60 object-cover rounded-3xl z-10 absolute inset-0"
      />
           <div className="grid grid-rows-2 h-full grid-cols-2 md:grid-cols-6 absolute inset-0 z-20">
      {Array.from({ length: gridItemLength}).map((_, index) => (
        <motion.div
          key={index}
          className={cn("border flex items-center justify-center",
            (index === 4 || index === 10) && "md:border-l-8",
          )}
          style={{
            borderColor: backgroundColor,
            backgroundColor: gridItemLength === 12
              ? (index === 4 || index === 6 || index === 11 ? backgroundColor : "transparent")
              : (index === 1 ? backgroundColor : "transparent"),
          }}
          >
         {(gridItemLength === 12 ? index === 4 : index === 1) && <p className='!p-5 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>}
        </motion.div>
      ))}

    </div>
      </div>
    </Wrapper>
    </motion.div>

  );
}
