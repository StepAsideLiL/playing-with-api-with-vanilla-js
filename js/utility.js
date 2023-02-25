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

/**
 * Get the data from the API.
 * @param {string} API API URL link.
 * @returns object|array
 */
async function getData(API) {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
