# Lorena | Daily 
## Sample work: Raise your hand
This sample work includes sample code and a piece of content about implementing a `Raise your hand` feature during a video call in the form of a developer tutorial on Daily.co's blog: https://www.daily.co/blog/

### Set up your environment
You can create your own video chat interface using the Daily-js front-end library and three separate files: JavaScript, HTML, and CSS!

The Daily JavaScript library gives you several options for adding video calls to your web app. There's so many possibilities, but we'll focus on the "Raise your hand" feature. 

Let's go step by step over what you'll need and why.

#### Set up HTML
Create a basic HTML page
In the directory(folder) you're working in, create a new file `index.html`

Set up the basic HTML DOCTYPE structure (https://www.w3schools.com/html/)

And you can change the title in the head and add more information, but with that basic HTML structure, you have your html page set up!

Now continue to creating a Javascript file

#### Set up JavaScript
Create a basic JavaScript file
In the directory(folder) you're working in, create a new file `script.js`

And you're done! We'll be adding more here later because this is where all our code will go.

Now link up these two new files!


#### Connect them
From the <head> in your HTML, you'll need to connect your Javascript with a tag:
<br>
`<script type='text/javascript' src='./script.js'></script>`

### Before integrating Daily 
This part is a couple of housekeeping steps:
1. Register at Daily.co
    This might seem redundant if you're looking into customizing features, but this part is important because in order to customize and add features, you'll need what is called a `[Daily room URL]`(https://help.daily.co/en/articles/4202139-creating-and-viewing-rooms) because you'll be replacing the default code `https://your-team.daily.co/hello` with your own room URL.

2.  Have the docs for Daily JS handy
    We're going to be referencing this doc a lot: https://docs.daily.co/reference/daily-js

OK to the elements!

### Add my Elements!
There are a couple of elements needed for this. And then we connect them so they all communicate with each other.

We'll need:
(1) Daily.co call frame
    This is for the video call
(2) Hand Button
    This is the feature we're are implementing
(3) Participant List
    This is so partipicants knows who are on the call and can see your hand raised 

#### Add my elements: The Frame
If you've checked Daily's docs, there's a lot there. And you're probably come across the embed Daily Prebuilt code (https://docs.daily.co/prebuilt)

```
<html>
  <script crossorigin src="https://unpkg.com/@daily-co/daily-js"></script>
  <body>
    <script>
      callFrame = window.DailyIframe.createFrame();
      callFrame.join({ url: 'https://your-team.daily.co/hello' });
    </script>
  </body>
</html>
```

There's different ways to do this but we'll go with the simplest at the moment which is first adding `<script crossorigin src="https://unpkg.com/@daily-co/daily-js"></script>` in the HTML's `<head>` and then including the following code into our `<body>` in the HTML.

```
<script>
    callFrame = window.DailyIframe.createFrame();
    callFrame.join({ url: 'https://your-team.daily.co/hello' });
</script>
```

You can even test it out! Double click your `index.html` and it'll open up in your web browser and you'll be able to see your own personal video room. Don't worry about how it looks. That's where CSS and JS come in.

#### Add my elements: The Button
We're going to add a button that raises and lowers your hand by toggling between "Need to ask a question?" and "Your Hand is Raised!" accordingly.

For this, HTML has a button tag!
`<button></button>`

We're going to give it:
*  ID 
   `id="raise_hand"`
    It can be anything you want, as long as you remember that it's for the button
* JS onclick event
    `onclick="raiseYourHand()"`
    More information: https://www.w3schools.com/jsref/event_onclick.asp
* Text (or emojis!) for button
    You can write 'Click Me', 'Raise Hand', or even use an emoji 🤚🏼 for the button content.

That button now needs to toggle some text so we're going to create another `<div>`, give it an ID, and write the default text: "Need to ask a question>" 

It should end up like this:
```
<div class="participants">
    <button 
        id="raise_hand"
        onclick="raiseYourHand()">
                🤚🏼
    </button>
    <div id="toggleHand">Need to ask a question?</div>
</div>
``` 

If you click on it now, nothing's going to happen because we need to give it some JavaScript logic, but that'll come! Continue to participant list.

#### Add my elements: The List


### More Readings
