import React,{useState} from 'react';

const Functionreturner = () =>{
  let time=new Date().toLocaleTimeString();
  const [ctime,update]= useState(time);
  const updateTime= () =>{
  time=new Date().toLocaleTimeString()
  update(time);
  }
  setInterval(updateTime,1000);
  return ctime;
}

export default Functionreturner;