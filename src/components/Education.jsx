import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        My <span className="text-neutral-500">Education</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center space-y-8">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className="w-full max-w-3xl rounded-2xl border border-purple-300/20 p-6 shadow-lg"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
