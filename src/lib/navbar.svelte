<script>
    import logo from '$lib/assets/icon_black.svg';
</script>


<div class="nav">
    <div class="nav-links">
        <img class="logo" src={logo} height="50px" alt="vshacks logo">
        <slot/>
    </div>
</div>

<style>
    .nav {
        background-color: #D0D3D8;
        box-shadow: 0px 3px 5px rgba(100, 100, 100);
        width: 100%;
        position: relative;
    }

    .nav-links {
        max-width: 800px;
        height: 100%;
        display: flex;
        margin-left: 20%;
        margin-right: 20%;
        padding: 10px 0;
    }

    .logo {
        margin-right: 50px;
    }
</style>