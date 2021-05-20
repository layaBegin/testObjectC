//
//  SDKManager.m
//  testShareTrace-mobile
//
//  Created by yunteng on 2021/5/20.
//

#import "SDKManager.h"
#import <SharetraceSDK/SharetraceSDK.h>
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
@end
