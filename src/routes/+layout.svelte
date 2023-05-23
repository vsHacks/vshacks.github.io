<script>
    import Navbar from '$lib/navbar.svelte';
    import NavbarItem from '$lib/navbar-item.svelte';
</script>

<div class="root">
    <div>
        <Navbar>
            <NavbarItem href="/">Home</NavbarItem>
            <NavbarItem href="/faq">FAQ</NavbarItem>
        </Navbar>
        <slot/>
    </div>
    <footer>
        <p>This website is open sourced under the MIT license and can be freely downloaded at our <a href="https://github.com/vsHacks/vshacks.github.io">github repository</a></p>
        <p>© {new Date().getFullYear()} vsHacks</p>
    </footer>
</div>

<style>
    :global(*) {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }

    :global(p) {
        font-size: 17px;
    }

    :global(html) {
        background-color: #F6F8FA;
    }

    :global(a) {
        color: #8151F6;
    }

    :global(a:hover) {
        color: #B841EE;
    }

    footer {
        text-align: center;
        background-color: #222222;
        color: white;
        padding: 20px 0;
        margin-top: auto;
        width: 100%;
    }

    footer p {
        font-size: 12px;
        margin-top: 10px;
    }

    .root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        gap: 20px;
    }
</style>