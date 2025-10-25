import React from 'react'
import { auth } from "../firebase";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () =>  {
    // ログアウト
    signOut(auth).then(() => {
      // ローカルストレージをクリア
      localStorage.clear();    
      // 状態をfalseにする
      setIsAuth(false);
      // ログインページにリダイレクト
      navigate("/login");
    })
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout
