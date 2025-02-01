# Daily Affirmation AI

A responsive and interactive web application to generate daily affirmations based on your mood. Users can save their favorite affirmations, share them on social media (WhatsApp and Instagram), and view their favorites in a collapsible sidebar.

---

## Features
- **Generate Affirmations**: Select a mood or input your custom feeling to receive a personalized daily affirmation.
- **Save to Favorites**: Save affirmations by clicking the heart icon.
- **Share on Social Media**: Share affirmations directly on WhatsApp or Instagram.
- **Responsive Design**: Fully responsive layout that adapts to different screen sizes.
- **Favorites Sidebar**: A collapsible sidebar to view saved affirmations.

---

## Demo
### Home Screen:
![{82B72F7B-C8D0-4A87-BE84-E3909054C0C5}](https://github.com/user-attachments/assets/e98d1d61-7885-40ba-857a-4062a3d0df5e)


### Sidebar Open:
![image](https://github.com/user-attachments/assets/11681593-ef91-4b5e-a607-cc88b9155787)

---

## Project Structure
```plaintext
Daily-Affirmation-AI/
├── node_modules/          # Installed dependencies
├── app.js                 # JavaScript for functionality
├── index.html             # Main HTML file
├── styles.css             # Styling for the application
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Dependency lock file
└── README.md              # Documentation file
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-name/daily-affirmation-ai.git
   cd daily-affirmation-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## Add Your API Key

1. Open the `app.js` file in your code editor.
2. Locate the following line:
   ```javascript
   const genAI = new GoogleGenerativeAI("API KEY HERE");
   ```
3. Replace `"API KEY HERE"` with your Gemini API key:
   ```javascript
   const genAI = new GoogleGenerativeAI("your-api-key");
   ```

4. Save the file.

---


## Run the App

1. Use **Vite** for a development server:
   ```bash
   npm install vite
   npx vite --open
   ```

2. The application will open in your default browser at `http://localhost:5173`.

---

## How to Use

1. **Select Your Mood**:
   - Choose a mood from the dropdown menu.
   - Or, select "Other" and enter a custom feeling.

2. **Generate an Affirmation**:
   - Click the "Generate Affirmation" button to receive a personalized affirmation.

3. **Save to Favorites**:
   - Click the heart icon to save the affirmation to your favorites.

4. **View Favorites**:
   - Click the favorites button in the top-right corner to open the favorites sidebar.

5. **Share Affirmations**:
   - Use the WhatsApp or Instagram buttons to share affirmations.
  

