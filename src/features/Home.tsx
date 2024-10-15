import Avatar from '@/components/Avatar/Avatar';
import Text from '@/components/Text/Text';
import { getHeroCardText } from './utils';
import CircleProgressBar from '@/components/CircleProgressBar/CircleProgressBar';
import Button from '@/components/Button/Button';

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* User Details  */}
      <div className="flex items-center gap-4">
        <Avatar src="/images/background.png" alt="avatar" size="lg" />
        <div className="flex flex-col items-start">
          <Text className="text-xs">Hello!</Text>
          <Text size="sm" className="font-semibold">
            Gopala Agrawal
          </Text>
        </div>
      </div>
      {/* Today's Task */}
      <div className="flex gap-2 w-full bg-purple rounded-lg  text-white p-4 text-sm font-semibold justify-between">
        <div className="flex flex-col gap-4 text-wrap">
          {getHeroCardText(50)}

          <Button
            variant="solid"
            size="sm"
            text="View All"
            className="text-purple bg-white font-bold"
            onClick={() => {}}
          />
        </div>
        <CircleProgressBar percentage={50} />
      </div>
    </div>
  );
};

export default Home;
