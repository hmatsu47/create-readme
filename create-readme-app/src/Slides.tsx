  import { Show } from 'solid-js';
  import Box from '@suid/material/Box';
  import Stack from '@suid/material/Stack';
  import ListParts from './ListParts';
  import Title from './Title';
  import { feedSd } from './signal';

const Slides = () => {

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
      </Stack>
    </Box>
  );
};

export default Slides;
