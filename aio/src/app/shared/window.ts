import { InjectionToken } from '@bangular/core';

export const WindowToken = new InjectionToken('Window');
export function windowProvider() { return window; }
