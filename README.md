# Project 1. Portfolio

Result: http://valerii-zinchenko.github.io/fend-p1/


## Features

* Logo is visible if it is not obstruct the name
* Second horizontal line was added for better visual sectioning
* Footer was added with copiright info and social links
* Responsive layout by using Bootstrap and Flexbox
* Responsive images
* By clicking on the work the description (Lorem Ipsum) will be displayed
* Navigation bar


## Build

```
npm install
```
and all files what are needed for a deployment can be found in `dest` folder.


## Implementation notes

### Responsive images

Generating of images with three different sizes is automated.

The main image in the center has three dimensions. Additionaly, the white space of the image is cropped for smaller devices. The handling of the maximal size was tricky. The image scales up ignoring "max-width" CSS property. To stop this the "sizes" attribute with absolute width was used.


### Social icons in footer

I decided to get and use the images instead of font icons, because this is a part of the content and, from my point of view, it is a good place to add an alternative description.

### Additional components

I wanted first to make something like tabs from the "Featured work", but the final implementation with "target" pseudo-class I like more.


## Validation

HTML: https://validator.w3.org/nu/?doc=http%3A%2F%2Fvalerii-zinchenko.github.io%2Ffend-p1%2F

CSS: https://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fvalerii-zinchenko.github.io%2Ffend-p1%2Fcss%2Fstyles.css&profile=css3&usermedium=all&warning=2&vextwarning=&lang=en
