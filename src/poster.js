import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";

// Styling for Paper component
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  borderRadius: '30px',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  transition: 'transform 0.3s ease-in-out',

  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function RoundedCorners() {
  // State to store movie data
  const [movie, setMovie] = React.useState(null);

  // Fetching movie data on component mount
  React.useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=2`
        );
        setMovie(response.data.results[0]); // Set the first movie from page 2
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, []); // Empty dependency array to run only once on mount

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
          padding: 2,
          marginLeft: '-200px',
          '& > :not(style)': {
            width: 240,
            height: 400,
          },
        }}
      >
        {movie && (
          <DemoPaper elevation={0} square={false} sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2,
            backgroundColor: 'background.default', color: 'text.primary'
          }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '30px' }}
            />
            <Typography variant="h6" sx={{ position: 'relative', top: '20px', color: 'white' }}>
              {movie.title}
            </Typography>
            <Rating name="read-only" value={movie.vote_average / 2} readOnly />
          </DemoPaper>
        )}
      </Box>
    </ThemeProvider>
  );
}
