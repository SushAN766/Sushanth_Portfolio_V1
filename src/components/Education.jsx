import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  // Stagger effect for the items
  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 5 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 25,
      },
    },
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        My <span className="text-neutral-500">Education</span>
      </h1>

      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center space-y-8">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="w-full max-w-3xl rounded-2xl border border-purple-300/20 p-6 shadow-lg"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  transformOrigin: "center",
                  opacity: 0,
                  transitionDelay: `${index * 0.2}s`, // Stagger delay
                }}
              >
                <h3 className="mb-2 text-xl font-semibold lg:text-2xl">
                  {edu.degree}
                </h3>
                <h4 className="text-lg font-medium text-neutral-300 lg:text-xl">
                  {edu.institution}
                </h4>
                <p className="text-sm text-neutral-400 lg:text-base">
                  {edu.duration}
                </p>
                <p className="mt-4 text-neutral-200">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
