// Replace 'YOUR_API_KEY' with your actual Gemini API key
// Replace 'YOUR_API_URL' with your actual Gemini API url
const API_KEY = '(YOUR_API_KEY)';
const API_URL = '(YOUR_API_URL)';

async function getGeminiSummary(content) {
  const requestBody = {
    contents: [{
      parts: [{
        text: `Summarize the following text in a concise manner: ${content}
               Response with the same language of content.`
      }]
    }],
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024,
    },
  };

  try {
    console.log('Sending request to Gemini API:', JSON.stringify(requestBody));
    
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, details: ${errorText}`);
    }

    const data = await response.json();
    console.log('Gemini API response:', JSON.stringify(data));
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0]) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Unexpected response structure from Gemini API');
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return `Error generating summary: ${error.message}. Please try again.`;
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getSummary") {
    getGeminiSummary(request.content).then(summary => {
      sendResponse({summary: summary});
    });
    return true;  // Indicates we will send a response asynchronously
  }
});