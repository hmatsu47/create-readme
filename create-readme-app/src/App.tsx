import { Component, createSignal, onMount, Show } from 'solid-js';
import Box from '@suid/material/Box';
import Stack from '@suid/material/Stack';
import ListParts from './ListParts';
import { getApiData } from './apiHandler';
import { Item } from './type';

const App: Component = () => {
  const [feedQiita, setFeedQiita] = createSignal<Item[] | null>(null);
  const [feedZenn, setFeedZenn] = createSignal<Item[] | null>(null);

  onMount (async () => {
    const feed = await getApiData('./feed.json');
    setFeedQiita(feed.qiita);
    setFeedZenn(feed.zenn);
  });

  return (
    <Box
      sx={{
        padding: "10px",
        width: "100%",
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
      </Stack>
    </Box>
  );
};

export default App;
