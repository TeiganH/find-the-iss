# find-the-iss
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

 
#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to visually see where above the earth the ISS is

#### PostMVP EXAMPLE
- Animated CSS logo
- ISS telemetry data live update every two seconds in side bar

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
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
