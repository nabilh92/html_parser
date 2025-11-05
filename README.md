# String to HTML Parser

A lightweight JavaScript parser that converts formatted plain text into HTML following specific markup rules.

## Features

- **Paragraph Detection**: Automatically creates paragraphs from text blocks separated by 2+ newlines
- **Soft Line Breaks**: Converts single newlines to `<br/>` tags
- **Blockquotes**: Recognizes lines prefixed with `> ` and wraps them in `<blockquote>` tags
- **Strikethrough**: Converts text wrapped in `~~` to `<del>` tags
- **Scope Isolation**: Formatting commands don't cross paragraph boundaries

## Usage

```javascript
const input = `This is a paragraph with a soft line break

This is another paragraph that has
> Some text that
> is in a
> block quote.

This is another paragraph with a ~~strikethrough~~ word.`;

const output = parseToHTML(input);
console.log(output);
```

### Output

```html
<p>This is a paragraph with a soft line break</p>
<p>This is another paragraph that has</p>
<blockquote>Some text that<br />is in a<br />block quote.</blockquote>
<p>This is another paragraph with a <del>strikethrough</del> word.</p>
```

## Parsing Rules

1. **Paragraphs**: A sequence of two or more consecutive newline characters starts a new paragraph
2. **Formatting Scope**: Formatting commands do not cross paragraph boundaries
3. **Soft Line Breaks**: A single newline character becomes `<br/>`
4. **Blockquotes**: One or more consecutive lines where the first two characters are `> ` (greater than + space)
5. **Strikethrough**: Text surrounded by `~~` (two tildes) becomes `<del>text</del>`

## Running the Code

### Node.js

```bash
node ParseToHTML.js
```

## API

### `parseToHTML(text)`

Converts a formatted string to HTML.

**Parameters:**

- `text` (string): The input text with formatting markup

**Returns:**

- (string): HTML string with appropriate tags

### `applyInlineFormatting(text)`

Applies inline formatting (strikethrough and line breaks) to text.

**Parameters:**

- `text` (string): The text to format

**Returns:**

- (string): Formatted text with HTML tags

## Examples

### Example 1: Simple Paragraph

```javascript
const input = `Hello world
This is a test`;
parseToHTML(input);
// Output: <p>Hello world<br/>This is a test</p>
```

### Example 2: Multiple Paragraphs

```javascript
const input = `First paragraph

Second paragraph`;
parseToHTML(input);
// Output: <p>First paragraph</p><p>Second paragraph</p>
```

### Example 3: Blockquote

```javascript
const input = `> This is a quote
> that spans multiple lines`;
parseToHTML(input);
// Output: <blockquote>This is a quote<br/>that spans multiple lines</blockquote>
```

### Example 4: Strikethrough

```javascript
const input = `This has ~~deleted~~ text`;
parseToHTML(input);
// Output: <p>This has <del>deleted</del> text</p>
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
