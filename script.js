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
async function run() {
  let room = { url: "https://dalelore.daily.co/Raise-your-hand" };

    callFrame = window.DailyIframe.createFrame(document.getElementById("iframe"), {
    showLeaveButton: true
  });

  // callFrame
  //   .on("joined-meeting", joinedMeeting)
  //   .on("left-meeting", leftMeeting)
  //   .on("participant-joined", participantJoined)
  //   .on("participant-left", updateParticipants)
  //   .on("app-message", messageReceived);

  // join the room
  await callFrame.join({ url: room.url });
}

// function run() {

//   console.log("Hello")

//   let room = { url: "https://popschools.daily.co/qOrbXQ3zJZC7o7aH8ycI" };
//   window.callFrame = window.DailyIframe.createFrame();
//   window.callFrame = DailyIframe.wrap(document.getElementById("call-frame"), {
//     showLeaveButton: true
//   });
// }


// participants({
//     console.log(local)
//     console.log(local.user_id
// })

// function raiseYourHand() {
//     console.log('Hello');
//     var x = document.getElementById("toggleHand");
//     if (x.innerHTML === "Need to ask a question?") {
//       x.innerHTML = "Your Hand is Raised!";
//     } else {
//       x.innerHTML = "Need to ask a question?";
//     }
//     var y = document.getElementById("participant_list");
//     if (x.innerHTML === "Your Hand is Raised!") {
//         y.innerHTML = "You";
//       } else {
//         y.innerHTML = " ";
//       }
//   }