import TablePlayersRow from "./TablePlayersRow";

const TablePlayers = () => {
    const sx = {
        padding:"10px"
    }

    return ( 
        <table>
            <thead>
                <tr>
                    <th style={sx}>Jugadores</th>
                    <th style={sx}>edad</th>
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