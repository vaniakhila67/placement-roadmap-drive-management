// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';

// const DataStructuresDetails = () => {
//   const [selectedTopic, setSelectedTopic] = useState(null);

//   const topicsData = {
//     Arrays: {
//       problems: {
//         easy: [
//           { name: 'Implement a basic array', link: 'https://leetcode.com/problems/implement-array/' },
//           { name: 'Find the maximum element in an array', link: 'https://leetcode.com/problems/maximum-subarray/' },
//         ],
//         medium: [
//           { name: 'Rotate an array', link: 'https://leetcode.com/problems/rotate-array/' },
//           { name: 'Move zeroes to the end', link: 'https://leetcode.com/problems/move-zeroes/' },
//         ],
//         hard: [
//           { name: 'Search in a rotated sorted array', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
//           { name: 'Median of two sorted arrays', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
//         ],
//       },
//       youtube: {
//         basic: 'https://www.youtube.com/playlist?list=example_playlist_basic',
//         advanced: 'https://www.youtube.com/playlist?list=example_playlist_advanced',
//       },
//     },
//     LinkedLists: {
//       problems: {
//         easy: [
//           { name: 'Implement a singly linked list', link: 'https://leetcode.com/problems/linked-list/' },
//           { name: 'Find the middle of a linked list', link: 'https://leetcode.com/problems/middle-of-the-linked-list/' },
//         ],
//         medium: [
//           { name: 'Reverse a linked list', link: 'https://leetcode.com/problems/reverse-linked-list/' },
//           { name: 'Detect a cycle in a linked list', link: 'https://leetcode.com/problems/linked-list-cycle/' },
//         ],
//         hard: [
//           { name: 'Merge k sorted linked lists', link: 'https://leetcode.com/problems/merge-k-sorted-lists/' },
//           { name: 'Flatten a linked list', link: 'https://leetcode.com/problems/flatten-a-linked-list/' },
//         ],
//       },
//       youtube: {
//         basic: 'https://www.youtube.com/playlist?list=linkedlist_basic',
//         advanced: 'https://www.youtube.com/playlist?list=linkedlist_advanced',
//       },
//     },
//     StacksQueues: {
//       problems: {
//         easy: [
//           { name: 'Implement a stack using an array', link: 'https://leetcode.com/problems/stack-using-array/' },
//           { name: 'Implement a queue using an array', link: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
//         ],
//         medium: [
//           { name: 'Valid parentheses', link: 'https://leetcode.com/problems/valid-parentheses/' },
//           { name: 'Evaluate Reverse Polish Notation', link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/' },
//         ],
//         hard: [
//           { name: 'Design a stack that supports push, pop, top, and retrieving the minimum element', link: 'https://leetcode.com/problems/min-stack/' },
//           { name: 'Sliding window maximum', link: 'https://leetcode.com/problems/sliding-window-maximum/' },
//         ],
//       },
//       youtube: {
//         basic: 'https://www.youtube.com/playlist?list=stacksqueues_basic',
//         advanced: 'https://www.youtube.com/playlist?list=stacksqueues_advanced',
//       },
//     },
//     Trees: {
//       problems: {
//         easy: [
//           { name: 'Implement a binary tree', link: 'https://leetcode.com/problems/binary-tree/' },
//           { name: 'Maximum depth of a binary tree', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
//         ],
//         medium: [
//           { name: 'Binary tree level order traversal', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
//           { name: 'Validate binary search tree', link: 'https://leetcode.com/problems/validate-binary-search-tree/' },
//         ],
//         hard: [
//           { name: 'Serialize and deserialize binary tree', link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/' },
//           { name: 'Binary tree right side view', link: 'https://leetcode.com/problems/binary-tree-right-side-view/' },
//         ],
//       },
//       youtube: {
//         basic: 'https://www.youtube.com/playlist?list=trees_basic',
//         advanced: 'https://www.youtube.com/playlist?list=trees_advanced',
//       },
//     },
//     Graph: {
//       problems: {
//         easy: [
//           { name: 'Implement a graph using adjacency list', link: 'https://leetcode.com/problems/graph-representation/' },
//           { name: 'Breadth-First Search (BFS)', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
//         ],
//         medium: [
//           { name: 'Depth-First Search (DFS)', link: 'https://leetcode.com/problems/number-of-islands/' },
//           { name: 'Find connected components in an undirected graph', link: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/' },
//         ],
//         hard: [
//           { name: 'Find the shortest path in an unweighted graph', link: 'https://leetcode.com/problems/shortest-path-in-binary-matrix/' },
//           { name: 'Dijkstra\'s algorithm for shortest paths', link: 'https://leetcode.com/problems/network-delay-time/' },
//         ],
//       },
//       youtube: {
//         basic: 'https://www.youtube.com/playlist?list=graph_basic',
//         advanced: 'https://www.youtube.com/playlist?list=graph_advanced',
//       },
//     },
//   };

