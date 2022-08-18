/* import React, { useState, useEffect } from 'react'
import "./CouchCard.css"
import axios from 'axios'






export default function CouchCard() {
    const [couches, setCouches] = useState([]);
    const [users, setUsers] = useState([])

    
    const getAllCouches = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/couch`);
        console.log(response);
        setCouches(response.data);
      };
      useEffect(() => {
        getAllCouches();
      }, []);

  return (
    <div className='body'>
        {couches.map((couch) => {
          console.log(couch);
        return (
            <ul class="cards">
                <li>
                    <a href="" class="card">
                        <img  src={couch.image} class="card__image" />
                        <div class="card__overlay">
                        <div class="card__header">
                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg> 

                            
                            <div class="card__header-text">
                                <h3 class="card__title">{couch.title}</h3>            
                                <span class="card__status"> "Text"</span>
                            </div>
                        </div>
                        
                            <p class="card__description">{couch.location.country}</p>
                            <p class="card__description">{couch.location.city}</p>
                        </div>
                    </a>      
                </li>
            </ul>  
        );
        })}  
        </div>
  )
}
 */


{/* <li>
      <a href="" class="card">
        <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
        <div class="card__overlay">        
          <div class="card__header">
            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
            <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
            <div class="card__header-text">
              <h3 class="card__title">kim Cattrall</h3>
              <span class="card__status">3 hours ago</span>
            </div>
          </div>
          <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        </div>
      </a>
    </li>
    <li>
      <a href="" class="card">
        <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
        <div class="card__overlay">
          <div class="card__header">
            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
            <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
            <div class="card__header-text">
              <h3 class="card__title">Jessica Parker</h3>
              <span class="card__tagline">Lorem ipsum dolor sit amet consectetur</span>            
              <span class="card__status">1 hour ago</span>
            </div>
          </div>
          <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        </div>
      </a>
    </li>
    <li>
      <a href="" class="card">
        <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
        <div class="card__overlay">
          <div class="card__header">
            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
            <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
            <div class="card__header-text">
              <h3 class="card__title">kim Cattrall</h3>
              <span class="card__status">3 hours ago</span>
            </div>          
          </div>
          <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        </div>
      </a>
    </li>     */}