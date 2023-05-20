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
        text-decoration: none;
        margin: 0 5px;
    }

    .navbar-item:hover {
        text-decoration: underline;
    }

</style>