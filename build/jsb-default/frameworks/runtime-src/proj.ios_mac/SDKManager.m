//
//  SDKManager.m
//  testShareTrace-mobile
//
//  Created by yunteng on 2021/5/20.
//

#import "SDKManager.h"
//#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"
#import <SharetraceSDK/SharetraceSDK.h>

@implementation SDKManager
+(NSString *)getSharetraceParam{
    __block NSString *str = @"";
    [Sharetrace getInstallTrace:^(AppData * _Nullable appdata) {
            NSLog(@"ShareTrace success:  paramsData：%@", [appdata paramsData]);
            str = [appdata paramsData];
        NSString *str = @"测试原生调用参数1";
        
//        std::string strRet1 = [str UTF8String];
//        std::string script = cocos2d::StringUtils::format("getSharetraceBack(\"%s\");", strRet1.c_str());
//        se::ScriptEngine::getInstance()->evalString(script.c_str());
        } :^(NSInteger code, NSString * _Nonnull message) {
            NSLog(@"ShareTrace fail: code：%ld; message：%@", code, message);
        }];
    
    
    return str;
}
@end
