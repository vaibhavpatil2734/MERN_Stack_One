import React from 'react'
import { useState } from 'react'

export default function SearchTool() {
  
  const [count, setcount] = useState(0)
  const [button, setbutton] = useState([])  
  const [tag1, settag1] = useState("")

  const handleClick=(tagname)=>{
   
    if(count === 0){
      const newbutton = {
        tag:tagname,
        id:tagname
      }
      setbutton(oldbutton =>[...oldbutton,newbutton])
      settag1(newbutton.tag)
    }
    setcount(1)
  }

  
//########################################## Main Change #########################################################

  

  const [mainobject, setmainobject] = useState()
  const [counturl, setcounturl] = useState(0)


  const handlechange=(event)=>{
    setmainobject(event.target.value)
  }

  const url={
    book:"intitle:'"+mainobject+"' ext:pdf",
    movies:"intitle:'index of' intext:'"+mainobject+"' *.mp4",
    Projects:"intitle:'Index of' intext:"+mainobject+".zip *.zip"
  }
  
  const oncreate=()=>{
    if(mainobject !== ""){
      if(count !== 0){
        if(counturl === 0){
          if("Books"=== tag1 ){
            setmainobject(url.book)
          }
          if("Movies"=== tag1){
            setmainobject(url.movies)
          }
          if("Projects"=== tag1){
            setmainobject(url.Projects)
          }
          setcounturl(1)
        }
        
      }else{
        alert("Select tag")
      }
    }else{
      alert("Ener Main object in text field, like if you selected book tag then book name.")
    }
  }

  const onrefresh =()=>{
    if(true){
      setbutton([])
      setmainobject("")
      settag1("")
      setcounturl(0)
      setcount(0)
    }
  }


  const handleCopy = () => {
    navigator.clipboard.writeText(mainobject)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((error) => {
        console.error('Unable to copy text: ', error);
      });
  };

  return (
    <div>
        <div class="transparent-card text-center opacity-50" style={{position:'absolute' , top:'30%' , left:'30%' }}>
        <div class="card-header text-light">
          <h4>Create Your Smart Search Url</h4>
        </div>
        <div class="card-body bg-warning">
            <div class="input-group">
              <input type="text" class="form-control " placeholder="Main Object Name  0_o"
                aria-label="Recipient's username with two button addons" value={mainobject} onChange={handlechange}/>
              <button class="btn btn-outline-light ml-1 " type="button" onClick={()=>{oncreate(button)}}><b>Create</b></button>
              <button class="btn btn-outline-light" type="button" onClick={handleCopy}><b>Copy</b></button>
              <button class="btn btn-outline-light" type="button" onClick={()=>{onrefresh()}}><b><i class="fa fa-refresh" aria-hidden="true"></i></b></button>
            </div>
        </div>
        <div class="card-body">
            <div class="input-group"> 
              <button class="btn btn-outline-light disabled" type="button"><b>Selected Tag : </b></button>

              {button.map(button =>(
                <button class="btn btn-outline-light" type="button" onClick={()=>{onrefresh()}}><b>{button.tag} <i class='fa fa-close red-color'></i></b></button>
              ))}
            </div>
        </div>
        <div class="card-body card-header">
            <div class="input-group "> 
            <button class="btn btn-outline-light disabled " type="button"><b>Main Tags : </b></button>
              <button class="btn btn-outline-light" type="button"  onClick={()=>{handleClick("Books")}}><b>Books</b></button>
              <button class="btn btn-outline-light" type="button" onClick={()=>{handleClick("Movies")}}><b>Movies</b></button>
              <button class="btn btn-outline-light" type="button"  onClick={()=>{handleClick("Mod APK")}}><b>Mod APK</b></button>
              <button class="btn btn-outline-light" type="button"  onClick={()=>{handleClick("Games")}}><b>Games</b></button>
              
              <button class="btn btn-outline-light" type="button"  onClick={()=>{handleClick("Songs")}}><b>Songs</b></button>
              <button class="btn btn-outline-light" type="button"  onClick={()=>{handleClick("Research Papers")}}><b>Research Papers</b></button>
              <button class="btn btn-outline-light" type="button"  onClick={()=>{handleClick("Projects")}}><b>Projects</b></button>
              
            </div>
        </div>
      </div>
    </div>
  )
}

