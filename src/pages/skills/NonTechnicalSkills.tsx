// // import React, { useState, useEffect } from 'react';
// // import { Brain, MessageSquare, Loader } from 'lucide-react';
// // import { Link } from 'react-router-dom';
// // import { createClient } from '@supabase/supabase-js';

// // const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// // const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// // const supabase = createClient(supabaseUrl, supabaseKey);

// // const NonTechnicalSkills = () => {
// //   const [skills, setSkills] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchSkills = async () => {
// //       setLoading(true);
// //       setError(null);
// //       try {
// //         const { data, error } = await supabase
// //           .from('non_technical_skills')
// //           .select('*');

// //         if (error) {
// //           setError(error.message);
// //         } else {
// //           setSkills(data || []);
// //         }
// //       } catch (err: any) {
// //         setError(err.message || 'An unexpected error occurred.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchSkills();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
// //         <div className="text-center">
// //           <Loader className="h-6 w-6 animate-spin text-indigo-600 mx-auto mb-2" />
// //           <p className="text-gray-600">Loading non-technical skills...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-7xl mx-auto">
// //         <h1 className="text-3xl font-bold text-gray-900 mb-8">Non-Technical Skills</h1>

// //         <div className="space-y-12">
// //           {skills.map((skill, index) => (
// //             <div key={index} className="bg-white rounded-lg shadow-lg p-6">
// //               <div className="flex items-center space-x-3 mb-6">
// //                 <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
// //                   <Brain className="h-6 w-6" />
// //                 </div>
// //                 <h2 className="text-2xl font-semibold text-gray-900">{skill.title}</h2>
// //               </div>

// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 {skill.sections.map((section, sectionIndex) => (
// //                   <div key={sectionIndex} className="border rounded-lg p-4">
// //                     <h3 className="text-lg font-medium text-gray-900 mb-3">
// //                       {section.category}
// //                     </h3>
// //                     <ul className="space-y-2">
// //                       {section.topics.map((topic, topicIndex) => (
// //                         <li
// //                           key={topicIndex}
// //                           className="text-gray-600 hover:text-indigo-600 cursor-pointer flex items-center space-x-2"
// //                         >
// //                           <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full"></span>
// //                           <span>{topic}</span>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                     {section.detailsLink && (
// //                       <Link
// //                         to={section.detailsLink}
// //                         className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
// //                       >
// //                         Learn more →
// //                       </Link>
// //                     )}
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default NonTechnicalSkills;

// import React, { useState, useEffect } from 'react';
// import { Brain, MessageSquare, Loader } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const NonTechnicalSkills = () => {
//   const [skills, setSkills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchSkills = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await axios.get('http://localhost:5000/api/nonTechnicalSkills');
//         setSkills(response.data || []);
//       } catch (err: any) {
//         setError(err.message || 'An unexpected error occurred.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSkills();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
//         <div className="text-center">
//           <Loader className="h-6 w-6 animate-spin text-indigo-600 mx-auto mb-2" />
//           <p className="text-gray-600">Loading non-technical skills...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-red-600 text-center">{error}</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">Non-Technical Skills</h1>

//         <div className="space-y-12">
//           {skills.map((skill: any, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg p-6">
//               <div className="flex items-center space-x-3 mb-6">
//                 <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
//                   <Brain className="h-6 w-6" />
//                 </div>
//                 <h2 className="text-2xl font-semibold text-gray-900">{skill.title}</h2>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {skill.sections.map((section: any, sectionIndex: number) => (
//                   <div key={sectionIndex} className="border rounded-lg p-4">
//                     <h3 className="text-lg font-medium text-gray-900 mb-3">
//                       {section.category}
//                     </h3>
//                     <ul className="space-y-2">
//                       {section.topics.map((topic: string, topicIndex: number) => (
//                         <li
//                           key={topicIndex}
//                           className="text-gray-600 hover:text-indigo-600 cursor-pointer flex items-center space-x-2"
//                         >
//                           <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full"></span>
//                           <span>{topic}</span>
//                         </li>
//                       ))}
//                     </ul>
//                     {section.detailsLink && (
//                       <Link
//                         to={section.detailsLink}
//                         className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
//                       >
//                         Learn more →
//                       </Link>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NonTechnicalSkills;
// import React from 'react';

import { Brain, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const NonTechnicalSkills = () => {
  const skills = [
    {
      title: "Aptitude and Reasoning",
      icon: <Brain className="h-6 w-6" />,
      sections: [
        {
          category: "Quantitative Aptitude",
          topics: [
            "Number System",
            "Percentages",
            "Profit and Loss",
            "Time and Work",
            "Probability",
            "Statistics",
          ],
          detailsLink: "/skills/non-technical/quantitative-aptitude",
        },
        {
          category: "Logical Reasoning",
          topics: [
            "Verbal Reasoning",
            "Non-verbal Reasoning",
            "Data Interpretation",
            "Coding-Decoding",
            "Blood Relations",
          ],
          detailsLink: "/skills/non-technical/logical-reasoning",
        },
      ],
    },
    {
      title: "Communication Skills",
      icon: <MessageSquare className="h-6 w-6" />,
      sections: [
        {
          category: "Verbal Communication",
          topics: [
            "Grammar and Vocabulary",
            "Public Speaking",
            "Group Discussions",
            "Interview Skills",
            "Email Writing",
          ],
          detailsLink: "/skills/non-technical/verbal-communication",
        },
        {
          category: "Non-verbal Communication",
          topics: [
            "Body Language",
            "Presentation Skills",
            "Active Listening",
            "Professional Etiquette",
          ],
          detailsLink: "/skills/non-technical/non-verbal-communication",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Non-Technical Skills
        </h1>

        <div className="space-y-12">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  {skill.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {skill.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skill.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      {section.category}
                    </h3>
                    <ul className="space-y-2">
                      {section.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="text-gray-600 hover:text-indigo-600 cursor-pointer flex items-center space-x-2"
                        >
                          <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full"></span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    {section.detailsLink && (
                      <Link
                        to={section.detailsLink}
                        className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
                      >
                        Learn more →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NonTechnicalSkills;
