<script>
    import Banner from '$lib/banner.svelte';
    import Container from '$lib/container.svelte';
    import Card from '$lib/card.svelte';
    import Heading from '$lib/heading.svelte';
    import Profilepicture from '$lib/profilepicture.svelte';

    import people from '$lib/assets/undraw_people.svg';
    import knowledge from '$lib/assets/undraw_knowledge.svg';
    import fun from '$lib/assets/undraw_movie_night.svg';
    
    const profileurls = Object.keys(import.meta.glob("$lib/assets/pfp/*", { eager: true }));
</script>

<Banner/>
<Container>
    <Card title="Meet New People" image={people}>
        At vsHacks, you will have the unique opportunity to work with like-minded students from all across the Greater Vancouver area. Build a team of up to four people and start hacking!
    </Card>
    <Card title="Learn New Things" image={knowledge}>
        Regardless of your skill level, we're certain that you'll learn something new at vsHacks from our experienced mentors. From web development to Discord bots, our workshops have something for everyone. Check out our schedule for further details.
    </Card>
    <Card title="Have Fun" image={fun}>
        Though our main focus is programming, we hope that you'll also have fun while doing so. To this end, we will be hosting several events and games outside of programming. Activities will range from games of Jackbox, to Minecraft, and more!
    </Card>
</Container>
<br>
<Container>
    <div id="contributors">
        <Heading>Our Team</Heading>
        {#each profileurls as image}
        <Profilepicture {image}/>
        {/each}
    </div>
</Container>

<style>
    #contributors {
        margin: auto;
        max-width: 600px;
    }
</style>