# Neighborhood-Map
---

## Project Purpose:
This app provides a listing of Delis in Brooklyn, New York. The project was built for the Udacity Nanodegree Program. This was written in React.

The app calls Google Maps API and Yelp API. Both the map and delis from Yelp is loaded on initialization. User may select the marker on the map or select the deli on the list for its location and phone number. There's also a link to the Yelp site for additional information.

## How to Run
---
### Requirements
* Node.js v8.9.1 or higher

### **Development Mode**
```
git clone https://github.com/randcode-generator/Neighborhood-Map.git
npm install
```
Once all of the dependencies have been installed you can launch the app with
```
npm start
```

The app is now running locally on port 3000. Nagivate to [http://localhost:3000/](http://localhost:3000/) if a new browser didn't open up.


### **Production Mode**
To build the app, run the following
```
npm run build
```
Your app files for production will be at the `build` folder

### **Run your app in production Mode**
Install a server
```
npm install -g serve
```
Run the server
```
serve -s build
```
In this case the site will be hosted at [http://localhost:5000](http://localhost:5000)

## How to Use the App
* Click on either the business name or marker on the map for additional details about the deli
* You may also filter the list of delis

### Resources and Documentation:
* [Create-react-app Documentation](https://github.com/facebookincubator/create-react-app)
* [stackoverflow: How to load the Google Maps API script in my React app]( https://stackoverflow.com/questions/41709765/how-to-load-the-google-maps-api-script-in-my-react-app-only-when-it-is-require)
* [Create Lists](https://codepen.io/secondfret/pen/mIBqf)
* [React Filter List](https://codepen.io/pjmtokyo/pen/ZGVjVV)
* [React-script-loader](https://www.npmjs.com/package/react-async-script-loader)
* [Yelp Developers](https://www.yelp.com/developers)
* [Udacity Responsive Web Design Fundamentals Course > Pattern - Off Canvas lesson](https://classroom.udacity.com/courses/ud893/lessons/3561069759/concepts/35307193050923)