//   const handleTopicClick = (topic) => {
//     setSelectedTopic(topic);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-8">
//           <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
//             <ArrowLeft className="h-4 w-4 mr-1" />
//             Back to Technical Skills
//           </Link>
//         </div>
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">Basic Data Structures</h1>

//         <div className="lg:grid lg:grid-cols-3 gap-6">
//           {/* Left Section */}
//           <div className="bg-white rounded-lg shadow-lg p-6 lg:col-span-2">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
//             <p className="text-gray-700 mb-6">
//               Data structures are fundamental concepts in computer science that organize and store data efficiently.
//               Understanding them is crucial for writing effective and optimized algorithms.
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Data Structures</h2>
//             <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
//               <li><strong>Start with the Basics:</strong> Understand fundamental data structures like arrays, linked lists, stacks, and queues.</li>
//               <li><strong>Learn Tree and Graph Structures:</strong> Grasp the concepts of binary trees, binary search trees, and graph representations.</li>
//               <li><strong>Implement Data Structures:</strong> Practice implementing these data structures from scratch to understand their inner workings.</li>
//               <li><strong>Practice Regularly:</strong> Solve coding problems on platforms like LeetCode, HackerRank, and Codeforces.</li>
//               <li><strong>Analyze Time and Space Complexity:</strong> Understand how different data structures affect the performance of your algorithms.</li>
//             </ul>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Topics to Learn</h2>
//             <div className="space-y-4">
//               {Object.keys(topicsData).map((topic) => (
//                 <div key={topic}>
//                   <button
//                     onClick={() => handleTopicClick(topic)}
//                     className="w-full text-left bg-gray-100 p-4 rounded-md hover:bg-gray-200"
//                   >
//                     {topic}
//                   </button>
//                   {selectedTopic === topic && (
//                     <div className="mt-4">
//                       <h3 className="text-lg font-medium text-gray-900 mb-2">Problems</h3>
//                       {['easy', 'medium', 'hard'].map((difficulty) => (
//                         <div key={difficulty} className="bg-gray-100 p-4 rounded-md mb-4">
//                           <h4 className="text-md font-medium text-gray-900 mb-2">{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</h4>
//                           <ul className="space-y-2">
//                             {topicsData[topic].problems[difficulty].map((problem, index) => (
//                               <li key={index}>
//                                 <a href={problem.link} className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">
//                                   {problem.name}
//                                 </a>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Section */}
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
//             {Object.keys(topicsData).map((topic) => (
//               <div key={topic} className="mb-4">
//                 <h3 className="text-lg font-semibold text-gray-900">{topic}</h3>
//                 <ul className="space-y-2">
//                   <li>
//                     <a href={topicsData[topic].youtube.basic} className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">
//                       Basic Playlist
//                     </a>
//                   </li>
//                   <li>
//                     <a href={topicsData[topic].youtube.advanced} className="text-indigo-600 hover:text-indigo-500" target="_blank" rel="noopener noreferrer">
//                       Advanced Playlist
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataStructuresDetails;

// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";

// const DataStructuresDetails = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-8">
//           <Link
//             to="/skills/technical"
//             className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
//           >
//             <ArrowLeft className="h-4 w-4 mr-1" />
//             Back to Technical Skills
//           </Link>
//         </div>
//         <h1 className="text-3xl font-bold text-gray-900 mb-8">
//           Basic Data Structures
//         </h1>

//         <div className="bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//             Introduction
//           </h2>
//           <p className="text-gray-700 mb-6">
//             Data structures are fundamental concepts in computer science that
//             organize and store data efficiently. Understanding them is crucial
//             for writing effective and optimized algorithms.
//           </p>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//             How to Learn Data Structures
//           </h2>
//           <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
//             <li>
//               <strong>Start with the Basics:</strong> Understand fundamental
//               data structures like arrays, linked lists, stacks, and queues.
//             </li>
//             <li>
//               <strong>Learn Tree and Graph Structures:</strong> Grasp the
//               concepts of binary trees, binary search trees, and graph
//               representations.
//             </li>
//             <li>
//               <strong>Implement Data Structures:</strong> Practice implementing
//               these data structures from scratch to understand their inner
//               workings.
//             </li>
//             <li>
//               <strong>Practice Regularly:</strong> Solve coding problems on
//               platforms like LeetCode, HackerRank, and Codeforces.
//             </li>
//             <li>
//               <strong>Analyze Time and Space Complexity:</strong> Understand how
//               different data structures affect the performance of your
//               algorithms.
//             </li>
//           </ul>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//             Handwritten Notes
//           </h2>
//           <p className="text-gray-700 mb-6">
//             (Placeholder for handwritten notes - you can add links to images or
//             PDFs here)
//           </p>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//             Print Notes
//           </h2>
//           <p className="text-gray-700 mb-6">
//             (Placeholder for print notes - you can add links to PDFs or
//             documents here)
//           </p>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//             Practice Problems
//           </h2>
//           <div className="space-y-4">
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Implement a basic array</li>
//                 <li>Implement a singly linked list</li>
//                 <li>Implement a stack using an array</li>
//               </ul>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Implement a doubly linked list</li>
//                 <li>Implement a queue using a linked list</li>
//                 <li>Implement a binary tree</li>
//               </ul>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
//               <ul className="list-disc list-inside text-gray-700">
//                 <li>Implement a graph using adjacency list</li>
//                 <li>Implement a binary search tree</li>
//                 <li>Implement a priority queue</li>
//               </ul>
//             </div>
//           </div>

