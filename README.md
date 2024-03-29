# YouTube Clone

Welcome to our YouTube clone project! 🚀 Get ready to explore its awesome features and start your video journey just like on the real YouTube.

## Features 🌟

📌 Real-time Data Fetching: Utilizing the power of the YouTube API, my clone fetches real-time data, ensuring users always have the latest content at their fingertips.

📌 Infinite Scrolling: Seamlessly browse through an endless stream of videos with the convenience of infinite scrolling.

📌 Search Optimization: Enhancing user experience with optimized search functionality, making it easier to find the desired content quickly.

📌 Cached Search Suggestions: Implemented caching for search suggestions, providing instant and relevant suggestions to users as they type.

📌 Live Chat Integration: Engage with fellow users through a live chat feature, leveraging API polling for real-time communication.

📌 Filtering Videos: Users can filter videos based on various criteria.

📌 Shimmer Effect: Enhancing the user interface with a shimmer effect, adding a touch of elegance and dynamism to the design.

📌 Light and Dark Theme: Offering users the flexibility to choose between light and dark themes for a personalized viewing experience.

Feel free to use your Google API key and integrate.

## Setting up .env file

Set up your .env file to the root directory of you project and copy paste the below YouTube APIs.
Note: Create your own google api key.

```
REACT_APP_GOOGLE_API_KEY ='<YOUR_SECRET_GOOGLE_API_KEY_GOES_HERE>'
YOUTUBE_VIDEO_BASE_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key='
YOUTUBE_VIDEO_DETAIL_BASE_URL ='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key='
YOUTUBE_MORE_VIDEO_BASE_URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key='
YOUTUBE_SEARCH_VIDEO_WITH_QUERY_BASE_URL = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=video&key='
REACT_APP_YOUTUBE_VIDEO_URL = ${YOUTUBE_VIDEO_BASE_URL} + ${REACT_APP_GOOGLE_API_KEY}
REACT_APP_YOUTUBE_VIDEO_DETAIL = ${YOUTUBE_VIDEO_DETAIL_BASE_URL} + ${REACT_APP_GOOGLE_API_KEY}
REACT_APP_YOUTUBE_SEARCH_API = 'http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q='
REACT_APP_YOUTUBE_MORE_VIDEO_URL = ${YOUTUBE_MORE_VIDEO_BASE_URL} + ${REACT_APP_GOOGLE_API_KEY}
REACT_APP_OFFSET_LIVE_CHAT = 25
REACT_APP_YOUTUBE_SEARCH_VIDEO_WITH_QUERY = ${YOUTUBE_SEARCH_VIDEO_WITH_QUERY_BASE_URL} + ${REACT_APP_GOOGLE_API_KEY}
```

## Contributing 🤝

I welcome your contributions! Whether it's pull requests, bug reports, or new feature ideas, I appreciate your help in making this project even better. Let's build together! 🛠️

## Acknowledgments 🙏

I am grateful to YouTube and other video-sharing platforms for inspiring this project. Thanks for their dedication to creating great user experiences and vibrant online communities.

🚀 **React.js**: For providing the dynamic, responsive, and user-friendly foundation upon which our YouTube clone is built. React.js empowers us to create rich, interactive user interfaces, making the viewing experience a true delight.

🌟 **Redux**: Our loyal companion in state management. Redux enables us to maintain a clean, predictable, and scalable data flow, ensuring that our application runs smoothly and efficiently.

🖌️ **Tailwind CSS**: The design wizardry that shapes the visual elegance of our YouTube clone. Tailwind CSS allows us to craft a sleek and intuitive user interface, offering a seamless and captivating experience to our users.

I deeply appreciate the creators and contributors of these remarkable tools for their dedication to advancing the art of web development. Together, they have made mine YouTube clone project possible and have enriched the lives of our users.

Enjoy your YouTube clone adventure! If you have any questions or run into issues, feel free to reach out for support. Happy coding! 🎉👩‍💻👨‍💻
