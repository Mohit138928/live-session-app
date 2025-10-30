# Live Session App 🎥

A complete MERN stack application that allows an admin to start a live video session and students to join via a unique URL.

## 📋 Features

- **Admin Dashboard**: Start a session with one click
- **Unique Session URLs**: Each session gets a unique ID and shareable link
- **Video Player**: Full-featured video player with controls (Play/Pause, Volume, Fullscreen, Settings)
- **Student Access**: Students can join using the unique session link
- **Responsive Design**: Beautiful UI built with Tailwind CSS

## 🛠️ Tech Stack

### Backend
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **UUID** for unique ID generation
- **CORS** for cross-origin requests

### Frontend
- **React.js** + **Vite**
- **React Router** for navigation
- **React Player** for video playback
- **Tailwind CSS** for styling
- **Axios** for API calls

## 📦 Project Structure

```
live-session-app/
│
├── backend/
│   ├── server.js
│   ├── routes/sessionRoutes.js
│   ├── models/Session.js
│   ├── controllers/sessionController.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── AdminPage.jsx
│   │   │   └── StudentPage.jsx
│   │   ├── components/
│   │   │   └── VideoPlayer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (installed and running locally)
- **npm** or **yarn**

### Installation

#### 1. Clone the repository
```bash
git clone <your-repo-url>
cd live-session-app
```

#### 2. Setup Backend
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
MONGODB_URI=mongodb://localhost:27017/live-session-app
PORT=5000
```

Start MongoDB (if not running):
```bash
# On Windows (if installed as service)
net start MongoDB

# Or using mongod directly
mongod
```

Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

#### 3. Setup Frontend
Open a new terminal:
```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🎯 Usage

### For Admin:
1. Open `http://localhost:5173` in your browser
2. Click the **"Start Session"** button
3. A new session will be created with:
   - Unique Session ID
   - Student Access Link
4. Copy the student link and share it with students
5. The video player will appear with full controls

### For Students:
1. Open the shared URL (e.g., `http://localhost:5173/session/abc-123-xyz`)
2. The session will load automatically
3. Watch the video with full playback controls

## 🔌 API Endpoints

### POST `/api/start-session`
Creates a new session

**Response:**
```json
{
  "success": true,
  "data": {
    "type": "admin",
    "unique_id": "550e8400-e29b-41d4-a716-446655440000",
    "userurl": "http://localhost:5173/session/550e8400-e29b-41d4-a716-446655440000",
    "createdAt": "2025-10-30T10:30:00.000Z",
    "updatedAt": "2025-10-30T10:30:00.000Z"
  }
}
```

### GET `/api/session/:unique_id`
Retrieves session details by unique ID

**Response:**
```json
{
  "success": true,
  "data": {
    "type": "admin",
    "unique_id": "550e8400-e29b-41d4-a716-446655440000",
    "userurl": "http://localhost:5173/session/550e8400-e29b-41d4-a716-446655440000",
    "createdAt": "2025-10-30T10:30:00.000Z",
    "updatedAt": "2025-10-30T10:30:00.000Z"
  }
}
```

## 🎨 Customization

### Change Video URL
In both `AdminPage.jsx` and `StudentPage.jsx`, update the `sampleVideoUrl` variable:
```javascript
const sampleVideoUrl = 'YOUR_VIDEO_URL_HERE';
```

Supported video formats:
- YouTube videos
- Vimeo videos
- Direct video files (mp4, webm, etc.)
- Live streams (HLS, DASH)

### Styling
The app uses Tailwind CSS. Modify the styles in the component files or update `tailwind.config.js` for theme customization.

## 📝 Notes

- This is a basic implementation without real-time streaming
- No authentication is implemented
- The video URL is hardcoded (can be made dynamic)
- MongoDB should be running before starting the backend

## 🔧 Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running: `mongod`
- Check the connection string in `.env`

**Port Already in Use:**
- Change the port in `.env` (backend) or `vite.config.js` (frontend)

**CORS Error:**
- Ensure backend CORS is properly configured
- Check that frontend is calling the correct backend URL

## 📄 License

MIT License - feel free to use this project for learning and development!

## 👨‍💻 Author

Built with ❤️ using the MERN stack
