<script>
    export let href;
</script>

<a {href} class="navbar-item"><slot/></a>

<style>
    .navbar-item {
        height: 100%;
        width: 50px;
        background-color: #aaacb1;
        color: black;
        text-align: center;
        line-height: 50px;
        padding: 0 30px;
        text-decoration: none;
        transition: 0.1s;
        margin: 0 5px;
    }

    .navbar-item:hover {
        background-color: #7f8186;
    }
</style>