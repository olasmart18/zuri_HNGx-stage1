const express = require('express');

const app = express();
app.use(express.json());

// GET route to acceept query
app.get('/api', (req, res) => {
    let days = ['sunday', 'Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday']
    const date = new Date()
    const currentDay = days[date.getDay()];
    current_time = date.toISOString().split('.')[0] + 'Z';
    const name = 'Eweleye olamide';
    const myTrack = 'Backend';
    file_url = "https://github.com/olasmart18/zuri_HNGx-stage1/blob/main/server.js";
    repo_url =  "https://github.com/olasmart18/zuri_HNGx-stage1";

    const  { slack_name, track } = req.query
    res.status(200).json({
            slack_name: slack_name && name,
            current_day: currentDay,
            utc_time: current_time,
            track: track && myTrack.toLowerCase(),
            github_file_url: file_url,
            github_repo_url: repo_url,
            status_code: 200,
    })
})

app.listen(3000, () => console.log('server running on port 3000'));