import React from 'react';
import { Provider } from 'react-redux';
import { initializeStore, RegistryProvider } from 'react-cmf';

/**
 * @param {object} props react props
 * @example
<CMFStory name="Hello world"></CMFStory>
 */
class CMFStory extends React.Component {
	constructor(props) {
		super(props);
	}
	getChildContext() {
		return { router: {} };
	}
	render() {
		let store;
		if (!this.props.store) {
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
			store = initializeStore(undefined, preloadedState);
		} else {
			store = this.props.store;
		}
		return (
			<Provider store={store}>
				<RegistryProvider>
					{this.props.children}
				</RegistryProvider>
			</Provider>
		);
	}
}

CMFStory.propTypes = {
	store: React.PropTypes.object,
};

CMFStory.contextTypes = {
	registry: React.PropTypes.object,
};
CMFStory.childContextTypes = {
	router: React.PropTypes.object,
};

export default CMFStory;
