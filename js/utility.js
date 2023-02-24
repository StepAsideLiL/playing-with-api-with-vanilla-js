/**
 * Returns hex color code.
 * @returns string
 */
function randomColor() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  while (color < 6) {
    color = Math.floor(Math.random() * 16777215).toString(16);
  }
  return `#${color}`;
}
