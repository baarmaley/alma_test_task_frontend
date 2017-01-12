;$( document ).ready(function() {

	console.log('Start!');

	var classSelectStar = "stars-container__item-select";

	var classContainerItem = "stars-container__item";

	var addHandlerRating = function(id){

		var idSelector = '#' + id;
		var selectItem = null;

		return function(){

			var handlerIn = function(){
				$(idSelector + ' .' + classSelectStar).removeClass(classSelectStar);
				$(this).addClass(classSelectStar);
				$(this).prevAll().addClass(classSelectStar);

			};

			var handlerOut = function(){
				$(idSelector + ' .' + classSelectStar).removeClass(classSelectStar);
			};

			var handlerInContainer = function(){
				$(idSelector + '.' + classSelectStar).removeClass(classSelectStar);
				if(selectItem !== null){
					$(selectItem).prevAll().addClass(classSelectStar);
					$(selectItem).addClass(classSelectStar);
				}
			};

			$(idSelector + ' .' + classContainerItem).hover(handlerIn, handlerOut);

			$(idSelector + ' .' + classContainerItem).click(function(){
				selectItem = this;
			});

			$(idSelector).hover(null, handlerInContainer);

		};
	};

	$('.stars-container').each(function(){
		addHandlerRating($(this)[0].id)();
	})

});