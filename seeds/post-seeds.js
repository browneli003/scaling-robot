
const { Post } = require('../models');

const postData = [
    {
        title: "Express.js",
        post_content: "Express has been fun to learn. It is a back-end framework for Node.js!",
        user_id: 3
    },
    {
        title: "Node.js",
        post_content: "Definitely going to be using this one a lot! It's a Javascript runtime environment that runs on V8 engine.",
        user_id: 1
    },
    {
        title: "MySQL",
        post_content: "If you're using databases, this is the way to go! Best database management system yet!",
        user_id: 2

    },
    {
        title: "Api's",
        post_content: "One for the books! Very important aspect of web development. Various types of websites have an API, which in that case helps the client see what the server intends it to see.",
        user_id: 5
    },
    {
        title: "Modern-View-Controller(MVC)",
        post_content: "If you are going to get in to software developing. This would be an important pattern to follow!",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;