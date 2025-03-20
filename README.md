# Unicode Text Formatter Chrome Extension

A powerful Chrome extension that transforms selected text into various Unicode styles and formats, working seamlessly across websites and text input fields.

## Features

### Text Styling
- **Bold** transformation using mathematical bold Unicode characters
- *Italic* transformation using mathematical italic Unicode characters
- `Monospace` transformation using mathematical monospace Unicode characters
- Underline text using combining characters
- ~~Strikethrough~~ text using combining characters

### Bullet Points
Add a bullet point to the beginning of your selected text with various styles:
- ● Filled circle
- ◉ Large circle
- ○ Empty circle
- ▪ Square
- ◇ Diamond
- ► Triangle
- ✓ Checkmark
- And many more...

The bullet will be added to the start of your text. For example:
Selecting "Hello" and choosing the "●" bullet will result in: "● Hello"

## How It Works

1. Select any text on any webpage
2. Right-click to open the context menu
3. Choose your desired formatting option:
   - Text styles (Bold, Italic, Monospace, Underline, Strikethrough)
   - Bullet points (multiple styles available)

The extension works in:
- Regular webpages
- Text input fields
- Textareas
- Rich text editors

## Technical Details

- Uses Unicode character maps for text transformation
- Handles both simple text and rich text environments
- Preserves line breaks and spacing
- Falls back to clipboard API when direct text manipulation isn't possible
- Supports both single-line and multi-line text formatting

## Installation

1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## Project Structure
```unknown
extension/
├── manifest.json
├── background.js  (handles context menu creation and event routing)
└── content.js     (handles text transformation and DOM manipulation)
```
## License

[Add your license here]

## Contributing

Feel free to submit issues and enhancement requests!

[Add contribution guidelines if needed]

---

**Note**: This extension modifies text using Unicode characters, which means the transformed text will be preserved across different platforms and applications that support Unicode.
