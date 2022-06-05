  import { Component, onMount, Show } from 'solid-js';
  import Box from '@suid/material/Box';
  import Stack from '@suid/material/Stack';
  import ListParts from './ListParts';
  import Title from './Title';
  import { getApiData } from './apiHandler';
  import {
    feedHatena,
    feedNote,
    feedQiita,
    feedSd,
    feedZenn,
    route,
    setFeedHatena,
    setFeedNote,
    setFeedQiita,
    setFeedSd,
    setFeedZenn,
  } from './signal';

const App: Component = () => {

  onMount (async () => {
    const feed = await getApiData('./feed.json');
    setFeedQiita(feed.qiita);
    setFeedZenn(feed.zenn);
    setFeedNote(feed.note);
    setFeedHatena(feed.hatena);
    setFeedSd(feed.sd);
  });

  return (
    <Box
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "90%",
        minWidth: "300px",
        maxWidth: "880px",
        justifyContent: "center"
      }}
      aria-live="polite"
    >
      <Title />
      <Stack direction="column">
        <Show
          when={route() === 'blog'}
          fallback={<></>}
        >
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
        </Show>
        <Show
          when={route() === 'slides'}
          fallback={<></>}
        >
          <Show
            when={feedSd() && feedSd()!.length > 0}
            fallback={<></>}
          >
            <Box sx={{ paddingTop: "10px" }}></Box>
            <ListParts
              title={"Speaker Deck"}
              color={"#009287"}
              list={feedSd()!}
              url={"https://speakerdeck.com/hmatsu47"}
            />
          </Show>
        </Show>
      </Stack>
    </Box>
  );
};

export default App;
