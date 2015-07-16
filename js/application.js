function UrlParserCtrl($scope) {
  this.parsedUri = {};
  this._$scope = $scope;
}

UrlParserCtrl.prototype.parse = function () {
  var uri = URI(this.url);
  this.parsedUri = {
    scheme: uri.scheme(),
    username: uri.username(),
    password: uri.password(),
    hostname: uri.hostname(),
    port: uri.port(),
    path: uri.path(),
    path: uri.path(),
    query: uri.search(true),
    fragment: uri.fragment(),
  }
}

UrlParserCtrl.prototype.render = function (parsedUrl) {
  var url = "";
  if (parsedUrl.scheme)
    url += parsedUrl.scheme + ":";
  url += "//";
  if (parsedUrl.username || parsedUrl.password)
    url += parsedUrl.username + ":" + parsedUrl.password + "@";
    
  url += parsedUrl.hostname;
  if (parsedUrl.port)
    url += ":" + parsedUrl.port;
  url += parsedUrl.path + "?";

  for (var key in parsedUrl.query)
    url += key + "=" + parsedUrl.query[key] + "&";

  if (parsedUrl.fragment)
    url += "#" + parsedUrl.fragment;
  return url;
};

angular
  .module('app', [])
  .controller('UrlParserCtrl', UrlParserCtrl);