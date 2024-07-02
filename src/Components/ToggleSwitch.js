import React, { useState } from 'react'
import "./ToggleSwitch.css"

function ToggleSwitch() {

    const [isOn, setIsOn] = useState(false);


    const handleClick = (event) => {
        setIsOn(!isOn);
        // event.stopPropagation();
    }

    const checkIsOn = isOn ? "On" : "Off";

    return (
        <div className='toggle-switch'>

            <div className="switch" style = {{backgroundColor: isOn ? "green" : "" }}onClick={handleClick}>
                <span  className={`switch-state ${checkIsOn}`}>
                    {checkIsOn}
                </span>

            </div>



        </div>
    )
}

export default ToggleSwitch