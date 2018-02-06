import { InjectionToken } from '@bangular/core';

export const CurrentDateToken = new InjectionToken('CurrentDate');
export function currentDateProvider() { return new Date(); }
