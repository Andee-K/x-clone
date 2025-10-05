# X Clone

This is a full-stack clone of the popular social media platform X (formerly known as Twitter), built with Next.js, TypeScript, and Firebase.

## Images

Home Page
<img width="968" height="948" alt="Screenshot 2025-10-05 at 1 57 26 PM" src="https://github.com/user-attachments/assets/445d2dce-5f39-4207-b2ab-858297298e99" />

## Features

- **User Authentication:** Secure user registration, login, and logout functionality using Firebase Authentication.
- **Real-time Feed:** A real-time feed to display, create, and delete tweets.
- **User Profiles:** Display user information, such as avatar, name, and username.
- **Responsive Design:** A responsive and intuitive user interface with a three-column layout (Sidebar, Main Content, Right Sidebar) using SCSS modules.
- **Interactive UI:** Toast notifications for enhanced user feedback.
- **Social Features:** "Who to follow" suggestions and a "Trending" section to enhance user engagement.
- **State Management:** Application-wide state management for authentication using React Context.

## Technologies Used

- **Frontend:**
  - [Next.js](https://nextjs.org/)
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [SCSS Modules](https://github.com/css-modules/css-modules)
  - [react-icons](https://react-icons.github.io/react-icons/)
- **Backend:**
  - [Firebase](https://firebase.google.com/)
    - Firebase Authentication
    - Firestore

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18.x or later)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repo**
    ```sh
    git clone https://github.com/your_username/x-clone.git
    ```
2.  **Install NPM packages**
    ```sh
    npm install
    ```
3.  **Set up environment variables**

    Create a `.env.local` file in the root of your project and add the following environment variables. You can get these from your Firebase project settings.

    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
    ```

4.  **Run the development server**
    ```sh
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Screenshots

| Login Page | Home Page |
| :---: | :---: |
| ![Login Page](https://via.placeholder.com/400x300.png?text=Login+Page) | ![Home Page](https://via.placeholder.com/400x300.png?text=Home+Page) |
| **Signup Page** | **Tweet Composer** |
| ![Signup Page](https://via.placeholder.com/400x300.png?text=Signup+Page) | ![Tweet Composer](https://via.placeholder.com/400x300.png?text=Tweet+Composer) |
