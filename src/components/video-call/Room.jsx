import { useParams, useNavigate } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 } from "uuid";

const Room = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  async function meetingUI(element) {
    const appId = 850468417;
    const serverSecret = "d78561619aeef07643e502534936cf01";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      v4(),
      "Yahya"
    );

    const ui = ZegoUIKitPrebuilt.create(kitToken);
    ui.joinRoom({
      container: element,
      szenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }

  function handleBackHome() {
    navigate(`/`);
  }
  return (
    <>
      <div class="card-holder">
        <div class="card bg-videoCall">
          <h2 style={{ textAlign: "center" }}>Raum {roomId}</h2>
          <div ref={meetingUI}></div>
          <button
            style={{
              marginTop: "40px",
              height: "4em",
              width: "20em",
              marginRight: "5px",
              fontSize: "0.6em",
              backgroundColor: "#5ac8fa",
              color: "",
              border: "none",
              borderRadius: " 0.25em",
            }}
            onClick={handleBackHome}>
            Zurück zu Startseite
          </button>
        </div>
      </div>
    </>
  );
};

export default Room;
