import { useState } from "react";
import { Calendar } from "./Calendar";
import { persiEvents } from "./Calendar/consT";

function App() {

  return ( 
    <div className="App">
      <Calendar startingDate={new Date()} objArrEvent ={persiEvents}></Calendar>
    </div>
  );
}

export default App; 
