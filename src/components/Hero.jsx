import { useEffect, useRef } from "react";
import heroPhone from "../assets/heroPhone.png";
import { motion, useAnimation, useInView } from "framer-motion";
const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const rightContent = useAnimation();
  const leftContent = useAnimation();
  useEffect(() => {
    if (inView) {
      leftContent.start({ x: 0 });
      rightContent.start({ x: 0 });
    }
    if (!inView) {
      leftContent.start({ x: -200 });
      rightContent.start({ x: 200 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <section className="min-h-screen p-5 pt-0">
      <div
        ref={ref}
        className=" rounded-xl flex flex-col md:flex-row items-center justify-evenly w-full md:p-20 p-2 bg-slate-200 "
      >
        <h3 className=" flex justify-center items-center font-bold opacity-80 text-xl md:text-6xl mt-28 md:mt-0 heroBg  md:h-screen h-auto">
          <motion.p
            initial={{ x: -200 }}
            animate={leftContent}
            transition={{ duration: 1.5, easings: ["easeInOut"], delay: 0.7 }}
            className="p"
          >
            Welcome
          </motion.p>
        </h3>

        <motion.img
          initial={{ x: 200 }}
          animate={rightContent}
          transition={{ duration: 0.9, easings: ["easeInOut"] }}
          src={heroPhone}
          alt="hero image"
        />
      </div>
    </section>
  );
};

export default Hero;
