function parseToHTML(text) {
  // Split text into paragraphs (2+ consecutive newlines)
  const paragraphs = text.split(/\n\n+/);

  const htmlParts = [];

  for (let para of paragraphs) {
    // Trim whitespace from paragraph
    para = para.trim();
    if (!para) continue;

    // Check if this paragraph is a blockquote
    const lines = para.split("\n");
    const isBlockquote = lines.every((line) => line.startsWith("> "));

    if (isBlockquote) {
      // Process blockquote
      const blockquoteContent = lines
        .map((line) => line.slice(2)) // Remove '> ' prefix
        .join("\n");

      // Apply inline formatting to blockquote content
      const formatted = applyInlineFormatting(blockquoteContent);
      htmlParts.push(`<blockquote>${formatted}</blockquote>`);
    } else {
      // Process regular paragraph
      const formatted = applyInlineFormatting(para);
      htmlParts.push(`<p>${formatted}</p>`);
    }
  }

  return htmlParts.join("");
}

function applyInlineFormatting(text) {
  // Apply strikethrough formatting (~~text~~)
  text = text.replace(/~~(.*?)~~/g, "<del>$1</del>");

  // Convert single newlines to <br/>
  text = text.replace(/\n/g, "<br/>");

  return text;
}

// Example usage:
const input = `This is a paragraph with a soft line break

This is another paragraph that has
> Some text that
> is in a
> block quote.

This is another paragraph with a ~~strikethrough~~ word.`;

const output = parseToHTML(input);
console.log(output);
console.log("\n--- Formatted Output ---");
console.log(output.replace(/></g, ">\n<")); // Pretty print for viewing
