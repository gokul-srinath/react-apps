import BirthdayList from "./components/BirthdayList";
import { useEffect,useState } from "react";
import api from "./api/birthday";





function App() {


  const [birthdays,setBirthdays]=useState([]);

  const getBirthday=async ()=>{
    const response = await api.get("/birthdays");
    return response.data;
  } 


  useEffect(()=>{
    
    const getB=async ()=>{
      const datas = await getBirthday();
      const data = datas.filter(e=>{
        
        const date = e.dob.split("/");
        let todayDate = new Date();
        
        return Number.parseInt(date[0])===todayDate.getDate() && Number.parseInt(date[1])===todayDate.getMonth()+1;

      })
      setBirthdays(data);
    }
    
    getB();

  },[])



  return (
    <div className="ui center aligned grid">
      
      <div className="ui compact raised segment">
        <BirthdayList birthdays={birthdays}/>
      </div>
      
    </div>
  );
}

export default App;
