import React from 'react'
import Button from './Button'

// function App(){
//     return(
//         <div>
//             <h1 style={{textAlign: "center"}}>Hello world</h1>
//             <button className="button">Heyy</button>
//         </div>
//     );
// }

const App= () =>{
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Hello world</h1>
            <Button title="App store" />
            <Button title="Play store" />
            <Button />
            
            {/* <button className="button">App Store</button>
            <button className="button">Play Store</button> */}
        </div>
    );
}

export default App;