###### http1.0和http2.0的区别
``` 
 速度更快,性能更好
 1:新的二进制格式,http1.x解析是基于文本,天然缺陷,文本形式多样性，健壮性比较难.二进制方便且健壮。
 2:多路复用:连接共享,即每一个request都是用做连接共享机制的,一个request对应一个id,这样一个连接上可以有多个request,每个连接的requset可以随机的混杂在一起,接收方可以根据request的id将各自的request在归属到各自不同的服务器请求里面
 3:header压缩.每次请求都会携带请求大量头信息，http2.0使用encoder来减少需要传输header大小,通讯双方各自cache一份header field表.避免了重复header的传输，有减少了header信息的传输 
 ```

 ###### http和https
 ```
 http运行在tcp协议上,https协议多了一层SSL/TLS上,所有传输的内容都是加密过的.HTTPS可以有效的防止劫持,要钱,端口为443,http端口为80.