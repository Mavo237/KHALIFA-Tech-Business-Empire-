export const metadata = {
  title: 'Revalidation'
};

export default function RevalidationPage() {
  return (
    <>
      <h1 className="mb-8">Revalidation</h1>
      <p className="mb-4">
        This page demonstrates On-Demand Revalidation. On Netlify, you can revalidate a page by calling the revalidate API.
      </p>
      <div className="border rounded p-4 mb-4">
        <h2 className="mb-2">Example</h2>
        <p>Visit this page, then trigger a revalidation to see the content update without a full rebuild.</p>
      </div>
      <form method="post" action="/api/revalidate">
        <button type="submit" className="px-4 py-2 bg-black text-white rounded">
          Revalidate this page
        </button>
      </form>
    </>
  );
}
