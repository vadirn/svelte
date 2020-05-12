/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent,
	append,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	text
} from "svelte/internal";

function create_fragment(ctx) {
	let p;
	let t0;
	let t1;

	return {
		c() {
			p = element("p");
			t0 = text("x: ");
			t1 = text(/*x*/ ctx[0]);
		},
		m(target, anchor, remount) {
			insert(target, p, anchor);
			append(p, t0);
			append(p, t1);
		},
		p(ctx, [dirty]) {
			if (dirty & /*x*/ 1) set_data(t1, /*x*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(p);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let x = 0;
	let y = 1;
	x += 1;

	{
		x += 2;
	}

	setTimeout(
		function foo() {
			$$invalidate(0, x += 10);
			$$invalidate(1, y += 20);
		},
		1000
	);

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*x, y*/ 3) {
			$: $$invalidate(0, x += y);
		}
	};

	return [x];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Component;
