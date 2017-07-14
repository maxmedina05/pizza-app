Ajax = {
  get: function(url, params, callback){
    var xhr = new XMLHttpRequest();
    var method = 'GET';

    xhr.onreadystatechange = function() {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        callback(xhr.responseText);
      }
    };
    xhr.open(method, url, true);
    xhr.send();
  },
  post: function(url, params, callback) {
    var xhr = new XMLHttpRequest();
    var method = 'POST';

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        callback(xhr.responseText);
      }
    };
    xhr.open(method, url, true);
    xhr.send(buildHttpParams(params));
  },
  buildHttpParams(params){
    str = "";
    var keys = Object.keys(params);
    for(var i=0; i<keys.length; i++) {
      var key = keys[i];

      if(i == 0) {
        str += key + '=' + params[key];
      } else {
        str += '&' + key + '=' + params[key];
      }
    }
    return str;
  }
};
