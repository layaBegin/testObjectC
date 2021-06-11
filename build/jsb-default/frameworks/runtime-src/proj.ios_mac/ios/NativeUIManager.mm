//
//  NativeUIManager.m
//  testShareTrace-mobile
//
//  Created by yunteng on 2021/6/10.
//

#import "NativeUIManager.h"
#import <Foundation/Foundation.h>
#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"


#define WIDTH 100
#define HEIGHT 150

@implementation NativeUIManager

- (instancetype)init
{
    if (self = [super init]) {
        scriptString = @"";
    }
    
    return self;
}

+ (instancetype)getInstance {
    static dispatch_once_t onceToken;
    static NativeUIManager *instance = nil;
    dispatch_once(&onceToken,^{
        instance = [[super allocWithZone:NULL] init];
    });
    return instance;
}

+(void)createWebViewButton:(NSString*) imagePath scriptStr:(NSString*) scriptStr{

    UIButton *button = [[UIButton alloc]init];
    UIImage *imgNormal = [UIImage imageNamed:imagePath];
    UIImage *imgHighlighted = [UIImage imageNamed:imagePath];
    
    [button setBackgroundImage:imgNormal forState:UIControlStateNormal];
    [button setBackgroundImage:imgHighlighted forState:UIControlStateHighlighted];
    button.frame = CGRectMake(10, 10, 70, 70);
    
    [button addTarget:[NativeUIManager getInstance] action:@selector(onTouchDown:withEvent: )forControlEvents: UIControlEventTouchDown];
    [button addTarget:[NativeUIManager getInstance] action:@selector(onDragMoving:withEvent: )forControlEvents: UIControlEventTouchDragInside];
    [button addTarget:[NativeUIManager getInstance] action:@selector(onDragEnded:withEvent: )forControlEvents:UIControlEventTouchUpOutside];
    [button addTarget:[NativeUIManager getInstance] action:@selector(onTouchUp:event:) forControlEvents:UIControlEventTouchUpInside];
    
    UIWindow *window = [UIApplication sharedApplication].keyWindow;
    auto view = window.rootViewController.view;
    [view addSubview:button];
    
    

   
    
    [NativeUIManager getInstance]->scriptString = [[NSString alloc] initWithString:scriptStr];;
}

- (void) onTouchDown: (UIControl *) ctrl withEvent:event
{
    oldBtnPosition = [[[event allTouches] anyObject] locationInView:[UIApplication sharedApplication].keyWindow.rootViewController.view];
}

- (void) onDragMoving: (UIControl *) ctrl withEvent:event
{
    ctrl.center = [[[event allTouches] anyObject] locationInView:[UIApplication sharedApplication].keyWindow.rootViewController.view];
}

- (void) onDragEnded: (UIControl *) ctrl withEvent:event
{
    ctrl.center = [[[event allTouches] anyObject] locationInView:[UIApplication sharedApplication].keyWindow.rootViewController.view];
}
//抬起的时候显示弹窗
- (void)onTouchUp:(UIButton *)btn event:(UIEvent *)event {
    CGPoint point = [[[event allTouches] anyObject] locationInView:[UIApplication sharedApplication].keyWindow.rootViewController.view];
    auto distance = sqrt(pow((oldBtnPosition.x - point.x), 2) + pow((oldBtnPosition.y - point.y), 2));
    
    if (distance > 7)
    {
        return;
    }
    
//    //1.创建UIAlertControler
//    UIAlertController *alert = [UIAlertController alertControllerWithTitle:NSLocalizedString(@"tips", nil) message:NSLocalizedString(@"back_hall", nil) preferredStyle:UIAlertControllerStyleAlert];
//    /*
//     参数说明：
//     Title:弹框的标题
//     message:弹框的消息内容
//     preferredStyle:弹框样式：UIAlertControllerStyleAlert
//     */
//
//    //2.添加按钮动作
//    //2.1 确认按钮
//    UIAlertAction *conform = [UIAlertAction actionWithTitle:NSLocalizedString(@"confirm", nil) style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
//        se::ScriptEngine::getInstance()-> evalString([[NativeUIManager getInstance]->scriptString UTF8String]);
//        [btn removeFromSuperview];
//    }];
//    //2.2 取消按钮
//    UIAlertAction *cancel = [UIAlertAction actionWithTitle:NSLocalizedString(@"cancel", nil) style:UIAlertActionStyleCancel handler:^(UIAlertAction * _Nonnull action) {
//    }];
//
//    //3.将动作按钮 添加到控制器中
//    [alert addAction:conform];
//    [alert addAction:cancel];
//
//    //4.显示弹框
//    [[UIApplication sharedApplication].keyWindow.rootViewController presentViewController:alert animated:YES completion:nil];
    
    [self setBgBtn];
    //点击按钮的时候显示分页；
    UIImageView *imageView = [self getview];
    UIWindow *window = [UIApplication sharedApplication].keyWindow;
    auto view = window.rootViewController.view;
    CGFloat x = btn.frame.origin.x;
    CGFloat y = btn.frame.origin.y;
    
    if (btn.frame.origin.x - btn.frame.size.width/2 - WIDTH/2 <= 0) {
         x = btn.frame.origin.x + btn.frame.size.width/2;
    }else if(btn.frame.origin.x + WIDTH >= view.frame.size.width ){
        x = btn.frame.origin.x - WIDTH + btn.frame.size.width/2 ;
    }else{
        x = btn.frame.origin.x - WIDTH/2 + btn.frame.size.width/2 ;
    }
    if (btn.frame.origin.y - HEIGHT <= 0) {
        y = btn.frame.origin.y + btn.frame.size.height;
        
    }else {
        y = btn.frame.origin.y - HEIGHT;
    }
    NSLog(@"====x:%f",x);
    NSLog(@"====y:%f",y);
    
    [imageView setFrame:CGRectMake(x,y,WIDTH,HEIGHT)];
    
}

