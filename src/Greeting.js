import GuestGreeting from './GustGreeting';
import UserGreeting from './UserGreeting';

function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

export default Greeting;
