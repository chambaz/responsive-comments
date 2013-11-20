/**
* Responsive Comments
* -------------------
* A client-side solution to conditional loading in #RWD
*
* @author Adam Chambers (@chambaz)
* @author Digital Surgeons (@digitalsurgeons)
* @license MIT
*/
(function() {

	// data attributes
	var attrs = {
		'media' : 'data-responsive-comment-media',
		'supports' : 'data-responsive-comment-supports',
		'insert' : 'data-responsive-comment-insert'
	};

	// cache responsive comments nodes and data
	function prepNodes(nodes) {
		var i = 0, l = nodes.length, mqs = [], el, ins, obj;
		for(; i < l; i++) {
			el = nodes[i];
			// store element, media query / support test and insert type
			// beforeend default insert type
			ins = el.getAttribute(attrs.insert) || 'beforeend';
			obj = {
				'element' : el,
				'insert' : ins,
				'media' :  el.getAttribute(attrs.media) || false,
				'supports' :  el.getAttribute(attrs.supports) || false
			};

			mqs.push(obj);
		}
		return mqs;
	}

	// test supports and media nodes, passing object to required function
	function testNodes(type) {
		type = typeof type === 'string' ? type : false;
		this.forEach(function(x) {
			if((type === 'supports' || !type) && x.supports) {
				testSupportNodes.apply(x);
			} else if((type === 'media' || !type) && x.media) {
				testMediaNodes.apply(x);
			}
		});
	}

	function testMediaNodes() {
		if(!this.media || !window.matchMedia) {
			return;
		}
		if(window.matchMedia(this.media).matches &&
			this.element.getAttribute(attrs.media) !== 'complete') {
			childNodes.apply(this);
			return;
		}

		return;
	}

	function testSupportNodes() {
		if(!this.supports || !Modernizr) {
			return;
		}
		if(Modernizr[this.supports] &&
			this.element.getAttribute(attrs.support) !== 'complete') {
			childNodes.apply(this);
			return;
		}

		return;
	}

	// loop round child nodes, find commented content
	function childNodes() {
		var l = this.element.childNodes.length,
			i = 0;

		for(; i < l; i++) {
			// node type 8 is comment
			if(this.element.childNodes[i].nodeType === 8) {
				insertComment.apply(this, [i]);
			}
		}
	}

	// dispatch CustomEvent if supported with media query and insert type detail
	function dispatchEvent() {
		var ev;

		// try custom events
		if(typeof CustomEvent === 'function') {
			ev = new CustomEvent('responsiveComment', {
				detail : {
					mediaQuery: this.media,
					insert: this.insert
				}
			});

		// if not use creatEvent
		} else if(document.createEvent) {
			ev = document.createEvent('Event');
			ev.initEvent('responsiveComment', true, true);

		// neither supported so fail
		} else {
			return false;
		}

		this.element.dispatchEvent(ev);
	}

	// insert commented content into DOM, mark as complete and trigger event
	function insertComment(index) {
		this.element.insertAdjacentHTML(this.insert, this.element.childNodes[index].textContent);
		this.element.setAttribute(attrs.media, 'complete');
		dispatchEvent.apply(this);
	}

	// initiate when DOM ready
	document.addEventListener("DOMContentLoaded", function(event) {
		// find and cache responsive comments nodes
		var els = prepNodes(
			document.querySelectorAll('['+attrs.media+'],['+attrs.supports+']')
		);

		// fire on resize and now
		window.addEventListener('resize', testNodes.bind(els, 'media'));
		window.addEventListener('load', testNodes.bind(els));
	});

})();
