var ws = require('nodejs-websocket');
console.log("开始建立WebSocket连接...")

var song = null, peng = null;
var server = ws.createServer(function (conn) {
  conn.on("text", function (str) {
    if(str === 'start_song') {
      song = conn;
    }
    if(str === 'start_peng') {
      peng = conn;
    }
    console.log(`收到消息：${str}`);
    song && song.sendText(str);
    peng && peng.sendText(str);
  })
  conn.on("close", function (code, reason) {
    console.log("关闭连接");
  })
  conn.on("error", function (code, reason) {
    console.log("异常关闭")
  })
}).listen(8001)
console.log('WebSocket连接已建立...');
