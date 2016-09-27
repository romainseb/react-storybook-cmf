import React from 'react';
import { Provider } from 'react-redux';
import { initializeStore, RegistryProvider } from 'react-cmf';


const preloadedState = {
	cmf: {
		settings: {
			contentTypes: {
				article: {
					actions: {
						primary: [{
							id: 'edit',
							name: 'Edit',
							icon: 'fa-pencil',
							type: 'TEST_EDIT',
						}],
					},
				},
			},
			actions: {
				'menu:demo': {
					id: 'menu',
					name: 'Menu',
					icon: 'fa-bars',
					type: 'TEST_MENU',
				},
			},
		},
	},
};
const store = initializeStore(undefined, preloadedState);

/**
 * @param {object} props react props
 * @example
<CMFStory name="Hello world"></CMFStory>
 */
class CMFStory extends React.Component {
	getChildContext() {
		return { router: {} };
	}
	render() {
		return (
			<Provider store={store}>
				<RegistryProvider>
					{this.props.children}
				</RegistryProvider>
			</Provider>
		);
	}
}

CMFStory.contextTypes = {
	registry: React.PropTypes.object,
};
CMFStory.childContextTypes = {
	router: React.PropTypes.object,
};

export default CMFStory;
