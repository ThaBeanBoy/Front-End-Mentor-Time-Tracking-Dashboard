import { atom } from 'nanostores';

type timeFrameTypes = 'Daily' | 'Weekly' | 'Monthly';

export const timeFrames: timeFrameTypes[] = ['Daily', 'Weekly', 'Monthly'];

export const activeTimeFrame = atom<timeFrameTypes>('Weekly');
