# syncano-socket-intercom-users
[![license](https://img.shields.io/github/license/gh3r/syncano-socket-intercom-users.svg)](README.md#License)


Syncano-Intercom integration socket responsible for users managing.


## Requirements

Socket is written using [Node](https://nodejs.org).
While developing version `7.0.0` was used so I recommend also using it.

It comes with [npm](https://www.npmjs.com/) that is required to install project. It should be in `3.10.8` version or higher.

If you want to use multiple version of node I recommend [n](https://github.com/tj/n).

Also accounts on [Intercom](https://www.intercom.com/) and [Syncano](https://www.syncano.io/).


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

This socket will react to events that are specified in [socket.yml](socket.yml) file.
For more info check there.

#### Emitted

Events emitted by this socket:

  * intercom-user-created
  * intercom-user-updated
  * intercom-user-deleted

#### Handled

This socket will react based on this events:

  * intercom-create-new-user

And also it will react on his own events:

  * intercom-user-created
  * intercom-user-updated
  * intercom-user-deleted

To save history in `event_history` data class.


## Config

Before you start using socket, you will need to create new account or use existing one for [Intercom](https://www.intercom.com/).

Then you will need to create [Access Token](https://developers.intercom.com/v2.0/docs/personal-access-tokens) by visiting [developers console](https://app.intercom.com/developers/_).

After that when you will sync socket with your project, you will be asked for this token like this:

```sh
$ syncano-cli socket sync intercom-users
?   Intercom Access Token (ACCESS_TOKEN)

    Type in value:
```

It will only be for the first time, after that you are all set up!


## Usage

First you will need to sync your socket:

```sh
$ syncano-cli socket sync intercom-users
```

After that you can call any of specified [endpoints](README.md#Endpoints) by using CLI like that:

```sh
$ syncano-cli socket call intercom-users/<endpoint_name>
```


## License

[MIT](LICENSE.md)
