import { style } from '@vanilla-extract/css';
import { text, background } from '@guardian/src-foundations/palette';
import { titlepiece, body } from '@guardian/src-foundations/typography';
import { space } from '@guardian/src-foundations';

const cleanUpFamily = (s: string) => s.replace('font-family:', '');
const paddingPx = (n: number) => `${n}px`;

export const footer = style({
	color: text.ctaPrimary,
	backgroundColor: background.ctaPrimary,
	padding: paddingPx(space[2])
});

export const header = style([
	footer,
	{
		textAlign: 'right'
	}
]);

export const logo = style({
	fontFamily: cleanUpFamily(titlepiece.large()),
	margin: 0
});

export const main = style({
	color: text.primary,
	backgroundColor: background.primary,
	fontFamily: cleanUpFamily(body.medium())
});

export const flex = style({
	display: 'flex'
});

export const flexItem = style({
	selectors: {
		[`${flex} &`]: {
			margin: paddingPx(space[1])
		}
	}
});
