import { Resource, Show } from 'solid-js';
import Box from '@suid/material/Box';
import ListParts from './ListParts';
import { setRoute } from './signal';
import { Feed } from './type';

type Props = {
  data: Resource<Feed | undefined>;
}

const Slides = (props: Props) => {
  setRoute('slides');
  return (
    <Show
      when={!props.data.loading && props.data()!.sd! && props.data()!.sd!.length > 0}
      fallback={<></>}
      children={
        <>
          <Box sx={{ paddingTop: "10px" }}></Box>
          <ListParts
              title={"Speaker Deck"}
              id={"sd"}
              color={"#009287"}
              list={props.data()!.sd!}
              url={"https://speakerdeck.com/hmatsu47"}
            />
        </>
      }
    />
  );
};

export default Slides;
