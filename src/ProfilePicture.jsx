function ProfilePicture() {
  const imageUrl = "./src/assets/pfp.png";

  function handleClick(e) {
    e.target.style.display = "none";
    console.log("pfp clicked");
  }

  return <img src={imageUrl} onClick={handleClick} className="w-24"></img>;
}

export default ProfilePicture;
