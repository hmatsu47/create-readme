
import Avatar from '@suid/material/Avatar';
import Box from '@suid/material/Box';
import Button from '@suid/material/Button';
import Stack from '@suid/material/Stack';
import Typography from '@suid/material/Typography';
import { route, setRoute } from './signal';

export const Title = () => {
  return (
    <>
      <Box sx={{
        paddingTop: "10px",
        width: "100%",
        flexGrow: 1
      }}>
      </Box>
      <Stack direction="row">
        <Avatar
          src={"https://avatars.githubusercontent.com/u/35142774"}
          sx={{
            width: 30,
            height: 30,
            marginLeft: "10px",
            marginRight: "10px"
          }}
          alt={'hmatsu47'}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          hmatsu47 ({route() === 'articles' ? 'Articles' : 'Slides'})
        </Typography>
        <Button
          onClick={(e) => setRoute(route() === 'articles' ? 'slides' : 'articles')}
          color="primary"
          sx={{ textTransform: "none" }}
        >
          {route() === 'articles' ? 'Slides' : 'Articles'}
        </Button>
        <Button
          onClick={(e) => window.location.href='https://github.com/hmatsu47'}
          sx={{
            color: "#24292f",
            textTransform: "none"
          }}
        >
          Back
        </Button>
      </Stack>
    </>
  );
}
