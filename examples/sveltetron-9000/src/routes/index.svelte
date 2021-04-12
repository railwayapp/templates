<script lang="ts">
    import Counter from "$lib/Counter.svelte";
</script>

<div class="main flex flex-col items-center justify-center bg-gray-700 h-screen">
    <h1 class="heading text-yellow-400 text-7xl">Sveltetron 9000</h1>
    <p class="tagline text-white text-3xl pt-2 pb-8">
        The Svelte template you needed!
    </p>
    <Counter />
    <p class="github pt-8 text-2xl text-white">
        Checkout the project documentation on
        <a class="text-yellow-400 cursor-pointer" href="https://github.com/tejasag/sveltetron-9000">Github</a>
    </p>
</div>

<style global lang="scss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
