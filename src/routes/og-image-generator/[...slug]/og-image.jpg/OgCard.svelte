<script>
    // src/routes/og-image-generator/[...path]/og-image.jpg/OgCard.svelte
    // export let logo
    //export let data
    export let title
    export let description
    // export let hero
    // export let heroWidth
    // export let heroHeight
  </script>

  <div
    style:display="flex"
    style:flex-direction="column"
    style:height="100%"
    style:width="100%"
    style:background="#fff"
    style:color="#333"
  >
    <div
      style:display="flex"
      style:height="8px"
      style:width="100%"
      style:background-image={'linear-gradient(to right, #931077, #37b5c3 50%, #bbe354)'}
    />
    <div style:display="flex" style:align-items="center" style:padding="1.6rem" style:flex-grow="1">
      <h1 style:font-size="50px" style:font-weight="900">{title}</h1>
      <p>{description}</p>
    </div>
    <div
      style:display="flex"
      style:height="8px"
      style:width="100%"
      style:background-image={'linear-gradient(to left, #931077, #37b5c3 50%, #bbe354)'}
    />
  </div>
