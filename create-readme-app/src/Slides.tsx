import { createResource, Show } from 'solid-js';
import Box from '@suid/material/Box';
import ListParts from './ListParts';
import { setRoute } from './signal';
import { Feed } from './type';
import { getApiData } from './apiHandler';

const Slides = () => {
  const fetchData = async () => await getApiData('/create-readme/feed.json');
  const [data] = createResource<Feed | undefined>(fetchData);
  setRoute('slides');
  return (
    <Show
      when={!data.loading && data()!.sd! && data()!.sd!.length > 0}
      fallback={<></>}
      children={
        <>
          <Box sx={{ paddingTop: "10px" }}></Box>
          <ListParts
              title={"Speaker Deck"}
              id={"sd"}
              color={"#009287"}
              list={data()!.sd!}
              url={"https://speakerdeck.com/hmatsu47"}
            />
        </>
      }
    />
  );
};

export default Slides;
