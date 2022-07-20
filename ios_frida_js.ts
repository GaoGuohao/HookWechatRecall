
// iOS拦截微信撤回功能
function hookRecallFunction() {

  // 获取撤回类
  const CMessageMgr = ObjC.classes.CMessageMgr;

  // 获取撤回函数
  const onRevokeMsg = CMessageMgr['- onRevokeMsg:'];
  console.log(onRevokeMsg);

  // 临时保存原始方法的实现
  const oldImp = onRevokeMsg.implementation;

  // 替换方法
  onRevokeMsg.implementation = ObjC.implement(onRevokeMsg, (handle, selector, arg1) => {

    // 自定义逻辑
    showAlert();
    console.log("拦截掉一条消息撤回");
    const message = new ObjC.Object(arg1);
    console.log(message);

    // 调用原始方法（如果解开，会撤回成功）
    // oldImpl(handle, selector, arg1, arg2);
  });
}

// 弹窗
function showAlert() {
  const { UIAlertController, UIAlertAction, UIApplication } = ObjC.classes;
  var alertHandler = new ObjC.Block({ retType: 'void', argTypes: ['object'], implementation: function () {} });
  ObjC.schedule(ObjC.mainQueue, function () {
    var alert = UIAlertController.alertControllerWithTitle_message_preferredStyle_('Frida测试', '拦截到一条消息撤回', 1);
    var defaultAction = UIAlertAction.actionWithTitle_style_handler_('OK', 0, alertHandler);
    alert.addAction_(defaultAction);
    UIApplication.sharedApplication().keyWindow().rootViewController().presentViewController_animated_completion_(alert, true, NULL);
  })
}

// 执行
hookRecallFunction();