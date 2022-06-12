import { Resource, Show } from 'solid-js';
import Box from '@suid/material/Box';
import Stack from '@suid/material/Stack';
import ListParts from './ListParts';
import { setRoute } from './signal';
import { Feed } from './type';

type Props = {
  data: Resource<Feed | undefined>;
}

const Blog = (props: Props) => {
  setRoute('blog');
  return (
    <>
      <Stack direction="column">
        <Show
          when={!props.data.loading && props.data()!.qiita! && props.data()!.qiita!.length > 0}
          fallback={<></>}
          children={
            <>
              <Box sx={{ paddingTop: "10px" }}></Box>
              <ListParts
                title={"Qiita"}
                id={"qiita"}
                color={"#55c500"}
                list={props.data()!.qiita!}
                url={"https://qiita.com/hmatsu47"}
              />
            </>
          }
        />
        <Show
          when={!props.data.loading && props.data()!.zenn! && props.data()!.zenn!.length > 0}
          fallback={<></>}
          children={
            <>
              <Box sx={{ paddingTop: "20px" }}></Box>
              <ListParts
                title={"Zenn (Articles & Books)"}
                id={"zenn"}
                color={"#3ea8ff"}
                list={props.data()!.zenn!}
                url={"https://zenn.dev/hmatsu47"}
              />
            </>
          }
        />
        <Show
          when={!props.data.loading && props.data()!.note! && props.data()!.note!.length > 0}
          fallback={<></>}
          children={
            <>
              <Box sx={{ paddingTop: "20px" }}></Box>
              <ListParts
                title={"Note"}
                id={"note"}
                color={"#2cb696"}
                list={props.data()!.note!}
                url={"https://note.com/hmatsu47"}
              />
            </>
          }
        />
        <Show
          when={!props.data.loading && props.data()!.hatena! && props.data()!.hatena!.length > 0}
          fallback={<></>}
          children={
            <>
              <Box sx={{ paddingTop: "20px" }}></Box>
              <ListParts
                title={"Hatena Blog"}
                id={"hatena"}
                color={"#50b5b5"}
                list={props.data()!.hatena!}
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
