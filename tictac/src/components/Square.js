const Square = ({ handleClick, player }) => {
  return (
    <div className="squares">
      <div className="sq" onClick={handleClick}>
        {player}
      </div>
      <div className="sq" onClick={handleClick}>
        {player}
      </div>
      <div className="sq" onClick={handleClick}>
        {player}
      </div>
    </div>
  );
};

export default Square;
