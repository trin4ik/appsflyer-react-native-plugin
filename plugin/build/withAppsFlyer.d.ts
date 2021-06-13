import {ConfigPlugin} from '@expo/config-plugins';

declare const _default: ConfigPlugin<void| {
    /**
     * Sets the iOS `NSUserTrackingUsageDescription` permission message in the `Info.plist`.
     * example: [["react-native-appsflyer", {"userTrackingPermission": "Allow $(PRODUCT_NAME) to collect IDFA. This identifier will be used to deliver personalized ads to you."}]]
     * if you dont want to change an existing permission message:
     * [["react-native-appsflyer", {}]]
     */
    userTrackingPermission?: string | undefined;
}>;
export default _default;
