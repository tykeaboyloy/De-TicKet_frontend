import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { MainButton,useShowPopup,useHapticFeedback} from '@vkruglikov/react-telegram-web-app';
import { Grid } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

import Box from '@mui/material/Box';
import SpatialAudioIcon from '@mui/icons-material/SpatialAudio';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import Paper from '@mui/material/Paper';

export default function ImgMediaCard({events}) {
  const [bot,setBot] = React.useState(undefined);
  const [value, setValue] = React.useState(0);
  // const [value, setValue] = React.useState(0);
  const ref = React.useRef(null)
  React.useEffect(()=>{
    setBot(window.Telegram.WebApp)
  })

  const buttonColor = bot!==undefined ? bot.themeParams.button_color : "black";
  const colorScheme = bot!==undefined ? bot.colorScheme : "light";


  const showPopup = useShowPopup();
  const [impactOccurred, notificationOccurred, selectionChanged] =
  useHapticFeedback();

  const border = colorScheme == 'light' ? "none" : "1px solid red"
  let image = `https://de-ticket-event-image.s3.ap-southeast-1.amazonaws.com/`;
    return (
      <div>
        {events.map((event) => {
          return(
            <Card onClick={()=>{handleClick}} sx={{ margin:'10px 10px 10px 10px', backgroundColor:"transparent", border:border, borderRadius:"10px"}} key={event.id} elevation={5}>
              <div onClick={(e)=>{handleClick(e,event.id)}} >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image = {image+event.image}
                />
                <CardContent >
                  <Grid container spacing={1} >
                    <Grid item xs={3} xl={3}>
                      <div style={{textAlign:"center", backgroundColor:'rgba(219, 216, 211, 0.2)', width:"70%" ,borderRadius:"10px", aspectRatio:"1/1", color:buttonColor}}>
                        <Typography >
                        {event.start_date[0]+event.start_date[1]+event.start_date[2]+event.start_date[3]}
                        </Typography>
                        <Typography>
                          {event.start_date[5]+event.start_date[6]+event.start_date[7]+event.start_date[8]+event.start_date[9]}
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item xs={9} xl={9}>
                      <Typography gutterBottom variant="h6" component="div" fontWeight={"semi-bold"} >
                        {event.name}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        <PlaceIcon fontSize='small' sx={{marginRight:"2px", verticalAlign:"sub"}} />
                        {event.location}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </div>
            </Card>
          )})}
          {/* <BackButton/> */}
          <Box sx={{ pb: 7 }} ref={ref}>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
              <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction label="Concert" icon={<SpatialAudioIcon />} />
                <BottomNavigationAction label="Sport" icon={<SportsSoccerIcon />} />
                <BottomNavigationAction label="Movie" icon={<EventSeatIcon />} />
              </BottomNavigation>
            </Paper>
          </Box>
          <MainButton text='Click me' onClick={()=>{handleMainButtonClick(showPopup,impactOccurred("light"),bot)}}></MainButton>
      </div>
  )
};

const handleMainButtonClick = (showPopup,haptic,bot) => {
  showPopup({message:"Release soon!"})
  haptic();
}

const handleClick = () => {
  // Router.push(`/events/${id}`)
  // console.log(id);
  alert("Event ended")
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