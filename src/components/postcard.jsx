import React from 'react';
import LikeButton from './likebutton'

const PostCard = ({ post, onLikeToggle }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <img src={post.profileImage} alt="Profile" style={styles.profilePic} />
        <span style={styles.username}>{post.username}</span>
      </div>
      <p style={styles.content}>{post.content}</p>
      <LikeButton isLiked={post.isLiked} onLikeToggle={() => onLikeToggle(post.id)} />
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px 0',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  profilePic: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  username: {
    fontWeight: 'bold',
  },
  content: {
    marginBottom: '15px',
  },
};

export default PostCard;
