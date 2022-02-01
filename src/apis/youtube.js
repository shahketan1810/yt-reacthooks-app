import axios from 'axios';

import KEY from './key';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 6,
        type: 'video',
        key : KEY
    }
});
