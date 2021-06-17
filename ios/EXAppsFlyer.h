#import <UIKit/UIKit.h>
#import <UMCore/UMSingletonModule.h>
#import <RNAppsFlyer.h>

NS_ASSUME_NONNULL_BEGIN

@interface EXAppsFlyer : UMSingletonModule <UIApplicationDelegate>

+ (BOOL)shouldSwizzle;

- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray * _Nullable))restorationHandler;
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(nullable NSString *)sourceApplication annotation:(id)annotation;

@end

NS_ASSUME_NONNULL_END
