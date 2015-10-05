import test from 'ava';
import githubUserEmail from './';

test(t => {
	t.plan(2);

	githubUserEmail('kevva', (err, data) => {
		t.ifError(err);
		t.is(data, 'kevinmartensson@gmail.com');
	});
});
