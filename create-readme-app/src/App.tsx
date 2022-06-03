import { Component, createSignal, onMount, Show } from 'solid-js';
import Avatar from '@suid/material/Avatar';
import Box from '@suid/material/Box';
import Stack from '@suid/material/Stack';
import ListParts from './ListParts';
import Typography from '@suid/material/Typography';
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
        <Box sx={{ paddingTop: "10px" }}></Box>
        <Stack direction="row">
          <Avatar
            src={"https://avatars.githubusercontent.com/u/35142774"}
            sx={{
              width: 32,
              height: 32,
              marginLeft: "10px",
              marginRight: "10px"
            }}
            alt={'hmatsu47'}
          />
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            hmatsu47 (Blog Articles)
          </Typography>
        </Stack>
        <Show
          when={feedQiita() && feedQiita()!.length > 0}
          fallback={<></>}
        >
          <Box sx={{ paddingTop: "10px" }}></Box>
          <ListParts
            title={"Qiita"}
            color={"#55c500"}
            list={feedQiita()!}
            url={"https://qiita.com/hmatsu47"}
          />
        </Show>
        <Show
          when={feedZenn() && feedZenn()!.length > 0}
          fallback={<></>}
        >
          <Box sx={{ paddingTop: "20px" }}></Box>
          <ListParts
            title={"Zenn (Articles & Books)"}
            color={"#3ea8ff"}
            list={feedZenn()!}
            url={"https://zenn.dev/hmatsu47"}
          />
        </Show>
        <Show
          when={feedNote() && feedNote()!.length > 0}
          fallback={<></>}
        >
          <Box sx={{ paddingTop: "20px" }}></Box>
          <ListParts
            title={"Note"}
            color={"#2cb696"}
            list={feedNote()!}
            url={"https://note.com/hmatsu47"}
          />
        </Show>
        <Show
          when={feedHatena() && feedHatena()!.length > 0}
          fallback={<></>}
        >
          <Box sx={{ paddingTop: "20px" }}></Box>
          <ListParts
            title={"Hatena Blog"}
            color={"#50b5b5"}
            list={feedHatena()!}
            url={"https://hmatsu47.hatenablog.com/"}
          />
        </Show>
      </Stack>
    </Box>
  );
};

export default App;
