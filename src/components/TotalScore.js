import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter'
import Paper from '@material-ui/core/Paper';

import CurrentRound from './CurrentRound'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
})

export default function TotalScore (props) {
    // const [team1Scores, setTeam1Scores] = useState([])
    const [team1Total, setTeam1Total] = useState(0)
    // const [team2Scores, setTeam2Scores] = useState([])
    const [team2Total, setTeam2Total] = useState(0)
    const [team1Name, setTeam1Name] = useState('Team One')
    const [team2Name, setTeam2Name] = useState('Team Two')
    const [roundScores, setRoundScores] = useState([])

    const classes = useStyles();

    const finishRound = (newTeam1Score, newTeam2Score) => {
        // setTeam1Scores([...team1Scores, newTeam1Score])
        setRoundScores([...roundScores, {team1 : newTeam1Score, team2 : newTeam2Score}])
        setTeam1Total(team1Total + newTeam1Score)
        // setTeam2Scores([...team2Scores, newTeam2Score])
        setTeam2Total(team2Total + newTeam2Score)
        console.log('IM IN FINISHROUND')
    }
    
    return (
        <div>
            <CurrentRound finishRound={finishRound} />
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>{team1Name}</TableCell>
                            <TableCell>{team2Name}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {roundScores.map((score, index) => 
                            <TableRow key={index}>
                                <TableCell component='th' scope='row'>Round {index}</TableCell>
                                <TableCell>{score.team1}</TableCell>
                                <TableCell>{score.team2}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>    
                    <TableFooter>
                        <TableCell>Team Totals</TableCell>
                        <TableCell>{team1Total}</TableCell>
                        <TableCell>{team2Total}</TableCell>
                    </TableFooter>
                </Table>
            </TableContainer>
            I'm here
        </div>
    )
}