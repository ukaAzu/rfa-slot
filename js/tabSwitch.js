document.addEventListener('DOMContentLoaded',function(){
	let tabs = document.querySelectorAll('#tabs li');
	for(let i=0; i<tabs.length; i++){
		tabs[i].addEventListener('click',tabSwitch,false);
	}

	function tabSwitch(){
		tabs = document.querySelectorAll('#tabs li');
		let node = Array.prototype.slice.call(tabs,0);
		node.forEach(function (element) {
	      element.classList.remove('active');
	    });
	    this.classList.add('active');

		let contents = document.querySelectorAll('.contents');
		node = Array.prototype.slice.call(contents, 0);
	    node.forEach(function (element) {
	      element.classList.remove('show');
	    });

	    const arrayTabs = Array.prototype.slice.call(tabs);
	    const index = arrayTabs.indexOf(this);
	    
	    document.querySelectorAll('.contents')[index].classList.add('show');
	}
})