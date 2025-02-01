import { GoogleGenerativeAI } from "/node_modules/@google/generative-ai";

const genAI = new GoogleGenerativeAI("API KEY HERE"); //Replace "API KEY HERE" with your Gemini API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to generate content using the Gemini model
async function generateContent(prompt) {
    try {
      // Call the model to generate content
      const result = await model.generateContent(prompt);
  
      // Return the generated text
      return result.response.text();
    } catch (error) {
      return "Error generating content. Please try again.";
    }
  }

  
// Add an event listener to the Generate Button
document.addEventListener("DOMContentLoaded", () => {
    console.log("Document loaded");
    const generateBtn = document.getElementById("generateBtn");
    const moodSelect = document.getElementById("mood");
    const customMoodInput = document.getElementById("customMoodInput"); // Input for custom mood
    const outputElement = document.getElementById("output");
    const whatsappShare = document.getElementById("whatsappShare");
    const instagramShare = document.getElementById("instagramShare");
    const saveToFavorites = document.getElementById("saveToFavorites");
    const favoritesList = document.getElementById("favoritesList");

    let favorites = []; // Array to store favorite affirmations

  

  // Show or hide the custom mood input based on the selected option
  moodSelect.addEventListener("change", () => {
    if (moodSelect.value === "other") {
      customMoodInput.style.display = "block"; // Show input when "Other" is selected
      customMoodInput.focus(); // Set focus on the input field

    } else {
      customMoodInput.style.display = "none"; // Hide input for other options
      customMoodInput.value = ""; // Clear the input
    }
  });

  

    generateBtn.addEventListener("click", async () => {
      // Get the selected mood
      let mood = moodSelect.value;
      // If "Other" is selected, use the value from the text input
     if (mood === "other") {
      mood = customMoodInput.value.trim();
      if (!mood) {
        outputElement.textContent = "Please describe your feeling in the text input.";
        return;
      }
    }
      // Display a loading message
      outputElement.textContent = "Generating... ✨";
  
      // Generate content based on the mood
      const prompt = `Generate a daily affirmation for someone feeling ${mood}.`;
      const affirmation = await generateContent(prompt);
  
      // Display the generated affirmation
      outputElement.textContent = affirmation;
    });

    whatsappShare.addEventListener("click", () => {
      const affirmation = outputElement.textContent;
      if (affirmation && affirmation !== "Your affirmation will appear here...") {
          const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(affirmation)}`;
          window.open(whatsappUrl, "_blank");
      } else {
          alert("Please generate an affirmation before sharing!");
      }
  });

  instagramShare.addEventListener("click", () => {
    const affirmation = outputElement.textContent;
    if (affirmation && affirmation !== "Your affirmation will appear here...") {
        // Redirect to Instagram website
        const instagramUrl = `https://www.instagram.com`;
        window.open(instagramUrl, "_blank");
    } else {
        alert("Please generate an affirmation before sharing!");
    }
});

  // Save to Favorites functionality
saveToFavorites.addEventListener("click", () => {
  const affirmation = outputElement.textContent.trim(); 

  if (
    affirmation &&
    affirmation !== "Your affirmation will appear here..." &&
    !favorites.includes(affirmation)
  ) {
    favorites.push(affirmation); // Add to favorites list

    // Update the favorites list in the UI
    const listItem = document.createElement("li");
    listItem.textContent = affirmation;
    favoritesList.appendChild(listItem);

    alert("Added to favorites!");
  } else if (!affirmation || affirmation === "Your affirmation will appear here...") {
    alert("Please generate an affirmation before saving.");
  } else if (favorites.includes(affirmation)) {
    alert("This affirmation is already in your favorites.");
  }
});

// Toggle Sidebar
const toggleSidebar = document.getElementById("toggleSidebar");
const favoritesSidebar = document.getElementById("favoritesSidebar");

toggleSidebar.addEventListener("click", () => {
    favoritesSidebar.classList.toggle("active");


  });

  

