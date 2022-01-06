import "./Notifications.css"

function Notifications({ notifications }) {
    return (
      notifications.length > 0 && (
        <p className="notification">You have {notifications.length} notification(s) today!</p>
      )
    );
  }

  export default Notifications;