import Wrapper from '@/components/Wrappers'
import Logo from './Logo'
import { GiHamburgerMenu } from 'react-icons/gi'
import { motion, useScroll, useTransform } from 'motion/react';

export default function Header() {
  const { scrollYProgress } = useScroll();
  // Transform scroll position into a color (change color from white to blue as you scroll)
  const textColor = useTransform(scrollYProgress, [0, 1], ['#0a0a0a', '#4d4d4d']);
  const mediaOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.header
    className='fixed top-0 z-50 h-20 w-full'
    style={{ color: textColor }}
    transition={{ duration: 0.3 }}
    >
      <Wrapper className='flex w-full !my-4 items-center justify-between'>
          <Logo mediaOpacity={mediaOpacity} />
          <GiHamburgerMenu className='text-2xl' />
      </Wrapper>
    </motion.header>
  )
}
