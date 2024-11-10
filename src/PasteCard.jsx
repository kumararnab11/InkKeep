import React from 'react';
import { AiOutlineCopy, AiOutlineDelete, AiOutlineEdit, AiOutlineEye, AiOutlineShareAlt, AiOutlineCalendar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeFromPastes } from './redux/pasteSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const PasteCard = ({ paste}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleString('en-US', options);
  };

  const shareContent = () => {
    const shareData = {
      title: paste?.title,
      text: paste?.content,
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => {
          toast.success("Content shared successfully!");
        })
        .catch((err) => {
          toast.error("Error while sharing: " + err);
          console.error("Error sharing:", err);
        });
    } else {
      toast.error("Web Share API is not supported on this device.");
    }
  };

  return (
    <div className="p-6 mb-6 bg-gradient-to-r from-blue-700 to-white rounded-md shadow-lg text-white relative">
      <h2 className="text-xl font-semibold mb-2">{paste.title}</h2>
      <p className="mb-4 truncate text-gray-100">{paste.content.length<30?paste.content:paste.content.slice(0, 30)+`...`
      }</p>

      <div className="absolute top-4 right-4 flex space-x-3 text-indigo-200">
        <AiOutlineEdit
          className="cursor-pointer transition-transform transform hover:scale-110 text-blue-900 hover:text-green-400"
          onClick={() => navigate(`/?pasteId=${paste?._id}`)}
        />
        <AiOutlineCopy
          className="cursor-pointer transition-transform transform hover:scale-110 text-blue-900 hover:text-green-400"
          onClick={() => {
            const textToCopy = `${paste?.title}:\n${paste?.content}`;
            navigator.clipboard.writeText(textToCopy);
            toast.success("Copied to clipboard!");
          }}
        />
        <AiOutlineDelete
          className="cursor-pointer transition-transform transform hover:scale-110 text-blue-900 hover:text-green-400"
          onClick={() => dispatch(removeFromPastes(paste))}
        />
        <AiOutlineEye
          className="cursor-pointer transition-transform transform hover:scale-110 text-blue-900 hover:text-green-400"
          onClick={() => navigate(`/pastes/${paste?._id}`)}
        />
        <AiOutlineShareAlt
          className="cursor-pointer transition-transform transform hover:scale-110 text-blue-900 hover:text-green-400"
          onClick={shareContent}
        />
      </div>

      <div className="text-xs absolute right-4 top-14 flex items-center space-x-2">
        <AiOutlineCalendar className="text-blue-900" />
        <span className="text-blue-900">{formatDate(paste.createdAt)}</span>
      </div>
    </div>
  );
};

export default PasteCard;
