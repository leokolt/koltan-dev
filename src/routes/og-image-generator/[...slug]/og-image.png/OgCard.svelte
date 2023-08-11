<!-- <script>
    export let title
    export let description




const backgrounds = [
        {
            "background": 'linear-gradient(135deg, #62c0a5 25%, transparent 25%), linear-gradient(225deg, #62c0a5 25%, transparent 25%), linear-gradient(45deg, #62c0a5 25%, transparent 25%), linear-gradient(315deg, #62c0a5 25%, #e5e5f7 25%)',
            "background-repeat": 'repeat'
        },
        {
            "background": 'linear-gradient(30deg, #62c0a5 12%, transparent 12.5%, transparent 87%, #62c0a5 87.5%, #62c0a5), linear-gradient(150deg, #62c0a5 12%, transparent 12.5%, transparent 87%, #62c0a5 87.5%, #62c0a5), linear-gradient(30deg, #62c0a5 12%, transparent 12.5%, transparent 87%, #62c0a5 87.5%, #62c0a5), linear-gradient(150deg, #62c0a5 12%, transparent 12.5%, transparent 87%, #62c0a5 87.5%, #62c0a5), linear-gradient(60deg, #62c0a577 25%, transparent 25.5%, transparent 75%, #62c0a577 75%, #62c0a577), linear-gradient(60deg, #62c0a577 25%, transparent 25.5%, transparent 75%, #62c0a577 75%, #62c0a577)',
            "background-position": '20px 35px',
            "background-size": '0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px',
        }




  ];


    // Генерируем случайные цвета и создаем градиентный фон
    let randomGradient = backgrounds.sort(() => 0.5 - Math.random()).map(background => background)




</script>

  <div
    style:display="flex"
    style:flex-direction="column"
    style:height="100%"
    style:width="100%"

    style:color="#333"
    style={`${randomGradient}`}
  >
    <div style:display="flex" style:align-items="center" style:padding="1.6rem" style:flex-grow="1">
      <h1 style:font-size="50px" style:font-weight="900">{title}</h1>
      <p>{description}</p>
    </div>

  </div>-->


