document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const contactForm = document.getElementById('contactForm');

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Sign up successful! Redirecting to login...');
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Log in successful!');
            // Add logic to show logout button
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Message sent!');
        });
    }

    // Sample blog posts with catchy content
    const blogList = document.getElementById('blogList');
    if (blogList) {
        const blogPosts = [
            { title: 'The Art of Morning Routines', content: 'Ever wondered why some people seem to have endless energy throughout the day? The secret lies in their morning routines. From meditation to exercise, discover the habits that can transform your mornings and set you up for success.' },
            { title: 'Exploring the Hidden Gems of Europe', content: 'Tired of the usual tourist spots? Dive into the lesser-known treasures of Europe. From quaint villages to breathtaking landscapes, these hidden gems are waiting to be explored.' },
            { title: 'Mastering the Art of Public Speaking', content: 'Whether you\'re presenting to a small group or a large audience, public speaking can be daunting. Learn tips and tricks to boost your confidence and engage your listeners effectively.' },
            { title: 'The Future of Technology: Trends to Watch', content: 'From AI to quantum computing, the tech world is evolving rapidly. Stay ahead of the curve with our insights into the latest trends shaping the future of technology.' },
            { title: 'Healthy Eating on a Budget', content: 'Eating healthy doesn\'t have to break the bank. Discover budget-friendly recipes and tips to maintain a nutritious diet without compromising your wallet.' },
        ];

        blogPosts.forEach((post, index) => {
            const li = document.createElement('li');
            li.innerHTML = <a href="post.html?id=${{index}">${post.title}</a>;
            blogList.appendChild(li);
        });
    }

    // Display blog post content based on URL parameter
    const postContent = document.getElementById('postContent');
    if (postContent) {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');
        const blogPosts = [
            { title: 'The Art of Morning Routines', content: 'Ever wondered why some people seem to have endless energy throughout the day? The secret lies in their morning routines. From meditation to exercise, discover the habits that can transform your mornings and set you up for success.' },
            { title: 'Exploring the Hidden Gems of Europe', content: 'Tired of the usual tourist spots? Dive into the lesser-known treasures of Europe. From quaint villages to breathtaking landscapes, these hidden gems are waiting to be explored.' },
            { title: 'Mastering the Art of Public Speaking', content: 'Whether you\'re presenting to a small group or a large audience, public speaking can be daunting. Learn tips and tricks to boost your confidence and engage your listeners effectively.' },
            { title: 'The Future of Technology: Trends to Watch', content: 'From AI to quantum computing, the tech world is evolving rapidly. Stay ahead of the curve with our insights into the latest trends shaping the future of technology.' },
            { title: 'Healthy Eating on a Budget', content: 'Eating healthy doesn\'t have to break the bank. Discover budget-friendly recipes and tips to maintain a nutritious diet without compromising your wallet.' },
        ];

        if (postId !== null && blogPosts[postId]) {
            postContent.innerHTML = <><h2>${blogPosts[postId].title}</h2><p>${blogPosts[postId].content}</p></>;
        } else {
            postContent.innerHTML = '<p>Post not found.</p>';
        }
    }
});
