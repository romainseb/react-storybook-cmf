import React from 'react';
import { Provider } from 'react-redux';
import { initializeStore, RegistryProvider } from 'react-cmf';
import mock from 'react-cmf/lib/mock';

/**
 * @param {object} props react props
 * @example
<CMFStory name="Hello world"></CMFStory>
 */
class CMFStory extends React.Component {
	constructor(props) {
		super(props);
		let state;
		if (props) {
			state = props.state;
		}
		if (!state) {
			state = mock.state();
		}
		this.store = initializeStore(undefined, state);
	}
	getChildContext() {
		return { router: {} };
	}
	render() {
		return (
			<Provider store={this.store}>
				<RegistryProvider>
					{this.props.children}
				</RegistryProvider>
			</Provider>
		);
	}
}

CMFStory.propTypes = {
	state: React.PropTypes.object,
};
CMFStory.contextTypes = {
	registry: React.PropTypes.object,
};
CMFStory.childContextTypes = {
	router: React.PropTypes.object,
};

export default CMFStory;
