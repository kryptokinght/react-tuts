### Getting Started

```
> git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
> cd ReduxSimpleStarter
> npm install
> npm start
```

### Steps to follow while building this site.
1. Create a diagram for all the different routes and its views.
2. Determine the components to be used in each view.
3. Determine the definition of a component.
4. Determine the Redux state for our app. In this case it will only
   contain one property 'posts' containing a list of all the posts. We  
   won't require a property like 'activePost' because it will be implicitly
   stated by the route itself( /posts/:id ).
5. Create your first action creater. In this case it is fetchPosts() which
   fetches our particular selected post from the api and sends it to reducer.
6. Create your first reducer reducer_posts for action FETCH_POSTS which redcues
   the received posts data array into object form {1:{post1}, 2:{post2}, 3:{post3}}
   using loadsh mapKeys(arrayName, '<YOUR_KEY>') function.
7. Integrating our <PostsIndex> with FETCH_POSTS action using connect in a
   shortcut way.
8. Call the fetchPosts() action creator from inside <PostsIndex> component.
9. Display the posts as list inside the <PostsIndex> component.
10. Scaffold PostsNew component and add route configuration.
11. Add navigation between Index(/) and New(/posts/new).
12. Make action creator to save post.
13. To handle the form input and its validation we will use redux-form(https://redux-form.com/). 
