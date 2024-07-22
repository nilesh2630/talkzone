import {createContext,useState,useContext, useEffect} from 'react'
import {useHistory} from "react-router-dom"
const Chatcontext=createContext()
const Chatprovider=({children})=>{
  
    const history=useHistory()
    const [user,setUser]=useState(null)
    const [selectedChat, setSelectedChat]=useState(null)
    const [chats, setChats]=useState([])
    const [notification,setNotification]=useState([])
    useEffect(()=>{
      const userInfo=  JSON.parse(localStorage.getItem("userInfo"))
      setUser(userInfo)
      if(!userInfo){
        history.push('/')
      }
    },[history])
return( <Chatcontext.Provider value={{user,setUser, selectedChat,setSelectedChat, chats,setChats,notification,setNotification}}>{children}</Chatcontext.Provider>)
}

export const Chatstate=()=>{
    return useContext(Chatcontext)
}
export default Chatprovider
