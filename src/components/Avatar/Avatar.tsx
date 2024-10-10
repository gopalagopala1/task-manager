import Image from 'next/image';

export interface AvatarProps {
  src: string;
  alt: string;
  size: 'sm' | 'md' | 'lg';
}

const Avatar = ({ src, alt, size }: AvatarProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size === 'sm' ? 24 : size === 'md' ? 32 : 40}
      height={size === 'sm' ? 24 : size === 'md' ? 32 : 40}
      style={{ borderRadius: '50%' }}
    />
  );
};

export default Avatar;
