/*globals ComponentLoader, module */
var PageRightPane = require('layout/PageRightPane');

var Help = Class.create({
	contextualHelpClass: 'contextual-help-show',
	helpEnabled: Configuration.getBundlePreferenceValue("ds.base", "help") || 'disabled',

	initialize: function() {
		if (this.helpEnabled == 'enabled' || this.helpEnabled == 'enabled_contextual_help')
			document.documentElement.classList.add('help-button-show');
		if (this.helpEnabled == 'enabled_contextual_help')
			this.showContextualHelp();
	},

	toggle: function() {
		var isOpen = PageRightPane.isOpen('help');
		if (!isOpen)
			this.open();
		else
			this.close();
	},

	open: function(context) {
		var container = PageRightPane.open('help', '30%');
		container.empty();

		ComponentLoader.loadAndRenderComponent({
			name: 'help_sidebar',
			container: container,
			data: {
				context: context
			},
			onComplete: function() {
				PageRightPane.focus();
			}
		});

		if (this.helpEnabled == 'enabled')
			this.showContextualHelp();
	},

	close: function() {
		PageRightPane.hide();

		if (this.helpEnabled == 'enabled')
			this.hideContextualHelp();
	},

	showContextualHelp: function() {
		document.documentElement.classList.add(this.contextualHelpClass);
	},

	hideContextualHelp: function() {
		document.documentElement.classList.remove(this.contextualHelpClass);
	}
});

module.exports = new Help();