import React from 'react';

const Form = (props) => {
  const {  
    title,
    author,
    isbn,
    setTitle,
    setAuthor,
    setIsbn,
    currentBookId,
    setCurrentBookId,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input 
        autoFocus
        required
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Author</label>
      <input 
        autoFocus
        required
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label>ISBN</label>
      <input 
        required
        autoFocus
        type="text"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button tabIndex="0" type="submit">{currentBookId !== null ? "Update" : "Add"}</button>
      {currentBookId !== null && <button onClick={() => setCurrentBookId(null)}>Cancel</button>}
    </form>
  );
}

export default Form;