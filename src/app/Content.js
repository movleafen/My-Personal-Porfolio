'use client'
import React from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Typewriter from './Typewriter';
import Blinking from './Blinking';
import Grow from '@mui/material/Grow'
import { Stack } from '@mui/material';



function Content({triggerScroll}) {
    var firstMessage = ["My name is Mov Leafen"];
    var secondMessage = ["programmer", "problem solver", "self learner", "Corgi daddy"]
    return <Container disableGutters maxWidth={false} sx={{display:'grid', justifyContent:'center'}}>
            <Stack spacing={5}>
                <Grow in = {true}>
                    <Box>
                        <Box sx={{height:'10vh'}} width="100vhs"></Box>
                        <Typography sx={{ typography: {lg: 'h3', xs:'h4'}}}> Hello World</Typography>
                        <Typography sx={{ display:'inline-block', typography: {lg: 'h3', xs:'h4'}}}>
                            <Typewriter text={firstMessage} delay={100} isMulti={false}></Typewriter>
                            <br/>
                            I am a <Typewriter text={secondMessage} delay={200} isMulti={true}> </Typewriter>
                            <Blinking delay={600}/>
                        </Typography>
                        
                    </Box>
                </Grow>
                <Box key='2a1'>
                    <Typography width='100vh' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed fringilla ipsum. Vestibulum sed rutrum sem. Curabitur sollicitudin nisl id diam varius facilisis. Mauris faucibus nulla nec quam sollicitudin egestas. Nunc vel commodo nisl. Aenean purus magna, hendrerit nec nulla tincidunt, sollicitudin hendrerit est. Vivamus laoreet elit nulla, et ultricies ante scelerisque at. Donec diam erat, sodales sit amet urna nec, pharetra dictum neque. Pellentesque a massa faucibus, vestibulum orci ac, commodo nisi. Nullam commodo, ex nec ultrices efficitur, risus lacus sodales risus, vitae luctus urna augue ac quam.

                            Nulla non ligula mauris. Aliquam erat volutpat. Curabitur bibendum lorem quis sodales rutrum. Nam ut nulla non libero accumsan interdum vel vitae mauris. Quisque pretium arcu ut quam facilisis mollis. Nam ultricies nisi nec orci tristique, at tincidunt nunc facilisis. Mauris non mauris mauris. Morbi eget libero nec neque sagittis efficitur sit amet ut ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec egestas eros nisl, in feugiat massa interdum et. Praesent sit amet dignissim arcu. Quisque non congue libero.

                            Sed ornare ante risus, vitae porta metus convallis sit amet. Sed egestas consectetur metus, a tristique enim maximus quis. Fusce at ante pharetra, euismod nulla ut, ultrices lacus. In hac habitasse platea dictumst. Duis nec scelerisque massa, ac aliquet dui. Maecenas at congue est. Sed eu vehicula magna.

                            Mauris bibendum tempor arcu, sed sollicitudin ante consequat id. Suspendisse potenti. Duis quis maximus metus. Morbi sapien purus, feugiat eu eleifend vel, dictum et nulla. Fusce ut rutrum lacus. Sed rhoncus ut odio vel viverra. Morbi fermentum dictum lorem ac rhoncus. Donec mollis libero imperdiet, bibendum tellus vitae, eleifend risus. Maecenas sit amet commodo lacus. Morbi et rhoncus leo. Mauris scelerisque vulputate mi, non egestas sapien. Mauris vitae sapien eu metus sodales molestie. Aenean eget mauris eros. Nullam eu erat eu diam sollicitudin placerat.

                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec condimentum tincidunt nisi, in elementum odio vehicula sed. Sed a mi tristique, molestie elit at, imperdiet orci. Sed cursus faucibus enim, consectetur pretium ex hendrerit auctor. Aenean mattis pretium est, non egestas est cursus non. Ut rhoncus erat nisl, ut egestas augue bibendum ut. Mauris dui mi, volutpat eu facilisis in, convallis eu ante. Nullam sem ante, lobortis ut velit sed, faucibus malesuada nibh. Praesent luctus eu neque eget mattis. Aenean ac odio augue. Morbi gravida condimentum porta.
                    </Typography>
                </Box>
                <Box key='2a2' ref={triggerScroll} id='para2'>
                    
                    <Typography width='100vh' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed fringilla ipsum. Vestibulum sed rutrum sem. Curabitur sollicitudin nisl id diam varius facilisis. Mauris faucibus nulla nec quam sollicitudin egestas. Nunc vel commodo nisl. Aenean purus magna, hendrerit nec nulla tincidunt, sollicitudin hendrerit est. Vivamus laoreet elit nulla, et ultricies ante scelerisque at. Donec diam erat, sodales sit amet urna nec, pharetra dictum neque. Pellentesque a massa faucibus, vestibulum orci ac, commodo nisi. Nullam commodo, ex nec ultrices efficitur, risus lacus sodales risus, vitae luctus urna augue ac quam.

                            Nulla non ligula mauris. Aliquam erat volutpat. Curabitur bibendum lorem quis sodales rutrum. Nam ut nulla non libero accumsan interdum vel vitae mauris. Quisque pretium arcu ut quam facilisis mollis. Nam ultricies nisi nec orci tristique, at tincidunt nunc facilisis. Mauris non mauris mauris. Morbi eget libero nec neque sagittis efficitur sit amet ut ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec egestas eros nisl, in feugiat massa interdum et. Praesent sit amet dignissim arcu. Quisque non congue libero.

                            Sed ornare ante risus, vitae porta metus convallis sit amet. Sed egestas consectetur metus, a tristique enim maximus quis. Fusce at ante pharetra, euismod nulla ut, ultrices lacus. In hac habitasse platea dictumst. Duis nec scelerisque massa, ac aliquet dui. Maecenas at congue est. Sed eu vehicula magna.

                            Mauris bibendum tempor arcu, sed sollicitudin ante consequat id. Suspendisse potenti. Duis quis maximus metus. Morbi sapien purus, feugiat eu eleifend vel, dictum et nulla. Fusce ut rutrum lacus. Sed rhoncus ut odio vel viverra. Morbi fermentum dictum lorem ac rhoncus. Donec mollis libero imperdiet, bibendum tellus vitae, eleifend risus. Maecenas sit amet commodo lacus. Morbi et rhoncus leo. Mauris scelerisque vulputate mi, non egestas sapien. Mauris vitae sapien eu metus sodales molestie. Aenean eget mauris eros. Nullam eu erat eu diam sollicitudin placerat.

                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec condimentum tincidunt nisi, in elementum odio vehicula sed. Sed a mi tristique, molestie elit at, imperdiet orci. Sed cursus faucibus enim, consectetur pretium ex hendrerit auctor. Aenean mattis pretium est, non egestas est cursus non. Ut rhoncus erat nisl, ut egestas augue bibendum ut. Mauris dui mi, volutpat eu facilisis in, convallis eu ante. Nullam sem ante, lobortis ut velit sed, faucibus malesuada nibh. Praesent luctus eu neque eget mattis. Aenean ac odio augue. Morbi gravida condimentum porta.
                    </Typography>
                </Box>
            </Stack>
        </Container>
    
}

export default Content;