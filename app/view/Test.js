Ext.define("RateMyCat.view.Test", {
    extend: 'Ext.Toolbar',
    xtype : 'searchbar',
    requires: ['Ext.field.Search'],

    config: {
        ui: 'searchbar',
        layout: 'vbox',
        cls: 'big',

        items: [
            {
                xtype: 'title',
                title: 'Twitter Search'
            },
            {
                xtype: 'searchfield',
                placeHolder: 'Search...'
            }
        ]
    }
});
