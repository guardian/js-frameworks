import type { RequestHandler } from '@sveltejs/kit';
import { frameworks } from '../../../frameworks';

export const get = async() => {
	return {
		body: frameworks
	};
}