## AI-Powered Developer Tool: Gemini AI + Firebase + React

Overview

This project is an AI-powered developer assistant using Gemini AI, Firebase, and React. It allows developers to integrate cutting-edge AI capabilities into their development environment, simplifying common tasks and boosting productivity.

![image](https://github.com/user-attachments/assets/51356635-1f5f-4504-8d36-27abbcdef4fa)


[AI-Powered Developer Assistant](https://ai-powered-dev.netlify.app/)

Technologies Used:

- Gemini AI: AI model used to provide intelligent assistance to developers.

- Firebase: Used for authentication, database storage, and messaging.

- React: Frontend library for building the user interface.

Features: 

- AI Assistance: Gemini AI integrated to assist with development tasks.

- Firebase Authentication: Secure login and user management.

- Realtime Database: Store and retrieve data efficiently using Firestore.

- Push Notifications: Messaging capabilities via Firebase Cloud Messaging.

Installation: 

- To get started with the project locally, follow these steps:

Prerequisites:

- Node.js and npm installed

- Firebase account and project

Steps to Install: 

- Clone the repository

bash
git clone https://github.com/Rites23/ai-powered-developer-assistant.git

bash
cd ai-powered-developer-assistant


Install dependencies:
bash
npm install

Setup Firebase:

- Go to the Firebase Console.

- Create a new Firebase project or use an existing one.

- Configure Firebase Authentication, Firestore, and Firebase Cloud Messaging in your Firebase project.

- Add your Firebase configuration to the .env file:

bash
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
 
Start the Development Server

bash
npm start


Visit http://localhost:3000 in your browser to see the app in action.

Deployment:

- This project can be deployed to platforms like Vercel, Netlify, or Firebase Hosting.

Contributing:

- Contributions are welcome! Feel free to fork the repository, submit issues, and create pull requests. To ensure smooth collaboration, please follow the code of conduct and best practices for contributing.

License:

- This project is licensed under the MIT License - see the LICENSE file for details.
