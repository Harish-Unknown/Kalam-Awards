import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AwardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
  autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const data = [
    {
        title: 'Kalam Best School Principal Award 2024',
        img: '/images/1.svg'
    },
    {
        title: 'Leo Muthu Best School Award 2024',
        img: '/images/2.svg'
    },
    {
        title: 'Charles Babbage Best Computer Science Teacher Award 2024',
        img: '/images/3.svg'
    },
    {
        title: 'P.C.Ray Best Chemistry Teacher Award 2024',
        img: '/images/4.svg'
    },
    {
        title: 'Srinivasa Ramanujan Best Maths Teacher Award 2024',
        img: '/images/5.svg'
    },
    {
        title: 'Mendel Best Botany Teacher Merit 2024',
        img: '/images/6.svg'
    },
    {
        title: 'Charles Darwin Best Zoology Teacher Award 2024',
        img: '/images/7.svg'
    },
    {
        title: 'Bharathidasan Best Tamil Teacher Award 2024',
        img: '/images/8.svg'
    },
    {
        title: 'Shakespeare Best English Teacher Award 2024',
        img: '/images/9.svg'
    },
    {
        title: 'Sir C.V Raman Best Physics Teacher Award 2024',
        img: '/images/10.svg'
    }
];


return (
  <div className='bg-Award'>
    <div className='p-10 text-center'>
      <h1 className='text-5xl m-3 font-bold'>Award Gallery</h1>
      <p className='text-[17px] m-3'>Explore our Honoured award categories</p>
    </div>
    <div className='w-5/6 mx-auto pb-20'>
    <Slider {...settings}>
      {data.map((d) => (
            <Card className='max-w-[350px] h-[450px] ml-8 md:ml-5' sx={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
              <CardMedia
                sx={{ height: 350 }}
                image={d.img}
              />
              <CardContent className="flex-grow">
                <Typography gutterBottom variant="h5" sx={{ fontSize: '18px', fontWeight: '500' }} component="div">
                  {d.title}
                </Typography>
              </CardContent>
            </Card>
      ))}
    </Slider>
  </div>
  </div>
  
);
}

export default AwardSlider;
