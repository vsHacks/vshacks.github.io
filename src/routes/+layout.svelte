<script>
    import Navbar from '$lib/navbar.svelte';
    import NavbarItem from '$lib/navbar-item.svelte';
</script>

<Navbar>
    <NavbarItem href="/">Home</NavbarItem>
    <NavbarItem href="/faq">FAQ</NavbarItem>
</Navbar>
<slot/>

<style>
    :global(*) {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
    }

    :global(html) {
        background-color: #F6F8FA;
    }
</style>