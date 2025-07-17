// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// const FrontendDetails = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Content Section */}
//         <div className="lg:col-span-2">
//           <div className="mb-8">
//             <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
//               <ArrowLeft className="h-4 w-4 mr-1" />
//               Back to Technical Skills
//             </Link>
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-8">Frontend Development</h1>

//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
//             <p className="text-gray-700 mb-6">
//               Frontend development focuses on the user interface and user experience of websites and applications.
//               It involves using technologies like HTML, CSS, and JavaScript to create interactive and visually appealing interfaces.
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Frontend Development</h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
//               <li><strong>Start with HTML:</strong> Learn the structure of web pages using HTML elements and attributes.</li>
//               <li><strong>Master CSS:</strong> Understand how to style web pages using CSS selectors, properties, and layout techniques.</li>
//               <li><strong>Learn JavaScript:</strong> Grasp the fundamentals of JavaScript for adding interactivity and dynamic behavior to web pages.</li>
//               <li><strong>Explore Frameworks:</strong> Familiarize yourself with popular frontend frameworks like React, Vue.js, and Angular.</li>
//               <li><strong>Practice Regularly:</strong> Build small projects to solidify your understanding and improve your skills.</li>
//             </ul>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handwritten Notes</h2>
//             <p className="text-gray-700 mb-6">
//               <a href="https://link-to-handwritten-notes.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
//                 Click here for Handwritten Notes
//               </a>
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Print Notes</h2>
//             <p className="text-gray-700 mb-6">
//               <a href="https://link-to-print-notes.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
//                 Click here for Print Notes
//               </a>
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
//             <div className="space-y-4">
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li><a href="https://leetcode.com/problem/1" target="_blank" className="text-indigo-600 hover:text-indigo-500">Create a basic HTML page with headings and paragraphs</a></li>
//                   <li><a href="https://leetcode.com/problem/2" target="_blank" className="text-indigo-600 hover:text-indigo-500">Style a page using CSS selectors and properties</a></li>
//                   <li><a href="https://leetcode.com/problem/3" target="_blank" className="text-indigo-600 hover:text-indigo-500">Add basic JavaScript interactivity to a button</a></li>
//                 </ul>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li><a href="https://gfg.com/problem/1" target="_blank" className="text-indigo-600 hover:text-indigo-500">Create a responsive navigation bar</a></li>
//                   <li><a href="https://gfg.com/problem/2" target="_blank" className="text-indigo-600 hover:text-indigo-500">Build a simple form with validation</a></li>
//                   <li><a href="https://gfg.com/problem/3" target="_blank" className="text-indigo-600 hover:text-indigo-500">Implement a carousel using JavaScript</a></li>
//                 </ul>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li><a href="https://codechef.com/problem/1" target="_blank" className="text-indigo-600 hover:text-indigo-500">Build a single-page application using React</a></li>
//                   <li><a href="https://codechef.com/problem/2" target="_blank" className="text-indigo-600 hover:text-indigo-500">Implement a complex layout using CSS Grid</a></li>
//                   <li><a href="https://codechef.com/problem/3" target="_blank" className="text-indigo-600 hover:text-indigo-500">Create a custom animation using JavaScript</a></li>
//                 </ul>
//               </div>
//             </div>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
//             <div className="space-y-4">
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Frontend Basics</h3>
//                 <a href="https://youtube.com/playlist?list=12345" target="_blank" className="text-indigo-600 hover:text-indigo-500">
//                   Frontend Basics Playlist
//                 </a>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Frontend</h3>
//                 <a href="https://youtube.com/playlist?list=67890" target="_blank" className="text-indigo-600 hover:text-indigo-500">
//                   Advanced Frontend Playlist
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Sidebar Section */}
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">Topics to Learn in Frontend</h2>
//           <ul className="list-decimal list-inside space-y-4">
//             <li>
//               <strong>HTML</strong>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Elements and Attributes</li>
//                 <li>Forms and Input Elements</li>
//                 <li>Semantics and Accessibility</li>
//               </ul>
//             </li>
//             <li>
//               <strong>CSS</strong>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Selectors and Properties</li>
//                 <li>Box Model</li>
//                 <li>Positioning and Flexbox</li>
//                 <li>Grid Layout</li>
//               </ul>
//             </li>
//             <li>
//               <strong>JavaScript</strong>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Variables and Data Types</li>
//                 <li>Functions and Loops</li>
//                 <li>DOM Manipulation</li>
//                 <li>Event Handling</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Frontend Frameworks</strong>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>React Basics</li>
//                 <li>State Management</li>
//                 <li>React Router</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Version Control</strong>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Git Basics</li>
//                 <li>GitHub for Collaboration</li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrontendDetails;

// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";

// const FrontendDetails = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* Left Content Section */}
//         <div className="lg:col-span-2">
//           <div className="mb-8">
//             <Link
//               to="/skills/technical"
//               className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
//             >
//               <ArrowLeft className="h-4 w-4 mr-1" />
//               Back to Technical Skills
//             </Link>
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-8">
//             Frontend Development
//           </h1>

//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               Introduction
//             </h2>
//             <p className="text-gray-700 mb-6">
//               Frontend development focuses on the user interface and user
//               experience of websites and applications. It involves using
//               technologies like HTML, CSS, and JavaScript to create interactive
//               and visually appealing interfaces.
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               How to Learn Frontend Development
//             </h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
//               <li>
//                 <strong>Start with HTML:</strong> Learn the structure of web
//                 pages using HTML elements and attributes.
//               </li>
//               <li>
//                 <strong>Master CSS:</strong> Understand how to style web pages
//                 using CSS selectors, properties, and layout techniques.
//               </li>
//               <li>
//                 <strong>Learn JavaScript:</strong> Grasp the fundamentals of
//                 JavaScript for adding interactivity and dynamic behavior to web
//                 pages.
//               </li>
//               <li>
//                 <strong>Explore Frameworks:</strong> Familiarize yourself with
//                 popular frontend frameworks like React, Vue.js, and Angular.
//               </li>
//               <li>
//                 <strong>Practice Regularly:</strong> Build small projects to
//                 solidify your understanding and improve your skills.
//               </li>
//             </ul>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               Handwritten Notes
//             </h2>
//             <p className="text-gray-700 mb-6">
//               <a
//                 href="https://link-to-handwritten-notes.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-indigo-600 hover:text-indigo-500"
//               >
//                 Click here for Handwritten Notes
//               </a>
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               Print Notes
//             </h2>
//             <p className="text-gray-700 mb-6">
//               <a
//                 href="https://link-to-print-notes.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-indigo-600 hover:text-indigo-500"
//               >
//                 Click here for Print Notes
//               </a>
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               Practice Problems
//             </h2>
//             <div className="space-y-4">
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li>
//                     <a
//                       href="https://leetcode.com/problem/1"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Create a basic HTML page with headings and paragraphs
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://leetcode.com/problem/2"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Style a page using CSS selectors and properties
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://leetcode.com/problem/3"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Add basic JavaScript interactivity to a button
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">
//                   Medium
//                 </h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li>
//                     <a
//                       href="https://gfg.com/problem/1"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Create a responsive navigation bar
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://gfg.com/problem/2"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Build a simple form with validation
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://gfg.com/problem/3"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Implement a carousel using JavaScript
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li>
//                     <a
//                       href="https://codechef.com/problem/1"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Build a single-page application using React
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://codechef.com/problem/2"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Implement a complex layout using CSS Grid
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://codechef.com/problem/3"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Create a custom animation using JavaScript
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               YouTube Playlists
//             </h2>
//             <div className="space-y-4">
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">
//                   Frontend Basics
//                 </h3>
//                 <a
//                   href="https://youtube.com/playlist?list=12345"
//                   target="_blank"
//                   className="text-indigo-600 hover:text-indigo-500"
//                 >
//                   Frontend Basics Playlist
//                 </a>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">
//                   Advanced Frontend
//                 </h3>
//                 <a
//                   href="https://youtube.com/playlist?list=67890"
//                   target="_blank"
//                   className="text-indigo-600 hover:text-indigo-500"
//                 >
//                   Advanced Frontend Playlist
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Sidebar Section */}
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//             Topics to Learn in Frontend
//           </h2>
//           <ul className="list-decimal list-inside space-y-4">
//             <li>
//               <strong>HTML</strong>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Elements and Attributes</li>
//                 <li>Forms and Input Elements</li>
//                 <li>Semantics and Accessibility</li>
//               </ul>
//             </li>
//             <li>
//               <strong>CSS</strong>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Selectors and Properties</li>
//                 <li>Box Model</li>
//                 <li>Positioning and Flexbox</li>
//                 <li>Grid Layout</li>
//               </ul>
//             </li>
//             <li>
//               <strong>JavaScript</strong>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Variables and Data Types</li>
//                 <li>Functions and Loops</li>
//                 <li>DOM Manipulation</li>
//                 <li>Event Handling</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Frontend Frameworks</strong>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>React Basics</li>
//                 <li>State Management</li>
//                 <li>React Router</li>
//               </ul>
//             </li>
//             <li>
//               <strong>Version Control</strong>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Git Basics</li>
//                 <li>GitHub for Collaboration</li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrontendDetails;


