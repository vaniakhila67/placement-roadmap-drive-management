// import React, { useState, useEffect } from "react";
// import { createClient } from "@supabase/supabase-js";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// const Quiz = () => {
//   const { skillType, quizId } = useParams();
//   const [quizzes, setQuizzes] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [score, setScore] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchQuizzes = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         let query = supabase.from("quizzes").select("*");

//         if (skillType) {
//           query = query.eq("skill_type", skillType);
//         }

//         const { data, error } = await query;

//         if (error) {
//           setError(error.message);
//         } else {
//           setQuizzes(data || []);
//         }
//       } catch (err: any) {
//         setError(err.message || "An unexpected error occurred.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchQuizzes();
//   }, [skillType]);

//   const handleAnswerChange = (questionId, answer) => {
//     setUserAnswers({
//       ...userAnswers,
//       [questionId]: answer,
//     });
//   };

//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };

//   const handlePreviousQuestion = () => {
//     setCurrentQuestionIndex(currentQuestionIndex - 1);
//   };

//   const handleSubmitQuiz = async () => {
//     let correctAnswers = 0;
//     const currentQuiz = quizzes[0];
//     const questions = currentQuiz?.questions || [];

//     questions.forEach((question) => {
//       if (userAnswers[question.id] === question.correctAnswer) {
//         correctAnswers++;
//       }
//     });

//     const newScore = (correctAnswers / questions.length) * 100;
//     setScore(newScore);
//     setQuizCompleted(true);

//     // Update profile progress in local storage
//     let profileData = {};
//     const storedProfile = localStorage.getItem("profileData");
//     if (storedProfile) {
//       profileData = JSON.parse(storedProfile);
//     }

//     profileData = {
//       ...profileData,
//       progress: {
//         ...profileData.progress,
//         quizScore: newScore,
//       },
//     };

//     localStorage.setItem("profileData", JSON.stringify(profileData));

//     // Optionally, update profile in Supabase
//     const user = supabase.auth.currentUser;
//     if (user) {
//       try {
//         await supabase
//           .from("profiles")
//           .update({ progress: profileData.progress })
//           .eq("user_id", user.id);
//       } catch (err) {
//         console.error("Failed to update profile in Supabase", err);
//       }
//     }
//   };

//   if (loading) {
//     return <div>Loading quizzes...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const currentQuiz = quizzes[0]; // Assuming only one quiz per skill type
//   const questions = currentQuiz?.questions || [];
//   const currentQuestion = questions[currentQuestionIndex];

//   if (!currentQuiz) {
//     return <div>No quizzes found for this skill type.</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <div className="mb-8">
//           <Link
//             to="/skills"
//             className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
//           >
//             <ArrowLeft className="h-4 w-4 mr-1" />
//             Back to Skills
//           </Link>
//         </div>
//         <h1 className="text-3xl font-bold text-gray-900 mb-4">
//           {currentQuiz.title}
//         </h1>

//         {quizCompleted ? (
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-xl font-semibold text-gray-900 mb-4">
//               Quiz Completed!
//             </h2>
//             <p className="text-gray-700 mb-4">
//               Your score: {score.toFixed(2)}%
//             </p>
//             <button
//               onClick={() => navigate("/profile")}
//               className="px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
//             >
//               View Profile
//             </button>
//           </div>
//         ) : currentQuestion ? (
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             <h2 className="text-xl font-semibold text-gray-900 mb-4">
//               Question {currentQuestionIndex + 1} / {questions.length}
//             </h2>
//             <p className="text-gray-700 mb-4">{currentQuestion.question}</p>

//             <div className="space-y-2">
//               {currentQuestion.options.map((option, index) => (
//                 <label key={index} className="flex items-center">
//                   <input
//                     type="radio"
//                     name={`question-${currentQuestion.id}`}
//                     value={option}
//                     className="mr-2"
//                     checked={userAnswers[currentQuestion.id] === option}
//                     onChange={() =>
//                       handleAnswerChange(currentQuestion.id, option)
//                     }
//                   />
//                   <span className="text-gray-700">{option}</span>
//                 </label>
//               ))}
//             </div>

