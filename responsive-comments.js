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
		'insert' : 'data-responsive-comment-insert'
	};

	// cache responsive comments nodes and data
	function prepNodes(nodes) {
		var i = 0, l = nodes.length, mqs = [], el, ins;
		for(; i < l; i++) {
			el = nodes[i];
			ins = el.getAttribute(attrs.insert);

			// store element, media query and insert type
			// beforeend default insert type
			mqs.push({
				'element' : el,
				'media' : el.getAttribute(attrs.media),
				'insert' : ins ? ins : 'beforeend'
			});
		}
		return mqs;
	}

	// loop round each cached node, check not complete and test media query
	function testNodes() {
		this.forEach(function(x) {
			// media query fails or already complete
			if(!window.matchMedia(x.media).matches ||
				x.element.getAttribute(attrs.media) === 'complete') {
				return;
			}

			childNodes.apply(x);
		});
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
		var els = prepNodes(document.querySelectorAll('['+attrs.media+']'));

		// fire on resize and now
		window.addEventListener('resize', testNodes.bind(els));
		testNodes.apply(els);
	});

})();
