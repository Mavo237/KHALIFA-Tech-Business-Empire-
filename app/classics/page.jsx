export const metadata = {
  title: 'Classics'
};

const explainer = `
Some classic (and much-loved) Netlify features still work here.
For example, Netlify Forms.
This has required some adjustments for modern Next.js.
Below is a simple form example.
`;

export default async function Page() {
  return (
    <>
      <h1 className="mb-8">Netlify Classics</h1>
      <p className="mb-8">{explainer}</p>
      <p>Form example removed for this build.</p>
    </>
  );
}
