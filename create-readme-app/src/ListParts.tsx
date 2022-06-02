import { For, Show } from 'solid-js';
import AppBar from '@suid/material/AppBar';
import Box from '@suid/material/Box';
import Card from '@suid/material/Card';
import CardContent from '@suid/material/CardContent';
import Stack from '@suid/material/Stack';
import Typography from '@suid/material/Typography';
import { Item } from './type';

type Props = {
  title: string;
  color: string;
  list: Item[];
}

const ListParts = (props: Props) => {
  return (
    <Box>
      <Stack
        spacing={1}
        direction="column"
      >
        <AppBar
          position="static"
          sx={{ backgroundColor: props.color }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              padding: "0 0 0 10px"
            }}
          >
            {props.title}
          </Typography>
        </AppBar>
        <Show
          when={props.list.length > 0}
          fallback={<></>}
        >
          <For
            each={props.list}
            fallback={<></>}
          >
            {(item) =>
              <Card variant="outlined">
                <CardContent>
                  <Stack
                    spacing={1}
                    direction="row"
                  >
                    <a
                      href={item.link}
                      target="_blank"
                    >
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        gutterBottom
                      >
                        {item.title}
                      </Typography>
                    </a>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        gutterBottom
                      >
                        （{new Date(item.published).toLocaleString('ja-JP')}）
                      </Typography>
                  </Stack>
                </CardContent>
              </Card>
            }
          </For>
        </Show>
      </Stack>
    </Box>
  );
}

export default ListParts;
