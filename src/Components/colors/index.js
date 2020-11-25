import React from 'react';
import './style.css';

const Color = () =>{


    //swithch colors
    let colorsLi  = document.querySelectorAll(".colors-list li")

    colorsLi.forEach(li =>{

        //loop on list Items
        li.addEventListener("click", (e) => {
            console.log(e.target.dataset.color)
    
            //select color on root
            document.documentElement.style.setProperty(' --main--color' , e.target.dataset.color);
        })
    });
    return(
        <div className="option-box">
          <h4>Colors</h4>
          <ul className="colors-list">
            <li className="active" data-color="#ff9800"></li>
            <li data-color="#e91e63"></li>
            <li data-color="#c54ac5"></li>
            <li data-color="#676776"></li> 
            <li data-color="#279cca"></li>
          </ul>
       </div>
    )
}
export default Color;