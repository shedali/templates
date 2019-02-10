import { inject, observer } from 'mobx-react';

import React from 'react';
import { compose } from 'recompose';

export const Toggles = () => {
	return <div>Toggles</div>;
};

export default compose(
	observer,
	inject('app')
)(Toggles);
