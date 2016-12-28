#BookFinder App

See a demo here: http://coleman.edu/bookfinder/	
Licensed under the gplv3 license.

### Languages
- JavaScript ES5, JSON, HTML and CSS

### Libraries
- jQuery
- jQuery Sticky > http://stickyjs.com/

## Editing - books.js
books.js is made up of two variables.
- var lastUpdate = "9/28/2016";  -- change this when you update the book list
- var books = []; -- contains JSON book objects.

#### Book Object Structure

The links array is optional.
```
{
	courseID: "COM103",
	courseTitle: "Introduction to Game Programming",
	ISBN: "9781305258952",
	bookTitle: "Beginning Game Programming, 4th ed.",
	links: [
		{
			name: "Amazon.com",
			url: "https://www.amazon.com/book-name..."
		},
	]
},
```