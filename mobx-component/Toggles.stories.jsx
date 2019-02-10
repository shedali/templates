import { number, withKnobs } from '@storybook/addon-knobs';

import React from 'react';
import { Toggles } from './Toggles';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Interface Elements', module);

stories.addDecorator(withKnobs);

stories.add('Toggles', () => {
	const foo = number('foo', 89);
	return <Toggles />;
});
