import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Router from 'next/router';

export default function ImgMediaCard({events}) {
  let image = `https://de-ticket-event-image.s3.ap-southeast-1.amazonaws.com/`
    return (
      <div sx={{margin:'auto',padding:'auto'}}>
        {events.map((event) => {
          return(
            <Card sx={{ maxWidth: 345 ,marginBottom:'10px'}} key={event.id}>
              <div onClick={(e)=>{handleClick(e,event.id)}} >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image = {image+event.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {event.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {JSON.stringify(event.description)}
                  </Typography>
                </CardContent>
              </div>
              <CardActions>
                <Button size="small" onClick={()=>{handleClick(event.id)}}>Detail</Button>
                <Button size="small" onClick={()=>{alert("dsfkldjk")}} >Learn More</Button>
              </CardActions>
            </Card>
          )})}
      </div>
  )
};

const handleClick = (id) => {
  Router.push(`/events/${id}`)
  console.log(id);
}


export async function getStaticProps() {
  const res = await fetch('http://localhost:8000/api/events')
  const events = await res.json()

  return {
    props: {
      events: events
    },
  }
}