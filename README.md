# Sign-In/Sign-Up Application

This is a full-featured sign-in and sign-up application built with React.js, TypeScript, and Redux.js for state management. It features a sleek interface powered by Tailwind CSS and includes reusable HTTP services for user authentication against the ReqRes REST API.

## Live Demo

Check out the live application here: [Sign-Up/Sign-In App](https://sign-up-sign-in-app.vercel.app/)

## Features

- **User Authentication**: Utilizes the ReqRes API for user authentication, ensuring that only existing users can register or sign in.
- **Protected Routes**: Includes middleware to protect the dashboard page, making it accessible only to authenticated users.
- **Modern Design**: Styled using Tailwind CSS for a responsive and modern user interface.
- **Reusable Services**: Features reusable HTTP services for interaction with the backend API.

## Built With
**React.js** - A JavaScript library for building user interfaces.
**TypeScript** - An open-source language which builds on JavaScript by adding static type definitions.
**Redux.js** - A predictable state container for JavaScript apps.
**Tailwind CSS** - A utility-first CSS framework for rapidly building custom designs.
**ReqRes** - A hosted REST-API ready to respond to your AJAX requests.

## Pages

- **Sign In Page**: Allows users to log in with existing credentials.
- **Sign Up Page**: Enables new users to create an account, provided they are recognized by the ReqRes API.
- **Dashboard Page**: A protected route that displays user-specific data post-authentication.

## Getting Started

### Prerequisites

Ensure you have `node` and `npm` installed on your machine.

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/RishabhSikka3/sign-up-sign-in-app.git
cd sign-in-sign-up-app

Install the necessary packages: npm install
Start the development server: npm start



