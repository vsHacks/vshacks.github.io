<script>
    import { onMount } from "svelte";
    let full_title = "vsHacks"
    let title = "";
    onMount(async () => {
        for (let i = 0; i < full_title.length; i++) {
            title += full_title[i];
            await new Promise(r => setTimeout(r, 80));
        }
    });
</script>

<div class="title-card">
    <div class="vcenter">
        <h1 class="title-logo">{title}<span class="cursor">█</span></h1>
        <h3 class="subtitle">Vancouver's Largest Anual Student-Lead Hackathon</h3>
    </div>
</div>

<style>
    .title-card {
        width: 100%;
        height: 300px;
        background-image: linear-gradient(to right, #7D52F7, #BC41EE);
        display: table;
        position: relative;
    }

    .vcenter {
        color: white;
        display: table-cell;
        vertical-align: middle;
    }

    .title-logo {
        text-align: center;
        font-size: 100px;
        color: white;
    }

    .cursor {
        padding: 5px;
        animation-name: cursor;
        animation-duration: 0.530s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-timing-function: steps(1, start);
    }

    .subtitle {
        text-align: center;
        margin-top: 50px;
    }

    @keyframes cursor {
        0% {color: rgba(255, 255, 255, 255);}
        50% {color: rgba(255, 255, 255, 0);}
    }
</style>