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
`<script type='text/javascript' src='./script.js'></script>`

### Start integrating Daily 
This part is a couple of housekeeping steps:
1. Register at Daily.co
    This might seem redundant if you're looking into customizing features, but this part is important because in order to customize and add features, you'll need what is called a `[Daily room URL]`(https://help.daily.co/en/articles/4202139-creating-and-viewing-rooms) because you'll be replacing the default code `https://your-team.daily.co/hello` with your own room URL.

2.  Have the docs for Daily JS handy
    We're going to be referencing this doc a lot: https://docs.daily.co/reference/daily-js

OK to the integrations!

#### Connect Daily JS library
Like the previous JS file, we're going to include daily-js in the HTML's <head>

Add the following line of code:
`<script src="https://unpkg.com/@daily-co/daily-js"></script>` 

With that library, we can start creating and coding our video frame and the hand feature!

#### Add my elements: Frame
If you've checked Daily's docs, there's a lot there. And you're probably come across the embed Daily Prebuilt code (https://docs.daily.co/prebuilt)

`<html>
  <script crossorigin src="https://unpkg.com/@daily-co/daily-js"></script>
  <body>
    <script>
      callFrame = window.DailyIframe.createFrame();
      callFrame.join({ url: 'https://your-team.daily.co/hello' });
    </script>
  </body>
</html>
`

There's different ways to do this but we'll go with the simplest at the moment which is including the <script> callframe</script> code into our `<body>` in the HTML.

You can even test it out! Double click your `index.html` and it'll open up in your web browser and you'll be able to see your own personal video room.

### More Readings
