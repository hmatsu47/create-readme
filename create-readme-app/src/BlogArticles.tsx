  import { onMount, Show } from 'solid-js';
  import Box from '@suid/material/Box';
  import Stack from '@suid/material/Stack';
  import ListParts from './ListParts';
  import Title from './Title';
  import {
    feedHatena,
    feedNote,
    feedQiita,
    feedZenn,
  } from './signal';

const BlogArticles = () => {

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

export default BlogArticles;
