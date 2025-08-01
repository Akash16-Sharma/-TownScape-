// components/common/FeedCard.jsx

const FeedCard = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
          <h2 className="text-lg font-semibold text-gray-800">@{post.username}</h2>
        </div>
        <span className="text-sm text-gray-400">{post.time}</span>
      </div>

      <p className="text-gray-700 mb-3">{post.content}</p>

      <div className="flex space-x-6 text-sm text-gray-500">
        <button>👍 {post.likes}</button>
        <button>💬 {post.comments}</button>
        <button>🔁 {post.reposts}</button>
      </div>
    </div>
  );
};
export default FeedCard;