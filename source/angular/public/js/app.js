angular.module('routerApp', ['routerRoutes'])

.controller('mainController', function() {
	var vm = this;

	vm.bigMessage = "A smooth sea never made a skilled sailor.";

})

.controller('homeController', function() {
	var vm = this;

	vm.message = "This is the home page!";
})

.controller('addRecipeController', function() {
	var vm = this;

	vm.message = "add Recipe page";
})

.controller('popularController', function() {
	var vm = this;

	vm.message = "Popular Page";
})

/*.controller('newsController', function() {
	var vm = this;

	vm.message = "News Page";
})*/

.controller('aboutController', function() {
	var vm = this;

	vm.message = "About page";
})

.controller('infosController', function() {
	var vm = this;

	vm.message = "Infos page";
})

.controller('loginController', function() {
	var vm = this;

	vm.message = "Login Page";
})

.controller('createUserController', function() {
	var vm = this;

	vm.message = "Create user page";
});