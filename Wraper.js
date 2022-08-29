import { useContext } from "react";
import { User } from "./ContextApi";

function Wraper() {
  const user = useContext(User);
  return (
    <div>
      <p>
        {user.name.name} {user.name.role}
      </p>
      <button onClick={() => user.setName({ name: "rittika", role: "fraud" })}>
        wraper
      </button>
    </div>
  );
}
export default Wraper;
