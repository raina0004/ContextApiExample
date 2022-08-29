import React, { useState } from "react";
import Wraper from "./Wraper";

export const User = React.createContext();
function ContextApi() {
  const [name, setName] = useState({
    name: "deepak",
    role: "frontend developer"
  });
  return (
    <div>
      <User.Provider value={{ name, setName }}>
        <Wraper />
      </User.Provider>
      <button
        onClick={() => setName({ name: "tarun", role: "frontend developer" })}
      >
        contextapi
      </button>
    </div>
  );
}
export default ContextApi;
