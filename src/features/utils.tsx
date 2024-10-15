import Text from '@/components/Text/Text';

export const getHeroCardText = (completionPercentage: number) => {
  if (completionPercentage < 10) {
    return (
      <Text>
        You have a fresh start ahead! <br />
        Time to begin your exciting tasks
      </Text>
    );
  }
  if (completionPercentage < 25) {
    return (
      <Text>
        You are making progress, <br /> but there is room for improvement
      </Text>
    );
  }
  if (completionPercentage < 50) {
    return (
      <Text>
        You are doing well, <br /> keep up the good work
      </Text>
    );
  }
  if (completionPercentage < 75) {
    return (
      <Text>
        Great job! <br /> You are making excellent progress
      </Text>
    );
  }
  if (completionPercentage < 90) {
    return (
      <Text>
        Outstanding work! <br /> You are almost there
      </Text>
    );
  }
  return (
    <Text>
      Congratulations! <br /> You have completed all your tasks
    </Text>
  );
};
