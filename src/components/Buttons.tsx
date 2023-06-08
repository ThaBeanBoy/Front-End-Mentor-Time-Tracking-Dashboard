import { useStore } from '@nanostores/react';
import { timeSpans, activeTimeSpan } from '../timeSpanStore';

export default function Buttons() {
  return (
    <div id='timespans' className='p-[32px]'>
      {timeSpans.map((timespan, key) => {
        const $active = useStore(activeTimeSpan);
        const isActive = timespan === $active;

        const handleClick = () => activeTimeSpan.set(timespan);

        return (
          <button
            className={`mb-[16px] block last:mb-0 ${isActive && 'text-white'}`}
            key={key}
            onClick={handleClick}
          >
            {timespan}
          </button>
        );
      })}
    </div>
  );
}
