import useSWR from "swr";
import {Box, Container, CircularProgress, Grid} from '@mui/material';
import { PieChart } from "@mui/x-charts/PieChart";
import { useState, useEffect} from "react";

function fetcher(url) {
    return fetch(url, {
     headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
     },
    }).then(response => response.json());
}

export default function LeetCodeStats() {
    const [data_f, setData] = useState(null)
    const [isLoading_f, setLoading] = useState(true);
    const url = 'https://leetcodeapi-v1.vercel.app/movleafen111';
    const {data, error, isLoading} = useSWR(url, fetcher);
    
    useEffect(() => {
        if(!isLoading && isLoading_f) {
            setLoading(false);
            setData(data);
        }
      }, [isLoading])
    let stats = null;
    if(!isLoading_f){
        stats = { 
            all:data_f.movleafen111.submitStatsGlobal.acSubmissionNum[0],
            easy:data_f.movleafen111.submitStatsGlobal.acSubmissionNum[1],
            medium:data_f.movleafen111.submitStatsGlobal.acSubmissionNum[2],
            hard:data_f.movleafen111.submitStatsGlobal.acSubmissionNum[3]
        };
    }
    
    let StatsComponent = isLoading_f ? <Box padding={5}> <CircularProgress /> </Box> : <>
        <Box sx={{ display:'grid', justifyContent: 'center' }}>
                <Box sx={{borderRadius:'50px', width:'55vh', height:'55vh', bgcolor:'ButtonShadow', boxShadow:'1px 1px 1px', display:'flex', justifyContent:'center', alignItems:'center'}}> 
                    <PieChart 
                        series={[
                            {
                              data: [
                                { id: 0, value: stats.easy.count, label: 'Easy'},
                                { id: 1, value: stats.medium.count, label: 'Medium'},
                                { id: 2, value: stats.hard.count, label: 'Hard'},
                              ],
                            },
                          ]}
                          width={400}
                          height={200}
                    ></PieChart>
                </Box>
        </Box>
        
    </>
           

    return StatsComponent;
}


