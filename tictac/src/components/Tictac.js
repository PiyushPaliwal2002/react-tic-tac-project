import Restart from "./Restart";
const Tictac = ({ handleClick, player, mark, win, draw, restarter }) => {
  const handleSquareClick = (num) => (event) => {
    handleClick(num, event);
  };
  return win ? (
    <div>
      <h1>{player == "x" ? "O" : "X"} is WINNER</h1>
      <Restart restarter={restarter} />
    </div>
  ) : draw ? (
    <div>
      <h1>GAME IS DRAW</h1>
      <Restart restarter={restarter} />
    </div>
  ) : (
    <div className="tictac">
      <row className="squares">
        <div className="sq" onClick={handleSquareClick(0)}>
          {mark[0]}
        </div>
        <div className="sq" onClick={handleSquareClick(1)}>
          {mark[1]}
        </div>
        <div className="sq" onClick={handleSquareClick(2)}>
          {mark[2]}
        </div>
      </row>
      <row className="squares">
        <div className="sq" onClick={handleSquareClick(3)}>
          {mark[3]}
        </div>
        <div className="sq" onClick={handleSquareClick(4)}>
          {mark[4]}
        </div>
        <div className="sq" onClick={handleSquareClick(5)}>
          {mark[5]}
        </div>
      </row>
      <row className="squares">
        <div className="sq" onClick={handleSquareClick(6)}>
          {mark[6]}
        </div>
        <div className="sq" onClick={handleSquareClick(7)}>
          {mark[7]}
        </div>
        <div className="sq" onClick={handleSquareClick(8)}>
          {mark[8]}
        </div>
      </row>
    </div>
  );
};

export default Tictac;
