// const http = require('http')
const net = require('net')

const client = net.createConnection({
    port:8088
}, () => {
    let jsonStr = JSON.stringify({a: 1, b: 2})
    client.write('GET / HTTP/1.1\r\n')
    client.write('HOST: 127.0.0.1\r\n')
    client.write('Content-Type: application/json\r\n')
    client.write('\r\n')
    client.write(jsonStr)
    client.end()
})

client.on('data', (data) => {
    console.log('收到后端数据', data.toString())
})

// HTTP/1.1 200 OK
// X-Foo: bar
// Content-Type: text/plain
// Date: Mon, 05 Oct 2020 02:32:19 GMT
// Connection: keep-alive
// Transfer-Encoding: chunked

// 2
// ok
// 0

// 第二步 解析