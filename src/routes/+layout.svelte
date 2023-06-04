<script lang="ts">
    import type { LayoutData } from './$types';
    import '@picocss/pico'
    export let data: LayoutData;
</script>

<main >

    <slot />

</main>

<style>
    main {
        margin: 0 auto;
        max-width: 800px;;
    }
    
</style>