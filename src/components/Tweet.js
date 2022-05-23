import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {

  const { user, timestamp, message } = props.tweet

  return (
    <div className="tweet">

      <div>
        <ProfileImage image={user.image} />
      </div>


      <div className="body">
        <div className="top">

          <User name={user} />


          <Timestamp timestamp={timestamp} />

        </div>

        <p className="message">
          <Message message={message} />
        </p>

        
          {/* Font Awesome icons */}
          <Actions />
        </div>
     

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
