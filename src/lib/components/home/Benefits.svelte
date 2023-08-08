<script>
    import { fade } from 'svelte/transition';

    $: activeTab = activeTab ?? 0;

    const benefits = [
        {
            title: 'Кто ты, воин?',
            desc: 'Не скажу'
        },
        {
            title: 'Кто ты, Вася?',
            desc: 'Не дам'
        },
        {
            title: 'Кто ты, Балбес?',
            desc: 'Не расскажу тебе'
        }
    ]
</script>

<section>
    {#each benefits as benefit, i}
        <button class="tab" class:active={i === activeTab} on:click={() => (activeTab = i)}>
            {benefit.title}
        </button>
    {/each}

    {#each benefits as benefit, i}
        {#if i === activeTab}
            <div in:fade>{benefit.desc}</div>
        {/if}
    {/each}


</section>
