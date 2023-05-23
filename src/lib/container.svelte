
<div class="container">
    <slot/>
</div>

<style>
    @media only screen and (max-width: 1200px) {
        .container {
            flex-direction: column;
            align-items: center;
        }
    }

    .container {
        display: flex;
        gap: 50px;
        margin-top: 50px;
        margin: 20px 30px;
        justify-content: center;
    }
</style>