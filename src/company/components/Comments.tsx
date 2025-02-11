import React, { useState } from "react";
import ReviewCard from "./Comment";
import { IoSend } from "react-icons/io5"; 

interface User {
  id: number;
  name: string;
  avatar: string;
}

interface Review {
  id: number;
  content: string;
  user: User;
}

const initialReviews: Review[] = [
  {
    id: 1,
    content: "عقار رائع جدًا! أنصح به.",
    user: {
      id: 101,
      name: "أحمد محمد",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  },
  {
    id: 2,
    content: "المكان نظيف ولكن السعر مرتفع قليلاً.",
    user: {
      id: 102,
      name: "سارة خالد",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  },
];

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newReview: Review = {
      id: reviews.length + 1,
      content: newComment,
      user: {
        id: 999,
        name: "مستخدم مجهول",
        avatar: "https://i.pravatar.cc/150?img=15",
      },
    };

    setReviews([newReview, ...reviews]); 
    setNewComment(""); 
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddComment();
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">التعليقات ({reviews.length})</h3>
        
    {/* show comments */}
    {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
      {/*add new comment*/}
      <div className=" flex items-center justify-center bg-[#d1e8e24d] p-6">
      <div>
        <button
          className="text-white bg-[#C29062] hover:text-blue-800 rounded-full p-2 me-2 text-center"
          onClick={handleAddComment}
        >
          <IoSend size={20} />
        </button>
        </div>
        <input
          type="text"
          className="w-full px-3 py-2 focus:outline-none rounded-md bg-white"
          placeholder="أضف تعليقك هنا..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={handleKeyDown} 
        />
      </div>
    </div>
  );
};

export default Reviews;