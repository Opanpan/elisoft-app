import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Register setIsLogin={setIsLogin} />
      )}
    </div>
  );
}
