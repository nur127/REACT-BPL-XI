
import { useState } from 'react'
import './App.css'
import Allplayer from './component/Allplayer/Allplayer'
import Header from './component/Header/Header'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

      const [isActive,setIsActive] = useState({
        active :true,
        status : 'available'
    })
    // Selected Player State
    const [selectedPlayer,setSelectedPlayer] = useState([]);




      // React Toastify
  const notifySuccess = (player) => {
    toast.success(`${player.playerName} Successfully Added! .`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const notifyWarning = (player) =>{
    toast.warning(`${player.playerName} is Already in Selection Menu`, {
      position: "top-center",
      autoClose: 3000,
    });
  }

    const notifyAlert = (player) =>{
    toast.warning(`${player.playerName} Deleted From Selection Menu`, {
      position: "top-center",
      autoClose: 3000,
    });
  }



    const handleSelectedPlayer=(player)=>{
      // notifySuccess(player)
      const isExist = selectedPlayer.find(p =>player.id ==p.id)
      if(isExist){
        notifyWarning(player)
      }
      else{
        notifySuccess(player)
        const newSelected = [...selectedPlayer,player]
        setSelectedPlayer(newSelected)
      }
    }

    const handleDeletedPlayer = (id) =>{
      const remSelectedPlayer = selectedPlayer.filter(p=>(p.id !=id))
      setSelectedPlayer(remSelectedPlayer)
    }



    const handleIsActive =(status)=>{
        if(status =="available"){
            setIsActive({
        active :true,
        status : 'available'
    })}
    else{
         setIsActive({
        active :false,
        status : 'seleted'
    })
        
    }


    }


  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <Allplayer handleDeletedPlayer={handleDeletedPlayer}  selectedPlayer={selectedPlayer} handleSelectedPlayer={handleSelectedPlayer} handleIsActive={handleIsActive} isActive={isActive}></Allplayer>
    <ToastContainer />
    </div>
  )
}

export default App
