function Notifications({ notifications }) {
    return (
      notifications.length > 0 && (
        <p>You have {notifications.length} notification(s) today!</p>
      )
    );
  }

  export default Notifications;