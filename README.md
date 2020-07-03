# GamesDoneRight

GamesDoneRight is is a clone of GOG.com, a digital distribution site for DRM-free games on Windows, Mac, and Linux operating systems.  The site follows standard e-commerce conventions which includes and index of products and their associated display(show) pages, along with the ability to purchase and leave reviwes for these products.

Live site:  https://gamesdoneright.herokuapp.com/#/

## Technologies Used:
Backend: Ruby on Rails, ActiveRecord, AWS, PostgreSQL
Frontend: React, Redux

## Features:
User authentication
View index and show pages for games

## Screenshots:

#### Image Carousel / Slider

On the store front page, there is an image carousel / slider component which displays images of produts and is able to be cycled through using left and right arrow buttons.

In order to accomplish this we create an array of image elements with associated show page links, and create buttons which when clicked, will set the x-position of the images within the carousel depnding on which button was clicked. We make use of the useState hook to provide a stateful value and a way to update it.

![alt text](https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/git/carousel-code.png)

#### Modals: User Auth Form and Video

When the create account or sign-in buttons are clicked within the dropdown of our navigation bar, a modal will appear which fades the background and gives a pop-up effect containing the user creation and authentication forms.  A similar effect is achieved when clicking on the video button on our game show pages, opening up an embedded youtube video in a separate modal.

This is achieved by passing a modal type to the component which is handled by case statements to determine which component to render

![alt text](https://active-storage-gdr-seed.s3-us-west-1.amazonaws.com/git/carousel-code.png)
