import axios from "axios";



export default ()=>{
  if(import.meta.env.PROD){
   return  axios.create({
baseURL:"/api/",
})  
  }else{
    return  axios.create({
baseURL:"http://api.openweathermap.org/",
})  
  }

};