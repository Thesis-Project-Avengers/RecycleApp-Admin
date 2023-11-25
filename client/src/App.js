import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import SignIn from "./screens/SignIn";
import Users from "./screens/Users";
import Reports from "./screens/Reports";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useEffect } from "react";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="App">
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
          appear
        >
          <Routes>
            <Route path="/" Component={SignIn} />
            <Route path="/home" Component={HomeScreen} />
            <Route path="/users" Component={Users} />
            <Route path="/reports" Component={Reports} />
            {/* //? Here like the Above example  */}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
