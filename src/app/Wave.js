import {makeStyles, createStyles} from '@mui/styles'


const cssWave = makeStyles(() => createStyles({
    "css_waves": {
      "position": "relative",
      "width": "100%",
      "height": "15vh",
      "marginBottom": "-7px",
      "minHeight": "100px",
      "maxHeight": "150px"
    },
    "animated_waves___use": {
      "animation": "infinite-waves 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite"
    },
    "animated_waves___use_nth_child_1": {
      "animationDelay": "-2s",
      "animationDuration": "7s"
    },
    "animated_waves___use_nth_child_2": {
      "animationDelay": "-3s",
      "animationDuration": "10s"
    },
    "animated_waves___use_nth_child_3": {
      "animationDelay": "-4s",
      "animationDuration": "13s"
    },
    "animated_waves___use_nth_child_4": {
      "animationDelay": "-5s",
      "animationDuration": "20s"
    },
    "@media (max-width: 768px)": {
      "__expression__": "(max-width: 768px)",
      "css_waves": {
        "height": "40px",
        "minHeight": "40px"
      }
    }
  }))