//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//             YouTube Playlists
//           </h2>
//           <div className="space-y-4">
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">
//                 Data Structures Basics
//               </h3>
//               <p className="text-gray-700">
//                 (Placeholder for beginner data structures playlist link)
//               </p>
//             </div>
//             <div className="bg-gray-100 p-4 rounded-md">
//               <h3 className="text-lg font-medium text-gray-900 mb-2">
//                 Advanced Data Structures
//               </h3>
//               <p className="text-gray-700">
//                 (Placeholder for advanced data structures playlist link)
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataStructuresDetails;




// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";

// const DataStructuresDetails = () => {
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
//           <h1 className="text-3xl font-bold text-gray-900 mb-8">Basic Data Structures</h1>
          
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
//             <p className="text-gray-700 mb-6">
//               Data structures are fundamental concepts in computer science that organize and store data efficiently. Understanding them is crucial for writing effective and optimized algorithms.
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handwritten Notes</h2>
//             <p className="text-gray-700 mb-6">
//               <a href="https://example.com/handwritten-notes" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here to access Handwritten Notes</a>
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Print Notes</h2>
//             <p className="text-gray-700 mb-6">
//               <a href="https://example.com/print-notes" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here to access Print Notes</a>
//             </p>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
//             <div className="space-y-4">
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li>
//                     <a href="https://www.geeksforgeeks.org/array-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a basic array</a>
//                   </li>
//                   <li>
//                     <a href="https://www.geeksforgeeks.org/linked-list-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a singly linked list</a>
//                   </li>
//                   <li>
//                     <a href="https://www.geeksforgeeks.org/stack-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a stack using an array</a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li>
//                     <a href="https://www.geeksforgeeks.org/doubly-linked-list/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a doubly linked list</a>
//                   </li>
//                   <li>
//                     <a href="https://www.geeksforgeeks.org/queue-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a queue using a linked list</a>
//                   </li>
//                   <li>
//                     <a href="https://www.geeksforgeeks.org/binary-tree-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a binary tree</a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
//                 <ul className="list-disc list-inside text-gray-700">
//                   <li>
//                     <a href="https://www.geeksforgeeks.org/graph-and-its-representations/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a graph using adjacency list</a>
//                   </li>
//                   <li>
//                     <a href="https://www.geeksforgeeks.org/binary-search-tree-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a binary search tree</a>
//                   </li>
//                   <li>
//                     <a href="https://www.geeksforgeeks.org/priority-queue-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a priority queue</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
//             <div className="space-y-4">
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Data Structures Basics</h3>
//                 <a href="https://www.youtube.com/playlist?list=PL2_aWCzGMAwLL-mEB4ef20f3iqWMGWa25" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here for the Beginner Data Structures Playlist</a>
//               </div>
//               <div className="bg-gray-100 p-4 rounded-md">
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Data Structures</h3>
//                 <a href="https://www.youtube.com/playlist?list=PLrmLmBdmIlpsHaNTPP_jHHDx_os9ItYXr" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here for the Advanced Data Structures Playlist</a>
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
//                 <strong>Basic Data Structures</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Arrays</li>
//                   <li>Linked Lists (Singly and Doubly)</li>
//                   <li>Stacks</li>
//                   <li>Queues</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>Trees</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Binary Trees</li>
//                   <li>Binary Search Trees</li>
//                   <li>AVL Trees</li>
//                   <li>Heap</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>Graphs</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Graph Representation</li>
//                   <li>Breadth-First Search (BFS)</li>
//                   <li>Depth-First Search (DFS)</li>
//                   <li>Dijkstra’s Algorithm</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>Hashing</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Hash Tables</li>
//                   <li>Hash Functions</li>
//                   <li>Collision Resolution Techniques</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>Advanced Data Structures</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Tries</li>
//                   <li>Segment Trees</li>
//                   <li>Fenwick Tree (Binary Indexed Tree)</li>
//                 </ul>
//               </li>
//               <li>
//                 <strong>Algorithms</strong>
//                 <ul className="list-decimal list-inside space-y-1 text-gray-600">
//                   <li>Sorting Algorithms</li>
//                   <li>Searching Algorithms</li>
//                   <li>Dynamic Programming</li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DataStructuresDetails;


