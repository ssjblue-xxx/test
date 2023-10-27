function sendMessage() {
  var wh = document.getElementById('webhook');
  var msg = document.getElementById('message');
  const request = new XMLHttpRequest();
  request.open("post", wh.value);

  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    username: "yeah",
    avatar_url: "",
    content: msg.value
  }
  var data = JSON.stringify(params);
  request.send(data);
}
