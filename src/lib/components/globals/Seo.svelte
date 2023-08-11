<script>
    import {page} from '$app/stores'

    export let title
    export let description
    export let type
    // export let ogImage

    $: url = $page.url.href


    export let generateOgImage = false

  let socialImageData
  let socialImagePath
  let socialImageUrl
  $: {
    socialImageData = `${$page.url.pathname === '/' ? '' : $page.url.pathname}/og-image-data.json`
    socialImagePath = `/og-image-generator${
      $page.url.pathname === '/' ? '' : $page.url.pathname
    }/og-image.png`
    socialImageUrl = `http://localhost:5173${socialImagePath}`
  }
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
    <!-- <meta content="http://localhost:5173/og?message={ogImage}" property="og:image"> -->
    {#if generateOgImage}
    <meta property="og:image" content={socialImageUrl} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <link rel="og-image-data-for-prerender" href={socialImageData} />
    <link rel="og-image-for-prerender" href={socialImagePath} />
    {/if}
</svelte:head>
