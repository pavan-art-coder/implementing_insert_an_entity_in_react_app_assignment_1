import { useNavigate } from "react-router-dom";

function AddBookButton() {
  const navigate = useNavigate();
  
  return <button onClick={() => navigate("/add-book")}>Add a New Book</button>;
}

export default AddBookButton;

