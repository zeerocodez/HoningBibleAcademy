async function register() {
  const res = await fetch('http://localhost:3000/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Test', email: 'test@example.com', password: 'password123' })
  });
  console.log(res.status, await res.text());
}
register();
