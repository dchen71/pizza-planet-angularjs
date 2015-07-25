app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }    
  ];

  $scope.mains = [
    {
      name: 'Steak',
      description: 'Balsmaic glaze.',
      price: 14.95
    },
    {
      name: 'Mozzarella Pasta',
      description: 'Served with marinara sauce.',
      price: 13.95
    },
    {
      name: 'Salmon Steak',
      description: 'Grilled garlic, tomatoes, olive oil',
      price: 24.95
    }    
  ];
  
  $scope.extras = [
    {
      name: 'Ice Cream',
      description: 'Mozzarella flavor',
      price: 2.95
    },
    {
      name: 'Cake',
      description: 'Served with marinara sauce.',
      price: 2.95
    },
    {
      name: 'Cheesecake',
      description: 'Olive oil',
      price: 4.95
    }    
  ];
  
}]);