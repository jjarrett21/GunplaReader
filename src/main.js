import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		heading: 'Welcome to Gunpla Reader'
	}
});

export default app;