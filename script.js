/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const lights = document.querySelectorAll(".light");
const body = document.body;

let active = 0;

setInterval(()=>{
    changeColor();
},1000);

function changeColor(){

    if(active > 0){
        lights[active -1].classList.remove('active');
    }

    body.style.backgroundColor = getComputedStyle(lights[active]).getPropertyValue('--light-color');

    lights[active].classList.add('active');

    if(active === lights.length -1){
        setTimeout(()=>{
            lights[active].classList.remove('active');
            active = 0;
        },900);
    }else{
        active++;
    }
}