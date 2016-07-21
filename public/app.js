var redditClone = angular.module('redditClone', []);

redditClone.controller('MainController', ['$scope', function($scope) {

  $scope.submitForm = function(isValid) {
    if (isValid) {
      var newPost = new this.Post();
      newPost.title = this.post.title;
      newPost.author = this.post.author;
      newPost.image = this.post.image;
      newPost.description = this.post.description;
      $scope.posts.push(newPost);
      $scope.post = {};
    }
  };

  $scope.createPostView = false;
  $scope.togglePostView = function() {
    if ($scope.createPostView === false) {
      $scope.createPostView = true;
    } else {
      $scope.createPostView = false;
    }
  };

  $scope.Post = function() {
    this.date = new Date();
    this.score = 0;
    this.upvote = function() {
      this.score += 1;
    };
    this.downvote = function() {
      this.score -= 1;
    };
    this.comments = [];
    this.submitCommentForm = function() {
      var newComment = angular.copy(this.formComment);
      newComment.date = new Date();
      this.comments.push(newComment);
    };
  };

  $scope.posts = [
    {
      title: "A Snippet From Daniel's Diary",
      author: 'Daniel P. Abbott',
      image: 'http://data.whicdn.com/images/8989396/large.jpg',
      description: "A breif snippet from Daniel's Diary. The brutal and upsetting tale of young Daniel Abbott as he ventures through life.",
      date: new Date(),
      score: 11,
      upvote: function() {
        this.score += 1;
      },
      downvote: function() {
        this.score -= 1;
      },
      submitCommentForm: function() {
        var newComment = this.formComment;
        newComment.date = new Date();
        this.comments.push(newComment);
      },
      comments: [
        {
          author: 'Bradford L-S',
          comment: "This is an excellent read. It's easy to feel horrible for young Daniel as he hardly makes it through simple situations.",
          date: new Date()
        },
        {
          author: 'Laney Smith',
          comment: "Daniel is easily the biggest idiot I've ever met.",
          date: new Date()
        },
        {
          author: 'Bennett Joerger',
          comment: "Just when I thought I was a big dumb stupid idiot, I met Daniel. Now I might as well be called Bill Gates.",
          date: new Date()
        },
      ]
    },
    {
      title: "Bennett's Spelling",
      author: 'Bradford L-S',
      image: 'https://cyberchimps.com/wp-content/uploads/2014/08/spel-gud.png',
      description: "This hardly needs a description. Bennett can't spelling a damn thing right.",
      date: new Date(),
      score: 0,
      upvote: function() {
        this.score += 1;
      },
      downvote: function() {
        this.score -= 1;
      },
      submitCommentForm: function() {
        var newComment = this.formComment;
        newComment.date = new Date();
        this.comments.push(newComment);
      },
      comments: [
        {
          author: 'Laney Smith',
          comment: "It's so accurate, Bennett has a hard time figuring out how to read let alone write.",
          date: new Date()
        },
        {
          author: 'Daniel Abbott',
          comment: "Bennett just makes me feel sad. What a shame god wasted a life on someone like him.",
          date: new Date()
        },
      ]
    },
    {
      title: 'Quail Breeding',
      author: 'Bradford L-S',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/California_quail.jpg',
      description: "Look at the picture for this quail. It's beautiful",
      date: new Date(),
      score: -4,
      upvote: function() {
        this.score += 1;
      },
      downvote: function() {
        this.score -= 1;
      },
      submitCommentForm: function() {
        var newComment = this.formComment;
        newComment.date = new Date();
        this.comments.push(newComment);
      },
      comments: [
        {
          author: 'Bradford',
          comment: "How come no one else likes quail?",
          date: new Date()
        },
      ]
    },
  ];
}]);
