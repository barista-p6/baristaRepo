// import React from "react";
// import { Star } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const StarRating = ({ rating }) => {
//   return (
//     <div className="flex">
//       {[...Array(5)].map((_, index) => (
//         <Star
//           key={index}
//           className={`w-5 h-5 ${
//             index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// const V3iewMoreRecipeDetail = ({ reviews }) => {
//   if (!reviews || reviews.length === 0) {
//     return <p className="text-center text-gray-500">No reviews available for this recipe.</p>;
//   }

//   return (
//     <Card className="bg-white rounded-lg shadow-lg">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold text-gray-800">Reviews</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <ul className="space-y-6">
//           {reviews.map((review) => (
//             <li
//               key={review._id}
//               className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
//             >
//               <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 mr-4">
//                 <img
//                   src={review.userId?.avatar || "/default-avatar.png"}
//                   alt={review.userId?.username || "Anonymous"}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="flex-1">
//                 <div className="flex items-center justify-between mb-2">
//                   <p className="text-gray-700 font-semibold text-lg">
//                     {review.userId?.username || "Anonymous"}
//                   </p>
//                   <span className="text-gray-500 text-sm">{review.date || ""}</span>
//                 </div>
//                 <StarRating rating={review.rating} />
//                 <p className="text-gray-600 mt-2">{review.comment}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   );
// };

// export default V3iewMoreRecipeDetail;import React from "react";
// import { Star } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const StarRating = ({ rating }) => {
//   return (
//     <div className="flex">
//       {[...Array(5)].map((_, index) => (
//         <Star
//           key={index}
//           className={`w-5 h-5 ${
//             index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
//           }`}
//         />
//       ))}
//     </div>
//   );
// };

// const V3iewMoreRecipeDetail = ({ reviews }) => {
//   if (!reviews || reviews.length === 0) {
//     return <p className="text-center text-gray-500">No reviews available for this recipe.</p>;
//   }

//   return (
//     <Card className="bg-white rounded-lg shadow-lg">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold text-gray-800">Reviews</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <ul className="space-y-6">
//           {reviews.map((review) => (
//             <li
//               key={review._id}
//               className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
//             >
//               <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex-shrink-0 mr-4">
//                 <img
//                   src={review.userId?.avatar || "/default-avatar.png"}
//                   alt={review.userId?.username || "Anonymous"}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="flex-1">
//                 <div className="flex items-center justify-between mb-2">
//                   <p className="text-gray-700 font-semibold text-lg">
//                     {review.userId?.username || "Anonymous"}
//                   </p>
//                   <span className="text-gray-500 text-sm">{review.date || ""}</span>
//                 </div>
//                 <StarRating rating={review.rating} />
//                 <p className="text-gray-600 mt-2">{review.comment}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   );
// };

// export default V3iewMoreRecipeDetail;