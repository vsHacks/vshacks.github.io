<script>
    export let image;
    export let href;
</script>

<a {href}>
    <img class="profilepicture" src={image} alt={image}>
</a>

<style>
    .profilepicture {
        border-radius: 50%;
        width: 75px;
        height: 75px;
        box-shadow: 0px 3px 5px rgba(100, 100, 100);
        margin-left: 10px;
    }
</style>