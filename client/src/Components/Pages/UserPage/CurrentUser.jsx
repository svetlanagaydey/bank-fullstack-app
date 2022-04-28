import './userPage.css'

const CurrentUser = ({currentUser}) => {

    return (
    <div className="client">
    <span className="client-icon"></span>
    <div className="client-block">
      <p className="current-passport"><span className="formSubtitles">Passport: </span>{currentUser.passport}</p>
      <p className="current-name"><span className="formSubtitles">Name: </span>{currentUser.firstName} {currentUser.lastName}</p>
      <p className="current-credit"><span className="formSubtitles">Credit: </span>{currentUser.credit}</p>
      <p className="current-cash"><span className="formSubtitles">Cash: </span>{currentUser.cash}</p>
      <p className="current-birthDay"><span className="formSubtitles">Birth: </span>{currentUser.birthDay}</p>
    </div>
  </div>
    )
}

export default CurrentUser;