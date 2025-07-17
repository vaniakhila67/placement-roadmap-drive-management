// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// const PythonDetails = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto flex">
//         {/* Main Content */}
//         <div className="w-2/3">
//           <div className="mb-8">
//             <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
//               <ArrowLeft className="h-4 w-4 mr-1" />
//               Back to Technical Skills
//             </Link>
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-8">Python Programming</h1>

//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
//             <p className="text-gray-700 mb-6">
//               Python is a high-level, interpreted, general-purpose programming language.
//               It's known for its readability and versatility, making it popular for web development, data science, and scripting.
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Python from Scratch</h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
//               <li><strong>Start with the Basics:</strong> Understand fundamental concepts like variables, data types, operators, and control structures.</li>
//               <li><strong>Learn Data Structures:</strong> Familiarize yourself with lists, tuples, dictionaries, and sets.</li>
//               <li><strong>Explore Libraries:</strong> Learn to use popular libraries like NumPy, Pandas, and Matplotlib for data manipulation and visualization.</li>
//               <li><strong>Practice Regularly:</strong> Solve coding problems on platforms like LeetCode, HackerRank, and Codeforces.</li>
//               <li><strong>Build Projects:</strong> Apply your knowledge by creating small projects to solidify your understanding.</li>
//             </ul>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handwritten Notes</h2>
//             <p className="text-gray-700 mb-6">
//               <a href="path-to-handwritten-notes" className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">
//                 Click here to access Handwritten Notes
//               </a>
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Print Notes</h2>
//             <p className="text-gray-700 mb-6">
//               <a href="path-to-print-notes" className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">
//                 Click here to access Print Notes
//               </a>
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
//             <div className="space-y-4">
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li><a href="https://leetcode.com/problems/hello-world/" target="_blank" className="text-indigo-600 hover:text-indigo-500">Write a program to print "Hello, World!"</a></li>
//                   <li><a href="https://leetcode.com/problems/circle-area/" target="_blank" className="text-indigo-600 hover:text-indigo-500">Calculate the area of a circle</a></li>
//                   <li><a href="https://www.codechef.com/problems/PRIME" target="_blank" className="text-indigo-600 hover:text-indigo-500">Check if a number is prime</a></li>
//                 </ul>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li><a href="https://www.geeksforgeeks.org/implement-stack-using-list-in-python/" target="_blank" className="text-indigo-600 hover:text-indigo-500">Implement a stack using a list</a></li>
//                   <li><a href="https://www.hackerrank.com/challenges/python-list/problem" target="_blank" className="text-indigo-600 hover:text-indigo-500">Reverse a list</a></li>
//                   <li><a href="https://www.codechef.com/problems/SEARCH" target="_blank" className="text-indigo-600 hover:text-indigo-500">Implement a linear search algorithm</a></li>
//                 </ul>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li><a href="https://www.geeksforgeeks.org/graph-and-its-representations/" target="_blank" className="text-indigo-600 hover:text-indigo-500">Implement a graph using a dictionary</a></li>
//                   <li><a href="https://www.hackerrank.com/challenges/sudoku-validator/problem" target="_blank" className="text-indigo-600 hover:text-indigo-500">Solve the Sudoku problem</a></li>
//                   <li><a href="https://scikit-learn.org/stable/auto_examples/index.html" target="_blank" className="text-indigo-600 hover:text-indigo-500">Implement a machine learning model using scikit-learn</a></li>
//                 </ul>
//               </div>
//             </div>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
//             <div className="space-y-4">
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Beginner Python</h3>
//                 <a href="https://www.youtube.com/playlist?list=your-beginner-playlist-link" target="_blank" className="text-indigo-600 hover:text-indigo-500">Beginner Python Playlist</a>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Python</h3>
//                 <a href="https://www.youtube.com/playlist?list=your-advanced-playlist-link" target="_blank" className="text-indigo-600 hover:text-indigo-500">Advanced Python Playlist</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Sidebar - Topics to Learn */}
//         <div className="w-1/3 ml-8">
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Topics to Learn</h2>
//             <ul className="list-decimal list-inside space-y-2 text-gray-700">
//               <li>
//                 <strong>Basic Syntax</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Variables and Data Types</li>
//                   <li>Operators</li>
//                   <li>Control Flow (if, else, for, while)</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>Data Structures</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Lists</li>
//                   <li>Tuples</li>
//                   <li>Dictionaries</li>
//                   <li>Sets</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>Functions</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Defining Functions</li>
//                   <li>Arguments and Return Values</li>
//                   <li>Lambda Functions</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>Object-Oriented Programming</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Classes and Objects</li>
//                   <li>Inheritance</li>
//                   <li>Encapsulation</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>Libraries and Frameworks</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>NumPy</li>
//                   <li>Pandas</li>
//                   <li>Matplotlib</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>File Handling</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Reading and Writing Files</li>
//                   <li>File Operations</li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PythonDetails;

