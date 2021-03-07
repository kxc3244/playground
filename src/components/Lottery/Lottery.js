import React from 'react'; 


function Lottery(){

    let memberNames =['Kevin','Kinjal','Lalit','Prakash','Venkat'];
    

    function createTeam(names, teams_count) {
        let teams = [];
        while (teams_count > 0) {
        teams.push(names.splice(0, Math.floor(names.length/teams_count)))
        teams_count--;
        }
        return teams
    }

    function randomizeArray(array) {

        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

                   
    
    let teams =createTeam(randomizeArray(memberNames),2);
    console.log(teams)
    // myShows[Math.floor(Math.random() * myShows.length)];



    return(
        <div>
            <h1>try this</h1>
            {/* {<button onClick={}>Generate Lottery</button>} */}
            <h3>Einstien</h3>
            <div>{teams[0]}</div>
            <h3>Newton</h3>
            <div>{teams[1]}</div>
            <h3>Tesla</h3>
            <div>{teams[2]}</div>
        </div>
    )
}

export default Lottery;
