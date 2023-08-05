'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      src="/images/logo.svg"
      alt="logo"
      className="hidden md:block cursor-pointer"
      height="120"
      width="120"
    />
  );
};

export default Logo;
