import React, { useState } from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//         }
//     }
// }))


export default function CurrentRound(props) {
    const [team1Score, setTeam1Score] = useState(0)
    const [team2Score, setTeam2Score] = useState(0)

    // const handleClick = (amount, teamScore, teamCB, opposingScore, opposingCB) => {
    //     console.log('in handleclick')
    //     if(opposingScore > 0){
    //         const difference = opposingScore - amount;
    //         if(difference < 0){
    //             opposingCB(0)
    //             teamCB(- difference)
    //         } else {
    //             opposingCB(opposingScore - amount)
    //         }
    //     } else {
    //         teamCB(teamScore + amount)
    //     }

    // }

    const handleIncrement = (amount, state, setStateCB) => {
        setStateCB(state + amount)
    }

    const handleDecrement = (state, setStateCB) => {
        if(state > 0){
            setStateCB(state - 1)
        }
    }
    // const classes = useStyles()

    const handleFinishRound = () => {
        if(team1Score > team2Score){
            props.finishRound(Math.abs(team1Score - team2Score), 0)
        } else {
            props.finishRound(0, Math.abs(team2Score - team1Score))
        }
        setTeam1Score(0)
        setTeam2Score(0)
    }
    return (
        <>
            <p>Team 1 Score:{team1Score > team2Score ? Math.abs(team1Score - team2Score) : 0}</p>
            <Button variant='contained' onClick={() => handleIncrement(1, team1Score, setTeam1Score)}>Bag On board</Button>
            <Button variant='contained' onClick={() => handleIncrement(3, team1Score, setTeam1Score)}>Bag In Hole</Button>
            <Button variant='contained' onClick={() => handleDecrement(team1Score, setTeam1Score)}>Bag Off board</Button>
            {console.log('team 1 score', team1Score)}
            {/* <Button variant='contained' onClick={() => handleClick(1, team1Score, setTeam1Score, team2Score, setTeam2Score)}>Bag On Board</Button>
            <Button variant='contained' onClick={() => handleClick(3, team1Score, setTeam1Score, team2Score, setTeam2Score)}>Bag In hole</Button>
            <Button variant='contained' onClick={() => handleClick(-1, team1Score, setTeam1Score, team2Score, setTeam2Score)}>Bag Off board</Button>
            
            <br />
            <text>Team 2 Score:{team2Score}</text>
            <Button variant='contained' onClick={() => handleClick(1, team2Score, setTeam2Score, team1Score, setTeam1Score)}>Bag On Board</Button>
            <Button variant='contained' onClick={() => handleClick(3, team2Score, setTeam2Score, team1Score, setTeam1Score)}>Bag In Hole</Button>
            <Button variant='contained' onClick={() => handleClick(-1, team2Score, setTeam2Score, team1Score, setTeam1Score)}>Bag Off board</Button> */}
            {console.log('team 2 score', team2Score)}
            <p>Team 2 Score:{team2Score > team1Score ? Math.abs(team2Score - team1Score) : 0}</p>
            <Button variant='contained' onClick={() => handleIncrement(1, team2Score, setTeam2Score)}>Bag On Board</Button>
            <Button variant='contained' onClick={() => handleIncrement(3, team2Score, setTeam2Score)}>Bag In Hole</Button>
            <Button variant='contained' onClick={() => handleDecrement(team2Score, setTeam2Score)}>Bag Off board</Button>

            <Button variant='contained' onClick={handleFinishRound}>End Round</Button>
            <br />
        </>
    )
}