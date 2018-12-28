# React
[Check out the project screenshots!](#project-screenshots)

## Why use React ?
* flexibility
* community support
* corporate commitment(Facebook has employed full time staff)
* testability
* separation of concerns
  
Frameworks like **Vue, Angular, Ember** are *template centric*. They tend to make HTML more powerful by adding Javascript like HTML syntax in them. While **React** is *Javascript centric*. It increases the power of JS by allowing you to create HTML elements with the help of JS.

 Now if you are worried about ***Separation of concerns*** : Why is HTML, JS and CSS not in separate files? This is because React implements the philosophy of separation of concerns in a totally different way - by allowing you to create different elements in different files and putting HTML, CSS and JS all in the same file. Well, you have the option to put CSS in a different file as well. This makes it easier to break your webpage into small reusable components which can be added together like a set of russian dolls to form a larger component and become a part of the webpage. 

 A side effect of this method is that it results in the creation of large number of JS modules which needs to be all included in the webage. Here, **webpack** comes to rescue by bundling all the different JS modules into one big JS file which you can include in the webpage. Or you can even split the file into smaller chunks. 

 ### Ways to convert HTML to JSX
 1. use ctrl+F (Find and replace)
 2. use a html to jsx online compiler
 3. use htmltojsx npm package

### Old vs New React
![Screenshot from a PluralSight Course](/screenshots/old_new_react.png)

**ES class vs React Class**
![Screenshot from a PluralSight Course](/screenshots/react_class.png)


## Why avoid mutating the state object in React ?
In javascript, objects and arrays are passed by reference. This means
```javascript
let x = [1,2,3];
let y = x;
/* Here y and x both point to the same  memory location */
y.push(4);
console.log(x); // outputs [1,2,3,4]
```

[An article on immutability.](https://medium.com/pro-react/a-brief-talk-about-immutability-and-react-s-helpers-70919ab8ae7c)

[PluralSight course on immutabilty libraries.](https://app.pluralsight.com/player?course=functional-javascript-libraries-playbook)


**NOTE** : Screenshots taken from this [Pluralsight course](https://app.pluralsight.com/player?name=a54f8f9e-b7f2-46e4-a5cd-aec10587ccf1&clip=0&course=react-big-picture&author=cory-house).


## Project Screenshots

* ### Play Nine Game
![Screenshot of the play nine game in action](/screenshots/play_nine.png)
<hr />

* ### Amazon Layout clone
**Items page**

![Screenshot](/screenshots/amazon_clone.png)

**Cart Page**

![Screenshot](/screenshots/amazon_cart.png)
<hr />


* ### TweetBox
![Screenshot](/screenshots/tweet.png)
<hr />

* ### Youtube layout Clone
![Screenshot](/screenshots/youtube_clone.png)
<hr />

* ### BookList using Redux
![screenshot](/screenshots/booklist_redux.png)


A few screenshots of the projects made using ReactJS.

<hr />

## React Boilerplates

* [react-slingshot](https://github.com/coryhouse/react-slingshot) ![stars badge](http://githubbadges.com/star.svg?user=coryhouse&repo=react-slingshot) : 
    React + Redux starter kit / boilerplate with Babel, hot reloading, testing, linting and a working example app built in. 

* [create-react-app](https://github.com/facebook/create-react-app) ![stars badge](http://githubbadges.com/star.svg?user=facebook&repo=create-react-app) : Set up a modern web app by running one command. https://facebook.github.io/create-react-app

* [react-bolierplate](https://github.com/react-boilerplate/react-boilerplate) ![stars badge](http://githubbadges.com/star.svg?user=react-boilerplate&repo=react-boilerplate) : A highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices. https://www.reactboilerplate.com

<hr />
2017-2018 @kryptokinght




