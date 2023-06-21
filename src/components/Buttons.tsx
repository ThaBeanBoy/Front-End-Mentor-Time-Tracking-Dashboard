import { useStore } from '@nanostores/react';
import { timeFrames, activeTimeFrame } from '../timeFramesStore';

export default function Buttons() {
  return (
    <div
      id='timeframes'
      className='flex w-full items-start justify-between gap-4 p-8 brk:flex-col'
    >
      {timeFrames.map((timeFrame, key) => {
        const $active = useStore(activeTimeFrame);
        const isActive = timeFrame === $active;

        const handleClick = () => activeTimeFrame.set(timeFrame);

        return (
          <button
            className={`${isActive && 'text-white'}`}
            key={key}
            onClick={handleClick}
          >
            {timeFrame}
          </button>
        );
      })}
    </div>
  );
}
