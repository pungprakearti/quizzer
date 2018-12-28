// const uuid = require('uuid/v4');

const questionsText = `#JavaScript
What is the difference between map and filter?
.map() runs a callback on each item and returns a new array with said items. .filter() returns an array of the same or smaller length based on a callback that evaluates to a boolean.

When would you declare a variable with let as opposed to const?
When you are modifying that variable later in your code.

What is a pure function?
A pure function is a function where the return value is only determined by its input values, without observable side effects.

What does the static keyword do?
The static keyword creates a method associated with the class, and not with an instance of the class.

What does the super keyword do?
Accesses the parent class.

Define a promise.
A one time guarantee of future value.

Explain AJAX in as much detail as possible.
Makes HTTP requests from the browser without refreshing the page. Can be done with native APIs like XHR and Fetch or libraries like jQuery and axios.

What order does this log? ‘console.log(“first”), setTimeout(() => ‘console.log(“second”) , 0) ‘console.log(“third”)’
First, third, second.

What does the following code return: [20, 40, 60, 80, 100].sort()?
[100, 20, 40, 60, 80]. This occurs because, by default, the method sorts the values as strings in alphabetical and ascending order (‘1’ < ‘2’).

Explain what the bind function does.
.bind() returns a new function with the keyword this and any arguments passed to it bound already.

Explain the difference between .call() and .apply().
.call() accepts an argument list, whereas .apply() accepts an array of arguments.

Who wrote JavaScript?
Brendan Eich.

#OOP
In JS: how do you specify that “Dog” subclasses “Mammal” ?
class Dog extends Mammal { … }.

Describe what ‘this’ is.
When a JS object is being invoked, ‘this’ is a reserved JS keyword which refers to the object containing the method being invoked. Exceptions would be arrow functions because they don't have their own ‘this.’

When is a constructor function called?
When the new keyword is invoked.

What is the difference between abstraction and encapsulation?
Encapsulation is hiding or grouping details into a package while Abstraction is when we only show what is required for the scope of the package.

#Node/Express
What does next do?
Moves onto the next piece of middleware.

What is middleware? Give an example of when you would use it.
Functions that intercept the request and can add to the request object or respond.

What is an error first callback?
Common node pattern where the first parameter to a callback is an error.

What is the difference between Authentication and Authorization?
Authentication is determining if you are the correct person and Authorization is if you are allowed into certain places.

What are some security vulnerabilities we’ve discussed?
CSRF, XSS, SQL Injection.

What is a JWT?
A string with a header, payload and signature. Header and payload can be decoded, signature can not - it requires a secret key to be used to sign securely.

#SQL
What is a primary key?
A constraint that enforces uniqueness.

What is a foreign key?
A constraint the enforces referential integrity.

What are the two musts and 1 should for a primary key?
It must be unique and not null. It should not change.

Provide the query to find all movies that have a title that contain the string “star”. (case insensitive)
SELECT * FROM movies WHERE title ILIKE ‘%star%’;

What is a database index? Why would you add it?
A data structure that improves the speed of retrieval with an added cost of additional writes and memory.

Describe the difference between an outer and inner join.
Inner join will only join where there is a common id in both tables.

#The Web
What is HTTP?
A protocol commonly used for communication between clients and servers / servers and servers. It is text based and consists of Verbs, URLs, Headers, Status Codes and more.

What is REST?
Representational State Transfer - a set of principles for architecting web applications (stateless, client/server model, building apps around resources).

Give two differences between GET and POST.
GET is idempotent POST is not. GET carries request parameters in URL, while POST carries in message body.

List 3 HTTP headers.
Accept, Authorization, Access Control Allow Origin, Content-Type, X-Requested-With, Cookie, Set-Cookie.

What is an HTTP header?
Metadata around the request or response. Can contain information around authentication, data formats, and much more.

What is CORS?
Cross Origin Resource Sharing, a technology used to overcome the same origin policy by specifying headers to notify the browser which origins are allowed for resource sharing.

What is the Same Origin Policy?
A restrictive web policy that states scripts can not be loaded from different protocols, ports and/or domains.

What is JSON
JavaScript Object Notation. A text based format that is easily converted into and back into JS.

What is GraphQL?
A query and manipulation language used as an alternative to REST. 

How are websockets different from other HTTP requests?
They are smaller and are on a persistent connection.

#React
How do you pass data from a parent to a child?
Data is passed from parents to children via props.

What does the Context API provide?
The Context API provides a way to avoid prop drilling without the overhead of Redux.

What are the two arguments for setState?
object / function, function.

What is “mounting” and when does a component mount?
Mounting is when a component is placed into the DOM. A component is mounted when it is first rendered.

What lifecycle method decides whether the render function should run on a component?
should Component Update.

In order, list the three commonly used lifecycle methods when mounting a component.
constructor(), render(), component Did Mount().

What’s a PureComponent? When should you use them?
A component that has should Component Update implemented for you. Use them when you are ok with a shallow check for re-render.

Describe when and why you would need to provide keys={...}.
When you iterate.

What does the React Router enable you to do? 
Change the URL bar and render components depending on the URL all through JS.

What part of the MVC pattern does React implement? 
The View.

List three lifecycle methods used in React. 
component Did Mount, component Did Update, component Will Unmount, should Component Update.

How do you pass data from two separate Components if the are not in a Parent / Child relationship? What needs to be updated for dynamic updates to take effect?
Using Redux or Context or by lifting the state up

What are the differences between state and props?
Props are immutable, state is not.

What frameworks have you used in conjunction with ReactJS for routing, AJAX calls, and other Model and Controller functionality that is not provided by ReactJS? 
Axios, React Router, Redux.

Explain what a Component is and how it is created.
A Component is an instance of a class that extends React.Component. It renders JSX (transpiled to JS), is constructed and then mounted.

Explain why ReactJS uses a virtual DOM tree. 
To be efficient and only update the actual DOM when it’s necessary.

#Redux
Define a thunk.
A function that wraps an expression to delay it’s execution.

What are the two arguments for connect()? What does it return?
map State To Props, map Dispatch To Props, it returns a function.

What is Redux good for?
Managing global state in a large application and using more robust debugging / time traveling, customization.

What does the Provider component do?
Accepts a prop of store and wraps an application so that the App knows what store to connect to.

What is an action?
An object with a key of type.

#Data Structures
What common operation has a different runtime for Singly Linked Lists and Doubly Linked Lists?
.pop()

Describe the difference between a Binary Tree and a Binary Search Tree. 
Binary Search Trees have a rule around left children always being less than parent and right children always being greater than parent.

What is the role of a hash function in a hash table?
It turns a “Apple” into 7.

What data structure does Depth First Search use?
Stack.

What data structure does Breadth First Search use? 
Queue.

List the properties of a max heap.
At most two children, children must be smaller than the parent, higher values bubble up.

Describe how a bloom filter works.
A value that’s hashed: no false positives, but false negatives.

#CSS
Should you use tables for layout?
NOOOOOOOO!!!

Explain the difference between .foo.bar and .foo .bar.
First one selects an element with a class of foo and bar, second selects elements with a class of .bar inside of elements with a class of .foo.

Describe the meaning of the following selector: a > b.
Select all b’s that are direct descendants of a.

Given an element with a width of 200px, margin 20px, border 20px, padding 20px what is the calculated width?
280px (200 + b20 + b20 + p20 + p20).

What does box-sizing: border-box do?
Includes padding and border into the width and height of an element.

What is the difference between an ID selector and class selector?
ID has higher specificity than class.

Describe CSS specificity.
CSS specificity is the way browsers choose which element is the most relevant to recieve properties.

List two out of three things that responsive design entails. 
Media queries, images, Relative units

Explain why rems and ems are preferred over px.
Rems and ems are scaled by the browser based on the font used.

What is Sass?
Sass is a CSS extension that preprocesses Sass into CSS. It allows the use of variables for CSS.

#Python
What is a tuple?
A tuple is a sequence of immutable Python objects.

What is a list comprehension?
Concise list creation using an expression, iteration, and a filter.

What does the following code do: import pdb // pdb.set_trace().
Debugging (stack trace).

What is the equivalent of a Map in Python?
Dictionary.

What is a virtualenv?
A wrapper used to create an isolated environment for Python projects.

#Flask
What are some differences between Flask and Django?
Flask is a smaller bare bones framework while Django is more all inclusive.

What’s an ORM? Which one have we used?
Object-relational mapping is is a technique for storing, retrieving, updating, and deleting from an object-oriented program in a relational database. SQLAlchemy is an example of one.

`;

