* Chrome Extension: ChatGPT Extension *

# Description

A simple Chrome extension that interacts with a mock ChatGPT API to provide responses to user questions.


The source code for the extension can be found in the GitHub repository: ChatGPTExtension

# How to Run Locally

1. Clone the repository:

git clone https://github.com/ArunKumar023/ChatGPTExtension.git
cd ChatGPTExtension

2. Start the Mock API:

cd mock-api
npm install
node index.js


3. Load the Extension in Chrome:

Open Google Chrome.
Go to chrome://extensions/.
Enable "Developer mode" (usually a toggle switch at the top right).
Click "Load unpacked" and select the ChatGPTExtension directory.

4. Test the Extension:

Click on the extension icon in the toolbar to open the popup.
Enter a question and click "Submit".
Observe the response displayed in the popup.



# Design Decisions
Popup UI: The popup contains a text input for user questions and a display area for responses.

Response Display: Responses are displayed in a clean and easy-to-read format, allowing users to understand the interaction.

Error Handling: Basic error handling is implemented in case the API is unreachable or returns an error response.


# Challenges Faced

CORS: Setting up proper CORS headers for the mock API to work seamlessly with the extension.

Asynchronous Communication: Handling asynchronous communication between the extension popup and the API required careful consideration.
Error Handling: Ensuring that error messages are displayed appropriately and user-friendly.
