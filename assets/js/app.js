  
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
    $scope.auth = function() {
      if($scope.username && $scope.password)
      {
        console.log($scope.username);
        console.log($scope.password);
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
            console.log($scope.err);
            success = false;
            alert('your username or password was incorrect');
          }else
          {
            console.log($scope.repos);
            $scope.success = true;
            $scope.$apply();
          }
        });
      }
    }
    
    $scope.search = function() {
     // $scope.user_repos = $scope.github.getRepo($scope.username);
      //console.log($scope.user_repos);
     }
  });
  
  
  
