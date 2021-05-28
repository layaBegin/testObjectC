//
//  ManagerTool.m
//  testShareTrace-mobile
//
//  Created by yunteng on 2021/5/28.
//

#import "ManagerTool.h"

@implementation ManagerTool
+(NSMutableDictionary *)initDataWithInfoPlist{
    NSString *path = [[NSBundle mainBundle]pathForResource:@"Info" ofType:@"plist"];
    NSMutableDictionary *dic = [[NSMutableDictionary alloc]initWithContentsOfFile:path];
    return dic;
}
@end
