## Frida防止微信撤回

### Mac

#### 使用
1. 首先电脑安装[frida](https://frida.re/)工具
2. 打开微信
3. 项目clone到本地，在项目目录执行：<br>
```shell
frida -p <微信进程id> -l mac_frida_js.ts
```
<p>

<微信进程id>可以通过`frida-ps` 名称查看:<br>

```shell
frida-ps | grep 微信
```

### iPhone
1. 需要越狱iPhone机，并通过Cydia安装frida。
2. 手机通过USB连接电脑，并打开微信。
3. 项目clone到本地，在项目目录执行：<br>
```shell
frida -U -p <微信进程id> -l ios_frida_js.ts
```
<p>

手机<微信进程id>可以通过`frida-ps` 名称查看:<br>

```shell
frida-ps -U | grep 微信
```