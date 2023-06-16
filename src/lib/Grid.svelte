<!--
    Grid.svelte
    ------------
    This grid allows draggable top, right, bottom, left panes surrounding a middle pane.
    In order to modify, you must change the gridColumns and the gridRows reactives.
    You will also have to modify the .grid class, especially the template-areas.
-->
<script>
    import Draggable from "./Draggable.svelte";

    export let sbWidth = 300;
    export let sbWidth1 = 300;
    export let sbHeight = 50;
    export let sbHeight1 = 50;

    let iWidth; let iHeight;

    $: gridColumns = `${sbWidth}px 1fr ${sbWidth1}px`;
    $: gridRows = `${sbHeight}px 1fr ${sbHeight1}px`;

    // Limit width of sidebar to 200px -> 80%
    $: sbWidth < 200 ? sbWidth = 200 : sbWidth;
    $: sbWidth > iWidth * 0.8 ? sbWidth = iWidth * 0.8: sbWidth;
    function handleDragLeft(event) {
        sbWidth1 = iWidth - event.detail.dragX;
    }
    function handleDragRight(event) {
        sbWidth = event.detail.dragX;
    }
    function handleDragTop(event) {
        sbHeight1 = iHeight - event.detail.dragY;
    }    
    function handleDragBottom(event) {
        console.log (iHeight, event.detail.dragY);
        sbHeight = event.detail.dragY;
    }

</script>

<svelte:window bind:innerWidth={iWidth} bind:innerHeight={iHeight}/>

<div class="grid" style="--columns: {gridColumns}; --rows: {gridRows};">
    <div class="grid-header border1-bottom border-secondary">
        <slot name="header"></slot>
        <Draggable on:dragging={handleDragBottom} direction={'bottom'}></Draggable>
    </div>
    <div class="grid-sidebar border1-left border-secondary">
        <slot name="sidebar"></slot>
        <Draggable on:dragging={handleDragLeft} direction={'left'}></Draggable>
    </div>
    <div class="grid-sidetrim border1-right border-secondary">
        <slot name="sidetrim"></slot>
        <Draggable on:dragging={handleDragRight} direction={'right'}></Draggable>
    </div>    
    <div class="grid-footer border1-top border-secondary">
        <slot name="footer"></slot>
        <Draggable on:dragging={handleDragTop} direction={'top'}></Draggable>
    </div>
    <div class="grid-body">
        <slot name="body"></slot>
    </div>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: var(--columns);
        grid-template-rows: var(--rows);
        grid-template-areas: 
            "header     header  header"
            "sidetrim   body    sidebar"
            "sidetrim   footer  sidebar";
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

    .grid-sidetrim {
        grid-area: sidetrim;
        position: relative;
    }

    .grid-footer {
        grid-area: footer;
        position: relative;
    }


</style>
