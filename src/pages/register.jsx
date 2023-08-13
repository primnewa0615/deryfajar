import React, {useState, useEffect} from 'react'

function Register() {

//buat data tampungan
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [id, setId] = useState(0)
const [name, setName] = useState("")
let temp = [];


//tangkap data dari user
const handleName = (val) => {
  setName(val.target.value)
}

const handlePassword = (val) => {
  setPassword(val.target.value)
}

const handleUsername = (val) => {
  setUsername(val.target.value)
}

const  validasi = async() => {
    let isExist = 0;
    temp = JSON.parse(temp)
    console.log("uhuy",temp)
    if(temp.length> 0 ){
      await temp.forEach(t => {
       if (t.username == username && t.password == password) {
        isExist += 1;
       }
      })
    }

    console.log(isExist)
    if (isExist > 0){
      //kalo sudah kasih alert
      alert("data udah ada kisanak!")
    }else{
      //kalo belum masukan data
      temp.push(
        {
          username, password, name
        }
      )

      localStorage.setItem('users', JSON.stringify(temp));
    }
    //ganti data yang di localstorage dengan data baru
   
  
  
}

const saveUser = () => {
  //cek apakah sudah ada penyimpanan users
  if (localStorage.getItem('users') != null) {
    //jika ada maka ambil data user
    temp = localStorage.getItem('users');
    //cek apakah data user sudah pernah diinput
    validasi()
  }else{
      //jika tidak ada maka langsung ke line 11.
    temp.push(
        {
          username, password, name
        }
      )

    //ganti data yang di localstorage dengan data baru
    localStorage.removeItem('users');
    localStorage.setItem('users', JSON.stringify(temp));
  }
}

  return (
    <div>
        <label htmlFor="">username</label>
        <input type="text" onChange={(e)=>handleUsername(e)}/>
        <br />
        <label htmlFor="">password</label>
        <input type="text" onChange={(e)=>handlePassword(e)}/>
        <br />
        <label htmlFor="">name</label>
        <input type="text" onChange={(e)=>handleName(e)}/>

        <button onClick={()=>saveUser()}>save</button>
    </div>
  )
}

export default Register