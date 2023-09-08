<script>
    import {page} from '$app/stores'
    import { dev } from '$app/environment'

    export let title
    export let description
    export let type
    //export let date
    // export let ogImage

    $: url = $page.url.href


    export let generateOgImage = false
    //export let postPage = false

    let socialImageData
    let socialImagePath
    let socialImageUrl
    $: {
        socialImageData = `${$page.url.pathname === '/' ? '' : $page.url.pathname}/og-image-data.json`
        socialImagePath = `/og-image-generator${
        $page.url.pathname === '/' ? '' : $page.url.pathname
        }/og-image.png`
        //socialImageUrl = `https://koltan-dev.vercel.app${socialImagePath}`

        if (dev) {
            socialImageUrl = `http://localhost:5173${socialImagePath}`
        } else {
            socialImageUrl = `https://koltan-dev.vercel.app${socialImagePath}`
        }
    }
</script>

<svelte:head>
    <title>{title} - koltan.dev</title>
    <meta name="description" content={description}>
    <link rel="canonical" href={url} />
    <link rel="alternate" type="application/rss+xml" title="koltan.dev" href="https://koltan.dev/rss.xml">
    <meta name="referrer" content="no-referrer-when-downgrade">

    {@html
        `<script type="application/ld+json">
            {
                "@context": "http://schema.org",
                "@type": "${type}",
                "publisher": {
                    "@type": "Organization",
                    "name": "koltan.dev",
                    "url": "https://koltan.dev",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://koltan.dev/logo.svg"
                    }
                },
                "author": {
                    "@type": "Person",
                    "name": "Леонид Колтан",
                    "image": {
                        "@type": "ImageObject",
                        "url": "https://koltan.dev/img/golova.webp",
                        "width": 1056,
                        "height": 1260
                    },
                    "url": "https://koltan.dev",
                    "sameAs": [
                        "https://t.me/leonidkoltan"
                    ]
                },
                "headline": "${title}",
                "url": "${url}",
                "image": {
                    "@type": "ImageObject",
                    "url": "${socialImageUrl}",
                    "width": 1200,
                    "height": 630
                },
                "name": "${title}",
                "description": "${description}",
                "url": "${url}",
                "mainEntityOfPage": "${url}"
            }
        </script>`
    }
    <!-- <meta content="http://localhost:5173/og?message={ogImage}" property="og:image"> -->
    <meta property="og:site_name" content="koltan.dev">
    <meta property="og:type" content="{type}">
    <meta property="og:title" content="{title} - koltan.dev">
    <meta property="og:description" content={description}>
    <meta property="og:url" content={url}>
    {#if generateOgImage}
        <meta property="og:image" content={socialImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="og-image-data-for-prerender" href={socialImageData} />
        <link rel="og-image-for-prerender" href={socialImagePath} />
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:image" content={socialImageUrl}>
    {/if}
    <meta name="twitter:title" content="koltan.dev">
    <meta name="twitter:description" content={description}>
    <meta name="twitter:url" content={url}>


</svelte:head>
