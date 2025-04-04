
# AI Text Summarizer App

Welcome to the **AI Text Summarizer App**, a web-based application that leverages Artificial Intelligence to summarize long texts quickly. This application uses the Hugging Face API for NLP to generate concise summaries, making it ideal for processing articles, research papers, or lengthy documents.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Demo

The application interface allows you to paste text into a text area, hit the "Summarize" button, and view the generated summary.

## Features

- **Text Summarization**: Summarize lengthy texts using AI-powered NLP.
- **Interactive UI**: Simple and intuitive interface to input and display summarized text.
- **Loading Indicator**: Provides visual feedback during text processing.
- **Responsive Design**: Works on both desktop and mobile devices.
- **Error Handling**: Handles errors in text processing or API connectivity gracefully.

## Project Structure



.
├── public
│   ├── index.html           # Main HTML file
│   ├── stylesheet.css       # CSS file for styling
│   ├── script.js            # JavaScript for client-side interactivity
├── index.js                 # Express server setup
├── summarize.js             # Text summarization logic using Hugging Face API
├── .env                     # Environment variables (API key)
└── README.md                # Project documentation
```

## Technologies Used

- **Node.js**: JavaScript runtime for server-side code.
- **Express**: Web framework for Node.js to handle routes.
- **Axios**: Promise-based HTTP client for API requests.
- **Hugging Face API**: NLP model provider for text summarization.
- **HTML, CSS, JavaScript**: Frontend development.
  
## Setup

To run the app locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abhishek_maurya576/AI-Text-Summarize-app.git
   cd AI-Text-Summarize-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory with your Hugging Face API access token:
   ```
   ACCESS_TOKEN=your_huggingface_api_key
   ```

4. **Run the server**:
   ```bash
   node index.js
   ```

   Your server should now be running at `http://localhost:3000`.

## Environment Variables

The app requires an API key from Hugging Face to authenticate API requests for text summarization. Add the following variable in a `.env` file:

- **ACCESS_TOKEN**: Your Hugging Face API key for the BART model.

## Usage

1. **Open the App**:
   Go to `http://localhost:3000` in your browser.

2. **Enter Text**:
   Paste the text you want to summarize in the input text area (minimum 200 characters).

3. **Generate Summary**:
   Click the "Summarize" button. The app will call the Hugging Face API and display the summary in the output area.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.

## License

This project is licensed under the MIT License.
