# React

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




**NOTE** : Screenshots taken from this [Pluralsight course](https://app.pluralsight.com/player?name=a54f8f9e-b7f2-46e4-a5cd-aec10587ccf1&clip=0&course=react-big-picture&author=cory-house).



