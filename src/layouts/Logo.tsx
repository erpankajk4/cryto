import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";
import { cn } from "@/utils";
import { Link } from "react-router-dom";
import { motion} from 'motion/react';
export default function Logo({
  className,
  mediaOpacity,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mediaOpacity?: any;
  className?: string;
}) {


  return (
    <Link
      to="/"
      className={cn("flex cursor-pointer items-center gap-2 relative", className)}
    >
      <img
        src={logoDark}
        alt="logo"
        height={300}
        width={500}
        className="max-h-10 w-min object-contain"
      />
      <motion.img
        src={logo}
        alt="logo"
        height={300}
        width={500}
        className="max-h-10 w-min object-contain absolute inset-0"
        style={{ opacity: mediaOpacity }}
      />
    </Link>
  );
}
