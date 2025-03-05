let options = {
	root: document.querySelector('main'),
	rootMargin: '0px',
	threshold: 0.5
}
const callback = ([ entry ], observer) => {
   const header = document.querySelector('header');
   if(entry.isIntersecting){
     header.style.background = 'rgb(58, 58, 59.00)';
   } else {
     header.removeAttribute('style');
   }
}
const observer = new IntersectionObserver(callback, options)

observer.observe(document.querySelector('main'))