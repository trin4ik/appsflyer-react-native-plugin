
#import <UMCore/UMDefines.h>
#import "EXAppsFlyer.h"

@implementation EXAppsFlyer

UM_REGISTER_SINGLETON_MODULE(EXAppsFlyer)

+ (BOOL)shouldSwizzle
{
  id shouldSwizzle = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"afSwizzle"];
  return (shouldSwizzle != nil);
}

#pragma mark - linking hooks

- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray * _Nullable))restorationHandler
{
    [[AppsFlyerAttribution shared] continueUserActivity:userActivity restorationHandler:restorationHandler];
    return YES;
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(nullable NSString *)sourceApplication annotation:(id)annotation
{
    [[AppsFlyerAttribution shared] handleOpenUrl:url sourceApplication:sourceApplication annotation:annotation];
    return YES;
}

@end
