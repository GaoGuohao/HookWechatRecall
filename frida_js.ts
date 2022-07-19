
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
    
    // 调用原始方法
    oldImpl(handle, selector, arg1, arg2);
  });
}

// 弹窗
function showAlert() {
  const { NSAlert } = ObjC.classes;
  ObjC.schedule(ObjC.mainQueue, function () {
    var alert = NSAlert.alloc().init();
    alert.setMessageText_('搞定微信');
    alert.setInformativeText_('有消息撤回');
    alert.addButtonWithTitle_('确定');
    alert.runModal();
  })
}

// 执行
hookRecallFunction();