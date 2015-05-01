# Runelytics Droplogging test app
Based on The Meteor Chef - Base (@1.1.0.2)

###### Boss drops lists
App includes drops lists from which it grabs data. They are stored inside `/client/helpers/rs3` and `/client/helpers/osrs`. Lists look like this:

```javascript
VoragoDrops = [
	{
		"title": "Tectonic energy",
		"quantity": 2,
		"price": 78118,
		"rarity": "Common",
		"droprate": null,
		"type": "Energy",
		"img": "/img/rs3/tectonic_energy.png",
		"game": "rs3",
		"boss": "Vorago",
		"npc": "Vorago"
	},
	{
		"title": "Seismic wand",
		"quantity": 1,
		"price": 463867677,
		"rarity": "Rare",
		"droprate": 200,
		"type": "Unique drop table",
		"img": "/img/rs3/seismic_wand.png",
		"game": "rs3",
		"boss": "Vorago",
		"npc": "Vorago"
	},
	...
];
```

###### Startup & Deployment
A tip picked up from [Gerard Sychay at Differential](http://blog.differential.com/use-package-json-in-your-meteor-app-for-fun-profit/), Base makes use of the NPM `package.json` convention to make startup and deployment super easy. Within `package.json`, three scripts have been defined for you:

1. `npm start` - Starts your Meteor server locally with `settings-development.json` in tow. Equivalent to typing out `meteor --settings settings-development.json`.
2. `npm staging` - Deploys your Meteor app to a [Modulus](http://modulus.io) server defined as your "Staging" environment. This requires you to have a Modulus account set up and a server titled "Staging" set up. You can customize this to match your own naming conventions. This also automatically sets your `METEOR_SETTINGS` environment variable on Modulus equal to the contents of your `settings-development.json` file so you don't have to do it by hand.
3. `npm production` - Deploys your Meteor app to a [Modulus](http://modulus.io) server defined as your "Production" environment. This requires you to have a Modulus account set up and a server titled "Production" set up. You can customize this to match your own naming conventions. This also automatically sets your `METEOR_SETTINGS` environment variable on Modulus equal to the contents of your `settings-production.json` file so you don't have to do it by hand.

###### Bootstrap (@3.2.1)
Base makes use of the [Bootstrap](http://getbootstrap.com) front-end Framework. It may not be your bag of chips and is *definitely not required*. If you want to swap it out, you'll need to unhook the markup in each of the included template files in `/client/views` and uninstall the `twbs:bootstrap` package by running `meteor remove twbs:bootstrap` in your terminal.

In respect to UI, Base uses Bootstrap's `.navbar` element, as well as its `.container` and a few `.row`/`.col-<size>-<columns>` wrappers. You'll also find the `.btn` class and its modifiers (`.success, .warning, etc.`) in use throughout the app. All of these implementations are merely presentational and can be changed (or removed) as you see fit.

###### Basic Routing
Base comes with a collection of pre-defined routes and templates for common functionality. Base also includes a set of common route filters for managing user access. Routes bundled include:

```
- / (Authenticated)
- /login (Public)
- /recover-password (Public) - not included in this app
- /reset-password (Public) - not included in this app
- /signup (Public)
```

A UI helper called `currentRoute` has been added to Base which allows you to add an `active` class to menu items in your navigation to reflect the user's current location.

A collection of hooks has also been added to Base to control route access based on different conditions (e.g. whether a user is logged in or not).

###### Authentication
Base includes a complete authentication pattern complete with:

- Login (at /login)
- Logout (no path, implemented as a dropdown item/click event in /client/controllers/header.js)
- Signup (at /signup)

###### Validation
Base includes support for client-side validation via [jQuery Validation](http://jqueryvalidation.org). Validation is provided for all public templates: login, signup, recover password (not uncluded), and reset password (not included).

###### Alerts
Base includes support for fixed bar (top and bottom) and growl-style alerts on the client via [`themeteorchef:bert`](https://atmospherejs.com/themeteorchef/bert).

###### Automatic Admin User Creation
When developing, having a handful of user accounts to test your application with can come in handy. Base comes with an automated account generation script located in `server/admin/startup.js` that creates accounts based on an array of specified users. **Note: by default this creates one Admin user on server startup, so make sure to customize or remove this user so the public can't access your app**.
