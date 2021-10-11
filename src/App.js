import film_logo from './img/Green_mile.jpeg'
import My_photo from './img/Photo.jpeg'
import './App.css';
import React, { useState, useEffect} from 'react';


function Block_film(props){
    return <>
        <div className="block_film">
            <img className='film_img' src={film_logo} alt=""/>
            <h2>{props.name}</h2>
            <p>Author: {props.director}</p>
            <p>Year: {props.year}</p>
            <p>Distributed by: {props.distributed}</p>
        </div>
    </>
}
function About_me(props){
    const skills = props.skills.split(' ');
    const listItems = skills.map((skill) =>
        <li key={skill.toString()}>
            {skill}
        </li>);
    console.log(skills)
    return <>
        <div className='block_About'>
            <img className='My_photo' src={My_photo} alt=""/>
            <div className="info">
                <h2>{props.name}</h2>
                <h3>Phone number: {props.number}</h3>
                <h3>Email: {props.email}</h3>
                <h2>City: {props.city}</h2>
                <div className="skills">
                    <h4>Skills:</h4>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </div>
        </div>
    </>
}





function Time(){
    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
    return <>
        <div className='time'>
            {`${hours}:${minutes}:${seconds}`}
        </div>
    </>
    // const [state, setState] = useState(0);
    // console.log(state,setState);
}
function App() {

  return (
    <div className="App">
      {/*first app "Favorite film"*/}
      {/*<Block_film name='The Green Mile' director='Frank Darabont' year='1999' distributed='Warner Bros.'></Block_film>*/}
      {/*  ------------------------------*/}
      {/*  Second app "About me"*/}
      {/*<About_me name='Max Rudyk' city='Kyiv' number='+380663614961' email='maxrudik2001@gmail.com' skills='Html Css JS JQuery Bootstrap Materialize'></About_me>*/}
      {/*  --------------------------------*/}
      {/*  Third App 'Time'*/}
        <Time></Time>

    </div>
  );
}

export default App;
