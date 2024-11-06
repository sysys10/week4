import { useState } from "react";


const Count = () => {
    const [count, setCount] = useState(0);
    
    return (
    <div className="flex items-center justify-center">
      <div className="py-10">
        <h1 className="text-4xl mb-4 font-bold text-center">{count}</h1>
        <button className="mr-4 w-24 h-8 text-xl border-2 border-blue-400 rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-150" onClick={()=>{setCount(count-1)}}>-1</button>
        <button className="w-24 h-8 text-xl border-2 border-blue-400 rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-150"  onClick={() => {setCount(count+1) }}>+1</button>
      </div>
    </div>
    );
};

export default Count;
