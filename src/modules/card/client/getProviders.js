export async function getProviders() {
  try {
    const res = await fetch(" https://gorest.co.in/public/v2/users");
    const providers = await res.json();
    return providers;
  } catch (err) {
    // Handle errors here
    console.log(err);
  }
}
