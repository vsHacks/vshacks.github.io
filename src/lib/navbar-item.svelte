<script>
    export let href;
</script>

<a {href} class="navbar-item"><slot/></a>

<style>
    .navbar-item {
        width: 50px;
        background-color: rgba(0, 0, 0, 0);
        color: black;
        text-align: center;
        line-height: 50px;
        padding: 0 30px;
        text-decoration: none;
        transition: 0.1s;
        margin: 0 5px;
        border-radius: 10px;
        box-shadow: 0 0 0 2px grey;
    }

    .navbar-item:hover {
        border-width: 5px;
        box-shadow: 0 0 0 3px grey;
    }

</style>