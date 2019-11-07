/*jshint esversion: 6 */
const OAuthTokensModel = require('./token');
const OAuthUsersModel = require('./users');
const OAuthClientsModel = require('./clients');


/**
 * Get access token.
 */

module.exports.getAccessToken = function(bearerToken) {
  return OAuthTokensModel.findOne({ accessToken: bearerToken }).lean();
};

/**
 * Get refresh token.
 */

module.exports.getRefreshToken = function(refreshToken) {
  return OAuthTokensModel.findOne({ refreshToken: refreshToken }).lean();
};

/**
 * Get client.
 */

module.exports.getClient = function(clientId, clientSecret) {
  return {grants:['password','refresh_token','client_credentials']};
  return OAuthClientsModel.findOne({ clientId: clientId, clientSecret: clientSecret }).lean();
};
/**
 * Get user.
 */

module.exports.getUser = function(username, password) {
  return OAuthUsersModel.findOne({ username: username, password: password }).lean();

};

/**
 * Save token.
 */

module.exports.saveToken = function(token,client,user) {
  var accessToken = new OAuthTokensModel({
    accessToken: token.accessToken,
    accessTokenExpiresAt: token.accessTokenExpiresAt,
    client : client,
    clientId: client._id,
    refreshToken: token.refreshToken,
    refreshTokenExpiresAt: token.refreshTokenExpiresAt,
    user : user,
    userId: user._id,
  });
  console.log(accessToken)
  // Can't just chain `lean()` to `save()` as we did with `findOne()` elsewhere. Instead we use `Promise` to resolve the data.
  return new Promise( function(resolve,reject){
    accessToken.save(function(err,data){
      if( err ) reject( err );
      else resolve( data );
    }) ;
  }).then(function(saveResult){
    saveResult = saveResult && typeof saveResult == 'object' ? saveResult.toJSON() : saveResult;
    
    var data = new Object();
    for( var prop in saveResult ) data[prop] = saveResult[prop];
    data.client = data.clientId;
    data.user = data.userId;
    return data;
  });
};

/**
 * saveAuthorizationCode
 */
module.exports.saveAuthorizationCode = function(arguments){
    console.log('how is this implemented!?', arguments);
}

module.exports.revokeToken = function(token) {
  console.log(token)
  return OAuthTokensModel.deleteOne({ refreshToken: token.refreshToken });
};