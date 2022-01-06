import "./WelcomeBack.css"

function WelcomeBack(props) {
    return <p>Welcome back, <span className="username">{props.name}</span></p>
  }

  export default WelcomeBack;