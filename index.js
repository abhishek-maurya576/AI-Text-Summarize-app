const express = require('express');
const app = express();
const port = 3000;
const summarizeText = require('./summarize.js');

// Parses JSON bodies (as sent by API clients)
app.use(express.json());

// Serves static files from the 'public' directory
app.use(express.static('public'));

// Handle POST requests to the '/summarize' endpoint
app.post('/summarize', async (req, res) => {
  try {
    const textToSummarize = req.body.text_to_summarize;

    // Ensure there is text to summarize
    if (!textToSummarize || textToSummarize.length < 200) {
      return res.status(400).json({ error: 'Text to summarize must be at least 200 characters.' });
    }

    // Call the summarizeText function
    const summary = await summarizeText(textToSummarize);
    res.send(summary);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the summary.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
