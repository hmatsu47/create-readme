import { onMount } from 'solid-js';
import { Route, Routes, useLocation, useNavigate } from 'solid-app-router';
import Box from '@suid/material/Box';
import Title from './Title';
import Blog from './Blog';
import Slides from './Slides';

const List = () => {
  const routerLocation = useLocation();
  const navigate = useNavigate();

  onMount (async () => {
    // query 付きの場合のリダイレクト処理
    const locationRoute: string = routerLocation.query?.route;
    if (locationRoute === 'blog' || locationRoute === 'slides') {
      navigate(`/create-readme/${locationRoute}`, { replace: true });
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
      <Routes>
        <Route
          path="/create-readme/"
          element={<Blog />}
        />
        <Route
          path="/create-readme/blog"
          element={<Blog />}
        />
        <Route
          path="/create-readme/slides"
          element={<Slides />}
        />
      </Routes>
    </Box>
  );
};

export default List;
