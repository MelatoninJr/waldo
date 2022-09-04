import './game.css';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import waldo from './waldo.jpg'
import mario from './mario.png'
import fox from './fox.png'
import star from './star.png'
import { initializeApp } from "firebase/app";
import { collection, getDocs, addDoc, Timestamp, updateDoc, getFirestore, doc } from "firebase/firestore"
import Stopwatch from './stopwatch'

const firebaseConfig = {
    apiKey: "AIzaSyAgNvtfRfpoYEiLtDgwy5zsGjhJyWBe_Zo",
    authDomain: "waldo-d3ec0.firebaseapp.com",
    projectId: "waldo-d3ec0",
    storageBucket: "waldo-d3ec0.appspot.com",
    messagingSenderId: "914214078248",
    appId: "1:914214078248:web:2652732eff8af53be0721d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore()
  const storageref = collection(db, 'coordinates')




const Game = (props) => {

    const [hoverarray, SetHoverArray] = useState([1])
    const [imagearray, SetImageArray] = useState([])
    const [storedarray, setStoredArray] = useState([])
    const [counter, setCounter] = useState(0)
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(true);
    const inputRef = useRef(null)
    const marioRef = useRef(null)
    const imageboxRef = useRef(null)
    const mariostatus = useRef(null)
    const starstatus = useRef(null)
    const foxstatus = useRef(null)




//OnClick of image get bounds for image and calculate (x,y) where clicked

    const placeCharacters = ( event ) => {
        let bounds = event.target.getBoundingClientRect(); 
        let x = event.clientX - bounds.left;
        let y = event.clientY - bounds.top;
   
    
        const storageref = doc(db, 'coordinates', 'click')
        updateDoc(storageref, {
            current: [x, y]
        })
        .then(() => {
            console.log('sending...')
        })

        SetImageArray([1])
        setTimeout(() => {
            if(hoverarray[0] == 1) {
                imageboxRef.current.style.opacity = '100%'
                console.log(imageboxRef.current)
                imageboxRef.current.style.left = x + 'px'
                imageboxRef.current.style.top = y + 'px'
            }
        }, 200)        
      }





//compareValues is ran on character guess selection
//It retrieves the respective firebase info and compares
//the selected spot to stored character coords

    const compareValues = (name) => {
        const storageref = collection(db, 'coordinates')
        let characterPositions = []

        getDocs(storageref)
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                characterPositions.push({ ...doc.data(), id: doc.id })
            })
            console.log(characterPositions[0][name])
            if(name === 'mario') {
                if(((characterPositions[1].current[1]) >= (characterPositions[0][name][1] - 50) && (characterPositions[1].current[1]) <= (characterPositions[0][name][1] + 50) && 
                    (characterPositions[1].current[1]) >= (characterPositions[0][name][1] - 50) && (characterPositions[1].current[1]) <= (characterPositions[0][name][1] + 50)

                )) 
                {
                    let newcount = counter + 1
                    setCounter(newcount)
                    console.log('You found Mario!')
                    mariostatus.current.style.opacity = '30%'
                } 
            }
            if(name === 'fox') {
                if(((characterPositions[1].current[1]) >= (characterPositions[0][name][1] - 50) && (characterPositions[1].current[1]) <= (characterPositions[0][name][1] + 50) && 
                    (characterPositions[1].current[1]) >= (characterPositions[0][name][1] - 50) && (characterPositions[1].current[1]) <= (characterPositions[0][name][1] + 50)
                    
                )) 
                {
                    let newcount = counter + 1
                    setCounter(newcount)
                    console.log('You found Fox!')
                    foxstatus.current.style.opacity = '30%'
                } 

            }

            if(name === 'star') {
                if(((characterPositions[1].current[1]) >= (characterPositions[0][name][1] - 50) && (characterPositions[1].current[1]) <= (characterPositions[0][name][1] + 50) && 
                    (characterPositions[1].current[1]) >= (characterPositions[0][name][1] - 50) && (characterPositions[1].current[1]) <= (characterPositions[0][name][1] + 50)
                    
                )) 
                {
                    let newcount = counter + 1
                    setCounter(newcount)
                    console.log('You found Star!')
                    starstatus.current.style.opacity = '30%'
                } 

            }

        })

        SetImageArray([])
        if(counter >= 2) {
            setRunning(false)
            alert('You won!')
        }

    }





//Boxfollow is used to display a different cursor radius that follows you around
      const boxfollow = (event) => {
        const boxselector = marioRef.current
        let bounds = event.target.getBoundingClientRect();
        var x = event.clientX - bounds.left;
        var y = event.clientY - bounds.top;
        boxselector.style.left = x + 'px'
        boxselector.style.top = y + 'px'
      }

      




//Stores initial character coordinates based on screensize
      useEffect(() => {
        setTimeout(() => {
            const initialselect = inputRef.current
            let boundstwo = initialselect.getBoundingClientRect();
            //These needed to change
            let storedwidthx = 1440
            let storedheighty = 3120
          
            let storedstarx = 1112
            let storedstary = 1747
          
            let storedfoxx = 172
            let storedfoxy = 1338
          
            //These can stay the same. Above needs to change.
            let storedmariox = 970
            let storedmarioy= 1869
          
            let xwindow = boundstwo.width
            let ywindow = boundstwo.height
          
            let newMarioX = (storedmariox * xwindow) / storedwidthx
            let newMarioY = (storedmarioy * ywindow) / storedheighty
    
            let newStarX = (storedstarx * xwindow) / storedwidthx
            let newStarY = (storedstary * ywindow) / storedheighty
    
            let newFoxX = (storedfoxx * xwindow) / storedwidthx
            let newFoxY = (storedfoxy * ywindow) / storedheighty
    
            console.log(xwindow, ywindow)
    
            
    
            const storageref = doc(db, 'coordinates', 'E9F8lXBRRiHAKxbVS2OT')
            updateDoc(storageref, {
                mario: [newMarioX, newMarioY],
                star: [newStarX, newStarY],
                fox: [newFoxX, newFoxY]
            })
            .then(() => {
                console.log('sending...')
            })

        }, 1000)
      }, []);


      










    return (
        <div className="App" >
            <div className='container' >
                <div className='mini-container' >
                  <div className='header'>
                    <div className='status-container'>
                        <img src={mario} className='image-hold-two' ref={mariostatus}></img>
                        <img src={star} className='image-hold-two' ref={starstatus}></img>
                        <img src={fox} className='image-hold-two' ref={foxstatus}></img>
                    </div>
                    <Stopwatch className='stopwatch' time={time} setTime={setTime} running={running} setRunning={setRunning} />
                  </div>
                  <img src={waldo} onClick={placeCharacters} onMouseMove={boxfollow} className='waldo-image' ref={inputRef} ></img>
                  {hoverarray.map((value, index) => {

                    return(
                        <div className='mario' key={index}  ref={marioRef} ></div>
                    )
                  })}
                  {imagearray.map((value, index) => {
                    return(
                       <div className='image-holder' key={index} ref={imageboxRef}>
                        <img src={mario} className='image-hold' data='mario-image' onClick={() => compareValues('mario')} ></img>
                        <img src={star} className='image-hold' onClick={() => compareValues('star')}></img>
                        <img src={fox} className='image-hold' onClick={() => compareValues('fox')}></img>
    
                      </div>
                    )
                  })}
 
                  
            

                </div>
            </div>
        </div>
      );


}



export default Game;























