import Button from '@/components/Button/Button';
import Text from '@/components/Text/Text';
import Layout from '@/layouts/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Layout>
        <div className="h-full flex flex-col px-6 items-center justify-center gap-10">
          <Image
            src="/images/background.png"
            alt="background"
            width={200}
            height={200}
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <Text size="xl" weight="bold" color="primary">
              Task Management & To-Do List
            </Text>

            <Text
              size="sm"
              weight="regular"
              color="primary"
              className="text-center"
            >
              This productive tool is designed to help you better manage your
              task project-wise conveniently!
            </Text>
          </div>
          <Button
            text="Let's Get Started"
            variant="solid"
            size="lg"
            className="w-full shadow-lg"
            onClick={() => {}}
          />
        </div>
      </Layout>
    </>
  );
}
