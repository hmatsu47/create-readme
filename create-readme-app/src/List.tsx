import { createResource, onMount, Show } from 'solid-js';
import { useLocation } from 'solid-app-router';
import Box from '@suid/material/Box';
import Stack from '@suid/material/Stack';
import ListParts from './ListParts';
import Title from './Title';
import { getApiData } from './apiHandler';
import { route, setRoute } from './signal';
import { Feed } from './type';

const List = () => {
  const location = useLocation();
  const fetchData = async () => await getApiData('./feed.json');
  const [data] = createResource<Feed | undefined>(fetchData);

  onMount (async () => {
    const locationRoute: string = location.query?.route;
    if (locationRoute === 'articles' || locationRoute === 'slides') {
      const locationPath = location.pathname;
      const replacePathName = locationPath.substring(locationPath.indexOf('/'), locationPath.lastIndexOf('/') + 1);
      window.history.replaceState(null, '', replacePathName);
      setRoute(locationRoute);
    }
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
          when={route() === 'articles'}
          fallback={<></>}
        >
          <Show
            when={!data.loading && data()!.qiita! && data()!.qiita!.length > 0}
            fallback={<></>}
          >
            <Box sx={{ paddingTop: "10px" }}></Box>
            <ListParts
              title={"Qiita"}
              id={"qiita"}
              color={"#55c500"}
              list={data()!.qiita!}
              url={"https://qiita.com/hmatsu47"}
            />
          </Show>
          <Show
            when={!data.loading && data()!.zenn! && data()!.zenn!.length > 0}
            fallback={<></>}
          >
            <Box sx={{ paddingTop: "20px" }}></Box>
            <ListParts
              title={"Zenn (Articles & Books)"}
              id={"zenn"}
              color={"#3ea8ff"}
              list={data()!.zenn!}
              url={"https://zenn.dev/hmatsu47"}
            />
          </Show>
          <Show
            when={!data.loading && data()!.note! && data()!.note!.length > 0}
            fallback={<></>}
          >
            <Box sx={{ paddingTop: "20px" }}></Box>
            <ListParts
              title={"Note"}
              id={"note"}
              color={"#2cb696"}
              list={data()!.note!}
              url={"https://note.com/hmatsu47"}
            />
          </Show>
          <Show
            when={!data.loading && data()!.hatena! && data()!.hatena!.length > 0}
            fallback={<></>}
          >
            <Box sx={{ paddingTop: "20px" }}></Box>
            <ListParts
              title={"Hatena Blog"}
              id={"hatena"}
              color={"#50b5b5"}
              list={data()!.hatena!}
              url={"https://hmatsu47.hatenablog.com/"}
            />
          </Show>
        </Show>
        <Show
          when={route() === 'slides'}
          fallback={<></>}
        >
          <Show
            when={!data.loading && data()!.sd! && data()!.sd!.length > 0}
            fallback={<></>}
          >
            <Box sx={{ paddingTop: "10px" }}></Box>
            <ListParts
              title={"Speaker Deck"}
              id={"sd"}
              color={"#009287"}
              list={data()!.sd!}
              url={"https://speakerdeck.com/hmatsu47"}
            />
          </Show>
        </Show>
      </Stack>
    </Box>
  );
};

export default List;