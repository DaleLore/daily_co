// Local_data stores the session_id and hand state of the local user.
      let local_data = {
          session_id: "",
          handState: false,
      }

async function run() {
  let room = { url: "https://dalelore.daily.co/Raise-your-hand" };

    callFrame = window.DailyIframe.createFrame(document.getElementById("iframe"), {
    showLeaveButton: true
  });

  await callFrame.join({ url: room.url });
  
}

function raiseYourHand() {
    console.log('Hello');
    var x = document.getElementById("toggleHand");
    if (x.innerHTML === "Need to ask a question?") {
      x.innerHTML = "Your Hand is Raised!";
    } else {
      x.innerHTML = "Need to ask a question?";
    }
    var y = document.getElementById("participant_list");
    let username = callFrame.participants().local.user_name
    
    if (x.innerHTML === "Your Hand is Raised!") {
        y.innerHTML = username;
      } else {
        y.innerHTML = " ";
      }
  }

// JS AddEventListeners -> replaced with
// document.addEventListener('DOMContentLoaded', init, false);
// function init(){
//   function message () {
//     alert("Hello!");
//   }
//   var button = document.getElementById('join_call');
//   button.addEventListener("click", myFunction);

//   function myFunction() {
//     console.log("Hello World!");
//     callFrame = window.DailyIframe.createFrame({
//       showLeaveButton: true,
//       iframeStyle: {
//         position: 'relative',
//         top: 50,
//         right: 1500,
//         width: '90%',
//         height: '100%',
//       },
//     });
//     callFrame.join({ url: 'https://dalelore.daily.co/Raise-your-hand' });
//   }
// };