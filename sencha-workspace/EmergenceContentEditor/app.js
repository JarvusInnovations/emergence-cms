/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'EmergenceContentEditor',

    extend: 'EmergenceContentEditor.Application',

    requires: [
        'EmergenceContentEditor.view.main.Main'
    ],

    //-------------------------------------------------------------------------
    // Most customizations should be made to EmergenceContentEditor.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------

    launch: function() {
        var viewportEl = Ext.get('app-viewport'),
            mainView = Ext.create('EmergenceContentEditor.view.main.Main');

        if (viewportEl) {
            mainView.render(viewportEl);
        } else {
            Ext.require('Ext.container.Viewport', function() {
                Ext.create('Ext.container.Viewport', {
                    layout: 'fit',
                    items: mainView
                });
            });
        }
    }
});
