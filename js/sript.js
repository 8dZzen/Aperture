
$(document).ready(function(){
	$('.header_burger').click(function(event){
		$('.header_burger,.header__list__row').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.footer__top__spoiler__title').click(function spoiler(event) {
		$(this).toggleClass('spoiler__active').next().slideToggle(300);
	})
	function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('anim-active');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.anim-items');
for (let elm of elements) {
  observer.observe(elm);
}
});
