import { createSignal } from "solid-js";
import { Item } from "./type";

export const [route, setRoute] = createSignal<string>('blog');
export const [feedQiita, setFeedQiita] = createSignal<Item[] | null>(null);
export const [feedZenn, setFeedZenn] = createSignal<Item[] | null>(null);
export const [feedNote, setFeedNote] = createSignal<Item[] | null>(null);
export const [feedHatena, setFeedHatena] = createSignal<Item[] | null>(null);
export const [feedSd, setFeedSd] = createSignal<Item[] | null>(null);
