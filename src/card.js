import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, CardActionArea, Button } from '@mui/material';
import axios from 'axios';

export default function ActionAreaCard() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [popularMovie, setPopularMovie] = useState(null);

  useEffect(() => {
    const fetchPopularMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
        );
        console.log(response.data.results[0]); // Log the first movie
        setPopularMovie(response.data.results[0]);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };
  
    fetchPopularMovie();
  }, []);
  

  const cardData = [
    {
      title: popularMovie ? popularMovie.title : 'Loading...',
      description: popularMovie ? 'Popular Movie of the Day!' : '',
      imageUrl: popularMovie
        ? `https://image.tmdb.org/t/p/w500${popularMovie.poster_path}`
        : 'https://via.placeholder.com/1200x550?text=Loading...',
      width: 1200,
      height: 550,
    },
    {
      title: 'Another Title',
      description: 'Another description here...',
      imageUrl: 'https://via.placeholder.com/1000x550?text=Card+2',
      width: 1000,
      height: 550,
    },
    {
      title: 'Yet Another Title',
      description: 'This is card 3!',
      imageUrl: 'https://via.placeholder.com/1100x550?text=Card+3',
      width: 1100,
      height: 550,
    },
  ];

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
  };

  const { title, description, imageUrl, width, height } = cardData[currentCardIndex];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
        left: '-135px',
        top: '-70px',
      }}
    >
      {/* Previous Button */}
      <Button
        variant="contained"
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: '20px',
          zIndex: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
        }}
      >
        {'<'}
      </Button>

      {/* Card Component */}
      <Card
        elevation={10}
        sx={{
          width: width,
          height: height,
          overflow: 'hidden',
          transition: 'transform 0.3s ease-in-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            transform: 'scale(1.05)', // Zoom effect on the entire card
          },
        }}
      >
        <CardActionArea sx={{ height: '100%' }}>
          <div
            className="card-media"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <CardContent
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              color: '#fff',
              background: 'rgba(0, 0, 0, 0.6)',
              padding: '16px',
            }}
          >
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="inherit">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Next Button */}
      <Button
        variant="contained"
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: '20px',
          zIndex: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
        }}
      >
        {'>'}
      </Button>
    </Box>
  );
}
