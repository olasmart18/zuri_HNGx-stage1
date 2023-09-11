const express = require('express');

const app = express();
app.use(express.json());

let days = ['sunday', 'monday', 'tuesday', 'wednessday', 'thursday', 'friday', 'saturday']
const date = new Date()
const currentDay = days[date.getDay()];
current_time = date.toISOString();

// test route
const name = 'Eweleye olamide';
const myTrack = 'Backend';
file_url = "https://github.com/username/repo/blob/main/file_name.ext"
repo_url =  "https://github.com/username/repo",

app.get('/api', (req, res) => {
    const  { slack_name, track } = req.query
    res.status(200).json({
        data: {
            slack_name: slack_name && name,
            current_day: currentDay,
            utc_time: current_time,
            track: track && myTrack,
            github_file_url: file_url,
            github_repo_url: repo_url,
            status_code: 200,
        } 
    })
})

app.listen(3030, () => console.log('server running on port 3030'));