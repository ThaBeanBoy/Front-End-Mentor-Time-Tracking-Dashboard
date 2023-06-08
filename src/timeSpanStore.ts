import { atom } from 'nanostores';

type timeSpanTypes = 'Daily' | 'Weekly' | 'Monthly';

export const timeSpans: timeSpanTypes[] = ['Daily', 'Weekly', 'Monthly'];

export const activeTimeSpan = atom<timeSpanTypes>('Weekly');
