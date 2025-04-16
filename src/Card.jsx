import profilePicture from "./assets/pfp.png";

function Card() {
  return (
    <div className="card">
      <img alt="profile picture of nocdn" src={profilePicture}></img>
      <h2>nocdn</h2>
      <p>Computer Science student at University of York</p>
    </div>
  );
}

export default Card;
