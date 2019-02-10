import { number, withKnobs } from '@storybook/addon-knobs';

import React from 'react';
import { COMPONENT } from './COMPONENT';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Interface Elements', module);

stories.addDecorator(withKnobs);

stories.add('COMPONENT', () => {
	const foo = number('foo', 89);
	return <COMPONENT />;
});
