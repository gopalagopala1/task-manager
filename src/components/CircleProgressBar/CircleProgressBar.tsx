export interface CircleProgressBarProps {
  percentage: number;
}

const CircleProgressBar = ({ percentage = 0 }: CircleProgressBarProps) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-24 h-24">
      <svg
        className="w-full h-full -rotate-90"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          className="stroke-slate-300 opacity-40"
          strokeWidth="8"
        />

        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          className="stroke-white"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <span className="text-center text-xl font-bold text-blue-600">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default CircleProgressBar;
