const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const sectionSelect = document.querySelectorAll('.section-select');
const section = document.querySelectorAll('section');
const profile = document.querySelector('.profile');


// add fixed class to navbar


// ==================================================
// ssticky Navbar
// ==================================================


// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 400) {
//     navbar.classList.add("navbar-fixed");
//   } else {
//     navbar.classList.remove("navbar-fixed");
//   }
// });

const profCallback= function(entries,observer){
  const [entry]=entries;
  if(!entry.isIntersecting){
    navbar.classList.add("navbar-fixed");
  }else{
    navbar.classList.remove("navbar-fixed");
  }

};


const profileObserver =new IntersectionObserver(profCallback,{
  root:null,
  threshold:0.2,
  // rootMargin:'200px'
});

profileObserver.observe(profile);












// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = `${new Date().getFullYear()}`;




// ==================================================
// smooth scroll
// ==================================================

const scroll = document.querySelectorAll('.scroll-link');


scroll.forEach(lin=> lin.addEventListener('click',function(e){
	e.preventDefault();
	
	
	const id = e.target.getAttribute('href').slice(1);
	const element= document.getElementById(id);
	//element.scrollIntoView({behavior:'smooth'});
	
    let position = element.offsetTop-80 ;
	//console.log(offsetTOp);
	// console.log(element.offsetTop);
	
    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth"
    });

}));


//const navId= document.querySelector('')


// ==================================================
// fade effect
// ==================================================



const obsCallback= function(entries, observer){
  entries.forEach(function(entry){
    if(entry.isIntersecting){
      // console.log('observed');
      entry.target.querySelector('.section-select').classList.remove('section-hidden');
    }else{
      entry.target.querySelector('.section-select').classList.add('section-hidden');
    }
  });

  
}


const sectionObserver = new IntersectionObserver(obsCallback ,{
  root:null,
  threshold :0.3
})


sectionSelect.forEach(function(el){ 
  el.classList.add('section-hidden')
});

section.forEach(function(e){
  sectionObserver.observe(e);
}
);