//             <div className="flex justify-between mt-6">
//               <button
//                 onClick={handlePreviousQuestion}
//                 disabled={currentQuestionIndex === 0}
//                 className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none"
//               >
//                 Previous
//               </button>
//               {currentQuestionIndex === questions.length - 1 ? (
//                 <button
//                   onClick={handleSubmitQuiz}
//                   className="px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
//                 >
//                   Submit Quiz
//                 </button>
//               ) : (
//                 <button
//                   onClick={handleNextQuestion}
//                   className="px-4 py-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
//                 >
//                   Next
//                 </button>
//               )}
//             </div>
//           </div>
//         ) : (
//           <div>No questions found for this quiz.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Quiz;


// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";

// const Quiz = () => {
//   const technicalQuizzes = [
//     {
//       title: "C Language",
//       link: "https://www.geeksforgeeks.org/c-programming-language/",
//     },
//     {
//       title: "C++",
//       link: "https://www.geeksforgeeks.org/c-plus-plus/",
//     },
//     {
//       title: "Java",
//       link: "https://www.geeksforgeeks.org/java/",
//     },
//     {
//       title: "Python",
//       link: "https://www.geeksforgeeks.org/python-programming-language/",
//     },
//     {
//       title: "Data Structures",
//       link: "https://www.geeksforgeeks.org/data-structures/",
//     },
//     {
//       title: "Algorithms",
//       link: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",
//     },
//     {
//       title: "Frontend",
//       link: "https://www.geeksforgeeks.org/web-development/",
//     },
//     {
//       title: "Backend",
//       link: "https://www.geeksforgeeks.org/web-development/",
//     },
//   ];

//   const nonTechnicalQuizzes = [
//     {
//       title: "Quantitative Aptitude",
//       link: "https://www.indiabix.com/aptitude/questions-and-answers/",
//     },
//     {
//       title: "Number System",
//       link: "https://www.indiabix.com/aptitude/questions-and-answers/",
//     },
//     {
//       title: "Percentages",
//       link: "https://www.indiabix.com/aptitude/questions-and-answers/",
//     },
//     {
//       title: "Profit and Loss",
//       link: "https://www.indiabix.com/aptitude/questions-and-answers/",
//     },
//     {
//       title: "Time and Work",
//       link: "https://www.indiabix.com/aptitude/questions-and-answers/",
//     },
//     {
//       title: "Probability",
//       link: "https://www.indiabix.com/aptitude/questions-and-answers/",
//     },
//     {
//       title: "Statistics",
//       link: "https://www.indiabix.com/aptitude/questions-and-answers/",
//     },
//     {
//       title: "Logical Reasoning",
//       link: "https://www.indiabix.com/logical-reasoning/questions-and-answers/",
//     },
//     {
//       title: "Verbal Reasoning",
//       link: "https://www.indiabix.com/verbal-reasoning/questions-and-answers/",
//     },
//     {
//       title: "Non-verbal Reasoning",
//       link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
//     },
//     {
//       title: "Data Interpretation",
//       link: "https://www.indiabix.com/data-interpretation/questions-and-answers/",
//     },
//     {
//       title: "Coding-Decoding",
//       link: "https://www.indiabix.com/coding-decoding/questions-and-answers/",
//     },
//     {
//       title: "Blood Relations",
//       link: "https://www.indiabix.com/blood-relations/questions-and-answers/",
//     },
//     {
//       title: "Verbal Communication",
//       link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
//     },
//     {
//       title: "Grammar and Vocabulary",
//       link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
//     },
//     {
//       title: "Public Speaking",
//       link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
//     },
//     {
//       title: "Group Discussions",
//       link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
//     },
//     {
//       title: "Interview Skills",
//       link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
//     },
//     {
//       title: "Email Writing",
//       link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
//     },
//     {
//       title: "Non-verbal Communication",
//       link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
//     },
//     {
//       title: "Body Language",
//       link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
//     },
//     {
//       title: "Presentation Skills",
//       link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
//     },
//     {
//       title: "Active Listening",
//       link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
//     },
//     {
//       title: "Professional Etiquette",
//       link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <div className="mb-8">
//           <Link
//             to="/skills"
//             className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
//           >
//             <ArrowLeft className="h-4 w-4 mr-1" />
//             Back to Skills
//           </Link>
//         </div>
//         <h1 className="text-3xl font-bold text-gray-900 mb-4">Quizzes</h1>

//         <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical</h2>
//         <div className="space-y-4">
//           {technicalQuizzes.map((quiz, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg p-6">
//               <h3 className="text-xl font-medium text-gray-900 mb-2">
//                 {quiz.title}
//               </h3>
//               <a
//                 href={quiz.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:underline"
//               >
//                 Take Quiz →
//               </a>
//             </div>
//           ))}
//         </div>

