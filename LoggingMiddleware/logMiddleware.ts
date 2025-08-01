async function Log(stack,level,pkg,message){
  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMmJxMWE0Nzg1QHZ2aXQubmV0IiwiZXhwIjoxNzU0MDMxNzExLCJpYXQiOjE3NTQwMzA4MTEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIxYWJmYjViMi1iMDkwLTQ4ZjUtYTU2Ni00MzM0ZTNlZGZlMjEiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJyYW1waWxsYSBoZW1hY2hhbmQiLCJzdWIiOiJiZGE0MzUwYi1mYjA0LTQ4ODEtOTEyMC04MTg1ZTc4ZWY5M2YifSwiZW1haWwiOiIyMmJxMWE0Nzg1QHZ2aXQubmV0IiwibmFtZSI6InJhbXBpbGxhIGhlbWFjaGFuZCIsInJvbGxObyI6IjIyYnExYTQ3ODUiLCJhY2Nlc3NDb2RlIjoiUG5WQkZWIiwiY2xpZW50SUQiOiJiZGE0MzUwYi1mYjA0LTQ4ODEtOTEyMC04MTg1ZTc4ZWY5M2YiLCJjbGllbnRTZWNyZXQiOiJhS1NmS0RORFlSREtZd0V5In0.woIQN23D3lLbI54_-y3lguQwI8_BbZm6ddOzlpDSB5Y';

await fetch('http://20.244.56.144/evaluation-service/logs', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  },
  body: JSON.stringify({
    stack: 'backend',
    level: 'error',
    package: 'handler',
    message: 'received string, expected bool'
  })
});

