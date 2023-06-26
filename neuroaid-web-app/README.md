# MERN Stack Web App with a Front-End Focus for a mobile app called Neuro-Aid

## The Technologies Used and Their Purpose

This is a web application built with React.js, HTML, Javascript, CSS/TailwindCSS, Express.js, Node.js, MongoDB, and AWS S3.

React.js is used to structure, display, and update the UI.

TailwindCSS is used for the bulk of the styling of the UI, allowing use of preset classes to simplify the workflow of styling and responsive design.

Express.js is used to connect the front-end to MongoDB, retrieving requested data from the database to then send back a response to the front-end with the data requested.

MongoDB is used to store the blog posts and user emails when they subscribe to the mailing list.

AWS S3 is used to store the various images used across the site.

## An Overview of Each Page

The application consists of a Home, Features, Pricing, About, and Blog routes.

### Home page

The Home page guides the user through basic, introductory information about the mobile app, ending with two calls to action.

A 'Learn more' button is provided intitially to automatically scroll down to information about the features and pricing plans for the app.
The features introduction lists 3 features, each accompanied by a small, animated graphic related to the feature. It then includes a button that says 'Learn more about features' and navigates the user to the '/features' route/page if they'd like. The pricing introduction lists a few features for each pricing plan in a basic chart. Just as with the features introduction, this component also has a button to learn more about the pricing on the Pricing page. At this point on the Home page, a button to scroll back to the top of the page has appeared.

The Home page ends with two components, the Call To Action component and the Mailing List component. The Call to Action component features a 'Download Now' button and text to entice the user to check out the app. But, because the mobile app is not real, the download button doesn't currently do anything. The Mailing List component has an email input and 'Subscribe' button, and the user's email is submitted when the 'Subscribe' button is clicked. The email is submitted with an Axios post request to the '/mailinglist' route in the server.js file in the backend. That '/mailinglist' route then searches the 'emails' collection in MongoDB with a Mongoose query. If the email is found to be already present, then feedback is given that says that they are already subscribed. If the email is not already present, then the email is stored in the collection and the Mailing List component says "Thanks for subscribing!".

The user can then click the 'Go back to top' button to continue navigating the site.

### Features page

The features page guides the user through a more extensive look at the features offered in Neuro-Aid.

Functionally, this page doesn't do a ton; the only functionality is the Mailing List component at the bottom.

Visually, the features are displayed in a column format with a white background and shadow to separate them from the gray page. Each feature has a graphic accompanying it, and at desktop widths, the visual weight is shifted back and forth by alternating the alignment of the text.

As with every page, this one ends with the call to action and mailing list input.

### Pricing page

The pricing page details the pricing and features of each pricing plan, and then explains the thought behind the use of different pricing plans.

Those two parts are separated into their own visual sections, styled similarly to the list of features on the Features page with a white background and shadow.

Each of their headings are aligned to different sides of the page, with an animation arrow guiding the user from the first section to the second. A second arrow after the second section points to the download button at the bottom of the page.

### About page

The about page describes the creators' motivation and background behind the mobile app. The body text is separated into 3 sections, each separated by two graphics related to the section above it. The images help add some color and visual breaks in the body text. They also feature a similar color palette to the brand colors of blue and orange. Various parts of the page are sized to neatly fit the viewport at the desktop widths.

### Blog page

Technically, there is a Blog List component and a separate Blog Post component, and the user is greeted by the Blog List component at the '/blog' route. The Blog List makes a get request to the '/blog' route in the server.js, and that route responds with the blog posts. The component then displays the title, date, and photo associated with each post. The title and date light up with a color gradient when the user hovers anywhere over the post, whether that be the title, date, or photo. Each listed post is generated inside of a React Router 'Link' tag so that each post's route serves as a child to the '/blog' route.

When the user clicks on a post, they are directed to a new route with that post's 'params' attribute from its MongoDB document now acting as the URL's parameters, creating a unique URL for each post. The Blog Post component then makes a call to the '/blog/:name' route, passing in the blog post's 'params' attribute. That route then retrieves the posts again (in case of any updates to the data), filters the posts down to the requested blog posts, and then returns that post back to the Blog Post component. Now, in the Blog Post component, there is a post variable and updatePost function that are using state. So after receiving the post data, the state of the 'post' variable is updated, and the various attributes of the post are rendered in the component. The additional attributes utilized from the post data include the alt text for the photo, the author, and the actual post text separated into an intro, body, and conclusion. The post text is stored with HTML tags, and then rendered as innerHTML for the sake of styling the text specifically to that post.

The bottom of the Blog Post component includes the Download Now and Mailing List components just as the other pages, but it also has a button for sharing to Twitter and one for copying the blog post's link.

## An Overview of the Process and Challenges Faced

This project was my first time building a React.js app with the full MERN stack, and that caused some issues. For example, I had to get comfortable using something like Axios to make requests to my own back-end routes, as opposed to just hitting someone else's API from the front-end to retrieve data. I also gained a better understanding of the structure of a MERN stack applicaton, and managing the separate dependencies necessary for the front-end and back-end.

This was also my first time using TailwindCSS, and I grew to love it throughout the build. While I'm fully capable of custom styles and responsive design, Tailwind simplified the workflow and process of creating a clean, responsive site so that I can more easily focus on the design and functionality instead of constantly going back and forth from the CSS to create classes and adjust styling.

Ultimately, this project was a great exercise in practicing front-end development and good design across the whole application. Initially, I started with a blue value as one of the 'brand' colors that I eventually adjusted significantly to a more 'pleasant', light blue. I also began with a lot of color usage through the elements that was far too much and felt a bit overbearing. Along with the blue color change, I began to reel in the overall color usage and do my best to use the main blue and orange colors more tastefully. The orange is used throughout the application for accents, and while the blue is as well, it's also used for page background colors and certain buttons. When possible, I did what I could to group components to neatly fit together on the screen; the Home page is a great example of that, both on mobile and desktop. I wanted to guide the user through each page with different elements, such as the 'Learn more' button on the Home page or the arrows on the Pricing page. I also made use of good design practices to help each page feel visually balanced, but also dynamic and interesting to look at. I would throw in pops of color or bolding of certain text to keep the elements from feeling flat and to draw the user's attention. For example, I used a blue underline when Neuro-Aid is mentioned in a page's heading. Building this application also challenged me to practice good design while adhering to proper accessiblity practices. This means doing things like only combining colors in elements that have proper contrast ratios instead of just using colors together because it 'looks good'. The desire to adhere to those accesibility standards meant adding a media query to disable all of the animations if the user has 'Reduce motion' set on their device as well.

This project also allowed me to practice regularly committing my changes through Git, and practice writing good commit messages that accurately reflect the changes made.

Additionally, building this application gave me the chance to use AWS S3 to store the image assets used, instead of storing them locally. The use of various images made me consider the site's performance, which led to me storing each image at much smaller sizes than I did initially because the large files unneccessarily caused slower loading speeds.

Overall, it allowed me to grow a lot as a developer by reinforcing things I already knew, but also presenting challenges that I hadn't worked through before.