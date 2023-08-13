import { useState } from "react";
import { useNavigate} from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();
  const handleUname =(val)=>{
    setUsername(val)
  }

  const handlePass = (val)=>{
    setPassword(val)
  }

  const login = () => {
  
    let accounts = localStorage.getItem('users');
    let match =0;

    let temp = JSON.parse(accounts)
    if(temp.length> 0 ){
       temp.forEach(t => {
       if (t.username == username && t.password == password) {
        match += 1;
       }
      })
    }
    console.log(match)
    if(match > 0){
      localStorage.setItem("isLogin", true)
      navigate('/dashboard')
    }else{
      localStorage.setItem("isLogin", false)
      alert("gagal");
    }
  }
  return (
    <div className='w-screen h-screen flex justify-center  bg-[url("https://images.pexels.com/photos/7688503/pexels-photo-7688503.jpeg?auto=compress&cs=tinysrgb&w=800")] bg-no-repeat bg-cover bg-center'>
      <div className='w-[360px] mt-32 h-3/6 xs:mt-60  border-2 rounded-lg px-4 border-none bg-[#ed4088] bg-opacity-70 flex flex-col'>
        <img src="https://purepng.com/public/uploads/large/purepng.com-cyberpunk-2077-logologosgame-logogame-logosgameslogocyberpunk-2077-12715289961328hlgr.png" alt="" />
        <input type="text" 
          className='w-full h-8 mb-6 border-2 rounded-lg border-gray-300' 
          onKeyUp={(e) => handleUname(e.target.value)}
        />
        <input type="password" 
          className='w-full h-8 mb-16 border-2 rounded-lg border-gray-300' 
          onKeyUp={(e) => handlePass(e.target.value)}
        />
        inp
        <button onClick={() => login()} className='bg-yellow-300 w-8/12 h-10 mx-auto color-white border-none rounded-lg'>Login</button>
      </div>
    </div>
  )
}

export default Login;