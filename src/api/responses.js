export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error('Invalid email or password');
}

export function handleError(error) {
  console.error(`API failed ${error}`);
  throw error;
}
