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
                <img  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCI+PHBhdGggZD0iTTUzNi40IDE1OS40Yy0zLjUgOS40LTEwLjcgMTYuMi0yMS42IDIwLjFMMTQ1LjEgMzMzYy04LjkgMy0xOC4xIDIuNy0yNy42LS43cy0xNi42LTEwLjItMjEuNi0yMC4xYy0zLTguOS0yLjUtMTguNCAxLjUtMjguMyA0LTkuOSAxMC45LTE2LjkgMjAuOS0yMC45TDQ4OCAxMTFjOS45LTQgMTkuNi00IDI5LjEgMCA5LjQgNCAxNS42IDEwLjQgMTguNiAxOS40IDMuOSA5LjkgNC4yIDE5LjUuNyAyOXptLS44IDMwNy44Yy0zIDktOS4yIDE1LjQtMTguNiAxOS40LTkuNCA0LTE5LjIgNC0yOS4xIDBsLTM2OS43LTE1MmMtOS45LTQtMTYuOS0xMC45LTIwLjktMjAuOS00LTkuOS00LjUtMTkuNC0xLjUtMjguMyA1LTkuOSAxMi4yLTE2LjYgMjEuNi0yMC4xczE4LjYtMy43IDI3LjYtLjhMNTE0LjggNDE4YzEwLjkgNCAxOC4xIDEwLjcgMjEuNiAyMC4xIDMuNSA5LjUgMy4yIDE5LjItLjggMjkuMXptLTM2Ni40LTE2NHY0MDIuNWMwIDkuOS0zLjUgMTguNy0xMC41IDI2LjEtNyA3LjUtMTYgMTEuMi0yNi45IDExLjItMTAgMC0xOC43LTMuNy0yNi4yLTExLjItNy41LTcuNC0xMS4yLTE2LjEtMTEuMi0yNi4xVjMwMy4yYzAtMTAuOSAzLjctMTkuOCAxMS4yLTI2LjggNy41LTcgMTYuMi0xMC40IDI2LjItMTAuNCAxMSAwIDE5LjkgMy41IDI2LjkgMTAuNCA3IDcgMTAuNSAxNS45IDEwLjUgMjYuOHptMzcyLjUgMTQ5LjF2NDAyLjVjMCA5LjktMy41IDE4LjctMTAuNSAyNi4xLTcgNy41LTE2IDExLjItMjYuOSAxMS4yLTEwIDAtMTguNy0zLjctMjYuMi0xMS4yLTcuNS03LjQtMTEuMi0xNi4xLTExLjItMjYuMVY0NTIuM2MwLTEwLjkgMy43LTE5LjggMTEuMi0yNi44IDcuNS03IDE2LjItMTAuNCAyNi4yLTEwLjQgMTEgMCAxOS45IDMuNSAyNi45IDEwLjQgNi45IDcgMTAuNSAxNS45IDEwLjUgMjYuOHptLTY5LjQtMTQuMWMzLjUtOS40IDEwLjctMTYuMSAyMS42LTIwLjFsMzY5LjctMTUzLjVjOC45LTMgMTguMS0yLjcgMjcuNi44czE2LjYgMTAuMiAyMS42IDIwLjFjMyA5IDIuNSAxOC40LTEuNSAyOC4zLTQgOS45LTEwLjkgMTYuOS0yMC45IDIwLjlsLTM2OS43IDE1MmMtOS45IDQtMTkuNiA0LTI5LjEgMC05LjQtNC0xNS42LTEwLjQtMTguNi0xOS40LTMuOS0xMC00LjItMTkuNy0uNy0yOS4xem0wIDQwOC40YzMuNS05LjQgMTAuNy0xNi4xIDIxLjYtMjAuMUw4NjMuNiA2NzNjOC45LTMgMTguMS0yLjcgMjcuNi44IDkuNCAzLjUgMTYuNiAxMC4yIDIxLjYgMjAuMSAzIDkgMi41IDE4LjQtMS41IDI4LjMtNCA5LjktMTAuOSAxNi45LTIwLjkgMjAuOUw1MjAuNyA4OTVjLTkuOSA0LTE5LjYgNC0yOS4xIDAtOS40LTQtMTUuNi0xMC40LTE4LjYtMTkuNC0zLjktOS45LTQuMi0xOS42LS43LTI5eiIgc3R5bGU9ImZpbGw6I0Y3QzkwRDtzdHJva2U6I0Y3QzkwRDtzdHJva2Utd2lkdGg6MTUwO3N0cm9rZS1taXRlcmxpbWl0OjEwIi8+PC9zdmc+DQo=" alt="logo">
            </div>
            <span>koltan.dev</span>
            <span>t.me/leonidkoltan</span>
            <span>wa.me/9923554536</span>
            <span>leonidkoltan@gmail.com</span>
        </div>
    </div>
</div>