-(CGPoint)limitPoint:(UIButton *)btn{
    UIWindow *window = [UIApplication sharedApplication].keyWindow;
    auto view = window.rootViewController.view;
    CGFloat x = btn.frame.origin.x;
    CGFloat y = btn.frame.origin.y;
    CGPoint point = CGPointMake(x,y);
    if (btn.frame.origin.x - btn.frame.size.width/2 - WIDTH/2 <= 0) {
         x = btn.frame.origin.x + btn.frame.size.width/2;
    }else if(btn.frame.origin.x + WIDTH >= view.frame.size.width ){
        x = btn.frame.origin.x - WIDTH + btn.frame.size.width/2 ;
    }else{
        x = btn.frame.origin.x - WIDTH/2 + btn.frame.size.width/2 ;
    }
    if (btn.frame.origin.y - HEIGHT <= 0) {
        y = btn.frame.origin.y + btn.frame.size.height;
        
    }else {
        y = btn.frame.origin.y - HEIGHT;
    }
    NSLog(@"====x:%f",x);
    NSLog(@"====y:%f",y);
    return point;
}

-(void)setBgBtn{
    UIButton *bgBtn = [[UIButton alloc]initWithFrame:CGRectMake(0, 0, 3000, 3000)];
    [bgBtn setTag:101];
    UIWindow *window = [UIApplication sharedApplication].keyWindow;
    auto view = window.rootViewController.view;
    [view addSubview:bgBtn];
    [bgBtn addTarget:[NativeUIManager getInstance] action:@selector(onBgBtnTouchUp:event:) forControlEvents:UIControlEventTouchUpInside];
}

-(UIButton *)setHomeBtn{
    UIButton *homeBtn = [[UIButton alloc]initWithFrame:CGRectMake(0, 0, WIDTH, 50)];
    homeBtn.backgroundColor = UIColor.greenColor;
    [homeBtn addTarget:[NativeUIManager getInstance] action:@selector(onHomeBtnTouchUp:event:) forControlEvents:UIControlEventTouchUpInside];
    UILabel *label = [[UILabel alloc]initWithFrame:CGRectMake(55, 0, 45, 50)];
    label.text = @"首页";
    label.textColor = UIColor.redColor;
    [homeBtn addSubview:label];
    UIImage *imgHome = [UIImage imageNamed:@"home.png"];
    UIImageView *imageViewHome = [[UIImageView alloc]initWithFrame:CGRectMake(0,0,40,40)];
    [imageViewHome setContentMode:UIViewContentModeScaleToFill];
    [imageViewHome setImage:imgHome];
    [homeBtn addSubview:imageViewHome];
    return homeBtn;
}


-(UIImageView *)getview{
    
    //设置矩形框
    UIImage *img = [UIImage imageNamed:@"home_bg.png"];
    UIImageView *imageView = [[UIImageView alloc]initWithFrame:CGRectMake(100,100,WIDTH,HEIGHT)];
    [imageView setContentMode:UIViewContentModeScaleToFill];
    [imageView setImage:img];
    [imageView setTag:100];
    UIButton *homeBtn = [self setHomeBtn];
    imageView.userInteractionEnabled = YES;
    [imageView addSubview:homeBtn];
    UIWindow *window = [UIApplication sharedApplication].keyWindow;
    auto view = window.rootViewController.view;
    [view addSubview:imageView];
    return imageView;
}

- (void)onBgBtnTouchUp:(UIButton *)btn event:(UIEvent *)event{
    UIWindow *window = [UIApplication sharedApplication].keyWindow;
    auto view = window.rootViewController.view;
    UIImageView * bgImageView =  [view viewWithTag:100];
    [bgImageView removeFromSuperview];
    [btn removeFromSuperview];
    NSLog(@"===进入背景按钮");
}

- (void)onHomeBtnTouchUp:(UIButton *)btn event:(UIEvent *)event{
    NSLog(@"===进入首页回掉");
    UIWindow *window = [UIApplication sharedApplication].keyWindow;
    auto view = window.rootViewController.view;
    UIButton * bgBtn = [view viewWithTag:101];
    [bgBtn removeFromSuperview];
    //原生调用js成功
    se::ScriptEngine::getInstance()-> evalString([[NativeUIManager getInstance]->scriptString UTF8String]);
    
    [btn.superview removeFromSuperview];
}

@end

