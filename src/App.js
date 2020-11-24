
import './App.css';
import Profile from './Profile/Profile';
import PropTypes from "prop-types";


const fullName = 'Neguez Aymen' ;
const bio = 'Civil Engineer';
const profession = 'FullStack Js Developper';
const alertName = alert('Neguez Aymen');

function App() {
  return (
    <div className="App">
      <div>
        <Profile fullName={fullName} bio={bio} profession={profession} alertName={alertName} /><img src="./me.png" alt="me" /><Profile />
      </div>

    </div>
  );
}
Profile.proTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,

};

export default App;
