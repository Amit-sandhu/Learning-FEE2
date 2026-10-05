import { useState } from "react";
import { UserContext } from "./UserContext";

function App() {
  const username = "Jay";
  const [lastname, setlastname] = useState("Lee");

  return (
    <>
      <UserContext.Provider value={username}>
        <h1>App Component</h1>
      </UserContext.Provider>
    </>
  );
}

export default App;