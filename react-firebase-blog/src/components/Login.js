import React from 'react'
import { auth, provider } from "../firebase";
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () =>  {
    // Googleでログイン
    signInWithPopup(auth, provider).then((result)=>{
      // ローカルストレージに保存
      localStorage.setItem("isAuth", true);
      // 状態をtrueにする
      setIsAuth(true);
      // ホームへリダイレクト
      navigate("/");
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login
