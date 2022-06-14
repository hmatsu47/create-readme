import { createSignal } from 'solid-js';

export const [route, setRoute] = createSignal<string>('articles');
