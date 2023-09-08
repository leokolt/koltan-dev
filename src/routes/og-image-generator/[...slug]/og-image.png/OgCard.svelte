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
            backgroundImage: 'radial-gradient(#F7C90D 15%, rgba(0,0,0,0) 16%), radial-gradient(#ED6F35 15%, rgba(0,0,0,0) 16%)',
            backgroundColor: '#fff',
            backgroundPosition: '0 0, 30px 30px',
            backgroundSize: '60px 60px',
        },
        {

            backgroundImage: 'radial-gradient(#64BAAA 20%, #ffffff00 0%), radial-gradient(#F7C90D 20%, #ffffff00 0%)',
            backgroundColor: '#eee',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px'
        },
        {
            backgroundImage: 'linear-gradient(45deg, #F7C90D 50%, #ED6F35 50%)',
            backgroundSize: '30px 30px',
        },
        {
            backgroundImage: `linear-gradient(135deg, rgba(247,201,13,1) 45%, rgba(237,111,53,1) 45%)`,
            backgroundColor: 'red',
        },
        {
            backgroundImage: `radial-gradient(circle, rgba(100,186,170,1) 85%, rgba(247,247,247,1) 85%)`,
        },
        {
            backgroundImage:'linear-gradient(90deg, #f7c90d,#ed6f35)'
        }
    ];


    // const borderRadius = [
    //     '15px 15px 15px 15px',
    //     '0 15px 15px 15px',
    //     '15px 0 15px 15px',
    //     '15px 15px 0 15px',
    //     '15px 15px 15px 0'
    // ]

    // Получаем случайный градиентный фон из массива backgrounds
    let randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    // let randomBorderRadius = borderRadius.sort(() => 0.5 - Math.random()).slice(0, 1).map(radius => radius)


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
            border: 3px solid #292929;
            background-color: #f7f7f7;
            border-radius: 30px;
            position: relative;"

    >
        <h1 style="font-size: 50px; font-weight: 900;">{title}</h1>
        <p style="font-size: 20px; font-weight: 400; padding-right: 120px">{description}</p>
        <div style="display: flex; align-items: center; gap:30px; margin-top: auto" >
            <div style="display: flex; width: 40px;height: auto;">
                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIGlkPSLQodC70L7QuV8xIiB4PSIwIiB5PSIwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxzdHlsZT4uc3Qxe2ZpbGw6dHJhbnNwYXJlbnR9PC9zdHlsZT48cGF0aCBmaWxsPSIjZjdjOTBkIiBkPSJNMjU3IDk5MmMtNjIuOCAwLTEyMS44LTI0LjQtMTY2LjItNjguOEM0Ni40IDg3OC44IDIyIDgxOS44IDIyIDc1N1YyNDdjMC02Mi44IDI0LjQtMTIxLjggNjguOC0xNjYuMkMxMzUuMiAzNi40IDE5NC4yIDEyIDI1NyAxMnMxMjEuOCAyNC40IDE2Ni4yIDY4LjhDNDY3LjYgMTI1LjIgNDkyIDE4NC4yIDQ5MiAyNDd2NTEwYzAgNjIuOC0yNC40IDEyMS44LTY4LjggMTY2LjJDMzc4LjggOTY3LjYgMzE5LjggOTkyIDI1NyA5OTJ6Ii8+PHBhdGggZD0iTTI1NyAxN2MzMS4xIDAgNjEuMiA2LjEgODkuNSAxOC4xIDI3LjQgMTEuNiA1MiAyOC4yIDczLjEgNDkuM3MzNy43IDQ1LjcgNDkuMyA3My4xYzEyIDI4LjMgMTguMSA1OC41IDE4LjEgODkuNXY1MTBjMCAzMS4xLTYuMSA2MS4yLTE4LjEgODkuNS0xMS42IDI3LjQtMjguMiA1Mi00OS4zIDczLjEtMjEuMSAyMS4xLTQ1LjcgMzcuNy03My4xIDQ5LjMtMjguMyAxMi01OC41IDE4LjEtODkuNSAxOC4xLTMxLjEgMC02MS4yLTYuMS04OS41LTE4LjEtMjcuNC0xMS42LTUyLTI4LjItNzMuMS00OS4zLTIxLjEtMjEuMS0zNy43LTQ1LjctNDkuMy03My4xQzMzLjEgODE4LjIgMjcgNzg4LjEgMjcgNzU3VjI0N2MwLTMxLjEgNi4xLTYxLjIgMTguMS04OS41IDExLjYtMjcuNCAyOC4yLTUyIDQ5LjMtNzMuMSAyMS4xLTIxLjEgNDUuNy0zNy43IDczLjEtNDkuM0MxOTUuOCAyMy4xIDIyNS45IDE3IDI1NyAxN20wLTEwQzEyNC41IDcgMTcgMTE0LjUgMTcgMjQ3djUxMGMwIDEzMi41IDEwNy41IDI0MCAyNDAgMjQwczI0MC0xMDcuNSAyNDAtMjQwVjI0N0M0OTcgMTE0LjUgMzg5LjUgNyAyNTcgN3oiIGNsYXNzPSJzdDEiLz48cGF0aCBmaWxsPSIjZWQ2ZjM1IiBkPSJNNzUwIDQ4NGMtNjIuOCAwLTEyMS44LTI0LjQtMTY2LjItNjguOEM1MzkuNCAzNzAuOCA1MTUgMzExLjggNTE1IDI0OXMyNC40LTEyMS44IDY4LjgtMTY2LjJDNjI4LjIgMzguNCA2ODcuMiAxNCA3NTAgMTRzMTIxLjggMjQuNCAxNjYuMiA2OC44Qzk2MC42IDEyNy4yIDk4NSAxODYuMiA5ODUgMjQ5cy0yNC40IDEyMS44LTY4LjggMTY2LjJDODcxLjggNDU5LjYgODEyLjggNDg0IDc1MCA0ODR6Ii8+PHBhdGggZD0iTTc1MCAxOWMzMS4xIDAgNjEuMiA2LjEgODkuNSAxOC4xIDI3LjQgMTEuNiA1MiAyOC4yIDczLjEgNDkuMyAyMS4xIDIxLjEgMzcuNyA0NS43IDQ5LjMgNzMuMSAxMiAyOC4zIDE4LjEgNTguNSAxOC4xIDg5LjUgMCAzMS4xLTYuMSA2MS4yLTE4LjEgODkuNS0xMS42IDI3LjQtMjguMiA1Mi00OS4zIDczLjFzLTQ1LjcgMzcuNy03My4xIDQ5LjNDODExLjIgNDcyLjkgNzgxIDQ3OSA3NTAgNDc5Yy0zMS4xIDAtNjEuMi02LjEtODkuNS0xOC4xLTI3LjQtMTEuNi01Mi0yOC4yLTczLjEtNDkuMy0yMS4xLTIxLjEtMzcuNy00NS43LTQ5LjMtNzMuMS0xMi0yOC4zLTE4LjEtNTguNS0xOC4xLTg5LjUgMC0zMS4xIDYuMS02MS4yIDE4LjEtODkuNSAxMS42LTI3LjQgMjguMi01MiA0OS4zLTczLjEgMjEuMS0yMS4xIDQ1LjctMzcuNyA3My4xLTQ5LjNDNjg4LjggMjUuMSA3MTguOSAxOSA3NTAgMTltMC0xMEM2MTcuNSA5IDUxMCAxMTYuNSA1MTAgMjQ5czEwNy41IDI0MCAyNDAgMjQwIDI0MC0xMDcuNSAyNDAtMjQwUzg4Mi41IDkgNzUwIDl6IiBjbGFzcz0ic3QxIi8+PHBhdGggZmlsbD0iIzY0YmFhYSIgZD0iTTc1MiA5OTFjLTYyLjggMC0xMjEuOC0yNC40LTE2Ni4yLTY4LjhDNTQxLjQgODc3LjggNTE3IDgxOC44IDUxNyA3NTZzMjQuNC0xMjEuOCA2OC44LTE2Ni4yQzYzMC4yIDU0NS40IDY4OS4yIDUyMSA3NTIgNTIxczEyMS44IDI0LjQgMTY2LjIgNjguOEM5NjIuNiA2MzQuMiA5ODcgNjkzLjIgOTg3IDc1NnMtMjQuNCAxMjEuOC02OC44IDE2Ni4yQzg3My44IDk2Ni42IDgxNC44IDk5MSA3NTIgOTkxeiIvPjxwYXRoIGQ9Ik03NTIgNTI2YzMxLjEgMCA2MS4yIDYuMSA4OS41IDE4LjEgMjcuNCAxMS42IDUyIDI4LjIgNzMuMSA0OS4zIDIxLjEgMjEuMSAzNy43IDQ1LjcgNDkuMyA3My4xIDEyIDI4LjMgMTguMSA1OC41IDE4LjEgODkuNSAwIDMxLjEtNi4xIDYxLjItMTguMSA4OS41LTExLjYgMjcuNC0yOC4yIDUyLTQ5LjMgNzMuMS0yMS4xIDIxLjEtNDUuNyAzNy43LTczLjEgNDkuMy0yOC4zIDEyLTU4LjUgMTguMS04OS41IDE4LjEtMzEuMSAwLTYxLjItNi4xLTg5LjUtMTguMS0yNy40LTExLjYtNTItMjguMi03My4xLTQ5LjMtMjEuMS0yMS4xLTM3LjctNDUuNy00OS4zLTczLjEtMTItMjguMy0xOC4xLTU4LjUtMTguMS04OS41IDAtMzEuMSA2LjEtNjEuMiAxOC4xLTg5LjUgMTEuNi0yNy40IDI4LjItNTIgNDkuMy03My4xIDIxLjEtMjEuMSA0NS43LTM3LjcgNzMuMS00OS4zIDI4LjMtMTIgNTguNC0xOC4xIDg5LjUtMTguMW0wLTEwYy0xMzIuNSAwLTI0MCAxMDcuNS0yNDAgMjQwczEwNy41IDI0MCAyNDAgMjQwIDI0MC0xMDcuNSAyNDAtMjQwLTEwNy41LTI0MC0yNDAtMjQweiIgY2xhc3M9InN0MSIvPjwvc3ZnPg0K' alt='logo'/>
            </div>
            <span>koltan.dev</span>
            <span>t.me/leonidkoltan</span>
            <span>wa.me/9923554536</span>
            <span>leonidkoltan@gmail.com</span>
        </div>
    </div>
</div>
