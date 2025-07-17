import 'dotenv/config';

export default {
    expo: {
        name: 'My Podcast App',
        slug: 'ios-podcast-app',
        extra: {
            API_URL: process.env.API_URL,
            X_USER_ID: process.env.X_USER_ID,
            X_API_KEY: process.env.X_API_KEY,
        },
    },
    
};
