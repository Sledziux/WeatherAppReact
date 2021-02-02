import "./Menu.scss"

import FXF from "./assets/FXF.png"


const Menu = ({setChoice}) => {

         

    return ( 

        <>
        <div className="container">
            <div className="text">
                <h1>Weather App</h1>
                <h2>by FXF Corporation</h2>
            </div>
            <img src={FXF} alt="FXF"/>
            <button onClick={() => setChoice("weather")}>Wyszukaj</button>
        </div>
             
        </>
        
     );
}
 
export default Menu;