/* Parse text into a POJO */

export default function parseQuestions() {
  const qArray = questionsText.split('\n');
  let questions = {};
  let currCat = ''; //current category while reading through text
  let keyIncrement = {};
  let getQuestion = true; //get question or answer
  let q = '';
  let a = '';

  for (let str of qArray) {
    //
    //if str starts with a # it's a category.
    if (str) {
      if (str[0] === '#') currCat = str.slice(1);
      else {
        //
        //get a question
        if (getQuestion) {
          q = str;
          getQuestion = false;

          //get an answer
        } else {
          a = str;
          getQuestion = true;
        }
      }
    }
    //form an entry into questions
    if (q && a) {
      //
      //create key for entry using category
      if (!keyIncrement[currCat]) keyIncrement[currCat] = 1;
      else keyIncrement[currCat]++;
      questions = {
        ...questions,
        [`${currCat}-${keyIncrement[currCat]}`]: { q, a, category: currCat }
      };
      q = '';
      a = '';
    }
  }
  return questions;
}

/* returns a new shuffled array */
export function shuffle(arr) {
  let shuffledArr = [];
  let randIndex = 0;

  while (arr.length > 0) {
    //
    //get a random int within the array
    randIndex = Math.floor(Math.random() * arr.length);

    //add random array entry to new array
    shuffledArr.push(arr[randIndex]);

    //remove entry from original array
    arr.splice(randIndex, 1);
  }
  return shuffledArr;
}