<script>
    export let title
    export let description

    const backgrounds = [
        {
            backgroundImage: 'linear-gradient(135deg, #A390F8 25%, transparent 25%), linear-gradient(225deg, #A390F8 25%, transparent 25%), linear-gradient(45deg, #A390F8 25%, transparent 25%), linear-gradient(315deg, #A390F8 25%, #e5e5f7 25%)',
            'background-repeat': 'repeat',
            backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
            backgroundSize: '10px 10px'
        },
        {
            backgroundImage: 'linear-gradient(30deg, #62c0a5 12%, transparent 12.5%, transparent 87%, #62c0a5 87.5%, #62c0a5), linear-gradient(150deg, #62c0a5 12%, transparent 12.5%, transparent 87%, #62c0a5 87.5%, #62c0a5), linear-gradient(30deg, #62c0a5 12%, transparent 12.5%, transparent 87%, #62c0a5 87.5%, #62c0a5), linear-gradient(150deg, #62c0a5 12%, transparent 12.5%, transparent 87%, #62c0a5 87.5%, #62c0a5), linear-gradient(60deg, #62c0a577 25%, transparent 25.5%, transparent 75%, #62c0a577 75%, #62c0a577), linear-gradient(60deg, #62c0a577 25%, transparent 25.5%, transparent 75%, #62c0a577 75%, #62c0a577)',
            backgroundPosition: '20px 35px',
            backgroundSize: '0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px'
        },
        {
            backgroundImage: 'linear-gradient(45deg, #66c8cf 50%, #e5e5f7 50%)',
            backgroundSize: '24px 24px',
        },
        {
            backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 20px 20px, lightgray 2%, transparent 0%)',
            backgroundSize: '100px 100px',
        },
        {
            backgroundColor: "#0ae",
            backgroundSize: "50px 50px",
            backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, .2) 50%, transparent 50%, transparent)"
        },
        {
            backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgdHJhbnNmb3JtPSdzY2FsZSgyKSc+PHJlY3QgeD0nMCcgeT0nMCcgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0naHNsYSgwLDAlLDEwMCUsMSknLz48cGF0aCBkPSdNMTEgNmE1IDUgMCAwMS01IDUgNSA1IDAgMDEtNS01IDUgNSAwIDAxNS01IDUgNSAwIDAxNSA1JyAgc3Ryb2tlLXdpZHRoPScxJyBzdHJva2U9J25vbmUnIGZpbGw9J2hzbGEoMjU4LjUsNTkuNCUsNTkuNCUsMSknLz48L3N2Zz4=)`
        }
    ];

    const borderRadius = [
        '15px 15px 15px 15px',
        '0 15px 15px 15px',
        '15px 0 15px 15px',
        '15px 15px 0 15px',
        '15px 15px 15px 0'
    ]

    // Получаем случайный градиентный фон из массива backgrounds
    let randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    let randomBorderRadius = borderRadius.sort(() => 0.5 - Math.random()).slice(0, 1).map(radius => radius)


</script>

<div
    style="display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        color: #292929;
        background-color:{`${randomBg.backgroundColor}`};
        background: {`${randomBg.backgroundImage}`};
        background-repeat: {`${randomBg.backgroundRepeat}`};
        background-size: {`${randomBg.backgroundSize}`};
        background-position: {`${randomBg.backgroundPosition}`};"
>
    <div
        style="display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            padding: 2rem;
            flex-grow: 1;
            margin: 50px;
            border: 2px solid #292929;
            background-color: #f7f7f7;
            box-shadow: 1px 1px 0  #292929, 2px 2px 0  #292929, 3px 3px 0  #292929;"
        style:border-radius={randomBorderRadius}
    >
        <h1 style="font-size: 50px; font-weight: 900;">{title}</h1>
        <p style="font-size: 20px; font-weight: 400; padding-right: 120px">{description}</p>
        <div style="display: flex; align-items: center; gap:30px; margin-top: auto" >
            <div style="display: flex; width: 40px;height: auto;">
                <img  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' style='enable-background:new 0 0 1000 1000' viewBox='0 0 1000 1000'%3E%3Cpath d='M536.4 159.4c-3.5 9.4-10.7 16.2-21.6 20.1L145.1 333c-8.9 3-18.1 2.7-27.6-.7s-16.6-10.2-21.6-20.1c-3-8.9-2.5-18.4 1.5-28.3 4-9.9 10.9-16.9 20.9-20.9L488 111c9.9-4 19.6-4 29.1 0 9.4 4 15.6 10.4 18.6 19.4 3.9 9.9 4.2 19.5.7 29zm-.8 307.8c-3 9-9.2 15.4-18.6 19.4-9.4 4-19.2 4-29.1 0l-369.7-152c-9.9-4-16.9-10.9-20.9-20.9-4-9.9-4.5-19.4-1.5-28.3 5-9.9 12.2-16.6 21.6-20.1s18.6-3.7 27.6-.8L514.8 418c10.9 4 18.1 10.7 21.6 20.1 3.5 9.5 3.2 19.2-.8 29.1zm-366.4-164v402.5c0 9.9-3.5 18.7-10.5 26.1-7 7.5-16 11.2-26.9 11.2-10 0-18.7-3.7-26.2-11.2-7.5-7.4-11.2-16.1-11.2-26.1V303.2c0-10.9 3.7-19.8 11.2-26.8 7.5-7 16.2-10.4 26.2-10.4 11 0 19.9 3.5 26.9 10.4 7 7 10.5 15.9 10.5 26.8zm372.5 149.1v402.5c0 9.9-3.5 18.7-10.5 26.1-7 7.5-16 11.2-26.9 11.2-10 0-18.7-3.7-26.2-11.2-7.5-7.4-11.2-16.1-11.2-26.1V452.3c0-10.9 3.7-19.8 11.2-26.8 7.5-7 16.2-10.4 26.2-10.4 11 0 19.9 3.5 26.9 10.4 6.9 7 10.5 15.9 10.5 26.8zm-69.4-14.1c3.5-9.4 10.7-16.1 21.6-20.1l369.7-153.5c8.9-3 18.1-2.7 27.6.8s16.6 10.2 21.6 20.1c3 9 2.5 18.4-1.5 28.3-4 9.9-10.9 16.9-20.9 20.9l-369.7 152c-9.9 4-19.6 4-29.1 0-9.4-4-15.6-10.4-18.6-19.4-3.9-10-4.2-19.7-.7-29.1zm0 408.4c3.5-9.4 10.7-16.1 21.6-20.1L863.6 673c8.9-3 18.1-2.7 27.6.8 9.4 3.5 16.6 10.2 21.6 20.1 3 9 2.5 18.4-1.5 28.3-4 9.9-10.9 16.9-20.9 20.9L520.7 895c-9.9 4-19.6 4-29.1 0-9.4-4-15.6-10.4-18.6-19.4-3.9-9.9-4.2-19.6-.7-29z' style='fill:%23e44041;stroke:%23e44041;stroke-width:150;stroke-miterlimit:10'/%3E%3C/svg%3E" alt="logo">
            </div>
            <span>koltan.dev</span>
            <span>t.me/leonidkoltan</span>
            <span>wa.me/9923554536</span>
        </div>
    </div>
</div>
