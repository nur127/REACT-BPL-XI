
import { useState } from 'react'
import './App.css'
import Allplayer from './component/Allplayer/Allplayer'
import Header from './component/Header/Header'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Footer from './component/Footer/Footer'
import Contract from './component/Contract/Contract'

function App() {

      const [isActive,setIsActive] = useState({
        active :true,
        status : 'available'
    })
    // Selected Player State
    const [selectedPlayer,setSelectedPlayer] = useState([]);

    // Money State
    const [money,setMoney] = useState(0)
    
    const handleSetMoney =()=>{
      setMoney(15000000)
    }

    // const handleMoneyReduction =(price)=>{
    //   if(money>price){
    //     setMoney(money - price)
    //   }
    //   else{
    //     notifyMoneyExceed();

    //   }
    // }



      // React Toastify
  const notifySuccess = (player) => {
    toast.success(`${player.playerName} Successfully Added! .`, {
      position: "top-center",
      autoClose: 3000,
    });
  };

  const notifyMoneyExceed = ()=>{
     toast.warning(`You don't Have Enough Money`, {
      position: "top-center",
      autoClose: 3000,
    });
  }

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
    const notifyMax = () =>{
    toast.warning(`Already Max Number of Players Selected`, {
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
      else if(!isExist && selectedPlayer.length<6 && money>player.price){
        notifySuccess(player)
        const newSelected = [...selectedPlayer,player]
        setSelectedPlayer(newSelected)
        setMoney(money - player.price)
      }
      else if(money < player.price){
        notifyMoneyExceed()

      }
      else{
        notifyMax()

      }
    }

    const handleDeletedPlayer = (id) =>{
      const player = selectedPlayer.find(p=>p.id==id)
      notifyAlert(player)
      const remSelectedPlayer = selectedPlayer.filter(p=>(p.id !=id))
      setSelectedPlayer(remSelectedPlayer)
      setMoney(money+player.price)
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
      <Header handleSetMoney={handleSetMoney} money = {money}></Header>
      <Allplayer handleDeletedPlayer={handleDeletedPlayer}  selectedPlayer={selectedPlayer} handleSelectedPlayer={handleSelectedPlayer} handleIsActive={handleIsActive} isActive={isActive}></Allplayer>
    <ToastContainer />
    <div className='mx-auto'>
      <Contract></Contract>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default App
