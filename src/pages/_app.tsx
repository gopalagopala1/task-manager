import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import BaseLayout from '@/layouts/BaseLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <div className="py-4 px-6 h-full">
        <Component {...pageProps} />
      </div>
    </BaseLayout>
  );
}
