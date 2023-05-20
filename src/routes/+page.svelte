<script>
    import Banner from '$lib/banner.svelte';
    import Container from '$lib/container.svelte';
    import Card from '$lib/card.svelte';

    import people from '$lib/assets/undraw_people.svg'
</script>


<Banner/>
<Container>
    <Card title="Meet New People" image={people}>
        At vsHacks, you will have the unique opportunity to work with like-minded students from all across the Greater Vancouver area. Build a team of up to four people and start hacking!
    </Card>
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</Container>