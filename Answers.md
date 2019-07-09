1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

- `map()`
- `filter()`
- `reduce()`

We use `Object.create()`.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

**Actions** are objects that describe how the reducers should change the store,
usually containing a `type` and `payload` property. **Reducers** are functions
that create the new state based on the action. **Store** is the object that contains
both actions and reducers, connecting the two.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state can be thought of as a global state accessible to everything in
an application if it connects to it. Component state is specific to a component
and possibly its children, but doesn't necessarily need affect other components
so its data doesn't need to be global.

Application state is useful for data that is used in multiple places throughout
an app so as to avoid duplication in component-level state. 

1.  What is middleware?

Middleware are nested functions that ultimately alter the action in some way.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` is Redux middleware that allows us to handle actions asynchronously.

1.  Which `react-redux` method links up our `components` with our `redux store`?

`connect()`
