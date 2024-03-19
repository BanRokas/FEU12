const Comment = ({comment}) => {
  return (
    <div>
      {/* author name */}
      <p>{comment.text}</p>
      {/* author can delete */}
    </div>
  );
}
 
export default Comment;