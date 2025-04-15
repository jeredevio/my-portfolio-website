import React from 'react';
import { Info } from 'lucide-react';

const EducationalContent = () => {
  return (
    <div className="space-y-6 text-sm text-gray-300">
      {/* 🎓 Degrees */}
      <div>
        <h3 className="text-lg font-bold mb-2">🎓 Degrees</h3>

        <div className="space-y-4">
          {/* Motion Design */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-base">
                Bachelor in Motion Design – Studi
              </h4>
              <div title="100% online program focused on design, video, and 2D/3D animation.">
                <Info className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <p className="text-xs">2024 – Remote learning</p>
          </div>

          {/* BTS */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-base">
                BTS in Microtechnology – Design & Industrialization
              </h4>
              <div title="Precision mechanics, product design, and industrial processes.">
                <Info className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <p className="text-xs">2019 – Technical institute</p>
          </div>
        </div>
      </div>

      {/* 🧠 Complementary Education */}
      <div>
        <h3 className="text-lg font-bold mb-2">🧠 Complementary Education</h3>

        <div className="space-y-4">
          {/* CS50 */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-base">
                CS50 – Harvard (online)
              </h4>
              <div title="Algorithms, data structures, C, Python, SQL, web development.">
                <Info className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <p className="text-xs">2024 – Intensive MOOC</p>
          </div>

          {/* FreeCodeCamp */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-base">
                FreeCodeCamp – JavaScript, Frontend, Backend
              </h4>
              <div title="JS, React, Node.js, MongoDB, full-stack projects.">
                <Info className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <p className="text-xs">2023 – Self-paced curriculum</p>
          </div>

          {/* OpenClassrooms */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-base">
                OpenClassrooms – Web Development
              </h4>
              <div title="HTML, CSS, JavaScript, responsive design, hands-on projects.">
                <Info className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <p className="text-xs">2023 – Autonomous learning</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalContent;
