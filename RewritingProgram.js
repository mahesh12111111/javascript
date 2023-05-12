
Level 1
Re-write the below code to better code quality standards.

async function GET_daTA() {
  let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let DATA = await r.json();
  return DATA;
}

Ans:=>

async function getData() {
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await response.json();
return data;
}

Changes made:
1)The let keyword has Been changed to const for variables that are not reassigned.
2)The URL has been put in single quotes for consistency.
3)The code has been indented to improve readability.
4)The function name GET_daTA() has been changed to getData(), using camelCase.
5)The variable names have been changed to be More descriptive and use camelCase..


***********************************************************************************************************************
Level 2
Re-write the below code to better code quality standards. Hint: use modern ES6 syntax and reduce lines of code.

async function getUsers() {
  let doc = await Promise.all(getUser(), getProfile(), getPosts());

  let user = doc[0];
  let Profile = doc[1];
  let p = doc[2];

  const userProfile = {
    user: user,
    profile: Profile,
    posts: p
  };

  return userProfile;
}

Ans:=>
async function getUsers() {
const [user, profile, posts] = await Promise.all([getUser(), getProfile(), getPosts()]);
const userProfile = { user, profile, posts };
return userProfile;
}

Changes made:

11)The let keyword has been changed to const for variables that are not reassigned.
2)The array destructuring syntax has been used to assign the results of Promise.all() to individual variables in a concise way.
3)Object shorthand notation has been used to create the userProfile object.
4)The unnecessary variable p has been removed.
5)The code has been indented to improve readability..
*****************************************************************************************************************************
Level 3
Re-write the below code to better code quality standards. Hint: use modern ES6 syntax and reduce lines of code.

async function getUsers(users) {
  const new_users = [];

  for (let i = 0; i < users.length; i = i + 1) {
    const newUser = user[i];
    newUser.id = i;

    new_users.push(newUser);
  }

  return new_users;
}

Ans:=>
async function getUsers(users) {
return users.map((user, i) => ({ ...user, id: i }));
}

Changes made:::=
>
1)The for loop has been replaced with a more concise map() method to iterate over the users array and create a new array of modified objects.
2)The let keyword has been changed to const for variables that are not reassigned.
3)The object spread syntax has been used to copy the user object and add the id property to it.
4)The variable new_users has been removed as it is no longer needed.
5)The code has been indented to improve readability.



