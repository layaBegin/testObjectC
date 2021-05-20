//
//  NativeOcClass.h
//  testShareTrace-mobile
//
//  Created by yunteng on 2021/5/20.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NativeOcClass : NSObject
+(BOOL)callNativeUIWithTitle:(NSString *) title andContent:(NSString *)content;
+(NSString *)callNativeWithReturnString;
@end

NS_ASSUME_NONNULL_END
