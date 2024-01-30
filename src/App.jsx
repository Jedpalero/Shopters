import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div
      className={`main ${
        sidebar ? "grid-cols-[300px_1fr]" : "grid-cols-[70px_1fr]"
      }`}
    >
      <div className={`sidebar flex`}>
        <Navigation sidebar={sidebar} setSidebar={setSidebar} />
      </div>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
