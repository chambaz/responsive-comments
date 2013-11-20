# Responsive Comments

ResponsiveComments was designed to bring simple conditional loading to the client side. Through the use of HTML comments, markup can be introduced to progressively enhance an experience as various media queries or feature detections evaluate to true. For more information and examples check out [responsivecomments.com](http://responsivecomments.com).

## Installation

	$ bower install --save responsive-comments
	
## Usage
### Media Queries

To get started using ResponsiveComments, add a `[data-responsive-comment-media]` attribute containing a valid media query to any element containing children that you wish to conditionally load. The ResponsiveComments concept will only work in a progressivelty enhanced experience so make sure you use minimum width media queries.

	<div data-responsive-comment-media="(min-width: 769px)">...</div>
	
The `[data-responsive-comment-media]` containers should contain one commented out segment of markup as well as any other HTML they require.

	<div data-responsive-comment-media="(min-width: 769px)">
		<-- <div><p>Any content can go in here</p></div> -->
	</div>
	
### Feature Detection
	
ResponsiveComments also supports feature detection using [Modernizr](http://modernizr.com/). Make sure you include a Modernizr build with all the tests you need before the ResponsiveComments library. A Modernizr test can then be specified in `[data-responsive-comments-supports]`.

	<div data-responsive-comment-supports="svg">
		<-- <div><p>Any content can go in here, including images</p></div> -->
	</div>
	
The `[data-responsive-comment-supports]` containers should also contain one commented out segment of markup as well as any other HTML they require.
	
### DOM Insertion

The commented out markup inside the ResponsiveComments container will be inserted into the DOM when the specified media query or feature detection passes. Any valid insertAdjacentHTML insertion type can be specified in `[data-responsive-comment-insert]`, valid options are `beforebegin`, `afterbegin`, `beforeend`, `afterend` with a default of `beforeend`.

	<div data-responsive-comment-insert="afterbegin"
	     data-responsive-comment-media="(min-width: 769px)">
		<-- <div><p>Any content can go in here, including images</p></div> -->
	</div>
	
### Events
	
You can also bind to an event, fired on the element containing the `[data-responsive-comment-media]` attribute, for added functionality. Use jQuery if you wish or good old vanilla JavaScript.

	document.getElementById('respcomm').addEventListener('responsiveComment', function(e) {
	    // do something crazy
	});
	

## Support

ResponsiveComments is supported across all major web browsers. However, we make use of the [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window.matchMedia) function for testing media queries, this function is fully supported in Internet Explorer 10, but version 9 and down require a [polyfil](https://github.com/paulirish/matchMedia.js/). ResponsiveComments also requires [Modernizr](http://modernizr.com/) for feature detection so ensure a Modernizr build is included with all the required tests.
	
**ResponsiveComments** was designed and developed with love at [Digital Surgeons](http://www.digitalsurgeons.com/).

### MIT Open Source License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.