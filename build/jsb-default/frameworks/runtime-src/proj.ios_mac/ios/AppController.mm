/****************************************************************************
 Copyright (c) 2010-2013 cocos2d-x.org
 Copyright (c) 2013-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

#import "AppController.h"
#import "cocos2d.h"
#import "AppDelegate.h"
#import "RootViewController.h"
#import "SDKWrapper.h"
#import "platform/ios/CCEAGLView-ios.h"
#import <SharetraceSDK/SharetraceSDK.h>
// 引入 JPush 功能所需头文件
#import <UserNotifications/UserNotifications.h>
//#import "JPush.h"
#import "JPUSHService.h"
#import "ManagerTool.h"
#import "SDKManager.h"
#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"
#include <cocos/base/CCScheduler.h> //增加这个头文件就能使用OC调用js不报错
#include<thread>
#include "base/CCScheduler.h"
//#define APPKEY @"f0f98752bd51011a108ed634"


@interface AppController ()<JPUSHRegisterDelegate>

@end

using namespace cocos2d;

@implementation AppController

Application* app = nullptr;
@synthesize window;

#pragma mark -
#pragma mark Application lifecycle

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [[SDKWrapper getInstance] application:application didFinishLaunchingWithOptions:launchOptions];
    // Add the view controller's view to the window and display.
    float scale = [[UIScreen mainScreen] scale];
    CGRect bounds = [[UIScreen mainScreen] bounds];
    window = [[UIWindow alloc] initWithFrame: bounds];
    
    
    
    NSMutableDictionary *dic = [ManagerTool initDataWithInfoPlist];
    [self initSDK:launchOptions andDic:dic];
    //[AppController callJSMethod];
    //[SDKManager testOCToJs];
    
    // cocos2d application instance
    app = new AppDelegate(bounds.size.width * scale, bounds.size.height * scale);
    app->setMultitouch(true);
    
    // Use RootViewController to manage CCEAGLView
    _viewController = [[RootViewController alloc]init];
#ifdef NSFoundationVersionNumber_iOS_7_0
    _viewController.automaticallyAdjustsScrollViewInsets = NO;
    _viewController.extendedLayoutIncludesOpaqueBars = NO;
    _viewController.edgesForExtendedLayout = UIRectEdgeAll;
#else
    _viewController.wantsFullScreenLayout = YES;
#endif
    // Set RootViewController to window
    if ( [[UIDevice currentDevice].systemVersion floatValue] < 6.0)
    {
        // warning: addSubView doesn't work on iOS6
        [window addSubview: _viewController.view];
    }
    else
    {
        // use this method on ios6
        [window setRootViewController:_viewController];
    }
    
    [window makeKeyAndVisible];
    
    [[UIApplication sharedApplication] setStatusBarHidden:YES];
    [[NSNotificationCenter defaultCenter] addObserver:self
        selector:@selector(statusBarOrientationChanged:)
        name:UIApplicationDidChangeStatusBarOrientationNotification object:nil];
    //run the cocos2d-x game scene
    app->start();
    
   
    return YES;
}

+(void)callJSMethod{
    NSLog(@"==进入callJSMethod");
    NSString *str = @"==========steewr";
//    std::string param001 = [str UTF8String];
//    //可以理解为：调用 cc.find() 函数在场景中查找 Canvas 节点，在利用 getComponent() 函数获取该节点下 名为 game.ts 的脚本。最后调用 脚本中的成员函数 GetAward(),此函数有一个参数。
//    std::string jsCallStr = cocos2d::StringUtils::format("cc.find('Canvas').getComponent('HelloWorld').callOCMethoed(\"%s\");", param001.c_str());
//   //通过evalString执行上面的代码
//    se::ScriptEngine::getInstance()->evalString(jsCallStr.c_str());

    
    
    std::string strRet = "==========steewr";
    std::string jsCallStr = cocos2d::StringUtils::format("callOCMethoed(\"%s\");", strRet.c_str());
    NSString *method = [NSString stringWithFormat:@"window.SDKCallBack.testFromOC(%@)",str];
    se::ScriptEngine::getInstance()-> evalString([str UTF8String]);
    
//    if (std::this_thread::get_id() == Application::getInstance()->getCocos2dThreadId()){
//        se::ScriptEngine::getInstance()->evalString([method UTF8String]);
//    }else{
//        
//    }
    
    //[AppController thread_fun];
    
//    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=](){
//        se::ScriptEngine::getInstance()->evalString([method UTF8String]);
//        NSLog(@"==进入主线成");
//        se::ScriptEngine::getInstance()->evalString(jsCallStr.c_str());
//
//    });
    
}

+(void)thread_fun
{
    NSLog(@"new thread create:t_id:0x%x",std::this_thread::get_id());
 
    Application::getInstance()->getScheduler()->performFunctionInCocosThread([=]()
    {
        for(int i=0;i<=1000;i++){}
        NSLog(@"[performFunctionInCocosThread] finished!");
    });
 
    NSLog(@"thread finished:t_id:0x%x",std::this_thread::get_id());
}

- (void)statusBarOrientationChanged:(NSNotification *)notification {
    CGRect bounds = [UIScreen mainScreen].bounds;
    float scale = [[UIScreen mainScreen] scale];
    float width = bounds.size.width * scale;
    float height = bounds.size.height * scale;
    Application::getInstance()->updateViewSize(width, height);
}

- (void)applicationWillResignActive:(UIApplication *)application {
    /*
     Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
     Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
     */
    app->onPause();
    [[SDKWrapper getInstance] applicationWillResignActive:application];
}

- (void)applicationDidBecomeActive:(UIApplication *)application {
    /*
     Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
     */
    app->onResume();
    [[SDKWrapper getInstance] applicationDidBecomeActive:application];
}

