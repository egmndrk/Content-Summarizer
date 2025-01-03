# Content Summarizer Chrome Extension

A Chrome extension that uses Google's Gemini AI to generate concise summaries of web content. Perfect for quickly understanding articles, news, or Wikipedia pages without reading the entire content.

## Features

- One-click content summarization
- Works on any webpage
- Clean and intuitive user interface
- Responsive design
- Multi-language support (automatically detects and responds in the same language as the content)

## Technologies Used

- JavaScript
- Chrome Extension APIs
- Google Gemini AI API
- HTML5/CSS3

## Prerequisites

Before using this extension, you'll need:
- Google Chrome browser
- Gemini API key from Google AI Studio

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/content-summarizer.git
```

2. Configure the API:
   - Open `background.js`
   - Replace `(YOUR_API_KEY)` with your Gemini API key
   - Replace `(YOUR_API_URL)` with your Gemini API endpoint

3. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top right
   - Click "Load unpacked"
   - Select the extension directory

## Usage

1. Navigate to any webpage you want to summarize
2. Click the extension icon in your Chrome toolbar
3. Click the "Summarize Content" button
4. Wait for the summary to appear in the popup window

## Project Structure

```
content-summarizer/
│
├── manifest.json        # Extension configuration
├── background.js       # Background service worker
├── content.js         # Content script for webpage interaction
├── popup.html        # Extension popup interface
└── popup.js         # Popup functionality
```

## Configuration

The extension can be configured by modifying the following parameters in `background.js`:

```javascript
generationConfig: {
  temperature: 0.7,    // Controls creativity of the summary
  topK: 40,           // Limits vocabulary diversity
  topP: 0.95,        // Controls randomness
  maxOutputTokens: 1024  // Maximum summary length
}
```

## Future Improvements

- Add support for custom summarization lengths
- Implement text highlighting functionality
- Add support for PDF documents
- Include translation options
- Save summaries history
- Add sharing capabilities

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Privacy Notice

This extension sends webpage content to the Gemini API for summarization. No personal data is collected or stored.

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Author

Egemen Doruk

## Acknowledgments

- Google Gemini AI
- Chrome Extension Documentation
- Mozilla Developer Network
