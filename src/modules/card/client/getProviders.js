export async function getProviders() {
  try {
    const res = await fetch(" https://gorest.co.in/public/v2/users");
    if (res.ok) {
      const providers = await res.json();
      return providers;
    }
    throw new Error(`${res.status}`);
  } catch (err) {
    // Handle errors here
    console.log(err);
  }
}
