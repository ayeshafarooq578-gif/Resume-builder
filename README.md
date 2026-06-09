# Resume Builder

A full-stack Resume Builder web application developed using React, Node.js, Express.js, and PDFKit. The application enables users to create professional resumes, preview them in a modern template, and export them as downloadable PDF files.

## Features

* Professional landing page
* Resume creation form
* Live resume preview
* PDF resume generation
* Responsive design
* Clean and modern UI
* Dynamic user data handling

## Technologies Used

### Frontend

* React.js
* Vite
* CSS3
* Axios

### Backend

* Node.js
* Express.js
* PDFKit
* CORS
* Dotenv

## Project Structure

```text
Resume-builder/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Installation

### Clone Repository

```bash
git clone https://github.com/ayeshafarooq578-gif/Resume-builder.git
```

### Install Frontend Dependencies

```bash
cd client
npm install
```

### Install Backend Dependencies

```bash
cd ../server
npm install
```

## Running the Application

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Backend:

```text
http://localhost:5002
```

## How It Works

1. User enters resume details.
2. Data is stored in application state.
3. Resume preview is generated dynamically.
4. User can download the resume as a PDF.
5. Backend generates the PDF using PDFKit.

## Future Improvements

* Multiple resume templates
* User authentication
* Profile image upload
* Database integration
* Resume editing and saving
* AI-powered resume suggestions

## Author

**Ayesha Farooq**

BS Computer Science Student

Built as a Full Stack Web Development Project.
