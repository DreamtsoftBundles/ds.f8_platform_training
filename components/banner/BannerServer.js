
//
// User info component class
//
var PageComponent = require("ds.base/PageComponent");
var Bundles = require("core/Bundles");

var BannerServer = PageComponent.create({
	"/": function(attributes, vars) {
		var userData = this._getUserData();
		var userMenu = this._getUserMenu(userData);
		var bundleList = new Bundles().getAvailableBundles();

		return new StatusResponse('good', {
			bundles: bundleList,
			canManageBundles: new FRecord('bundle').accessToWriteBucket(),
			userData: userData,
			userMenu: userMenu 
		});
	},

	"/ajax/getConfigURL": function(data) {
		var bundleId = new Bundles().getEditableBundleId(data.bundleId);
		return new StatusResponse('good', { id: bundleId });
	},

	_getUserMenu: function(userData) {
		var item = {
			id: "user_menu",
			label: TRANSLATE("User Menu"),
			links: []
		};

		item.links.push({
			label: TRANSLATE("My Profile"),
			type: "link",
			link: "my_profile?q=['id', 'eq', '" + userData.id + "']"
		});

		item.links.push({
			type: "component",
			component: 'language_picker'
		});

		item.links.push({
			type: "divider"
		});

		if (userData.isSuperUser) {
			item.links.push({
				label: TRANSLATE("Scripter"),
				type: "link",
				link: "scripter"
			});

            item.links.push({
                label: TRANSLATE("Toggle Debug"),
                type: "link",
                link: "javascript:var consoleDebugId = Client.getConsoleDebugID(); Client.setConsoleDebug(Object.isNil(consoleDebugId))"
            });

			
			if (userData.isMothershipUser) {
				item.links.push({
					label: TRANSLATE("Site Map"),
					type: "link",
					link: "site"
				});
			}
			
			item.links.push({
				type: "divider"
			});
		}

		item.links.push({
			label: TRANSLATE("Logout"),
			type: "link",
			link: "javascript:Client.event('user.logout');"
		});

		return item;
	},

	_getUserData: function() {
		var user = {};

		user.name = (!Object.isNil($transaction.getActiveUserName()) ? $transaction.getActiveUserName() : "unknown user");
		user.first_name = user.name;
		user.id = $transaction.getActiveUserRecordId();
		user.isSuperUser = $transaction.isSuperUser();
		user.isMothershipUser = $transaction.isMothershipUser();
		user.isImpersonating = $transaction.isImpersonating();

		var fr = new FRecord('user');
		if (fr.getRecord(user.id)) {
			user.record = fr.unloadToJSON();
			
			if (!Object.isNil(user.record.first_name))
				user.first_name = user.record.first_name;
		}

		return user;
	},

	type: "BannerServer"
});

module.exports = BannerServer;