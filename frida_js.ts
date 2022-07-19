
// 拦截微信撤回功能
function hookRecallFunction() {

  // 获取撤回类
  const FFProcessReqsvrZZ = ObjC.classes.FFProcessReqsvrZZ;

  // 获取撤回函数
  const FFToNameFavChatZZ_sessionMsgList_ = FFProcessReqsvrZZ['- FFToNameFavChatZZ:sessionMsgList:'];
  console.log(FFToNameFavChatZZ_sessionMsgList_);

  // 临时保存原始方法的实现
  const oldImpl = FFToNameFavChatZZ_sessionMsgList_.implementation;

  // 替换方法
  FFToNameFavChatZZ_sessionMsgList_.implementation = ObjC.implement(FFToNameFavChatZZ_sessionMsgList_, (handle, selector, arg1, arg2) => {
    
    // 自定义逻辑
    showAlert();
    console.log("拦截掉一条消息撤回");

    // 调用原始方法（如果解开，会撤回成功）
    // oldImpl(handle, selector, arg1, arg2);
  });
}

// 弹窗
function showAlert() {
  const { NSAlert } = ObjC.classes;
  ObjC.schedule(ObjC.mainQueue, function () {
    var alert = NSAlert.alloc().init();
    alert.setMessageText_('FridaDemo');
    alert.setInformativeText_('监控到有消息撤回');
    alert.addButtonWithTitle_('我知道了');
    alert.runModal();
  })
}

// 执行
hookRecallFunction();