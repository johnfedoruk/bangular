import { Injectable } from '@bangular/core';

@Injectable()
export class ToastService {
  activate: (message?: string, title?: string) => void;
}
