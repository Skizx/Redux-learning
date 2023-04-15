import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

const PostForm = () => {

  const form = useRef();
  const user = useSelector((state) => state.userReducer)

  const handleForm = async(e) => {
    e.preventDefault();

    const postData = {
      author: user.pseudo,
    }
  }

  return (
    <div className="form-container">
      <form ref={form} onSubmit={e => handleForm(e)}>
        <input type="text" placeholder="Titre du poste" />
        <textarea placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
