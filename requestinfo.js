// example route defination: /settings/:user_id and route: /settings/32135?field=name

const { request } = require("express");

// for getting full path 
request.originalUrl  // ans: /settings/32135?field=name

// for getting user_id paragma

request.params.user_id // ans: 32135

// for getting quiery value of field

request.query.field // => name
