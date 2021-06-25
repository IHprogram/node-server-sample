// httpモジュールをrequire()で呼び出して使っている。
const http = require('http');
// fsモジュールを使用してindex.htmlを読み込み
const html = require('fs').readFileSync('index.html');

// createServerメソッドを使用して、Webサーバーを構築している。
const server = http.createServer();

server.on('request', function (request, response) {
  // ヘッダー情報を記述。文字コードをUTF-8にし、クライアントに返すコンテンツの種類を指定。「text/html」もある。
  response.writeHead(200, { 'Content-Type': 'text/html' });

  // 何か表示させたい場合はrespose.write()を使う
  // response.write('hello world！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！');

  // end()の引数にindex.htmlを設定。こうすることで、ブラウザに表示することができる。
  response.end(html);
});


// 以下、Node.jsにおける様々なデバッグ方法を紹介。

// fsモジュール読み込み
const fs2 = require('fs');
//「result.log」というファイルを作成する。
const log = fs2.createWriteStream('result.log');
// インスタンスを生成
const logger = new console.Console(log);

const user = {
  name: 'iida',
  age: 24,
  area: 'Tokyo'
}

// 以下のログは、全て「result.log」というファイルに出力される。
logger.log(user);
logger.log(user.name);
logger.log(user.age);
logger.log('loggerlogです')
console.log(user.name)

// listenメソッドにより、ポート番号を指定している。
server.listen(3000);

// これで、ターミナルで「node server.js」を実行後、「localhost:3000」にアクセスすれば「hello world」が出力されている。