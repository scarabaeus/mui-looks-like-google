/// <reference types="vite/client" />

declare module '@fontsource-variable/inter';

declare function gtag(
  command: 'event',
  eventName: string,
  params?: Record<string, unknown>
): void;
declare function gtag(command: 'js', date: Date): void;
declare function gtag(
  command: 'config',
  targetId: string,
  params?: Record<string, unknown>
): void;
