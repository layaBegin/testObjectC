//
//  ImagePickerController.m
//  testShareTrace-mobile
//
//  Created by yunteng on 2021/6/11.
//

#import "ImagePickerController.h"


@interface ImagePickerController ()<UINavigationControllerDelegate,UIImagePickerControllerDelegate>
 
@property(nonatomic,strong)UIImagePickerController *imagePicker;
@property(nonatomic,strong)UIImageView *headShot;
@end

@implementation ImagePickerController

- (instancetype)init
{
    if (self = [super init]) {
        //scriptString = @"";
    }
    
    return self;
}

+ (instancetype)getInstance {
    static dispatch_once_t onceToken;
    static ImagePickerController *instance = nil;
    dispatch_once(&onceToken,^{
        instance = [[super allocWithZone:NULL] init];
    });
    return instance;
}




+(void)TakePhoto{
    NSLog(@"====x:%@",@"==");

    [[ImagePickerController getInstance]takePhoto];
}

-(void)takePhoto{
    
    UIWindow *window = [UIApplication sharedApplication].keyWindow;
    auto view = window.rootViewController.view;
    CGFloat SCREEN_WIDTH = view.frame.size.width;
    CGFloat SCREEN_HEIGHT = view.frame.size.height;
    _imagePicker = [[UIImagePickerController alloc]init];
    _imagePicker.delegate = self;
    
    _headShot = [[UIImageView alloc]init];
    NSString *filePath = [NSHomeDirectory() stringByAppendingPathComponent:@"Documents/currentImage.png"];
    _headShot.frame = CGRectMake((SCREEN_WIDTH-80)/2, (SCREEN_HEIGHT/4-80)/2, 80, 80);
    //<pre name="code" class="objc">   //不设置contentMode，图片会被压扁
    _headShot.contentMode = UIViewContentModeScaleAspectFill;
    [_headShot setClipsToBounds:YES];
    //将选择的图片显示出来
    _headShot.image = [UIImage imageWithContentsOfFile:filePath];
    
    _headShot.backgroundColor = [UIColor grayColor];
    _headShot.layer.masksToBounds = YES;
    _headShot.layer.cornerRadius = 40;
    _headShot.layer.borderColor = [[UIColor whiteColor]CGColor];
    
    [view addSubview:_headShot];
    UITapGestureRecognizer *tapGesture = [[UITapGestureRecognizer alloc]initWithTarget:self action:@selector(ClickHandle)];
    [tapGesture setNumberOfTapsRequired:1];
    [_headShot addGestureRecognizer:tapGesture];
    
}

#pragma mark - 获取头像
-(void)ClickHandle
{
    UIAlertController *AlertSelect = [UIAlertController alertControllerWithTitle:@"提示" message:@"" preferredStyle:UIAlertControllerStyleActionSheet];
    UIAlertAction *camera = [UIAlertAction actionWithTitle:@"拍照" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
        _imagePicker.sourceType = UIImagePickerControllerSourceTypeCamera;
        [self presentViewController:_imagePicker animated:YES completion:nil];
    }];
    UIAlertAction *photo = [UIAlertAction actionWithTitle:@"从手机相册选择" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
            _imagePicker.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
        [self presentViewController:_imagePicker animated:YES completion:nil];
    }];
    UIAlertAction *cancelAction=[UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleCancel handler:nil];
    [AlertSelect addAction:camera];
    [AlertSelect addAction:photo];
    [AlertSelect addAction:cancelAction];
    
    [self presentViewController:AlertSelect animated:YES completion:nil];
    
    
}
- (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingImage:(UIImage *)image editingInfo:(nullable NSDictionary<NSString *,id> *)editingInfo
{
    
    _headShot.image=image;
    [self dismissViewControllerAnimated:YES completion:nil];
    
}

#pragma mark - 照片存到本地后的回调
- (void)image:(UIImage*)image didFinishSavingWithError:(NSError*)error contextInfo:(void*)contextInfo{
    if (!error) {
        NSLog(@"存储成功");
    } else {
        NSLog(@"存储失败：%@", error);
    }
}
#pragma mark - 保存图片
- (void) saveImage:(UIImage *)currentImage {
    //设置照片的品质
    NSData *imageData = UIImageJPEGRepresentation(currentImage, 0.5);
    
    NSLog(@"%@",NSHomeDirectory());
    // 获取沙盒目录
    NSString *filePath = [NSHomeDirectory() stringByAppendingPathComponent:@"Documents/currentImage.png"];
    // 将图片写入文件
    [imageData writeToFile:filePath atomically:NO];
}

@end