//         <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
//           Non-Technical
//         </h2>
//         <div className="space-y-4">
//           {nonTechnicalQuizzes.map((quiz, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg p-6">
//               <h3 className="text-xl font-medium text-gray-900 mb-2">
//                 {quiz.title}
//               </h3>
//               <a
//                 href={quiz.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:underline"
//               >
//                 Take Quiz →
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;


// import React from "react";
// import { Link } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";

// const Quiz = () => {
//   const technicalQuizzes = [
//     {
//       title: "C Language",
//       link: "https://www.geeksforgeeks.org/c-programming-language/",
//     },
//     {
//       title: "C++",
//       link: "https://www.geeksforgeeks.org/c-plus-plus/",
//     },
//     {
//       title: "Java",
//       link: "https://www.geeksforgeeks.org/java/",
//     },
//     {
//       title: "Python",
//       link: "https://www.geeksforgeeks.org/python-programming-language/",
//     },
//     {
//       title: "Data Structures",
//       link: "https://www.geeksforgeeks.org/data-structures/",
//     },
//     {
//       title: "Algorithms",
//       link: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",
//     },
//     {
//       title: "Frontend",
//       link: "https://www.geeksforgeeks.org/web-development/",
//     },
//     {
//       title: "Backend",
//       link: "https://www.geeksforgeeks.org/web-development/",
//     },
//   ];

//   const nonTechnicalQuizzes = [
//     {
//       title: "Quantitative Aptitude",
//       link: "https://www.indiabix.com/aptitude/questions-and-answers/",
//     },
//     {
//       title: "Number System",
//       link: "https://www.indiabix.com/aptitude/questions-and-answers/",
//     },
//     {
//       title: "Percentages",
//       link: "https://www.indiabix.com/aptitude/questions-and-answers/",
//     },
//     {
//       title: "Profit and Loss",
//       link: "https://www.indiabix.com/aptitude/questions-and-answers/",
//     },
//     {
//       title: "Time and Work",
//       link: "https://www.indiabix.com/aptitude/questions-and-answers/",
//     },
//     {
//       title: "Probability",
//       link: "https://www.indiabix.com/aptitude/questions-and-answers/",
//     },
//     {
//       title: "Statistics",
//       link: "https://www.indiabix.com/aptitude/questions-and-answers/",
//     },
//     {
//       title: "Logical Reasoning",
//       link: "https://www.indiabix.com/logical-reasoning/questions-and-answers/",
//     },
//     {
//       title: "Verbal Reasoning",
//       link: "https://www.indiabix.com/verbal-reasoning/questions-and-answers/",
//     },
//     {
//       title: "Non-verbal Reasoning",
//       link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
//     },
//     {
//       title: "Data Interpretation",
//       link: "https://www.indiabix.com/data-interpretation/questions-and-answers/",
//     },
//     {
//       title: "Coding-Decoding",
//       link: "https://www.indiabix.com/coding-decoding/questions-and-answers/",
//     },
//     {
//       title: "Blood Relations",
//       link: "https://www.indiabix.com/blood-relations/questions-and-answers/",
//     },
//     {
//       title: "Verbal Communication",
//       link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
//     },
//     {
//       title: "Grammar and Vocabulary",
//       link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
//     },
//     {
//       title: "Public Speaking",
//       link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
//     },
//     {
//       title: "Group Discussions",
//       link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
//     },
//     {
//       title: "Interview Skills",
//       link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
//     },
//     {
//       title: "Email Writing",
//       link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
//     },
//     {
//       title: "Non-verbal Communication",
//       link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
//     },
//     {
//       title: "Body Language",
//       link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
//     },
//     {
//       title: "Presentation Skills",
//       link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
//     },
//     {
//       title: "Active Listening",
//       link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
//     },
//     {
//       title: "Professional Etiquette",
//       link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto">
//         <div className="mb-8">
//           <Link
//             to="/skills"
//             className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
//           >
//             <ArrowLeft className="h-4 w-4 mr-1" />
//             Back to Skills
//           </Link>
//         </div>
//         <h1 className="text-3xl font-bold text-gray-900 mb-4">Quizzes</h1>

