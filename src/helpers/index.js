 const days =[
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
 const Months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Septembre",
  "Octobre",
  "November",
  "December",
];

export const getDate = (dt,withMonth=true)=>{
      const  newDate = new Date(dt * 1000);
    return `${days[newDate.getDay()]}, ${newDate.getDate()} ${withMonth ? Months[newDate.getMonth()] : ""}`;
}

export const getTime = (time)=>{
const newTime = new Date(time * 1000);
return `${newTime.getHours()<10 ? `0${newTime.getHours()}`: newTime.getHours()}:0${newTime.getSeconds()}`
}

export const getIcon= (iconTitle)=>{
  let imgSrc = `src/assets/icons/${iconTitle}.svg`;
  
   /*  switch(iconTitle){
        case "scattered clouds" :
          imgSrc =  '../assets/icons/cloudy.svg';
            break;
        case "clear sky" :
          imgSrc =  '../assets/icons/sunny.svg';
            break;
        case "broken clouds" :
          imgSrc =  '../assets/icons/sunny.svg';
            break;
        case "shower rain" :
          imgSrc =  '../assets/icons/sunny.svg';
            break;
        case "rain" :
          imgSrc =  '../assets/icons/sunny.svg';
            break;
        case "	thunderstorm" :
          imgSrc =  '../assets/icons/sunny.svg';
            break;
        case "snow" :
          imgSrc =  '../assets/icons/sunny.svg';
            break;
        case "mist" :
          imgSrc =  '../assets/icons/sunny.svg';
            break;
        default:
        imgSrc ='../assets/icons/cloudy.svg';

    } */
    return imgSrc;
}