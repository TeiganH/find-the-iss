# where-is-iss
Where is the ISS right now? Find out where above the earth it is at any given moment!

### Link: https://find-the-iss.herokuapp.com/

![Imgur](https://i.imgur.com/P602IGO.png)
![Imgur](https://i.imgur.com/oqQ8BEJ.png)


# Project Overview

## Project Description
This app uses API data from two sources to capture the latitude and longitude cooridinates of the International Space Station as well as other details. 

## Wireframes

[Imgur](https://i.imgur.com/0yy58Zt.jpg)
A simple wireframe showing ideas for components, state, props, etc.

### MVP/PostMVP 

 
#### MVP 
- Find and use external api 
- Render data on page 
- Allow user to visually see where above the earth the ISS is

#### PostMVP 
- Animated CSS logo
- ISS telemetry data live update every two seconds in side bar

#### Future MVP
- Fully reactive logo and components

## React Component Hierarchy
- Parent component: App.js
- Child components:  Footer.js, Map.js, Nav.js, Article.js
- Grandchild components: About.js, Home.js


Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | Stateful, creates state for position of ISS marker on map and iss telemetry updates in sidebar | 
| Aside | Not a component, but Sidebar renders css animation, Nav, button that activates an api to move map marker | 
| Section | Not a comopnent, but renders Map.js component |
| Footer | Renders Footer component |
| About | Stateless, renders links to resources used |
| Article | Uses props to render sidebar telemetry update every 2 seconds |
| Footer | Stateless, renders links to ISS participating space agencies svg's and links |
| Home | Stateless, allows user to return to "Home page" |
| Map | Imports Leaflet map and renders map and marker. Uses props. |
| Nav | Stateless, renders links to Home and About |


## Helper Functions

| Function | Description | 
| --- | :---: |  
| setInterval | This will keep the api in the sidebar from breaking due to too many api calls | 
| position | Keeps track of the position of the ISS coordinates to feed to the marker |
| isstelemetry | Updates every two seconds via setInterval with ISS telemetry data
| map | Lists out each item in the isstelemetry |
| marker | Overrides default marker icon provided by react-leaflet |

## Additional Libraries
 React-Leaflet: To create map and marker functions

## Code Snippet
To show the constant movement of the ISS I wanted to list telemetry data that could be seen on the main app page. To render it in such a way that it didn't break the api, I had to set an interval for every two seconds in an componentDidMount function.  

```
componentDidMount(){
    setInterval(this.issInfo, 2000)
  }
```

## Issues and Resolutions
 As above, the telemetry data when rendered directly updated so quickly that it broke. To keep that happening, I set an interval for an update every two seconds in a componentDidMount() that I then passed into the Article component.

