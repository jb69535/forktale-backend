
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Owner_verification_requestsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  restaurant_id: 'restaurant_id',
  business_license_url: 'business_license_url',
  message: 'message',
  status: 'status',
  reviewed_at: 'reviewed_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PostsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  restaurant_id: 'restaurant_id',
  rating: 'rating',
  photo_url: 'photo_url',
  caption: 'caption',
  is_visible: 'is_visible',
  language: 'language',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.RestaurantsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  category: 'category',
  address: 'address',
  city: 'city',
  country: 'country',
  latitude: 'latitude',
  longitude: 'longitude',
  phone_number: 'phone_number',
  website_url: 'website_url',
  instagram_url: 'instagram_url',
  description: 'description',
  is_verified: 'is_verified',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password_hash: 'password_hash',
  username: 'username',
  user_type: 'user_type',
  tier: 'tier',
  review_count: 'review_count',
  profile_image_url: 'profile_image_url',
  birthplace_city: 'birthplace_city',
  lived_cities: 'lived_cities',
  current_city: 'current_city',
  show_location_badge: 'show_location_badge',
  is_verified_owner: 'is_verified_owner',
  restaurant_id: 'restaurant_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  password_reset_token: 'password_reset_token',
  password_reset_token_expiration: 'password_reset_token_expiration'
};

exports.Prisma.Password_reset_tokensScalarFieldEnum = {
  id: 'id',
  email: 'email',
  token: 'token',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.owner_verification_requestsOrderByRelevanceFieldEnum = {
  business_license_url: 'business_license_url',
  message: 'message'
};

exports.Prisma.postsOrderByRelevanceFieldEnum = {
  photo_url: 'photo_url',
  caption: 'caption',
  language: 'language'
};

exports.Prisma.restaurantsOrderByRelevanceFieldEnum = {
  name: 'name',
  category: 'category',
  address: 'address',
  city: 'city',
  country: 'country',
  phone_number: 'phone_number',
  website_url: 'website_url',
  instagram_url: 'instagram_url',
  description: 'description'
};

exports.Prisma.usersOrderByRelevanceFieldEnum = {
  email: 'email',
  password_hash: 'password_hash',
  username: 'username',
  profile_image_url: 'profile_image_url',
  birthplace_city: 'birthplace_city',
  lived_cities: 'lived_cities',
  current_city: 'current_city',
  password_reset_token: 'password_reset_token'
};

exports.Prisma.password_reset_tokensOrderByRelevanceFieldEnum = {
  email: 'email',
  token: 'token'
};
exports.owner_verification_requests_status = exports.$Enums.owner_verification_requests_status = {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
};

exports.users_user_type = exports.$Enums.users_user_type = {
  reviewer: 'reviewer',
  owner: 'owner'
};

exports.users_tier = exports.$Enums.users_tier = {
  SEEDLING: 'SEEDLING',
  BEGINNER: 'BEGINNER',
  EXPLORER: 'EXPLORER',
  LOVER: 'LOVER',
  GOURMET: 'GOURMET',
  SCHOLAR: 'SCHOLAR',
  PHILOSOPHER: 'PHILOSOPHER'
};

exports.Prisma.ModelName = {
  owner_verification_requests: 'owner_verification_requests',
  posts: 'posts',
  restaurants: 'restaurants',
  users: 'users',
  password_reset_tokens: 'password_reset_tokens'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
