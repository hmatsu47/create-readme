import { Component, createSignal, onMount, Show } from 'solid-js';
import Box from '@suid/material/Box';
import Stack from '@suid/material/Stack';
import ListParts from './ListParts';
import { getApiData } from './apiHandler';
import { Item } from './type';

const App: Component = () => {
  const [feedQiita, setFeedQiita] = createSignal<Item[] | null>(null);
  const [feedZenn, setFeedZenn] = createSignal<Item[] | null>(null);
  const [feedNote, setFeedNote] = createSignal<Item[] | null>(null);
  const [feedHatena, setFeedHatena] = createSignal<Item[] | null>(null);

  onMount (async () => {
    const feed = await getApiData('./feed.json');
    setFeedQiita(feed.qiita);
    setFeedZenn(feed.zenn);
    setFeedNote(feed.note);
    setFeedHatena(feed.hatena);
  });

  return (
    <Box
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "90%",
        minWidth: "320px",
        maxWidth: "1280px",
        display: "flex",
        justifyContent: "center"
      }}
      aria-live="polite"
    >
      <Stack direction="column">
        <Show
          when={feedQiita() && feedQiita()!.length > 0}
          fallback={<></>}
        >
          <ListParts
            title={"Qiita"}
            color={"#55c500"}
            list={feedQiita()!}
          />
        </Show>
        <Box sx={{ paddingTop: "20px" }}></Box>
        <Show
          when={feedZenn() && feedZenn()!.length > 0}
          fallback={<></>}
        >
          <ListParts
            title={"Zenn"}
            color={"#3ea8ff"}
            list={feedZenn()!}
          />
        </Show>
        <Box sx={{ paddingTop: "20px" }}></Box>
        <Show
          when={feedNote() && feedNote()!.length > 0}
          fallback={<></>}
        >
          <ListParts
            title={"Note"}
            color={"#2cb696"}
            list={feedNote()!}
          />
        </Show>
        <Box sx={{ paddingTop: "20px" }}></Box>
        <Show
          when={feedHatena() && feedHatena()!.length > 0}
          fallback={<></>}
        >
          <ListParts
            title={"Hatena"}
            color={"#50b5b5"}
            list={feedHatena()!}
          />
        </Show>
      </Stack>
    </Box>
  );
};

export default App;
