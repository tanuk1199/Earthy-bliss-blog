import Image from 'next/image';

interface BannerImageProps {
  src: string;
  alt: string;
}

export function BannerImage({ src, alt }: BannerImageProps) {
  return (
    <div className="w-full aspect-[16/9] md:aspect-[21/9] relative">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
