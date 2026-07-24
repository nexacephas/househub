export async function streamResponse(text, onUpdate) {
  let current = "";

  for (const char of text) {
    current += char;

    onUpdate(current);

    await new Promise((resolve) =>
      setTimeout(resolve, 18)
    );
  }
}