# HTML FILE
## Add UI Elements
There are a couple of elements needed for this. We'll be building out our User Interface elements in our HTML file first. And then we connect them to JS and CSS so they all communicate with each other.

We'll need:
- [ ] Daily.co call frame: This is for the video call
- [ ] Hand Button: This is the feature we're are implementing
- [ ] Participants: We'll need to know who is who when people start toggling their hands

### Add UI element: Daily.co Frame
There are a couple of ways we can add a frame (i.e. callObject, createframe(), etc), but we're going to embed the code Daily has so kindly shared for a Daily prebuilt video call component. We're already referred to the docs here: https://docs.daily.co/prebuilt#step-by-step-guide-embed-daily-prebuilt

The Daily JS library script is already added, but we're going to add the code snippet for the video call into the `<body>` of our HTML page.

```
  <body>
    <script>
      callFrame = window.DailyIframe.createFrame();
      callFrame.join({ url: 'https://your-team.daily.co/hello' });
    </script>
  </body>
```

My HTML is starting to look like this. I've replaced `https://your-team.daily.co/hello` in the code snippet with my own room URL.

<img src="./Assets/screenshot-03-dailyvideo.png">


At this point, you can start testing it out! Double click your `index.html` and it'll open up in your web browser and you'll be able to see your own personal video room. Don't worry about how it looks. That's where CSS and JS come in.

### Add UI element: Hand Button
You can use a button or even just a `<div>`. The focus is creating the 
