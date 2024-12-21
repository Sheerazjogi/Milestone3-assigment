"use client";
import { useState } from "react";

const CommentSection = () => {
  // State for storing comments, initialize with empty array
  const [comments, setComments] = useState<string[]>([]);

  // State for storing the current comment input
  const [newComment, setNewComment] = useState("");

  // Handle adding new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]); // Add the new comment to the array
      setNewComment(""); // Clear the input after adding
    }
  };

  return (
    <div className="comment-section">
      <h2 className="text-3xl font-bold">Comments</h2>

      {/* Comments List */}
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment}</p>
          </div>
        ))}
      </div>

      {/* Input for new comment */}
      <div className="comment-input">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
};

export default CommentSection;
