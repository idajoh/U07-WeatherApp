//import React from 'react'
import { FaThermometerEmpty } from "react-icons/fa";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";



const TempAndDetails = () => {
  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">  
        <p> Rain </p>
        </div>

        <div className="flex flex-row items-center justify-between py-3">
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="Weather sun Icon" />
        </div>

    </div>
  )
}

export default TempAndDetails
