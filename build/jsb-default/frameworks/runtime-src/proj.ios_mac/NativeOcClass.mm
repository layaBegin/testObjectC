//
//  NativeOcClass.m
//  testShareTrace-mobile
//
//  Created by yunteng on 2021/5/20.
//

#import "NativeOcClass.h"


@interface NativeOcClass ()<UIActionSheetDelegate,UIImagePickerControllerDelegate,UINavigationControllerDelegate> //一定要声明这三个协议，缺一不可

@property(nonatomic,strong) UIImagePickerController *imagePicker; //声明全局的UIImagePickerController

@end

@implementation NativeOcClass
//原生弹窗
+(BOOL)callNativeUIWithTitle:(NSString *) title andContent:(NSString *)content{
  UIAlertView *alertView = [[UIAlertView alloc] initWithTitle:title message:content delegate:self cancelButtonTitle:@"Cancel" otherButtonTitles:@"OK", nil];
  [alertView show];
  return true;
}

+(NSString *)callNativeWithReturnString{
    return @"";
}


//
//- (void)viewDidLoad {
//    [super viewDidLoad];
//
//    [self setImgUI];
//}
//- (void)setImgUI {
//    //UIimageView的基本设置
//    _headerV.layer.cornerRadius = 100/2;
//    _headerV.clipsToBounds = YES;
//    _headerV.layer.borderWidth = 1;
//    _headerV.layer.borderColor = [UIColor lightGrayColor].CGColor;
//    _headerV.userInteractionEnabled = YES;
//    [_headerV addGestureRecognizer:[[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(headClick)]];
//}
//#pragma mark -头像UIImageview的点击事件-
//- (void)headClick {
//    //自定义消息框
//    UIActionSheet *sheet = [[UIActionSheet alloc] initWithTitle:@"选择" delegate:self cancelButtonTitle:nil destructiveButtonTitle:@"取消" otherButtonTitles:@"拍照",@"从相册选择", nil];
//    sheet.tag = 2550;
//    //显示消息框
//    [sheet showInView:self.view];
//}


#pragma mark -消息框代理实现-
- (void)actionSheet:(UIActionSheet *)actionSheet clickedButtonAtIndex:(NSInteger)buttonIndex {
    if (actionSheet.tag == 2550) {
        NSUInteger sourceType = 0;
        UIImagePickerController *imagePickerController = [self takePhoto];
        if([UIImagePickerController isSourceTypeAvailable:UIImagePickerControllerSourceTypeCamera]) {
            
            if (buttonIndex == 0) {
                return;
            }else if (buttonIndex == 1) {
                //拍照
                sourceType = UIImagePickerControllerSourceTypeCamera;
                //imagePickerController.sourceType = sourceType;
                [self presentViewController:imagePickerController animated:YES completion:nil];
            }else if (buttonIndex == 2){
                //相册
                sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
                //imagePickerController.sourceType = sourceType;
                [self presentViewController:imagePickerController animated:YES completion:nil];
            }
        }else {
            sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
            //imagePickerController.sourceType = sourceType;
            [self presentViewController:imagePickerController animated:YES completion:nil];
        }
    }
}


//#pragma mark -实现图片选择器代理-（上传图片的网络请求也是在这个方法里面进行，这里我不再介绍具体怎么上传图片）
//- (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingMediaWithInfo:(NSDictionary *)info {
//     [picker dismissViewControllerAnimated:YES completion:^{}];
//     UIImage *image = [info objectForKey:UIImagePickerControllerOriginalImage]; //通过key值获取到图片
//     _headerV.image = image;  //给UIimageView赋值已经选择的相片
//
//
//     //上传图片到服务器--在这里进行图片上传的网络请求，这里不再介绍
//     ......
// }


//当用户取消选择的时候，调用该方法
- (void)imagePickerControllerDidCancel:(UIImagePickerController *)picker {
    [picker dismissViewControllerAnimated:YES completion:^{}];
}


-(UIImagePickerController *)takePhoto{
    // 判断系统是否支持相机
    UIImagePickerController *imagePickerController = [[UIImagePickerController alloc] init];
    imagePickerController.delegate = self; //设置代理
    //图片来源为相机
    imagePickerController.sourceType = UIImagePickerControllerSourceTypeCamera;
    //使用后置摄像头
    imagePickerController.cameraDevice = UIImagePickerControllerCameraDeviceRear;
    //拍完后可以裁剪
    imagePickerController.allowsEditing = YES;
    //显示选取照片控制器
    [self presentViewController:imagePickerController animated:YES completion:nil];
    return imagePickerController;
}

@end