//         <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical</h2>
//         <div className="space-y-4">
//           {technicalQuizzes.map((quiz, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg p-6">
//               <h3 className="text-xl font-medium text-gray-900 mb-2">
//                 {quiz.title}
//               </h3>
//               <a
//                 href={quiz.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:underline"
//               >
//                 Take Quiz →
//               </a>
//             </div>
//           ))}
//         </div>

//         <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
//           Non-Technical
//         </h2>
//         <div className="space-y-4">
//           {nonTechnicalQuizzes.map((quiz, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg p-6">
//               <h3 className="text-xl font-medium text-gray-900 mb-2">
//                 {quiz.title}
//               </h3>
//               <a
//                 href={quiz.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-600 hover:underline"
//               >
//                 Take Quiz →
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;


import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Quiz = () => {
  const technicalQuizzes = [
    {
      title: "C Language",
      link: "https://www.geeksforgeeks.org/c-programming-language/",
    },
    {
      title: "C++",
      link: "https://www.geeksforgeeks.org/c-plus-plus/",
    },
    {
      title: "Java",
      link: "https://www.geeksforgeeks.org/java/",
    },
    {
      title: "Python",
      link: "https://www.geeksforgeeks.org/python-programming-language/",
    },
    {
      title: "Data Structures",
      link: "https://www.geeksforgeeks.org/data-structures/",
    },
    {
      title: "Algorithms",
      link: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",
    },
    {
      title: "Frontend",
      link: "https://www.geeksforgeeks.org/web-development/",
    },
    {
      title: "Backend",
      link: "https://www.geeksforgeeks.org/web-development/",
    },
  ];

  const nonTechnicalQuizzes = [
    {
      title: "Quantitative Aptitude",
      link: "https://www.indiabix.com/aptitude/questions-and-answers/",
    },
    {
      title: "Number System",
      link: "https://www.indiabix.com/aptitude/questions-and-answers/",
    },
    {
      title: "Percentages",
      link: "https://www.indiabix.com/aptitude/questions-and-answers/",
    },
    {
      title: "Profit and Loss",
      link: "https://www.indiabix.com/aptitude/questions-and-answers/",
    },
    {
      title: "Time and Work",
      link: "https://www.indiabix.com/aptitude/questions-and-answers/",
    },
    {
      title: "Probability",
      link: "https://www.indiabix.com/aptitude/questions-and-answers/",
    },
    {
      title: "Statistics",
      link: "https://www.indiabix.com/aptitude/questions-and-answers/",
    },
    {
      title: "Logical Reasoning",
      link: "https://www.indiabix.com/logical-reasoning/questions-and-answers/",
    },
    {
      title: "Verbal Reasoning",
      link: "https://www.indiabix.com/verbal-reasoning/questions-and-answers/",
    },
    {
      title: "Non-verbal Reasoning",
      link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
    },
    {
      title: "Data Interpretation",
      link: "https://www.indiabix.com/data-interpretation/questions-and-answers/",
    },
    {
      title: "Coding-Decoding",
      link: "https://www.indiabix.com/coding-decoding/questions-and-answers/",
    },
    {
      title: "Blood Relations",
      link: "https://www.indiabix.com/blood-relations/questions-and-answers/",
    },
    {
      title: "Verbal Communication",
      link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
    },
    {
      title: "Grammar and Vocabulary",
      link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
    },
    {
      title: "Public Speaking",
      link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
    },
    {
      title: "Group Discussions",
      link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
    },
    {
      title: "Interview Skills",
      link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
    },
    {
      title: "Email Writing",
      link: "https://www.indiabix.com/verbal-ability/questions-and-answers/",
    },
    {
      title: "Non-verbal Communication",
      link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
    },
    {
      title: "Body Language",
      link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
    },
    {
      title: "Presentation Skills",
      link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
    },
    {
      title: "Active Listening",
      link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
    },
    {
      title: "Professional Etiquette",
      link: "https://www.indiabix.com/non-verbal-reasoning/questions-and-answers/",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            to="/skills"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Skills
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Quizzes</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Technical
            </h2>
            <div className="space-y-4">
              {technicalQuizzes.map((quiz, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {quiz.title}
                  </h3>
                  <a
                    href={quiz.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Take Quiz →
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Non-Technical
            </h2>
            <div className="space-y-4">
              {nonTechnicalQuizzes.map((quiz, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {quiz.title}
                  </h3>
                  <a
                    href={quiz.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Take Quiz →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;