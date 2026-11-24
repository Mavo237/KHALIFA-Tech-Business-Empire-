export const metadata = {
  title: 'Fallback'
};

const explainer = `
This page is using a Netlify Edge Function to rewrite the request based on the location of the visitor.

For it to be invoked, please either run the project locally or deploy it.

Edge Functions are framework-agnostic, but there are advantages to using Edge Functions with Next.js.

See more examples at edge-functions-examples.netlify.app
`;

export default function FallbackPage() {
  return (
    <>
      <h1 className="mb-8">You&apos;re in a fallback location</h1>
      <p style={{ whiteSpace: 'pre-wrap' }}>{explainer}</p>
    </>
  );
}
