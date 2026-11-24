import Image from 'next/image';
import { ImageWithSizeOverlay } from './image-with-size-overlay';

export const metadata = {
  title: 'Image CDN'
};

const sampleImage = '/images/corgi.jpg';
const sampleImageSrcSet = [640, 1280, 1920]
  .map((size) => {
    return '/.netlify/images?url=' + sampleImage + '&w=' + size + ' ' + size + 'w';
  })
  .join(', ');

export default function ImageCDNPage() {
  return (
    <>
      <h1 className="mb-8">Image CDN</h1>
      <p className="mb-4">
        When running on Netlify, Next.js Image Optimization uses the Netlify Image CDN to transform images.
      </p>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="mb-2">Next.js Image component</h2>
          <Image src={sampleImage} width={640} height={427} alt="Corgi" className="w-full" />
        </div>
        <div>
          <h2 className="mb-2">Image CDN with srcSet</h2>
          <ImageWithSizeOverlay src={sampleImage} srcSet={sampleImageSrcSet} overlayPosition="bottom" />
        </div>
      </div>
    </>
  );
}
