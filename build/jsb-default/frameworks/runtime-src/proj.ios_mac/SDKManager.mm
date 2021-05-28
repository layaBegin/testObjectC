//
//  SDKManager.m
//  testShareTrace-mobile
//
//  Created by yunteng on 2021/5/20.
//
#import "cocos2d.h"
#import "SDKManager.h"
#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"
#import <SharetraceSDK/SharetraceSDK.h>


using namespace cocos2d;

@implementation SDKManager
+(NSString *)getSharetraceParam{
    __block NSString *str = @"";
    [Sharetrace getInstallTrace:^(AppData * _Nullable appdata) {
            NSLog(@"ShareTrace success:  paramsData：%@", [appdata paramsData]);
            str = [appdata paramsData];
        } :^(NSInteger code, NSString * _Nonnull message) {
            NSLog(@"ShareTrace fail: code：%ld; message：%@", code, message);
        }];
    
    
    return str;
}

+(void)testOCToJs{
    NSString *param = @"成功了";
    NSString* str = [NSString stringWithFormat:@"callOCMethod(%@)",param];
    se::ScriptEngine::getInstance()-> evalString([str UTF8String]);
}
@end
