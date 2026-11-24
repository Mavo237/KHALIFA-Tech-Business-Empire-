export async function GET() {
  const quotes = [
    { text: 'The best way to predict the future is to create it.', author: 'Abraham Lincoln' },
    { text: 'Stay hungry, stay foolish.', author: 'Steve Jobs' },
    { text: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' },
    { text: 'What we think, we become.', author: 'Buddha' }
  ];
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  return Response.json(random);
}