- (void)applicationDidEnterBackground:(UIApplication *)application {
    /*
     Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
     If your application supports background execution, called instead of applicationWillTerminate: when the user quits.
     */
    [[SDKWrapper getInstance] applicationDidEnterBackground:application];
}

- (void)applicationWillEnterForeground:(UIApplication *)application {
    /*
     Called as part of  transition from the background to the inactive state: here you can undo many of the changes made on entering the background.
     */
    [[SDKWrapper getInstance] applicationWillEnterForeground:application];    
}

- (void)applicationWillTerminate:(UIApplication *)application
{
    [[SDKWrapper getInstance] applicationWillTerminate:application];
    delete app;
    app = nil;
}

-(void)initSDK:(NSDictionary *)launchOptions andDic:(NSMutableDictionary *)dic{
    
    //shareTrace
    [Sharetrace initWithDelegate:self];
    //jpush 初始化
    [self jpushInit: launchOptions andDic:dic];
}

//---------------------jpush---------------------------------------
- (void)jpushInit:(NSDictionary *)launchOptions andDic:(NSMutableDictionary *)dic{
    NSString *jpushKey = [[[dic objectForKey:@"CFBundleURLTypes"] objectAtIndex:1]objectForKey:@"JPUSHKey"];
    
    NSLog(@"===jpushkey:%@",jpushKey);
    //【注册通知】通知回调代理（可选）
    [JPUSHService registerForRemoteNotificationConfig:[self pushRegisterEntity] delegate:self];
    //如不需要使用IDFA，advertisingIdentifier 可为nil
    NSString *advertisingId = [[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
    //【初始化sdk】
    [JPUSHService setupWithOption:launchOptions appKey:jpushKey
                          channel:@"test"
                 apsForProduction:YES
            advertisingIdentifier:advertisingId];
    //温馨提示：快速集成JPush只需要【注册通知】【初始化sdk】两步即可
    NSLog(@"====集成jpush成功");
    //获取registrationId/检测通知授权情况/地理围栏/voip注册/监听连接状态等其他功能
    //[[JPush shared] initOthers:APPKEY launchOptions:launchOptions];
}

- (JPUSHRegisterEntity *)pushRegisterEntity {
    JPUSHRegisterEntity * entity = [[JPUSHRegisterEntity alloc] init];
    entity.types = JPAuthorizationOptionAlert|JPAuthorizationOptionBadge|JPAuthorizationOptionSound;
    
    if ([[UIDevice currentDevice].systemVersion floatValue] >= 8.0) {
        //可以添加自定义categories
    //    if ([[UIDevice currentDevice].systemVersion floatValue] >= 10.0) {
    //      NSSet<UNNotificationCategory *> *categories;
    //      entity.categories = categories;
    //    }
    //    else {
    //      NSSet<UIUserNotificationCategory *> *categories;
    //      entity.categories = categories;
    //    }
      }
    return entity;
}

//- (void)applicationDidEnterBackground:(UIApplication *)application {
//  [application setApplicationIconBadgeNumber:0];
//}
//
//- (void)applicationWillEnterForeground:(UIApplication *)application {
//  [application setApplicationIconBadgeNumber:0];
//}

- (void)application:(UIApplication *)application
    didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
    //sdk注册DeviceToken
    [JPUSHService registerDeviceToken:deviceToken];
    //在UI上展示
    //[[JPush shared] deviceToken: deviceToken];
}

- (void)application:(UIApplication *)application
    didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
    NSLog(@"did Fail To Register For Remote Notifications With Error: %@", error);
}

#pragma mark- JPUSHRegisterDelegate
//设置消息送达代理
- (void)jpushNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(NSInteger options))completionHandler {
    NSDictionary * userInfo = notification.request.content.userInfo;
    [JPUSHService handleRemoteNotification:userInfo];
    completionHandler(UNNotificationPresentationOptionBadge|UNNotificationPresentationOptionSound|UNNotificationPresentationOptionAlert); // 需要执行这个方法，选择是否提醒用户，有Badge、Sound、Alert三种类型可以设置
    
    //[[JPush shared] willPresentNotification:notification];
}

- (void)jpushNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void(^)(void))completionHandler {
  
    NSDictionary * userInfo = response.notification.request.content.userInfo;
    
    [JPUSHService handleRemoteNotification:userInfo];
    completionHandler();  // 系统要求执行这个方法
    
    //[[JPush shared] didReceiveNotificationResponse:response];
}

- (void)jpushNotificationAuthorization:(JPAuthorizationStatus)status withInfo:(NSDictionary *)info {
  NSLog(@"receive notification authorization status:%lu, info:%@", status, info);
  //[[JPush shared] alertNotificationAuthorization:status];
}

#ifdef __IPHONE_12_0
- (void)jpushNotificationCenter:(UNUserNotificationCenter *)center openSettingsForNotification:(UNNotification *)notification {
    NSString *title = nil;
    if (notification) {
        title = @"从通知界面直接进入应用";
    }else{
        title = @"从系统设置界面进入应用";
    }
    NSLog(@"%@", title);
}
#endif

//【iOS7以上系统，收到通知以及静默推送】
- (void)application:(UIApplication *)application
    didReceiveRemoteNotification:(NSDictionary *)userInfo
          fetchCompletionHandler:
              (void (^)(UIBackgroundFetchResult))completionHandler {
  [JPUSHService handleRemoteNotification:userInfo];
  completionHandler(UIBackgroundFetchResultNewData);
}



#pragma mark -
#pragma mark Memory management

- (void)applicationDidReceiveMemoryWarning:(UIApplication *)application {
    /*
     Free up as much memory as possible by purging cached data objects that can be recreated (or reloaded from disk) later.
     */
}

@end
