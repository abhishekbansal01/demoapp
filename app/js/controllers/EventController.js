eventsApp.controller('EventController', function EventController($scope) {
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2013',
        time: '10:30 am',
        location: {
            address: 'Google Headquater',
            city: 'USA',
            province: 'USA'            
        },
        imageUrl: "/img/angularjs-logo.png",
        sessions: [
            {
                name: "Directives",
                creatorName: 'Name1',
                duration: '1 hr',
                level: 'Advanced',
                abstract: 'Directives'
            },
            {
                name: "Scopes",
                creatorName: 'Name2',
                duration: '2 hr',
                level: 'Advanced',
                abstract: 'Scopes'
            },
            {
                name: "Controllers",
                creatorName: 'Name3',
                duration: '3 hr',
                level: 'Advanced',
                abstract: 'Controllers'
            }
        ]
    }
});