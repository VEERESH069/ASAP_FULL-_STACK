import React from 'react';

const LikeButton = ({ isLiked, onLikeToggle }) => {
  return (
    <button
      onClick={onLikeToggle}
      style={{
        backgroundColor: isLiked ? 'red' : 'gray',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      {isLiked ? 'Liked' : 'Like'}
    </button>
  );
};

export default LikeButton;
