const blogPosts = [
    {
        title: "My First Blog Post",
        content: "This is my very first blog post. Exciting!",
        author: "John Doe",
        date: "2023-08-14"
    },
    {
        title: "JavaScript Basics",
        content: "In this post, I'll cover some JavaScript basics for beginners.",
        author: "Jane Smith",
        date: "2023-08-15"
    }
];

function createBlogPostElement(post){
    const blogPostElement = document.createElement("article");
    blogPostElement.className = "blog-post";

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    const authorElement = document.createElement("p");
    authorElement.textConter = `By ${post.author} on ${post.date}`;

    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;

    return blogPostElement;
}

const blogList = document.getElementById("blog-list");

blogPosts.forEach( post => {
conts blogPostElement = createBlogPostElement(post);
blogList.appendChild(blogPostElement);

});