<script>
    export let sbInverse = false;
    export let sbWidth = 300;
    $: gridColumns = !sbInverse ? "1fr " + sbWidth + "px" : sbWidth + "px 1fr";
    $: gridAreas = !sbInverse ? "body sidebar" : "sidebar body";

</script>


<div class="grid" style="--columns: {gridColumns}; --areas: '{gridAreas}'">
    <div class="grid-header border1-bottom border-secondary">
        <slot name="header"></slot>
    </div>
    <div class="grid-body">
        <slot name="body"></slot>
    </div>
    <div class="grid-sidebar border1-left border-secondary">
        <slot name="sidebar"></slot>
    </div>
</div>


<style>
    .grid {
        display: grid;
        grid-template-columns: var(--columns);
        grid-template-rows: 40px 1fr;
        grid-template-areas: 
            "header header"
            var(--areas);
        height: 100vh;
    }

    .grid-header {
        grid-area: header;
        position: relative;
    }

    .grid-body {
        grid-area: body;
        position: relative;
    }

    .grid-sidebar {
        grid-area: sidebar;
        position: relative;
    }
</style>
