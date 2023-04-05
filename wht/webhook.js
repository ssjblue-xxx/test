function sendMessage() {
  var wh = document.getElementById('webhook');
  var msg = document.getElementById('message');
  const request = new XMLHttpRequest();
  request.open("post", wh.textContent);

  request.setRequestHeader('Content-type', 'application/json');

  const params = {
    username: "Test",
    avatar_url: "",
    content: msg.textContent
  }

  request.send(JSON.stringify(params));
}