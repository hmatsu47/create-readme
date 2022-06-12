import { Link } from 'solid-app-router';
import Avatar from '@suid/material/Avatar';
import Box from '@suid/material/Box';
import Button from '@suid/material/Button';
import Stack from '@suid/material/Stack';
import Typography from '@suid/material/Typography';
import { route } from './signal';

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
        <Link href="/create-readme/blog">
          <Button
            color="primary"
            sx={{ textTransform: "none" }}
          >
            Blog Articles
          </Button>
        </Link>
        <Link href="/create-readme/slides">
          <Button
            color="primary"
            sx={{ textTransform: "none" }}
          >
            Slides
          </Button>
        </Link>
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
