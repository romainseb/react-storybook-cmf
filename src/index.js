import React from 'react';
import CMFStory from './CMFStory';
import CMFDecorator from './CMFDecorator';

export default {
	addWithCMF(storyName, storyFn) {
		let add = this.add;
		if (this.addWithInfo) {
			add = this.addWithInfo;
		}
		add(storyName, () => (
				<CMFStory>
					{storyFn()}
				</CMFStory>
		), { showInline: true });
	},
};

export {
	CMFDecorator,
	CMFStory,
};
