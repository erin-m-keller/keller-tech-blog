  # Tech Blog
  
  ## Description 
  // TODO: add description
  
  ## Table of Contents
  * [Technology Stack](#technology-stack)
  * [User Story](#user-story)
  * [Acceptance Criteria](#acceptance-criteria)
  * [Installation](#installation)
  * [Screenshot](#screenshot)
  * [Deployed Page](#deployed-page)
  * [License](#license)
  * [Contributors](#contributors)
  * [Outside Resources](#outside-resources)
  * [Questions](#questions)

  ## Technology Stack

![javaScript](https://img.shields.io/badge/-JavaScript-61DAFB?color=red&style=flat)
![expressJS](https://img.shields.io/badge/-Express.js-61DAFB?color=orange&style=flat)
![nodeJS](https://img.shields.io/badge/-Node.js-61DAFB?color=yellow&style=flat)
![sequelize](https://img.shields.io/badge/-Sequelize-61DAFB?color=green&style=flat)
![mySql](https://img.shields.io/badge/-MySQL-61DAFB?color=blue&style=flat)
![fomanticUi](https://img.shields.io/badge/-FomanticUI-61DAFB?color=purple&style=flat)

  ## User Story
  ```md
    AS A developer who writes about tech
    I WANT a CMS-style blog site
    SO THAT I can publish articles, blog posts, and my thoughts and opinions
  ```

  ## Acceptance Criteria
  ```md
    GIVEN a CMS-style blog site
    WHEN I visit the site for the first time
    THEN I am presented with the homepage, which includes  
    existing blog posts if any have been posted; navigation  
    links for the homepage and the dashboard; and the option  
    to log in
    WHEN I click on the homepage option
    THEN I am taken to the homepage
    WHEN I click on any other links in the navigation
    THEN I am prompted to either sign up or sign in
    WHEN I choose to sign up
    THEN I am prompted to create a username and password
    WHEN I click on the sign-up button
    THEN my user credentials are saved and I am logged into the site
    WHEN I revisit the site at a later time and choose to sign in
    THEN I am prompted to enter my username and password
    WHEN I am signed in to the site
    THEN I see navigation links for the homepage, the dashboard,  
    and the option to log out
    WHEN I click on the homepage option in the navigation
    THEN I am taken to the homepage and presented with existing  
    blog posts that include the post title and the date created
    WHEN I click on an existing blog post
    THEN I am presented with the post title, contents, post creator’s  
    username, and date created for that post and have the option to  
    leave a comment
    WHEN I enter a comment and click on the submit button while signed in
    THEN the comment is saved and the post is updated to display the comment,  
    the comment creator’s username, and the date created
    WHEN I click on the dashboard option in the navigation
    THEN I am taken to the dashboard and presented with any blog posts I have  
    already created and the option to add a new blog post
    WHEN I click on the button to add a new blog post
    THEN I am prompted to enter both a title and contents for my blog post
    WHEN I click on the button to create a new blog post
    THEN the title and contents of my post are saved and I am taken back to  
    an updated dashboard with my new blog post
    WHEN I click on one of my existing posts in the dashboard
    THEN I am able to delete or update my post and taken back to an updated  
    dashboard
    WHEN I click on the logout option in the navigation
    THEN I am signed out of the site
    WHEN I am idle on the site for more than a set time
    THEN I am able to view posts and comments but I am prompted to log in  
    again before I can add, update, or delete posts
  ```
  
  ## Installation 
  
  * Ensure you are running Node.js v16.
  * Clone the repository.
  ```
    git clone git@github.com:erin-m-keller/keller-tech-blog.git
  ```

  * Install the dependencies.
  ``` node
    cd keller-tech-blog
    npm i
  ```
  

  * Start the application
  ``` node
    npm start
  ```
  > Application available at localhost:3001

  ## Screenshot
  
  ![FinishedProduct](./assets/images/finished-product.png)
  
  ## Deployed page

  // TODO: add heroku link
  
  ## License 
  [![MIT license](https://img.shields.io/badge/License-MIT-purple.svg)](https://lbesson.mit-license.org/)
  
  ## Contributors 
  [Erin Keller](https://github.com/erin-m-keller)

  ## Outside Resources
  
  * [ChatGPT](https://openai.com/blog/chatgpt): Used ChatGPT to generate the regex used within the validate functions.
  
  ## Questions
  If you have any questions about this project, please contact me directly at [aestheticartist@gmail.com](aestheticartist@gmail.com).  
  You can view more of my projects [here](https://github.com/erin-m-keller).