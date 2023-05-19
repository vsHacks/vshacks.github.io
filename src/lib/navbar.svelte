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
        width: 100%;
        height: 50px;
        background-color: #D0D3D8;
    }

    .nav-links {
        max-width: 800px;
        height: 100%;
        display: flex;
    }

    .logo {
        margin-right: 50px;
    }
</style>