# syncano-socket-intercom-users
[![license](https://img.shields.io/github/license/gh3r/syncano-socket-intercom-users.svg)](README.md#license)


Syncano-Intercom integration socket responsible for managing Intercom users.


## Requirements

- Socket was written using version `7.0.0` of [Node](https://nodejs.org) and I recommend to use the same version. It comes with [npm](https://www.npmjs.com/) that is required to install the project. It should be in `3.10.8` version or higher. If you want to use multiple versions of node I recommend [n](https://github.com/tj/n).
- Account on [Intercom](https://www.intercom.com/)
- Account on [Syncano](https://www.syncano.io/).


## Endpoints

Supported users API endpoints:

  * create
  * update
  * delete
  * list
  * listBy
  * find

For more info check Intercom [node lib docs](https://developers.intercom.com/v2.0/docs/intercom-node-sdk).

## Events

This socket will react to events that are specified in [socket.yml](socket.yml) file. Check it out for more info.

#### Emitted

Events emitted by this socket:

  * intercom-user-created
  * intercom-user-updated
  * intercom-user-deleted

#### Handled

This socket will react to these events:

  * intercom-create-new-user

It will also react to its own events:

  * intercom-user-created
  * intercom-user-updated
  * intercom-user-deleted

Event history is saved in the `event_history` data class.


## Config

Before you start using this socket, you will need to create a new [Intercom](https://www.intercom.com/) account or use an existing one.

Then, you will need to create an [Access Token](https://developers.intercom.com/v2.0/docs/personal-access-tokens) by visiting [developers console](https://app.intercom.com/developers/_).

When syncing a socket with your project, you will be asked for the Access Token, like so:

```sh
$ syncano-cli socket sync intercom-users
?   Intercom Access Token (ACCESS_TOKEN)

    Type in value:
```
Once you provide the token, you are all set up!


## Usage

First, sync your socket:

```sh
$ syncano-cli socket sync intercom-users
```

To test the integration you can call any of the specified [endpoints](README.md#endpoints) by using the Syncano CLI like this:

```sh
$ syncano-cli socket call intercom-users/<endpoint_name>
```


## License

[MIT](LICENSE.md)
