cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.plugin.example.index.js",
      "file": "plugins/com.plugin.example/www/index.js",
      "pluginId": "com.plugin.example",
      "clobbers": [
        "cordova.plugins.MyPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "com.plugin.example": "1.0.0"
  };
});