import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DataStructuresDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex">
        {/* Main Content */}
        <div className="w-2/3">
          <div className="mb-8">
            <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Technical Skills
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Basic Data Structures</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              Data structures are fundamental concepts in computer science that organize and store data efficiently. Understanding them is crucial for writing effective and optimized algorithms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handwritten Notes</h2>
            <p className="text-gray-700 mb-6">
              <a href="https://example.com/handwritten-notes" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here to access Handwritten Notes</a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Print Notes</h2>
            <p className="text-gray-700 mb-6">
              <a href="https://example.com/print-notes" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here to access Print Notes</a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a href="https://www.geeksforgeeks.org/array-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a basic array</a>
                  </li>
                  <li>
                    <a href="https://www.geeksforgeeks.org/linked-list-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a singly linked list</a>
                  </li>
                  <li>
                    <a href="https://www.geeksforgeeks.org/stack-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a stack using an array</a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a href="https://www.geeksforgeeks.org/doubly-linked-list/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a doubly linked list</a>
                  </li>
                  <li>
                    <a href="https://www.geeksforgeeks.org/queue-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a queue using a linked list</a>
                  </li>
                  <li>
                    <a href="https://www.geeksforgeeks.org/binary-tree-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a binary tree</a>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <a href="https://www.geeksforgeeks.org/graph-and-its-representations/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a graph using adjacency list</a>
                  </li>
                  <li>
                    <a href="https://www.geeksforgeeks.org/binary-search-tree-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a binary search tree</a>
                  </li>
                  <li>
                    <a href="hhttps://www.programiz.com/dsa/priority-queue" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a priority queue</a>
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Data Structures Basics</h3>
                <a href="https://www.youtube.com/watch?v=xLetJpcjHS0&list=PLBlnK6fEyqRj9lld8sWIUNwlKfdUoPd1Y" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here for the Beginner Data Structures Playlist</a>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Data Structures</h3>
                <a href="https://www.youtube.com/watch?v=rhpyqL5D7K0&list=PLM_KIlU0WoXmkV4QB1Dg8PtJaHTdWHwRS" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Click here for the Advanced Data Structures Playlist</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Topics to Learn */}
        <div className="w-1/3 ml-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Topics to Learn</h2>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Basic Data Structures</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/arrays-in-c-cpp/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Arrays</a></li>
                  <li><a href="https://www.geeksforgeeks.org/linked-list-set-1-introduction/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Linked Lists (Singly and Doubly)</a></li>
                  <li><a href="https://www.geeksforgeeks.org/stack-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Stacks</a></li>
                  <li><a href="https://www.geeksforgeeks.org/queue-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Queues</a></li>
                </ul>
              </li>
              <li>
                <strong>Trees</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/binary-tree-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Binary Trees</a></li>
                  <li><a href="https://www.geeksforgeeks.org/binary-search-tree-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Binary Search Trees</a></li>
                  <li><a href="https://www.geeksforgeeks.org/avl-tree-set-1-insertion/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">AVL Trees</a></li>
                  <li><a href="https://www.geeksforgeeks.org/heap-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Heap</a></li>
                </ul>
              </li>
              <li>
                <strong>Graphs</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/graph-and-its-representations/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Graph Representation</a></li>
                  <li><a href="https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Breadth-First Search (BFS)</a></li>
                  <li><a href="https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Depth-First Search (DFS)</a></li>
                  <li><a href="https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Dijkstra’s Algorithm</a></li>
                </ul>
              </li>
              <li>
                <strong>Hashing</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/hashing-data-structure/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Hash Tables</a></li>
                  <li><a href="https://www.geeksforgeeks.org/hashing-introduction/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Hash Functions</a></li>
                  <li><a href="https://www.geeksforgeeks.org/collision-resolution-techniques-in-hashing/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Collision Resolution Techniques</a></li>
                </ul>
              </li>
              <li>
                <strong>Advanced Data Structures</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/trie-insert-and-search/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Tries</a></li>
                  <li><a href="https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Segment Trees</a></li>
                  <li><a href="https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Fenwick Tree (Binary Indexed Tree)</a></li>
                </ul>
              </li>
              <li>
                <strong>Algorithms</strong>
                <ul className="list-decimal list-inside space-y-1 text-gray-600">
                  <li><a href="https://www.geeksforgeeks.org/sorting-algorithms/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Sorting Algorithms</a></li>
                  <li><a href="https://www.geeksforgeeks.org/searching-algorithms/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Searching Algorithms</a></li>
                  <li><a href="https://www.geeksforgeeks.org/dynamic-programming/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Dynamic Programming</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStructuresDetails;
