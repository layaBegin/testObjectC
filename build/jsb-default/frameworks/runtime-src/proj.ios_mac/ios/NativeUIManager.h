//
//  NativeUIManager.h
//  testShareTrace-mobile
//
//  Created by yunteng on 2021/6/10.
//

#import <Foundation/Foundation.h>

@interface NativeUIManager : NSObject {
    @public
    NSString *scriptString;
    CGPoint oldBtnPosition;
    NSString *homeScriptString;
}
-(UIImageView *)getview;
-(void)setBgBtn;
@end

