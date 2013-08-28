  
  var app = angular.module('app',  []);
  app.controller('NavListCtrl', function($scope) {
    $scope.nav = [
      {
        "name": "HOME",
        "link": "#home"
      },{
        "name": "ABOUT",
        "link": "#about"
      },{
        "name": "MEDIA",
        "link": "#media"
      }
    ];
  });
  
  app.controller('AuthCtrl', function($scope) {
  
    $scope.username = '';
    $scope.password = '';
    $scope.search_input = '';
    $scope.search_repos;
    $scope.auth = function() {
      if($scope.username && $scope.password)
      {
        $scope.github = new Github({
          username: $scope.username,
          password: $scope.password,
          auth: "basic"
        });
        
        $scope.user = $scope.github.getUser();
        $scope.user.repos(function(err, repos) {
          
          $scope.err = err;
          $scope.repos = repos;
          if($scope.err != null)
          {
            $scope.success = false;
            alert('your username or password was incorrect');
          }else
          {
            $scope.success = true;
            $scope.$apply();
          }
        });
      }
    }
    
    $scope.search = function() {
      if($scope.search_input != $scope.search_name)
      {
        $scope.user.userRepos($scope.search_input, function(err, repos) {
          
          $scope.err = err;
          if($scope.err != null)
          {
            $scope.search_success = false;
            alert('the username is not valid');
          }else
          {
            $scope.search_name = $scope.search_input;
            $scope.search_repos = repos;
            $scope.search_success = true;
            console.log($scope.search_repos);
            $scope.$apply();
          }
        });
      }
    }  
    
    $scope.displayDetails = function(id, created) {
      alert("REPO ID: " + id + "\nCREATED AT: " + created);
    }

        
  });
  
  
