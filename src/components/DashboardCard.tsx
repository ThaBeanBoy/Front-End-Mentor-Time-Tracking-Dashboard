import { useStore } from '@nanostores/react';
import { activeTimeFrame } from '../timeFramesStore';

export type DashboardCardProps = {
  title: string;
  illustration: any;
  tframes: any;
  bgColor: string;
};

export default function DashboardCard({
  title,
  illustration,
  tframes,
  bgColor,
}: DashboardCardProps) {
  const $active = useStore(activeTimeFrame);

  const { current, previous } = tframes[$active.toLowerCase()];

  let titleForPervious: string;

  switch ($active) {
    case 'Daily':
      titleForPervious = 'yesterday';
      break;

    case 'Weekly':
      titleForPervious = 'last week';
      break;

    default:
      titleForPervious = 'last month';
      break;
  }

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className='relative overflow-hidden rounded-2xl pt-11'
    >
      <div id='contents' className='z-10 rounded-t-2xl bg-dark-blue p-8'>
        <div className='mb-8 flex w-full items-center justify-between'>
          <p className='capitalize text-white'>{title}</p>
          <button>
            <img src='/icon-ellipsis.svg' alt='extra' width={21} height={5} />
          </button>
        </div>
        <div className='flex items-center justify-between brk:flex-col brk:items-start brk:justify-start'>
          <h2 className='text-3xl text-white brk:mb-6 brk:text-[56px]'>
            {current}hrs
          </h2>
          <p>
            {titleForPervious} - {previous}
          </p>
        </div>
      </div>

      <img
        src={illustration}
        className='absolute right-8 top-[-8px] z-0'
        alt=''
      />
    </div>
  );
}
