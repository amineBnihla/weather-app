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
  let imgSrc = `/assets/icons/${iconTitle}.svg`;
  
 return imgSrc;
}