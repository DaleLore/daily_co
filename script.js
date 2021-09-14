function raiseYourHand() {
    console.log('Hello');
    var x = document.getElementById("toggleHand");
    if (x.innerHTML === "Need to ask a question?") {
      x.innerHTML = "Your Hand is Raised!";
    } else {
      x.innerHTML = "Need to ask a question?";
    }
  }