import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const FrontendDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex">
        {/* Main Content */}
        <div className="w-2/3">
          <div className="mb-8">
            <Link
              to="/skills/technical"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Technical Skills
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Frontend Development
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 mb-6">
              Frontend development focuses on the user interface and user
              experience of websites and applications. It involves using
              technologies like HTML, CSS, and JavaScript to create interactive
              and visually appealing interfaces.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Learn Frontend Development
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Start with HTML:</strong> Learn the structure of web
                pages using HTML elements and attributes.
              </li>
              <li>
                <strong>Master CSS:</strong> Understand how to style web pages
                using CSS selectors, properties, and layout techniques.
              </li>
              <li>
                <strong>Learn JavaScript:</strong> Grasp the fundamentals of
                JavaScript for adding interactivity and dynamic behavior to web
                pages.
              </li>
              <li>
                <strong>Explore Frameworks:</strong> Familiarize yourself with
                popular frontend frameworks like React, Vue.js, and Angular.
              </li>
              <li>
                <strong>Practice Regularly:</strong> Build small projects to
                solidify your understanding and improve your skills.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Handwritten Notes
            </h2>
            <p className="text-gray-700 mb-6">
              <a
                href="https://example.com/handwritten-notes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Click here for Handwritten Notes
              </a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Print Notes
            </h2>
            <p className="text-gray-700 mb-6">
              <a
                href="https://example.com/print-notes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Click here for Print Notes
              </a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Practice Problems
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a
                      href="https://www.w3schools.com/html/html_basic.asp"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Create a basic HTML page with headings and paragraphs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3schools.com/css/css_intro.asp"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Style a page using CSS selectors and properties
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.w3schools.com/js/js_intro.asp"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Add basic JavaScript interactivity to a button
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Medium
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a
                      href="https://www.geeksforgeeks.org/create-a-responsive-navbar-using-html-and-css/"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Create a responsive navigation bar
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.geeksforgeeks.org/form-validation-using-html-css-and-javascript/"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Build a simple form with validation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.geeksforgeeks.org/how-to-create-an-image-slider-using-javascript-html-and-css/"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Implement a carousel using JavaScript
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a
                      href="https://www.geeksforgeeks.org/react-js-introduction-working-components/"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Build a single-page application using React
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://css-tricks.com/snippets/css/complete-guide-grid/"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Implement a complex layout using CSS Grid
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.geeksforgeeks.org/animate-an-element-using-javascript/"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Create a custom animation using JavaScript
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              YouTube Playlists
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Frontend Basics
                </h3>
                <a
                  href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Frontend Basics Playlist
                </a>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Advanced Frontend
                </h3>
                <a
                  href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9hM4hT5KeZz1PjARX2gUM3m"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Advanced Frontend Playlist
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Topics to Learn */}
        <div className="w-1/3 ml-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Topics to Learn in Frontend
            </h2>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>HTML</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.w3schools.com/html/html_intro.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Elements and Attributes</a></li>
                  <li><a href="https://www.w3schools.com/html/html_forms.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Forms and Input Elements</a></li>
                  <li><a href="https://www.w3schools.com/html/html5_semantic_elements.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Semantics and Accessibility</a></li>
                </ul>
              </li>
              <li>
                <strong>CSS</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.w3schools.com/css/css_selectors.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Selectors and Properties</a></li>
                  <li><a href="https://www.w3schools.com/css/css_boxmodel.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Box Model</a></li>
                  <li><a href="https://www.w3schools.com/css/css_positioning.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Positioning and Flexbox</a></li>
                  <li><a href="https://www.w3schools.com/css/css_grid.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Grid Layout</a></li>
                </ul>
              </li>
              <li>
                <strong>JavaScript</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.w3schools.com/js/js_variables.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Variables and Data Types</a></li>
                  <li><a href="https://www.w3schools.com/js/js_functions.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Functions and Loops</a></li>
                  <li><a href="https://www.w3schools.com/js/js_htmldom.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">DOM Manipulation</a></li>
                  <li><a href="https://www.w3schools.com/js/js_events.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Event Handling</a></li>
                </ul>
              </li>
              <li>
                <strong>Frontend Frameworks</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">React Basics</a></li>
                  <li><a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">State Management</a></li>
                  <li><a href="https://reactrouter.com/docs/en/v6" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">React Router</a></li>
                </ul>
              </li>
              <li>
                <strong>Version Control</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.w3schools.com/git/default.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Git Basics</a></li>
                  <li><a href="https://docs.github.com/en/get-started" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">GitHub for Collaboration</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendDetails;
