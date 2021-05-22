//
//  SDKManager1.m
//  testShareTrace-mobile
//
//  Created by yunteng on 2021/5/21.
//

#import "SDKManager1.h"
#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"
#import <SharetraceSDK/SharetraceSDK.h>

@implementation SDKManager1
+(NSString *)getSharetraceParam{
    __block NSString *str = @"";
    [Sharetrace getInstallTrace:^(AppData * _Nullable appdata) {
            NSLog(@"ShareTrace success:  paramsData：%@", [appdata paramsData]);
            str = [appdata paramsData];
       
        } :^(NSInteger code, NSString * _Nonnull message) {
            NSLog(@"ShareTrace fail: code：%ld; message：%@", code, message);
        }];
    
//    NSString *str1 = @"测试原生调用参数1";
//    std::string strRet1 = [str1 UTF8String];
//    std::string script = cocos2d::StringUtils::format("getSharetraceBack(\"%s\");", strRet1.c_str());
//    se::ScriptEngine::getInstance()->evalString(script.c_str());
    return str;
}
@end
