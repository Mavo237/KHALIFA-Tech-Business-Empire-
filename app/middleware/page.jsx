export const metadata = {
  title: 'Middleware'
};

const explainer = `
This page is using Next.js Middleware to rewrite the request based on the location of the visitor.

Middleware runs on Netlify Edge Functions.

See more examples at edge-functions-examples.netlify.app
`;

export default function MiddlewarePage() {
  return (
    <>
      <h1 className="mb-8">You&apos;re in a fallback location</h1>
      <p style={{ whiteSpace: 'pre-wrap' }}>{explainer}</p>
    </>
  );
}
