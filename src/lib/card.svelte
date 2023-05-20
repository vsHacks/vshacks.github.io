<script>
    export let title;
    export let image;
</script>

<div class="card">
    <h1 class="card-title">{title}</h1>
    <div class="card-content">
        <p><slot/></p>
        {#if image != null}
        <img class="card-image" src={image}>
        {/if}
    </div>
</div>

<style>
    .card {
        background-color: #F5F4FA;
        padding: 50px;
        max-width: 600px;
        margin-bottom: 30px;
        box-shadow: -1px 5px 10px lightgrey;
    }

    .card-image {
        width: 30%;
    }

    .card-content {
        display: flex; 
        flex-direction: row;
        align-items: center;
    }

    .card-title {
        font-size: 30px;
        padding-bottom: 10px;
    }
</style>