import { useState } from "react";

import {genTicket, sum} from "./helper";
import Ticket from "./Ticket";



export default function Lottery({n ,winCondition }){
    let [ticket,setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket  );

    let buyTicket = () => { 
        setTicket(genTicket(n))
  };

    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <button onClick={buyTicket}>Buy Ticket</button>
            <h3>{isWinning && "Congrates! you won."}</h3>  {/* means if its  true then this statement is print  */}
        </div>
    );
}  