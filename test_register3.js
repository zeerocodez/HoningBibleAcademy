async function register() {
  const start = Date.now();
  const res = await fetch('http://localhost:3000/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Test 2', email: 'test2@example.com', password: 'password123' })
  });
  console.log(res.status, await res.text(), `Took ${Date.now() - start}ms`);
}
register();