// import React from 'react';





// import { Link } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";

// const PythonDetails = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto flex">
//         {/* Main Content */}
//         <div className="w-2/3">
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
//             Python Programming
//           </h1>

//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               Introduction
//             </h2>
//             <p className="text-gray-700 mb-6">
//               Python is a high-level, interpreted, general-purpose programming
//               language. It's known for its readability and versatility, making
//               it popular for web development, data science, and scripting.
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               How to Learn Python from Scratch
//             </h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
//               <li>
//                 <strong>Start with the Basics:</strong> Understand fundamental
//                 concepts like variables, data types, operators, and control
//                 structures.
//               </li>
//               <li>
//                 <strong>Learn Data Structures:</strong> Familiarize yourself
//                 with lists, tuples, dictionaries, and sets.
//               </li>
//               <li>
//                 <strong>Explore Libraries:</strong> Learn to use popular
//                 libraries like NumPy, Pandas, and Matplotlib for data
//                 manipulation and visualization.
//               </li>
//               <li>
//                 <strong>Practice Regularly:</strong> Solve coding problems on
//                 platforms like LeetCode, HackerRank, and Codeforces.
//               </li>
//               <li>
//                 <strong>Build Projects:</strong> Apply your knowledge by
//                 creating small projects to solidify your understanding.
//               </li>
//             </ul>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               Handwritten Notes
//             </h2>
//             <p className="text-gray-700 mb-6">
//               <a
//                 href="path-to-handwritten-notes"
//                 className="text-indigo-600 hover:text-indigo-500"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Click here to access Handwritten Notes
//               </a>
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               Print Notes
//             </h2>
//             <p className="text-gray-700 mb-6">
//               <a
//                 href="path-to-print-notes"
//                 className="text-indigo-600 hover:text-indigo-500"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Click here to access Print Notes
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
//                       href="https://leetcode.com/problems/hello-world/"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Write a program to print "Hello, World!"
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://leetcode.com/problems/circle-area/"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Calculate the area of a circle
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.codechef.com/problems/PRIME"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Check if a number is prime
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
//                       href="https://www.geeksforgeeks.org/implement-stack-using-list-in-python/"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Implement a stack using a list
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.hackerrank.com/challenges/python-list/problem"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Reverse a list
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.codechef.com/problems/SEARCH"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Implement a linear search algorithm
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li>
//                     <a
//                       href="https://www.geeksforgeeks.org/graph-and-its-representations/"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Implement a graph using a dictionary
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://www.hackerrank.com/challenges/sudoku-validator/problem"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Solve the Sudoku problem
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="https://scikit-learn.org/stable/auto_examples/index.html"
//                       target="_blank"
//                       className="text-indigo-600 hover:text-indigo-500"
//                     >
//                       Implement a machine learning model using scikit-learn
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
//                   Beginner Python
//                 </h3>
//                 <a
//                   href="https://www.youtube.com/playlist?list=your-beginner-playlist-link"
//                   target="_blank"
//                   className="text-indigo-600 hover:text-indigo-500"
//                 >
//                   Beginner Python Playlist
//                 </a>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">
//                   Advanced Python
//                 </h3>
//                 <a
//                   href="https://www.youtube.com/playlist?list=your-advanced-playlist-link"
//                   target="_blank"
//                   className="text-indigo-600 hover:text-indigo-500"
//                 >
//                   Advanced Python Playlist
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Sidebar - Topics to Learn */}
//         <div className="w-1/3 ml-8">
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//               Topics to Learn
//             </h2>
//             <ul className="list-decimal list-inside space-y-2 text-gray-700">
//               <li>
//                 <strong>Basic Syntax</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Variables and Data Types</li>
//                   <li>Operators</li>
//                   <li>Control Flow (if, else, for, while)</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>Data Structures</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Lists</li>
//                   <li>Tuples</li>
//                   <li>Dictionaries</li>
//                   <li>Sets</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>Functions</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Defining Functions</li>
//                   <li>Arguments and Return Values</li>
//                   <li>Lambda Functions</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>Object-Oriented Programming</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Classes and Objects</li>
//                   <li>Inheritance</li>
//                   <li>Encapsulation</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>Libraries and Frameworks</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>NumPy</li>
//                   <li>Pandas</li>
//                   <li>Matplotlib</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>File Handling</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Reading and Writing Files</li>
//                   <li>File Operations</li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PythonDetails;



