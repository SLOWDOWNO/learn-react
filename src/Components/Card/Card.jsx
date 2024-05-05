import profilePic from '../../assets/profile.jpg';

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Alex Shi</h2>
      <p className="card-text">I build application with React and Golang</p>
    </div>
  );
}

export default Card;