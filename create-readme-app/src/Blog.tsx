import { createResource, Show } from 'solid-js';
import Box from '@suid/material/Box';
import Stack from '@suid/material/Stack';
import ListParts from './ListParts';
import { setRoute } from './signal';
import { Feed } from './type';
import { getApiData } from './apiHandler';

const Blog = () => {
  const fetchData = async () => await getApiData('/create-readme/feed.json');
  const [data] = createResource<Feed | undefined>(fetchData);
  setRoute('blog');
  return (
    <>
      <Stack direction="column">
        <Show
          when={!data.loading && data()!.qiita! && data()!.qiita!.length > 0}
          fallback={<></>}
          children={
            <>
              <Box sx={{ paddingTop: "10px" }}></Box>
              <ListParts
                title={"Qiita"}
                id={"qiita"}
                color={"#55c500"}
                list={data()!.qiita!}
                url={"https://qiita.com/hmatsu47"}
              />
            </>
          }
        />
        <Show
          when={!data.loading && data()!.zenn! && data()!.zenn!.length > 0}
          fallback={<></>}
          children={
            <>
              <Box sx={{ paddingTop: "20px" }}></Box>
              <ListParts
                title={"Zenn (Articles & Books)"}
                id={"zenn"}
                color={"#3ea8ff"}
                list={data()!.zenn!}
                url={"https://zenn.dev/hmatsu47"}
              />
            </>
          }
        />
        <Show
          when={!data.loading && data()!.note! && data()!.note!.length > 0}
          fallback={<></>}
          children={
            <>
              <Box sx={{ paddingTop: "20px" }}></Box>
              <ListParts
                title={"Note"}
                id={"note"}
                color={"#2cb696"}
                list={data()!.note!}
                url={"https://note.com/hmatsu47"}
              />
            </>
          }
        />
        <Show
          when={!data.loading && data()!.hatena! && data()!.hatena!.length > 0}
          fallback={<></>}
          children={
            <>
              <Box sx={{ paddingTop: "20px" }}></Box>
              <ListParts
                title={"Hatena Blog"}
                id={"hatena"}
                color={"#50b5b5"}
                list={data()!.hatena!}
                url={"https://hmatsu47.hatenablog.com/"}
              />
            </>
          }
        />
      </Stack>
    </>
  );
};

export default Blog;
