
import Player from './Player';

const PlayersList = ({ players = [] }) => {
  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0'
  };

  return (
    <div style={listStyle}>
      {players.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          imageURL={player.imageURL}
        />
      ))}
    </div>
  );
};

export default PlayersList;

