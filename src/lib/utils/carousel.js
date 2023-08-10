// export function setupCarousel(refs) {
//     let {
//         carouselRef,
//         carouselItemRef
//     } = refs;

//     let currentIndex = 0;

//     let scrolling = false;
//     let startX = 0;
//     let scrollLeft = 0;

//     const scrollToRight = (e) => {
//         e.preventDefault();
//         carouselRef.scrollBy({
//             left: carouselItemRef.clientWidth,
//             top: 0,
//             behavior: 'smooth',
//         });
//         currentIndex += 1;
//     }

//     const scrollToLeft = (e) => {
//         e.preventDefault();
//         carouselRef.scrollBy({
//             left: -carouselItemRef.clientWidth,
//             top: 0,
//             behavior: 'smooth',
//         });
//         currentIndex -= 1;
//     }

//     function start(event) {
//         scrolling = true;
//         startX = event.pageX - carouselRef.offsetLeft;
//         scrollLeft = carouselRef.scrollLeft;
//     }

//     function end() {
//         scrolling = false;
//     }

//     function move(event) {
//         if (!scrolling) return;

//         event.preventDefault();
//         const x = event.pageX - carouselRef.offsetLeft;
//         const walk = (x - startX) * 10; // Adjust scrolling speed
//         carouselRef.scrollLeft = scrollLeft - walk;
//     }

//     return {
//         scrollToRight,
//         scrollToLeft,
//         start,
//         end,
//         move
//     };
// }
