# Code Challenge:

## Introduction:
Welcome to the React Developer Technical Assessment! This test is designed to evaluate your proficiency in building React applications using a modern stack, including Redux Toolkit, Vite, React Router and TurboRepo. We have prepared a set of tasks and questions that cover a spectrum of skills, ranging from fundamental concepts to more advanced topics.

### Tasks: 
Complete the provided tasks to demonstrate your ability to work with React, Redux Toolkit, Vite, and TurboRepo. Adjust the complexity based on your experience level.

### Questions:
Answer the questions to showcase your understanding of the underlying concepts and best practices associated with the technologies in use.

### Time Limit:
This assessment is designed to take approximately 1 hour to complete. Please manage your time effectively.

### Setup the reporsitory:
Make sure you have pnpm installed<br>
Install dependencies with `pnpm`<br>
Run the project with `turbo run dev` or `pnpm run dev`

### prerequisite:
Start the test by Forking this repository, and complete the following tasks:<br>

## Task 1:
Assignment: Use the `api` found in `App.tsx` to make a request and fetch a list of all Pokémon.<br>

Question 1: How did you manage to fetch the list and what tool did you use?<br>
Answer: I fetched the list using the fetch method as the project doesn’t have an interceptor configured, which would typically streamline handling API calls with Axios. The fetch method was sufficient for this straightforward implementation. State management was handled using Redux Toolkit to manage loading, success, and error states efficiently.<br>

Question 2: What steps would you take to future improve this?<br>
Answer:<br>
Error Handling Enhancements: Use custom error messages for specific scenarios like network issues or invalid responses.<br>
Caching: Implement caching using tools like Redux Persist or localStorage to reduce redundant API calls.<br>
Pagination: Add pagination or lazy loading for scalable list rendering.<br>
Code Reusability: Move the API call logic to a reusable service or custom hook (e.g., useFetch).<br>

commit the code as `task-1`<br>

## Task 2:
Assignment: Parse the list to the `<List />` component and ajust the component to show a list of all pokémon names
Feel free to create more components in the `/ui` package or in the app if needed 

commit the code as `task-2`<br>

## Task 3:
Assignment: Style the `<List />` component to display as a grid.

commit the code as `task-3`<br>

## Task 4:
Assignment: Introduce `redux-toolkit` and store the list of pokémon in the redux store.<br>
Question 4: What makes the `createSlice` in redux-toolkit difference then A Reducer in redux?<br>
Answer: CreateSlice in Redux Toolkit makes it easier to manage state by combining actions and reducers in one place, reducing boilerplate, and letting you update state directly while keeping it immutable automatically. It's simpler and faster than writing plain Redux reducers.<br>

Question 5: Describe the benefits of immutable code.<br>
Answer: Immutable code makes debugging easier, ensures state is predictable, improves performance e.g., React optimizations, and is safer for concurrency. It also simplifies features like undo/redo and makes testing more reliable.

commit the code as `task-4`<br>

## Task 5:
Assignment: Create button for each pokémon where an Action will be dispatched to remove the pokémon from the store 
Question 6: How can you verify the action has been dispatched?
Answer: store.getActions() will give us the details on what actions were dispatched.

## Task 6:
Question 7: explain the use of `useEffect` hook in React
Answer: useEffect is used to perform side effects in functional components, such as fetching data or manipulating the DOM. You can specify dependencies, so it runs when those dependencies change. If you pass an empty array [], it runs only once after the component mounts. It's a way to handle logic that doesn't directly relate to rendering the UI.

Question 8: What is A High Order Component?
Answer: A High Order Component (HOC) is a function that takes a component and returns a new component with additional props or behavior. It's a pattern for reusing component logic across multiple components without changing their original structure. HOCs are often used for things like authentication checks, routing, or adding additional functionality to existing components.

Question 9: What use cases would a HOC be usefull?
Answer: HOC are useful for situations where you need to share functionality or logic across multiple components without repeating code. Some common use cases include adding authentication checks, managing component state, handling permissions, logging, and fetching data. They allow you to encapsulate reusable logic and keep your components clean and focused on their primary responsibilities.

Question 10: What does it indicate when a component is prefixed with `use` and `with`
Answer: When a component is prefixed with use, it typically refers to a custom hook in React, which follows the convention for hooks. Custom hooks are functions that allow you to reuse stateful logic across multiple components.
When a component is prefixed with with, it usually refers to a Higher-Order Component (HOC). HOCs are used to wrap a component to add extra functionality, like withAuth for adding authentication logic or withRouter for injecting routing-related props.

Question 11: What is a Generic type in typescript?
Answer: A generic type in TypeScript allows you to define a function, class, or interface that works with any data type, while still preserving type safety. Generics provide flexibility by enabling you to pass a type as a parameter to the function or class. For example, you can define a function that works with both numbers and strings, and TypeScript will infer the correct type when you call it, ensuring type consistency.

Question 12: Whats the difference between a controlled and uncontrolled input in React?
Answer: A controlled input is an input element whose value is controlled by React state. The value of the input is set by a state variable, and any change in the input triggers an update to the state through an event handler, like onChange.
An uncontrolled input, on the other hand, is one where the value is handled by the DOM itself rather than React. You access the value using a ref, and it doesn’t require React to manage the state of the input.




