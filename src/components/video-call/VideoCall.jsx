import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCall = () => {
  const [roomId, setRoomId] = useState("");
  const navigate = useNavigate();

  function handleJoin() {
    navigate(`/room/${roomId}`);
  }
  return (
    <div class="card-holder">
      <main class="card bg-videoCall">
        <h1>Video Call App</h1>
        <input
          style={{
            height: "4em",
            width: "20em",
            marginRight: "5px",
            fontSize: "0.6em",
            backgroundColor: "#5ac8fa",
            color: "",
            border: "none",
            borderRadius: " 0.25em",
          }}
          type="text"
          placeholder="Gib eine Raum Id ein"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <button style={{ background: "#ff6464 " }} onClick={handleJoin}>
          Join
        </button>
      </main>
    </div>
  );
};

export default VideoCall;
