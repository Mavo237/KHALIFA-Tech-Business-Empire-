
export const metadata = {
  title: 'Routing'
};

export default function RoutingPage() {
  return (
    <>
      <h1 className="mb-8">Routing</h1>
      <p className="mb-4">
        This page demonstrates Next.js routing, including dynamic routes and route handlers on Netlify.
      </p>
      <div className="border rounded p-4 mb-4">
        <h2 className="mb-2">Examples</h2>
        <ul className="list-disc pl-5">
          <li><a href="/edge">/edge - Edge Function rewrite</a></li>
          <li><a href="/middleware">/middleware - Middleware rewrite</a></li>
          <li><a href="/image-cdn">/image-cdn - Image CDN</a></li>
          <li><a href="/blobs">/blobs - Blobs</a></li>
          <li><a href="/revalidation">/revalidation - Revalidation</a></li>
        </ul>
      </div>
    </>
  );
}
