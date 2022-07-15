import TablePlayersRow from "./TablePlayersRow";

const TablePlayers = () => {
    const sx = {
        padding:"10px",
        border:"1px solid #0005",
        borderRadius:"5px"
    }

    return ( 
        <table>
            <thead>
                <tr >
                    <th style={sx}>Jugadores</th>
                    <th style={sx}>Edad</th>
                    <th style={sx}>Goles</th>
                </tr>
            </thead>
            <tbody>
                <TablePlayersRow/> 
                <TablePlayersRow/> 
                <TablePlayersRow/> 
                <TablePlayersRow/> 
                <TablePlayersRow/> 
            </tbody>
        </table>
     );
}
 
export default TablePlayers;