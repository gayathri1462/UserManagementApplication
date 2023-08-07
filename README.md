<h1 align="center">User Management Web Application</h1>
<div align="center">
  <h3>
    <a href="https://2x7tt5.csb.app/" target="_blank" rel=“noreferrer”>
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/gayathri1462/UserManagementApplication" target="_blank" rel=“noreferrer”>
      Solution
    </a>
  </h3>
</div>

<!-- OVERVIEW -->

## Overview
<img width="925" alt="image" src="https://github.com/gayathri1462/UserManagementApplication/assets/42805318/cd88e324-87d8-41d2-a347-168dfc838e8d">

<p> This is a user management web application built using React JS and Redux, featuring CRUD functionalities for efficient user data management. Integrated React Router for seamless navigation and utilized React Saga middleware to handle complex asynchronous operations, ensuring optimal performance and user experience.</p>

### Built With
- Languages: HTML,CSS and TypeScript
- Libraries/Frameworks: React JS, React Router, Redux Toolkit, Redux Saga, React Icons, React Toastify
- CSS Preprocessor: SCSS
- Version Control: Git 
- Package Managers: NPM

## Features

The user management web application follows the following flow:

1. **Initial Screen**: The initial screen will display a list of users, including their names, email addresses, and other relevant details. If there are no users, it will show a button to navigate to the "Add User" page. If there are existing users, it will display each user's information with "View" and "Delete" buttons.

2. **Header**: The header will have two buttons: "Add User" and "Clear All Data."

3. **Add User**: The "Add User" page will allow users to input necessary information such as name, email address, and additional details. The app should validate the input and add the new user to the user list.

4. **View User**: Clicking on a user's details from the user list will provide a detailed view of the user's information. This view-only mode will allow users to review the user's data without the ability to make changes.

5. **Edit User**: Within the "View User" mode, there should be a "Switch to Edit Mode" button, which will allow users to modify the user's information and save the changes.

6. **Delete User**: Each user's details page will have a "Delete" button to allow users to delete the corresponding user record.

7. **Clear All Data**: The "Clear All Data" button in the header will enable users to delete all user records from the list.


## How To Use
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/gayathri1462/UserManagementApplication

# Install dependencies
$ npm install

# Run the app
$ npm start
```

