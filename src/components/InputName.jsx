import { useState } from "react";
import { useParams } from "react-router-dom";

const InputName = () => {
  const [name, setName] = useState("");
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(input);
  }
  const {nameId} = useParams()
    
  return (
    <div className="px-10">
      <hr />
      <h1 className="text-4xl font-bold ">이름: {nameId}<span className="text-blue-500 ml-8">{name}</span></h1>
        <form onSubmit={(e) => { handleSubmit(e) }}>
        <input 
          className="text-2xl w-60 h-12 border border-gray-500 rounded-xl px-2 outline-none mt-4"
            placeholder="이름"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
      </form>
    </div>
  );
};

export default InputName;