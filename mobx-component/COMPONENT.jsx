import { inject, observer } from 'mobx-react';

import React from 'react';
import { compose } from 'recompose';

export const COMPONENT = () => {
	return <div>COMPONENT</div>;
};

export default compose(
	observer,
	inject('app')
)(COMPONENT);
