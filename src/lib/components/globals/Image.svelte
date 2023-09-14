<script>
    import Img from '@zerodevx/svelte-img'

    //import s3c1 from '$lib/assets/images/posts/s3c-1.jpg?as=run'

    export let src = undefined
    export let alt = undefined
    export let title = undefined

</script>
<!--
<style>
    .image {
        object-fit: cover;
        height: auto;
    }
</style> -->

<Img {src} {alt} {title} />
