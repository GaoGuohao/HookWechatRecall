#### Frida防止微信撤回

#### 使用
1. 首先安装[frida](https://frida.re/)工具
2. 项目clone到本地，在项目目录执行：
``` shell
frida -p <微信进程id> -l frida_js.ts
```
<p>
微信进程id可以通过 `frida-ps`名称查看:
```shell
frida-ps | grep 微信
```