import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PythonDetails = () => {
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
            Python Programming
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 mb-6">
              Python is a high-level, interpreted, general-purpose programming
              language. It's known for its readability and versatility, making
              it popular for web development, data science, and scripting.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              How to Learn Python from Scratch
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Start with the Basics:</strong> Understand fundamental
                concepts like variables, data types, operators, and control
                structures.
              </li>
              <li>
                <strong>Learn Data Structures:</strong> Familiarize yourself
                with lists, tuples, dictionaries, and sets.
              </li>
              <li>
                <strong>Explore Libraries:</strong> Learn to use popular
                libraries like NumPy, Pandas, and Matplotlib for data
                manipulation and visualization.
              </li>
              <li>
                <strong>Practice Regularly:</strong> Solve coding problems on
                platforms like LeetCode, HackerRank, and Codeforces.
              </li>
              <li>
                <strong>Build Projects:</strong> Apply your knowledge by
                creating small projects to solidify your understanding.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Handwritten Notes
            </h2>
            <p className="text-gray-700 mb-6">
              <a
                href="https://example.com/handwritten-notes"
                className="text-indigo-600 hover:text-indigo-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to access Handwritten Notes
              </a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Print Notes
            </h2>
            <p className="text-gray-700 mb-6">
              <a
                href="https://example.com/print-notes"
                className="text-indigo-600 hover:text-indigo-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to access Print Notes
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
                      href="https://www.hackerrank.com/challenges/30-hello-world/problem"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Write a program to print "Hello, World!"
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hackerrank.com/contests/1500s22/challenges/python-function-circle-diameter"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Calculate the area of a circle
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codechef.com/problems/PRIME"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Check if a number is prime
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
                      href="https://www.hackerrank.com/contests/17cs1102/challenges/6a-stack-using-linked-list"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Implement a stack using a list
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hackerrank.com/challenges/fp-reverse-a-list/problem"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Reverse a list
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.codechef.com/learn/course/searching-sorting/SORTSEARCH1/problems/SESO03"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Implement a linear search algorithm
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a
                      href="https://www.geeksforgeeks.org/graph-and-its-representations/"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Implement a graph using a dictionary
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://leetcode.com/problems/sudoku-solver/"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Solve the Sudoku problem
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://scikit-learn.org/stable/auto_examples/index.html"
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Implement a machine learning model using scikit-learn
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
                  Beginner Python
                </h3>
                <a
                  href="https://www.youtube.com/watch?v=QXeEoD0pB3E&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Beginner Python Playlist
                </a>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Advanced Python
                </h3>
                <a
                  href="https://www.youtube.com/watch?v=R99rLDfuVck&list=PLI4OVrCFuY556CXnJal2pVbzhz0TOxwd_"
                  target="_blank"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  Advanced Python Playlist
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Topics to Learn */}
        <div className="w-1/3 ml-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Topics to Learn
            </h2>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Basic Syntax</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.w3schools.com/python/python_variables.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Variables and Data Types</a></li>
                  <li><a href="https://www.w3schools.com/python/python_operators.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Operators</a></li>
                  <li><a href="https://www.w3schools.com/python/python_conditions.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Control Flow (if, else, for, while)</a></li>
                </ul>
              </li>
              <li>
                <strong>Data Structures</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.w3schools.com/python/python_lists.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Lists</a></li>
                  <li><a href="https://www.w3schools.com/python/python_tuples.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Tuples</a></li>
                  <li><a href="https://www.w3schools.com/python/python_dictionaries.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Dictionaries</a></li>
                  <li><a href="https://www.w3schools.com/python/python_sets.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Sets</a></li>
                </ul>
              </li>
              <li>
                <strong>Functions</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.w3schools.com/python/python_functions.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Defining Functions</a></li>
                  <li><a href="https://www.geeksforgeeks.org/args-kwargs-python/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Arguments and Return Values</a></li>
                  <li><a href="https://www.w3schools.com/python/python_lambda.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Lambda Functions</a></li>
                </ul>
              </li>
              <li>
                <strong>Object-Oriented Programming</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.w3schools.com/python/python_classes.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Classes and Objects</a></li>
                  <li><a href="https://www.w3schools.com/python/python_inheritance.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Inheritance</a></li>
                  <li><a href="https://www.geeksforgeeks.org/encapsulation-in-python/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Encapsulation</a></li>
                </ul>
              </li>
              <li>
                <strong>Libraries and Frameworks</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://numpy.org/doc/stable/user/quickstart.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">NumPy</a></li>
                  <li><a href="https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Pandas</a></li>
                  <li><a href="https://matplotlib.org/stable/tutorials/introductory/pyplot.html" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Matplotlib</a></li>
                </ul>
              </li>
              <li>
                <strong>File Handling</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.w3schools.com/python/python_file_handling.asp" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Reading and Writing Files</a></li>
                  <li><a href="https://www.geeksforgeeks.org/file-handling-python/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">File Operations</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonDetails;
