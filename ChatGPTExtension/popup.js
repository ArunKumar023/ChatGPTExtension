document.addEventListener("DOMContentLoaded", function () {
    const questionInput = document.getElementById("questionInput");
    const submitButton = document.getElementById("submitButton");
    const responseArea = document.getElementById("responseArea");
  
    submitButton.addEventListener("click", async () => {
      const question = questionInput.value;
      if (!question) return;
  
      const response = await fetchMockAPI(question);
      responseArea.innerHTML = '';
  
      responseArea.innerHTML += `<p>${response}</p>`;
      questionInput.value = '';
    });
  });


  
  async function fetchMockAPI(question) {
    try {
      const response = await fetch("http://localhost:3000/mock-api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch from the mock API");
      }
  
      const data = await response.json();
      return data.response;
    } catch (error) {
      return "Error fetching data from the mock API";
    }
  }
  
  
  
  