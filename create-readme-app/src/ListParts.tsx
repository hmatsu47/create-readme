import { For, Show } from 'solid-js';
import AppBar from '@suid/material/AppBar';
import Box from '@suid/material/Box';
import Card from '@suid/material/Card';
import CardContent from '@suid/material/CardContent';
import Stack from '@suid/material/Stack';
import Typography from '@suid/material/Typography';
import { Item } from './type';
import { formatDate } from './formatDate';

type Props = {
  title: string;
  id: string;
  color: string;
  list: Item[];
  url: string;
};

export const ListParts = (props: Props) => {
  return (
    <Box>
      <Stack spacing={1} direction="column" id={props.id}>
        <a href={props.url} target={'_blank'}>
          <AppBar position="static" sx={{ backgroundColor: props.color }}>
            <Stack direction="row">
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  padding: '0 0 0 10px',
                }}
              >
                {props.title}
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  color: 'white',
                  paddingRight: '10px',
                }}
              >
                more...
              </Typography>
            </Stack>
          </AppBar>
        </a>
        <Show
          when={props.list.length > 0}
          fallback={
            <Box sx={{ margin: 'auto' }}>
              <Typography variant="subtitle1" component="div">
                対象の項目がありません。
              </Typography>
            </Box>
          }
        >
          <For each={props.list} fallback={<></>}>
            {(item) => (
              <Card variant="outlined">
                <CardContent>
                  <Stack spacing={1} direction="row">
                    <Box
                      sx={{
                        width: '88%',
                        marginLeft: '0',
                        marginRight: 'auto',
                        textAlign: 'left',
                      }}
                    >
                      <a href={item.link} target={'_blank'}>
                        <Typography variant="subtitle1" color="text.secondary">
                          {item.title}
                        </Typography>
                      </a>
                    </Box>
                    <Box
                      sx={{
                        width: '12%',
                        marginLeft: 'auto',
                        marginRight: '0',
                        textAlign: 'right',
                      }}
                    >
                      <Typography variant="subtitle1" color="text.secondary">
                        {formatDate(new Date(item.published))}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            )}
          </For>
        </Show>
      </Stack>
    </Box>
  );
};
