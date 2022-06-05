import Avatar from '@suid/material/Avatar';
import Box from '@suid/material/Box';
import Button from '@suid/material/Button';
import Stack from '@suid/material/Stack';
import Typography from '@suid/material/Typography';
import { route, setRoute } from './signal';

const Title = () => {
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
            width: 32,
            height: 32,
            marginLeft: "10px",
            marginRight: "10px"
          }}
          alt={'hmatsu47'}
        />
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          hmatsu47 ({route() === 'blog' ? 'Blog Articles' : 'Slides'})
        </Typography>
        <Button
          onClick={(e) => setRoute('blog')}
          color="primary"
          sx={{ textTransform: "none" }}
        >
          Blog Articles
        </Button>
        <Button
          onClick={(e) => setRoute('slides')}
          color="primary"
          sx={{ textTransform: "none" }}
        >
          Slides
        </Button>
        <Button
          onClick={(e) => window.location.href='https://github.com/hmatsu47'}
          sx={{
            color: "#24292f",
            textTransform: "none"
          }}
        >
          Back to Repository
        </Button>
      </Stack>
    </>
  );
}

export default Title;
