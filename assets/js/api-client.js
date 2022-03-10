function getData(url, callback) {
  var request = new XMLHttpRequest()
  request.open('GET', url, true)
  request.onload = function () {
    callback(this.response);
  }
  request.send()
}

