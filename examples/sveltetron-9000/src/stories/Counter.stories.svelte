<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Counter from '../lib/Counter.svelte';
</script>

<Meta
	title='Example/Counter'
	component={Counter}
/>

<Template let:args>
	<Counter {...args} />
</Template>

<Story
	name='Primary'
	args={{
  }}
/>

