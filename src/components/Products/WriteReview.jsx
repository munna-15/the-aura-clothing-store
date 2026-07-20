import React, { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContextProvider";
import { Star } from "lucide-react";
import toast from "react-hot-toast";

const WriteReview = ({ productId }) => {

  const {
    addReview,
    reviews,
  } = useContext(ProductContext);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    if (!comment.trim()) {
      toast.error("Please write a review");
      return;
    }

    addReview(productId, {
      id: crypto.randomUUID(),
      name,
      rating,
      comment,
      verified: false,
      date: new Date().toLocaleDateString(),
    });

    setName("");
    setRating(0);
    setComment("");
  };

  return (
    <section className="mt-20">
      <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

        <h2 className="text-3xl font-bold mb-2">
          Write a Review
        </h2>

        <p className="text-gray-500 mb-8">
          Share your experience with this product.
        </p>

        <form onSubmit={handleSubmit}>

          {/* Name */}

          <div className="mb-6">

            <label className="block mb-2 font-medium">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />

          </div>

          {/* Rating */}

          <div className="mb-6">

            <label className="block mb-2 font-medium">
              Rating
            </label>

            <div className="flex gap-2">

              {[1, 2, 3, 4, 5].map((star) => (

                <Star
                  key={star}
                  size={30}
                  onClick={() => setRating(star)}
                  className={`cursor-pointer transition ${star <= rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"
                    }`}
                />

              ))}

            </div>

          </div>

          {/* Comment */}

          <div className="mb-8">

            <label className="block mb-2 font-medium">
              Comment
            </label>

            <textarea
              rows={5}
              placeholder="Tell us about this product..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-green-400"
            />

          </div>

          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            Submit Review
          </button>

        </form>

      </div>
    </section>
  );
};

export default WriteReview;