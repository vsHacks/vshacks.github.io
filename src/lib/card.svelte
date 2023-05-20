<script>
    export let title;
    export let image;

    let visible = false;

    function reveal(e) {
        const observer = new IntersectionObserver(entries => {
            visible = entries[0].isIntersecting;
        });

        observer.observe(e);
    }
</script>

<div class="card" class:visible={visible} use:reveal>
    <h1 class="card-title">{title}</h1>
    <div class="card-content">
        <p><slot/></p>
        {#if image != null}
        <img class="card-image" src={image} alt="">
        {/if}
    </div>
</div>

<style>
    .card {
        background-color: #F5F4FA;
        padding: 30px;
        max-width: 600px;
        margin-bottom: 30px;
        box-shadow: -1px 5px 10px lightgrey;
        opacity: 0;
        transition: 0.8s;
    }

    .visible {
        opacity: 1.0;
        top: 0px;
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