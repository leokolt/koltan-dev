<script>
    import {page} from '$app/stores'

    export let title
    export let description
    export let type
    export let ogImage

    $: url = $page.url.href
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={description}>
    <link rel="canonical" href={url} />
    {@html `<script type="application/ld+json">{
        "@context": "http://schema.org",
        "@type": "${type}",
          "name": "${title}",
          "description": "${description}"
          "url": "${url}",
        }</script>`}
    <meta content="http://localhost:5173/og?message={ogImage}" property="og:image">
</svelte:head>
