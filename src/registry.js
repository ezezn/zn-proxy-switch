var Registry = require('winreg'),
    regKey = new Registry({ // new operator is optional 
        hive: Registry.HKCU, // open registry hive HKEY_CURRENT_USER 
        key: '\\Software\\Microsoft\\Windows\\CurrentVersion\\Run' // open key containing autostart programs 
    })

// list autostart programs 

module.exports = function() {
    var self = this;

    self.getProxy = function() {
        regKey.values(function(err, items /* array of RegistryItem */ ) {
            if (err) {
                console.log('ERROR: ' + err);
            } else {
                for (var i = 0; i < items.length; i++) {
                    console.log('ITEM: ' + items[i].name + '\t' + items[i].type + '\t' + items[i].value);
                };
            }
        });

    };
};