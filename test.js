import test from 'ava';
import fn from './';

test(async t => {
	const mail = await fn('kevva');
	t.is(mail, 'kevinmartensson@gmail.com');
});
