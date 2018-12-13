// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		
		{
		path: '/info-producto/',
    	url: 'info-producto.html',
    	name: 'info-producto',
  		},
		
		{
		path: '/info-product/',
    	url: 'info-product.html',
    	name: 'info-product',
  		}
	]
	
});

// Export selectors engine
var $$ = Dom7;





 

