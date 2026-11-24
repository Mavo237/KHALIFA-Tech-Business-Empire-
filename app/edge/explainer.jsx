const explainer = `
This page is using a Netlify Edge Function to rewrite the request based on the location of the visitor.

See more examples at edge-functions-examples.netlify.app
`;

export default function EdgeFunctionExplainer() {
  return <p style={{ whiteSpace: 'pre-wrap' }}>{explainer}</p>;
}
