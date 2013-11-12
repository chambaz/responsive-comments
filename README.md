# Responsive Comments

Responsive Comments were designed to bring simple conditional loading to the client site. Through the use of HTML comments, markup can be introduced to progressively enhance an experience as various media queries evaluate to true.

## Installation

	$ bower install --save responsive-comments
	
## Usage

To get started using ResponsiveComments, add a `[data-responsive-comment-media]` attribute containing a valid media query to any element containing children that you wish to conditionally load. The ResponsiveComments concept will only work in a progressivelty enhanced experience so make sure you use minimum width media queries.

	<div data-responsive-comment-media="(min-width: 769px)">...</div>
	
The `[data-responsive-comment-media]` containers should contain one commented out segment of markup as well as any other HTML they require.

	<div data-responsive-comment-media="(min-width: 769px)">
		<-- <div><p>Any content can go in here</p></div> -->
	</div>
	
The commented out markup will be insert into the DOM when the specified media query passes, any valid insertAdjacentHTML insertion type can be specified in [data-responsive-comment-insert], valid options are `beforebegin`, `afterbegin`, `beforeend`, `afterend` with a default of `beforeend`.

	<div data-responsive-comment-insert="afterbegin"
	     data-responsive-comment-media="(min-width: 769px)">
		<-- <div><p>Any content can go in here, including images</p></div> -->
	</div>
	
ResponsiveComments were designed and developed with love at [Digital Surgeons](http://www.digitalsurgeons.com/).

**MIT Open Source License**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.