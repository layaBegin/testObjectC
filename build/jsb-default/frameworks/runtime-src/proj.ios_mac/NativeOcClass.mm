//
//  NativeOcClass.m
//  testShareTrace-mobile
//
//  Created by yunteng on 2021/5/20.
//

#import "NativeOcClass.h"

@implementation NativeOcClass
+(BOOL)callNativeUIWithTitle:(NSString *) title andContent:(NSString *)content{
  UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:title message:content delegate:self cancelButtonTitle:@"Cancel" otherButtonTitles:@"OK", nil];
  [alertView show];
  return true;
}

+(NSString *)callNativeWithReturnString{
    return @"";
}
@end
