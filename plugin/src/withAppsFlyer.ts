import {AndroidConfig, ConfigPlugin, createRunOncePlugin} from '@expo/config-plugins';

const pkg = require('react-native-appsflyer/package.json');

const withAppsFlyer: ConfigPlugin<{
    userTrackingPermission?: string | undefined;
} | void> = (config, {userTrackingPermission}) => {
    if (!config.ios) config.ios = {};
    if (!config.ios.infoPlist) config.ios.infoPlist = {};
    if (userTrackingPermission || config.ios.infoPlist.NSUserTrackingUsageDescription) {
        config.ios.infoPlist.NSUserTrackingUsageDescription =
            userTrackingPermission || config.ios.infoPlist.NSUserTrackingUsageDescription;
    }
    return AndroidConfig.Permissions.withPermissions(config, ['android.permission.INTERNET', 'android.permission.ACCESS_NETWORK_STATE', 'android.permission.ACCESS_WIFI_STATE']);
};

export default createRunOncePlugin(withAppsFlyer, pkg.name, pkg.version);
