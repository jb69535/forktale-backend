
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model owner_verification_requests
 * 
 */
export type owner_verification_requests = $Result.DefaultSelection<Prisma.$owner_verification_requestsPayload>
/**
 * Model posts
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type posts = $Result.DefaultSelection<Prisma.$postsPayload>
/**
 * Model restaurants
 * 
 */
export type restaurants = $Result.DefaultSelection<Prisma.$restaurantsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const users_user_type: {
  reviewer: 'reviewer',
  owner: 'owner'
};

export type users_user_type = (typeof users_user_type)[keyof typeof users_user_type]


export const users_tier: {
  SEEDLING: 'SEEDLING',
  BEGINNER: 'BEGINNER',
  EXPLORER: 'EXPLORER',
  LOVER: 'LOVER',
  GOURMET: 'GOURMET',
  SCHOLAR: 'SCHOLAR',
  PHILOSOPHER: 'PHILOSOPHER'
};

export type users_tier = (typeof users_tier)[keyof typeof users_tier]


export const owner_verification_requests_status: {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
};

export type owner_verification_requests_status = (typeof owner_verification_requests_status)[keyof typeof owner_verification_requests_status]

}

export type users_user_type = $Enums.users_user_type

export const users_user_type: typeof $Enums.users_user_type

export type users_tier = $Enums.users_tier

export const users_tier: typeof $Enums.users_tier

export type owner_verification_requests_status = $Enums.owner_verification_requests_status

export const owner_verification_requests_status: typeof $Enums.owner_verification_requests_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Owner_verification_requests
 * const owner_verification_requests = await prisma.owner_verification_requests.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Owner_verification_requests
   * const owner_verification_requests = await prisma.owner_verification_requests.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.owner_verification_requests`: Exposes CRUD operations for the **owner_verification_requests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owner_verification_requests
    * const owner_verification_requests = await prisma.owner_verification_requests.findMany()
    * ```
    */
  get owner_verification_requests(): Prisma.owner_verification_requestsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurants`: Exposes CRUD operations for the **restaurants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurants.findMany()
    * ```
    */
  get restaurants(): Prisma.restaurantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    owner_verification_requests: 'owner_verification_requests',
    posts: 'posts',
    restaurants: 'restaurants',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "owner_verification_requests" | "posts" | "restaurants" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      owner_verification_requests: {
        payload: Prisma.$owner_verification_requestsPayload<ExtArgs>
        fields: Prisma.owner_verification_requestsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.owner_verification_requestsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$owner_verification_requestsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.owner_verification_requestsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$owner_verification_requestsPayload>
          }
          findFirst: {
            args: Prisma.owner_verification_requestsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$owner_verification_requestsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.owner_verification_requestsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$owner_verification_requestsPayload>
          }
          findMany: {
            args: Prisma.owner_verification_requestsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$owner_verification_requestsPayload>[]
          }
          create: {
            args: Prisma.owner_verification_requestsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$owner_verification_requestsPayload>
          }
          createMany: {
            args: Prisma.owner_verification_requestsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.owner_verification_requestsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$owner_verification_requestsPayload>
          }
          update: {
            args: Prisma.owner_verification_requestsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$owner_verification_requestsPayload>
          }
          deleteMany: {
            args: Prisma.owner_verification_requestsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.owner_verification_requestsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.owner_verification_requestsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$owner_verification_requestsPayload>
          }
          aggregate: {
            args: Prisma.Owner_verification_requestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwner_verification_requests>
          }
          groupBy: {
            args: Prisma.owner_verification_requestsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Owner_verification_requestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.owner_verification_requestsCountArgs<ExtArgs>
            result: $Utils.Optional<Owner_verification_requestsCountAggregateOutputType> | number
          }
        }
      }
      posts: {
        payload: Prisma.$postsPayload<ExtArgs>
        fields: Prisma.postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findFirst: {
            args: Prisma.postsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findMany: {
            args: Prisma.postsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          create: {
            args: Prisma.postsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          createMany: {
            args: Prisma.postsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.postsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          update: {
            args: Prisma.postsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          deleteMany: {
            args: Prisma.postsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.postsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.postsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.postsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      restaurants: {
        payload: Prisma.$restaurantsPayload<ExtArgs>
        fields: Prisma.restaurantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.restaurantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.restaurantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          findFirst: {
            args: Prisma.restaurantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.restaurantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          findMany: {
            args: Prisma.restaurantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>[]
          }
          create: {
            args: Prisma.restaurantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          createMany: {
            args: Prisma.restaurantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.restaurantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          update: {
            args: Prisma.restaurantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          deleteMany: {
            args: Prisma.restaurantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.restaurantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.restaurantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantsPayload>
          }
          aggregate: {
            args: Prisma.RestaurantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurants>
          }
          groupBy: {
            args: Prisma.restaurantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.restaurantsCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    owner_verification_requests?: owner_verification_requestsOmit
    posts?: postsOmit
    restaurants?: restaurantsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RestaurantsCountOutputType
   */

  export type RestaurantsCountOutputType = {
    owner_verification_requests: number
    posts: number
  }

  export type RestaurantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner_verification_requests?: boolean | RestaurantsCountOutputTypeCountOwner_verification_requestsArgs
    posts?: boolean | RestaurantsCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantsCountOutputType
     */
    select?: RestaurantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountOwner_verification_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: owner_verification_requestsWhereInput
  }

  /**
   * RestaurantsCountOutputType without action
   */
  export type RestaurantsCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    owner_verification_requests: number
    posts: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner_verification_requests?: boolean | UsersCountOutputTypeCountOwner_verification_requestsArgs
    posts?: boolean | UsersCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOwner_verification_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: owner_verification_requestsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model owner_verification_requests
   */

  export type AggregateOwner_verification_requests = {
    _count: Owner_verification_requestsCountAggregateOutputType | null
    _avg: Owner_verification_requestsAvgAggregateOutputType | null
    _sum: Owner_verification_requestsSumAggregateOutputType | null
    _min: Owner_verification_requestsMinAggregateOutputType | null
    _max: Owner_verification_requestsMaxAggregateOutputType | null
  }

  export type Owner_verification_requestsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    restaurant_id: number | null
  }

  export type Owner_verification_requestsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    restaurant_id: number | null
  }

  export type Owner_verification_requestsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    restaurant_id: number | null
    business_license_url: string | null
    message: string | null
    status: $Enums.owner_verification_requests_status | null
    reviewed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Owner_verification_requestsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    restaurant_id: number | null
    business_license_url: string | null
    message: string | null
    status: $Enums.owner_verification_requests_status | null
    reviewed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Owner_verification_requestsCountAggregateOutputType = {
    id: number
    user_id: number
    restaurant_id: number
    business_license_url: number
    message: number
    status: number
    reviewed_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Owner_verification_requestsAvgAggregateInputType = {
    id?: true
    user_id?: true
    restaurant_id?: true
  }

  export type Owner_verification_requestsSumAggregateInputType = {
    id?: true
    user_id?: true
    restaurant_id?: true
  }

  export type Owner_verification_requestsMinAggregateInputType = {
    id?: true
    user_id?: true
    restaurant_id?: true
    business_license_url?: true
    message?: true
    status?: true
    reviewed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Owner_verification_requestsMaxAggregateInputType = {
    id?: true
    user_id?: true
    restaurant_id?: true
    business_license_url?: true
    message?: true
    status?: true
    reviewed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type Owner_verification_requestsCountAggregateInputType = {
    id?: true
    user_id?: true
    restaurant_id?: true
    business_license_url?: true
    message?: true
    status?: true
    reviewed_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Owner_verification_requestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owner_verification_requests to aggregate.
     */
    where?: owner_verification_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of owner_verification_requests to fetch.
     */
    orderBy?: owner_verification_requestsOrderByWithRelationInput | owner_verification_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: owner_verification_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` owner_verification_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` owner_verification_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned owner_verification_requests
    **/
    _count?: true | Owner_verification_requestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Owner_verification_requestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Owner_verification_requestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Owner_verification_requestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Owner_verification_requestsMaxAggregateInputType
  }

  export type GetOwner_verification_requestsAggregateType<T extends Owner_verification_requestsAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner_verification_requests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner_verification_requests[P]>
      : GetScalarType<T[P], AggregateOwner_verification_requests[P]>
  }




  export type owner_verification_requestsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: owner_verification_requestsWhereInput
    orderBy?: owner_verification_requestsOrderByWithAggregationInput | owner_verification_requestsOrderByWithAggregationInput[]
    by: Owner_verification_requestsScalarFieldEnum[] | Owner_verification_requestsScalarFieldEnum
    having?: owner_verification_requestsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Owner_verification_requestsCountAggregateInputType | true
    _avg?: Owner_verification_requestsAvgAggregateInputType
    _sum?: Owner_verification_requestsSumAggregateInputType
    _min?: Owner_verification_requestsMinAggregateInputType
    _max?: Owner_verification_requestsMaxAggregateInputType
  }

  export type Owner_verification_requestsGroupByOutputType = {
    id: number
    user_id: number
    restaurant_id: number
    business_license_url: string | null
    message: string | null
    status: $Enums.owner_verification_requests_status | null
    reviewed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: Owner_verification_requestsCountAggregateOutputType | null
    _avg: Owner_verification_requestsAvgAggregateOutputType | null
    _sum: Owner_verification_requestsSumAggregateOutputType | null
    _min: Owner_verification_requestsMinAggregateOutputType | null
    _max: Owner_verification_requestsMaxAggregateOutputType | null
  }

  type GetOwner_verification_requestsGroupByPayload<T extends owner_verification_requestsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Owner_verification_requestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Owner_verification_requestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Owner_verification_requestsGroupByOutputType[P]>
            : GetScalarType<T[P], Owner_verification_requestsGroupByOutputType[P]>
        }
      >
    >


  export type owner_verification_requestsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    restaurant_id?: boolean
    business_license_url?: boolean
    message?: boolean
    status?: boolean
    reviewed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    restaurants?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner_verification_requests"]>



  export type owner_verification_requestsSelectScalar = {
    id?: boolean
    user_id?: boolean
    restaurant_id?: boolean
    business_license_url?: boolean
    message?: boolean
    status?: boolean
    reviewed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type owner_verification_requestsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "restaurant_id" | "business_license_url" | "message" | "status" | "reviewed_at" | "created_at" | "updated_at", ExtArgs["result"]["owner_verification_requests"]>
  export type owner_verification_requestsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    restaurants?: boolean | restaurantsDefaultArgs<ExtArgs>
  }

  export type $owner_verification_requestsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "owner_verification_requests"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      restaurants: Prisma.$restaurantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      restaurant_id: number
      business_license_url: string | null
      message: string | null
      status: $Enums.owner_verification_requests_status | null
      reviewed_at: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["owner_verification_requests"]>
    composites: {}
  }

  type owner_verification_requestsGetPayload<S extends boolean | null | undefined | owner_verification_requestsDefaultArgs> = $Result.GetResult<Prisma.$owner_verification_requestsPayload, S>

  type owner_verification_requestsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<owner_verification_requestsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Owner_verification_requestsCountAggregateInputType | true
    }

  export interface owner_verification_requestsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['owner_verification_requests'], meta: { name: 'owner_verification_requests' } }
    /**
     * Find zero or one Owner_verification_requests that matches the filter.
     * @param {owner_verification_requestsFindUniqueArgs} args - Arguments to find a Owner_verification_requests
     * @example
     * // Get one Owner_verification_requests
     * const owner_verification_requests = await prisma.owner_verification_requests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends owner_verification_requestsFindUniqueArgs>(args: SelectSubset<T, owner_verification_requestsFindUniqueArgs<ExtArgs>>): Prisma__owner_verification_requestsClient<$Result.GetResult<Prisma.$owner_verification_requestsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Owner_verification_requests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {owner_verification_requestsFindUniqueOrThrowArgs} args - Arguments to find a Owner_verification_requests
     * @example
     * // Get one Owner_verification_requests
     * const owner_verification_requests = await prisma.owner_verification_requests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends owner_verification_requestsFindUniqueOrThrowArgs>(args: SelectSubset<T, owner_verification_requestsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__owner_verification_requestsClient<$Result.GetResult<Prisma.$owner_verification_requestsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner_verification_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {owner_verification_requestsFindFirstArgs} args - Arguments to find a Owner_verification_requests
     * @example
     * // Get one Owner_verification_requests
     * const owner_verification_requests = await prisma.owner_verification_requests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends owner_verification_requestsFindFirstArgs>(args?: SelectSubset<T, owner_verification_requestsFindFirstArgs<ExtArgs>>): Prisma__owner_verification_requestsClient<$Result.GetResult<Prisma.$owner_verification_requestsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner_verification_requests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {owner_verification_requestsFindFirstOrThrowArgs} args - Arguments to find a Owner_verification_requests
     * @example
     * // Get one Owner_verification_requests
     * const owner_verification_requests = await prisma.owner_verification_requests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends owner_verification_requestsFindFirstOrThrowArgs>(args?: SelectSubset<T, owner_verification_requestsFindFirstOrThrowArgs<ExtArgs>>): Prisma__owner_verification_requestsClient<$Result.GetResult<Prisma.$owner_verification_requestsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Owner_verification_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {owner_verification_requestsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owner_verification_requests
     * const owner_verification_requests = await prisma.owner_verification_requests.findMany()
     * 
     * // Get first 10 Owner_verification_requests
     * const owner_verification_requests = await prisma.owner_verification_requests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const owner_verification_requestsWithIdOnly = await prisma.owner_verification_requests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends owner_verification_requestsFindManyArgs>(args?: SelectSubset<T, owner_verification_requestsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$owner_verification_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Owner_verification_requests.
     * @param {owner_verification_requestsCreateArgs} args - Arguments to create a Owner_verification_requests.
     * @example
     * // Create one Owner_verification_requests
     * const Owner_verification_requests = await prisma.owner_verification_requests.create({
     *   data: {
     *     // ... data to create a Owner_verification_requests
     *   }
     * })
     * 
     */
    create<T extends owner_verification_requestsCreateArgs>(args: SelectSubset<T, owner_verification_requestsCreateArgs<ExtArgs>>): Prisma__owner_verification_requestsClient<$Result.GetResult<Prisma.$owner_verification_requestsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Owner_verification_requests.
     * @param {owner_verification_requestsCreateManyArgs} args - Arguments to create many Owner_verification_requests.
     * @example
     * // Create many Owner_verification_requests
     * const owner_verification_requests = await prisma.owner_verification_requests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends owner_verification_requestsCreateManyArgs>(args?: SelectSubset<T, owner_verification_requestsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Owner_verification_requests.
     * @param {owner_verification_requestsDeleteArgs} args - Arguments to delete one Owner_verification_requests.
     * @example
     * // Delete one Owner_verification_requests
     * const Owner_verification_requests = await prisma.owner_verification_requests.delete({
     *   where: {
     *     // ... filter to delete one Owner_verification_requests
     *   }
     * })
     * 
     */
    delete<T extends owner_verification_requestsDeleteArgs>(args: SelectSubset<T, owner_verification_requestsDeleteArgs<ExtArgs>>): Prisma__owner_verification_requestsClient<$Result.GetResult<Prisma.$owner_verification_requestsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Owner_verification_requests.
     * @param {owner_verification_requestsUpdateArgs} args - Arguments to update one Owner_verification_requests.
     * @example
     * // Update one Owner_verification_requests
     * const owner_verification_requests = await prisma.owner_verification_requests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends owner_verification_requestsUpdateArgs>(args: SelectSubset<T, owner_verification_requestsUpdateArgs<ExtArgs>>): Prisma__owner_verification_requestsClient<$Result.GetResult<Prisma.$owner_verification_requestsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Owner_verification_requests.
     * @param {owner_verification_requestsDeleteManyArgs} args - Arguments to filter Owner_verification_requests to delete.
     * @example
     * // Delete a few Owner_verification_requests
     * const { count } = await prisma.owner_verification_requests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends owner_verification_requestsDeleteManyArgs>(args?: SelectSubset<T, owner_verification_requestsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owner_verification_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {owner_verification_requestsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owner_verification_requests
     * const owner_verification_requests = await prisma.owner_verification_requests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends owner_verification_requestsUpdateManyArgs>(args: SelectSubset<T, owner_verification_requestsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Owner_verification_requests.
     * @param {owner_verification_requestsUpsertArgs} args - Arguments to update or create a Owner_verification_requests.
     * @example
     * // Update or create a Owner_verification_requests
     * const owner_verification_requests = await prisma.owner_verification_requests.upsert({
     *   create: {
     *     // ... data to create a Owner_verification_requests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner_verification_requests we want to update
     *   }
     * })
     */
    upsert<T extends owner_verification_requestsUpsertArgs>(args: SelectSubset<T, owner_verification_requestsUpsertArgs<ExtArgs>>): Prisma__owner_verification_requestsClient<$Result.GetResult<Prisma.$owner_verification_requestsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Owner_verification_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {owner_verification_requestsCountArgs} args - Arguments to filter Owner_verification_requests to count.
     * @example
     * // Count the number of Owner_verification_requests
     * const count = await prisma.owner_verification_requests.count({
     *   where: {
     *     // ... the filter for the Owner_verification_requests we want to count
     *   }
     * })
    **/
    count<T extends owner_verification_requestsCountArgs>(
      args?: Subset<T, owner_verification_requestsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Owner_verification_requestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner_verification_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Owner_verification_requestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Owner_verification_requestsAggregateArgs>(args: Subset<T, Owner_verification_requestsAggregateArgs>): Prisma.PrismaPromise<GetOwner_verification_requestsAggregateType<T>>

    /**
     * Group by Owner_verification_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {owner_verification_requestsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends owner_verification_requestsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: owner_verification_requestsGroupByArgs['orderBy'] }
        : { orderBy?: owner_verification_requestsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, owner_verification_requestsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwner_verification_requestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the owner_verification_requests model
   */
  readonly fields: owner_verification_requestsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for owner_verification_requests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__owner_verification_requestsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurants<T extends restaurantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, restaurantsDefaultArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the owner_verification_requests model
   */
  interface owner_verification_requestsFieldRefs {
    readonly id: FieldRef<"owner_verification_requests", 'Int'>
    readonly user_id: FieldRef<"owner_verification_requests", 'Int'>
    readonly restaurant_id: FieldRef<"owner_verification_requests", 'Int'>
    readonly business_license_url: FieldRef<"owner_verification_requests", 'String'>
    readonly message: FieldRef<"owner_verification_requests", 'String'>
    readonly status: FieldRef<"owner_verification_requests", 'owner_verification_requests_status'>
    readonly reviewed_at: FieldRef<"owner_verification_requests", 'DateTime'>
    readonly created_at: FieldRef<"owner_verification_requests", 'DateTime'>
    readonly updated_at: FieldRef<"owner_verification_requests", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * owner_verification_requests findUnique
   */
  export type owner_verification_requestsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner_verification_requests
     */
    select?: owner_verification_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owner_verification_requests
     */
    omit?: owner_verification_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: owner_verification_requestsInclude<ExtArgs> | null
    /**
     * Filter, which owner_verification_requests to fetch.
     */
    where: owner_verification_requestsWhereUniqueInput
  }

  /**
   * owner_verification_requests findUniqueOrThrow
   */
  export type owner_verification_requestsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner_verification_requests
     */
    select?: owner_verification_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owner_verification_requests
     */
    omit?: owner_verification_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: owner_verification_requestsInclude<ExtArgs> | null
    /**
     * Filter, which owner_verification_requests to fetch.
     */
    where: owner_verification_requestsWhereUniqueInput
  }

  /**
   * owner_verification_requests findFirst
   */
  export type owner_verification_requestsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner_verification_requests
     */
    select?: owner_verification_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owner_verification_requests
     */
    omit?: owner_verification_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: owner_verification_requestsInclude<ExtArgs> | null
    /**
     * Filter, which owner_verification_requests to fetch.
     */
    where?: owner_verification_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of owner_verification_requests to fetch.
     */
    orderBy?: owner_verification_requestsOrderByWithRelationInput | owner_verification_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for owner_verification_requests.
     */
    cursor?: owner_verification_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` owner_verification_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` owner_verification_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of owner_verification_requests.
     */
    distinct?: Owner_verification_requestsScalarFieldEnum | Owner_verification_requestsScalarFieldEnum[]
  }

  /**
   * owner_verification_requests findFirstOrThrow
   */
  export type owner_verification_requestsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner_verification_requests
     */
    select?: owner_verification_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owner_verification_requests
     */
    omit?: owner_verification_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: owner_verification_requestsInclude<ExtArgs> | null
    /**
     * Filter, which owner_verification_requests to fetch.
     */
    where?: owner_verification_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of owner_verification_requests to fetch.
     */
    orderBy?: owner_verification_requestsOrderByWithRelationInput | owner_verification_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for owner_verification_requests.
     */
    cursor?: owner_verification_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` owner_verification_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` owner_verification_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of owner_verification_requests.
     */
    distinct?: Owner_verification_requestsScalarFieldEnum | Owner_verification_requestsScalarFieldEnum[]
  }

  /**
   * owner_verification_requests findMany
   */
  export type owner_verification_requestsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner_verification_requests
     */
    select?: owner_verification_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owner_verification_requests
     */
    omit?: owner_verification_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: owner_verification_requestsInclude<ExtArgs> | null
    /**
     * Filter, which owner_verification_requests to fetch.
     */
    where?: owner_verification_requestsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of owner_verification_requests to fetch.
     */
    orderBy?: owner_verification_requestsOrderByWithRelationInput | owner_verification_requestsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing owner_verification_requests.
     */
    cursor?: owner_verification_requestsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` owner_verification_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` owner_verification_requests.
     */
    skip?: number
    distinct?: Owner_verification_requestsScalarFieldEnum | Owner_verification_requestsScalarFieldEnum[]
  }

  /**
   * owner_verification_requests create
   */
  export type owner_verification_requestsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner_verification_requests
     */
    select?: owner_verification_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owner_verification_requests
     */
    omit?: owner_verification_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: owner_verification_requestsInclude<ExtArgs> | null
    /**
     * The data needed to create a owner_verification_requests.
     */
    data: XOR<owner_verification_requestsCreateInput, owner_verification_requestsUncheckedCreateInput>
  }

  /**
   * owner_verification_requests createMany
   */
  export type owner_verification_requestsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many owner_verification_requests.
     */
    data: owner_verification_requestsCreateManyInput | owner_verification_requestsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * owner_verification_requests update
   */
  export type owner_verification_requestsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner_verification_requests
     */
    select?: owner_verification_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owner_verification_requests
     */
    omit?: owner_verification_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: owner_verification_requestsInclude<ExtArgs> | null
    /**
     * The data needed to update a owner_verification_requests.
     */
    data: XOR<owner_verification_requestsUpdateInput, owner_verification_requestsUncheckedUpdateInput>
    /**
     * Choose, which owner_verification_requests to update.
     */
    where: owner_verification_requestsWhereUniqueInput
  }

  /**
   * owner_verification_requests updateMany
   */
  export type owner_verification_requestsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update owner_verification_requests.
     */
    data: XOR<owner_verification_requestsUpdateManyMutationInput, owner_verification_requestsUncheckedUpdateManyInput>
    /**
     * Filter which owner_verification_requests to update
     */
    where?: owner_verification_requestsWhereInput
    /**
     * Limit how many owner_verification_requests to update.
     */
    limit?: number
  }

  /**
   * owner_verification_requests upsert
   */
  export type owner_verification_requestsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner_verification_requests
     */
    select?: owner_verification_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owner_verification_requests
     */
    omit?: owner_verification_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: owner_verification_requestsInclude<ExtArgs> | null
    /**
     * The filter to search for the owner_verification_requests to update in case it exists.
     */
    where: owner_verification_requestsWhereUniqueInput
    /**
     * In case the owner_verification_requests found by the `where` argument doesn't exist, create a new owner_verification_requests with this data.
     */
    create: XOR<owner_verification_requestsCreateInput, owner_verification_requestsUncheckedCreateInput>
    /**
     * In case the owner_verification_requests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<owner_verification_requestsUpdateInput, owner_verification_requestsUncheckedUpdateInput>
  }

  /**
   * owner_verification_requests delete
   */
  export type owner_verification_requestsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner_verification_requests
     */
    select?: owner_verification_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owner_verification_requests
     */
    omit?: owner_verification_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: owner_verification_requestsInclude<ExtArgs> | null
    /**
     * Filter which owner_verification_requests to delete.
     */
    where: owner_verification_requestsWhereUniqueInput
  }

  /**
   * owner_verification_requests deleteMany
   */
  export type owner_verification_requestsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owner_verification_requests to delete
     */
    where?: owner_verification_requestsWhereInput
    /**
     * Limit how many owner_verification_requests to delete.
     */
    limit?: number
  }

  /**
   * owner_verification_requests without action
   */
  export type owner_verification_requestsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner_verification_requests
     */
    select?: owner_verification_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owner_verification_requests
     */
    omit?: owner_verification_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: owner_verification_requestsInclude<ExtArgs> | null
  }


  /**
   * Model posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    restaurant_id: number | null
    rating: Decimal | null
  }

  export type PostsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    restaurant_id: number | null
    rating: Decimal | null
  }

  export type PostsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    restaurant_id: number | null
    rating: Decimal | null
    photo_url: string | null
    caption: string | null
    is_visible: boolean | null
    language: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    restaurant_id: number | null
    rating: Decimal | null
    photo_url: string | null
    caption: string | null
    is_visible: boolean | null
    language: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    user_id: number
    restaurant_id: number
    rating: number
    photo_url: number
    caption: number
    is_visible: number
    language: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    id?: true
    user_id?: true
    restaurant_id?: true
    rating?: true
  }

  export type PostsSumAggregateInputType = {
    id?: true
    user_id?: true
    restaurant_id?: true
    rating?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    user_id?: true
    restaurant_id?: true
    rating?: true
    photo_url?: true
    caption?: true
    is_visible?: true
    language?: true
    created_at?: true
    updated_at?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    user_id?: true
    restaurant_id?: true
    rating?: true
    photo_url?: true
    caption?: true
    is_visible?: true
    language?: true
    created_at?: true
    updated_at?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    user_id?: true
    restaurant_id?: true
    rating?: true
    photo_url?: true
    caption?: true
    is_visible?: true
    language?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to aggregate.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
    orderBy?: postsOrderByWithAggregationInput | postsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: number
    user_id: number
    restaurant_id: number
    rating: Decimal
    photo_url: string
    caption: string | null
    is_visible: boolean | null
    language: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    restaurant_id?: boolean
    rating?: boolean
    photo_url?: boolean
    caption?: boolean
    is_visible?: boolean
    language?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
    restaurants?: boolean | restaurantsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>



  export type postsSelectScalar = {
    id?: boolean
    user_id?: boolean
    restaurant_id?: boolean
    rating?: boolean
    photo_url?: boolean
    caption?: boolean
    is_visible?: boolean
    language?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type postsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "restaurant_id" | "rating" | "photo_url" | "caption" | "is_visible" | "language" | "created_at" | "updated_at", ExtArgs["result"]["posts"]>
  export type postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
    restaurants?: boolean | restaurantsDefaultArgs<ExtArgs>
  }

  export type $postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
      restaurants: Prisma.$restaurantsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      restaurant_id: number
      rating: Prisma.Decimal
      photo_url: string
      caption: string | null
      is_visible: boolean | null
      language: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = $Result.GetResult<Prisma.$postsPayload, S>

  type postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts'], meta: { name: 'posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postsFindUniqueArgs>(args: SelectSubset<T, postsFindUniqueArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs>(args: SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postsFindFirstArgs>(args?: SelectSubset<T, postsFindFirstArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs>(args?: SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends postsFindManyArgs>(args?: SelectSubset<T, postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends postsCreateArgs>(args: SelectSubset<T, postsCreateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {postsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postsCreateManyArgs>(args?: SelectSubset<T, postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends postsDeleteArgs>(args: SelectSubset<T, postsDeleteArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postsUpdateArgs>(args: SelectSubset<T, postsUpdateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postsDeleteManyArgs>(args?: SelectSubset<T, postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postsUpdateManyArgs>(args: SelectSubset<T, postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends postsUpsertArgs>(args: SelectSubset<T, postsUpsertArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postsGroupByArgs['orderBy'] }
        : { orderBy?: postsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts model
   */
  readonly fields: postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurants<T extends restaurantsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, restaurantsDefaultArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the posts model
   */
  interface postsFieldRefs {
    readonly id: FieldRef<"posts", 'Int'>
    readonly user_id: FieldRef<"posts", 'Int'>
    readonly restaurant_id: FieldRef<"posts", 'Int'>
    readonly rating: FieldRef<"posts", 'Decimal'>
    readonly photo_url: FieldRef<"posts", 'String'>
    readonly caption: FieldRef<"posts", 'String'>
    readonly is_visible: FieldRef<"posts", 'Boolean'>
    readonly language: FieldRef<"posts", 'String'>
    readonly created_at: FieldRef<"posts", 'DateTime'>
    readonly updated_at: FieldRef<"posts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findUniqueOrThrow
   */
  export type postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findFirst
   */
  export type postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findFirstOrThrow
   */
  export type postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findMany
   */
  export type postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts create
   */
  export type postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to create a posts.
     */
    data: XOR<postsCreateInput, postsUncheckedCreateInput>
  }

  /**
   * posts createMany
   */
  export type postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posts update
   */
  export type postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to update a posts.
     */
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
  }

  /**
   * posts upsert
   */
  export type postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The filter to search for the posts to update in case it exists.
     */
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
     */
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }

  /**
   * posts delete
   */
  export type postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter which posts to delete.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to delete.
     */
    limit?: number
  }

  /**
   * posts without action
   */
  export type postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
  }


  /**
   * Model restaurants
   */

  export type AggregateRestaurants = {
    _count: RestaurantsCountAggregateOutputType | null
    _avg: RestaurantsAvgAggregateOutputType | null
    _sum: RestaurantsSumAggregateOutputType | null
    _min: RestaurantsMinAggregateOutputType | null
    _max: RestaurantsMaxAggregateOutputType | null
  }

  export type RestaurantsAvgAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type RestaurantsSumAggregateOutputType = {
    id: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type RestaurantsMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    address: string | null
    city: string | null
    country: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    phone_number: string | null
    website_url: string | null
    instagram_url: string | null
    description: string | null
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RestaurantsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: string | null
    address: string | null
    city: string | null
    country: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    phone_number: string | null
    website_url: string | null
    instagram_url: string | null
    description: string | null
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RestaurantsCountAggregateOutputType = {
    id: number
    name: number
    category: number
    address: number
    city: number
    country: number
    latitude: number
    longitude: number
    phone_number: number
    website_url: number
    instagram_url: number
    description: number
    is_verified: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RestaurantsAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type RestaurantsSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type RestaurantsMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    address?: true
    city?: true
    country?: true
    latitude?: true
    longitude?: true
    phone_number?: true
    website_url?: true
    instagram_url?: true
    description?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type RestaurantsMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    address?: true
    city?: true
    country?: true
    latitude?: true
    longitude?: true
    phone_number?: true
    website_url?: true
    instagram_url?: true
    description?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
  }

  export type RestaurantsCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    address?: true
    city?: true
    country?: true
    latitude?: true
    longitude?: true
    phone_number?: true
    website_url?: true
    instagram_url?: true
    description?: true
    is_verified?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RestaurantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurants to aggregate.
     */
    where?: restaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantsOrderByWithRelationInput | restaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: restaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned restaurants
    **/
    _count?: true | RestaurantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantsMaxAggregateInputType
  }

  export type GetRestaurantsAggregateType<T extends RestaurantsAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurants[P]>
      : GetScalarType<T[P], AggregateRestaurants[P]>
  }




  export type restaurantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: restaurantsWhereInput
    orderBy?: restaurantsOrderByWithAggregationInput | restaurantsOrderByWithAggregationInput[]
    by: RestaurantsScalarFieldEnum[] | RestaurantsScalarFieldEnum
    having?: restaurantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantsCountAggregateInputType | true
    _avg?: RestaurantsAvgAggregateInputType
    _sum?: RestaurantsSumAggregateInputType
    _min?: RestaurantsMinAggregateInputType
    _max?: RestaurantsMaxAggregateInputType
  }

  export type RestaurantsGroupByOutputType = {
    id: number
    name: string
    category: string | null
    address: string | null
    city: string | null
    country: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    phone_number: string | null
    website_url: string | null
    instagram_url: string | null
    description: string | null
    is_verified: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: RestaurantsCountAggregateOutputType | null
    _avg: RestaurantsAvgAggregateOutputType | null
    _sum: RestaurantsSumAggregateOutputType | null
    _min: RestaurantsMinAggregateOutputType | null
    _max: RestaurantsMaxAggregateOutputType | null
  }

  type GetRestaurantsGroupByPayload<T extends restaurantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantsGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantsGroupByOutputType[P]>
        }
      >
    >


  export type restaurantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    phone_number?: boolean
    website_url?: boolean
    instagram_url?: boolean
    description?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner_verification_requests?: boolean | restaurants$owner_verification_requestsArgs<ExtArgs>
    posts?: boolean | restaurants$postsArgs<ExtArgs>
    _count?: boolean | RestaurantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurants"]>



  export type restaurantsSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    address?: boolean
    city?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    phone_number?: boolean
    website_url?: boolean
    instagram_url?: boolean
    description?: boolean
    is_verified?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type restaurantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "address" | "city" | "country" | "latitude" | "longitude" | "phone_number" | "website_url" | "instagram_url" | "description" | "is_verified" | "created_at" | "updated_at", ExtArgs["result"]["restaurants"]>
  export type restaurantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner_verification_requests?: boolean | restaurants$owner_verification_requestsArgs<ExtArgs>
    posts?: boolean | restaurants$postsArgs<ExtArgs>
    _count?: boolean | RestaurantsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $restaurantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "restaurants"
    objects: {
      owner_verification_requests: Prisma.$owner_verification_requestsPayload<ExtArgs>[]
      posts: Prisma.$postsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: string | null
      address: string | null
      city: string | null
      country: string | null
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      phone_number: string | null
      website_url: string | null
      instagram_url: string | null
      description: string | null
      is_verified: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["restaurants"]>
    composites: {}
  }

  type restaurantsGetPayload<S extends boolean | null | undefined | restaurantsDefaultArgs> = $Result.GetResult<Prisma.$restaurantsPayload, S>

  type restaurantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<restaurantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantsCountAggregateInputType | true
    }

  export interface restaurantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['restaurants'], meta: { name: 'restaurants' } }
    /**
     * Find zero or one Restaurants that matches the filter.
     * @param {restaurantsFindUniqueArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends restaurantsFindUniqueArgs>(args: SelectSubset<T, restaurantsFindUniqueArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {restaurantsFindUniqueOrThrowArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends restaurantsFindUniqueOrThrowArgs>(args: SelectSubset<T, restaurantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsFindFirstArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends restaurantsFindFirstArgs>(args?: SelectSubset<T, restaurantsFindFirstArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsFindFirstOrThrowArgs} args - Arguments to find a Restaurants
     * @example
     * // Get one Restaurants
     * const restaurants = await prisma.restaurants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends restaurantsFindFirstOrThrowArgs>(args?: SelectSubset<T, restaurantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurants.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantsWithIdOnly = await prisma.restaurants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends restaurantsFindManyArgs>(args?: SelectSubset<T, restaurantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurants.
     * @param {restaurantsCreateArgs} args - Arguments to create a Restaurants.
     * @example
     * // Create one Restaurants
     * const Restaurants = await prisma.restaurants.create({
     *   data: {
     *     // ... data to create a Restaurants
     *   }
     * })
     * 
     */
    create<T extends restaurantsCreateArgs>(args: SelectSubset<T, restaurantsCreateArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {restaurantsCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurants = await prisma.restaurants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends restaurantsCreateManyArgs>(args?: SelectSubset<T, restaurantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Restaurants.
     * @param {restaurantsDeleteArgs} args - Arguments to delete one Restaurants.
     * @example
     * // Delete one Restaurants
     * const Restaurants = await prisma.restaurants.delete({
     *   where: {
     *     // ... filter to delete one Restaurants
     *   }
     * })
     * 
     */
    delete<T extends restaurantsDeleteArgs>(args: SelectSubset<T, restaurantsDeleteArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurants.
     * @param {restaurantsUpdateArgs} args - Arguments to update one Restaurants.
     * @example
     * // Update one Restaurants
     * const restaurants = await prisma.restaurants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends restaurantsUpdateArgs>(args: SelectSubset<T, restaurantsUpdateArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {restaurantsDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends restaurantsDeleteManyArgs>(args?: SelectSubset<T, restaurantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurants = await prisma.restaurants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends restaurantsUpdateManyArgs>(args: SelectSubset<T, restaurantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurants.
     * @param {restaurantsUpsertArgs} args - Arguments to update or create a Restaurants.
     * @example
     * // Update or create a Restaurants
     * const restaurants = await prisma.restaurants.upsert({
     *   create: {
     *     // ... data to create a Restaurants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurants we want to update
     *   }
     * })
     */
    upsert<T extends restaurantsUpsertArgs>(args: SelectSubset<T, restaurantsUpsertArgs<ExtArgs>>): Prisma__restaurantsClient<$Result.GetResult<Prisma.$restaurantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurants.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends restaurantsCountArgs>(
      args?: Subset<T, restaurantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestaurantsAggregateArgs>(args: Subset<T, RestaurantsAggregateArgs>): Prisma.PrismaPromise<GetRestaurantsAggregateType<T>>

    /**
     * Group by Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends restaurantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: restaurantsGroupByArgs['orderBy'] }
        : { orderBy?: restaurantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, restaurantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the restaurants model
   */
  readonly fields: restaurantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for restaurants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__restaurantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner_verification_requests<T extends restaurants$owner_verification_requestsArgs<ExtArgs> = {}>(args?: Subset<T, restaurants$owner_verification_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$owner_verification_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends restaurants$postsArgs<ExtArgs> = {}>(args?: Subset<T, restaurants$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the restaurants model
   */
  interface restaurantsFieldRefs {
    readonly id: FieldRef<"restaurants", 'Int'>
    readonly name: FieldRef<"restaurants", 'String'>
    readonly category: FieldRef<"restaurants", 'String'>
    readonly address: FieldRef<"restaurants", 'String'>
    readonly city: FieldRef<"restaurants", 'String'>
    readonly country: FieldRef<"restaurants", 'String'>
    readonly latitude: FieldRef<"restaurants", 'Decimal'>
    readonly longitude: FieldRef<"restaurants", 'Decimal'>
    readonly phone_number: FieldRef<"restaurants", 'String'>
    readonly website_url: FieldRef<"restaurants", 'String'>
    readonly instagram_url: FieldRef<"restaurants", 'String'>
    readonly description: FieldRef<"restaurants", 'String'>
    readonly is_verified: FieldRef<"restaurants", 'Boolean'>
    readonly created_at: FieldRef<"restaurants", 'DateTime'>
    readonly updated_at: FieldRef<"restaurants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * restaurants findUnique
   */
  export type restaurantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where: restaurantsWhereUniqueInput
  }

  /**
   * restaurants findUniqueOrThrow
   */
  export type restaurantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where: restaurantsWhereUniqueInput
  }

  /**
   * restaurants findFirst
   */
  export type restaurantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where?: restaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantsOrderByWithRelationInput | restaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * restaurants findFirstOrThrow
   */
  export type restaurantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where?: restaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantsOrderByWithRelationInput | restaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * restaurants findMany
   */
  export type restaurantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where?: restaurantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantsOrderByWithRelationInput | restaurantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing restaurants.
     */
    cursor?: restaurantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    distinct?: RestaurantsScalarFieldEnum | RestaurantsScalarFieldEnum[]
  }

  /**
   * restaurants create
   */
  export type restaurantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * The data needed to create a restaurants.
     */
    data: XOR<restaurantsCreateInput, restaurantsUncheckedCreateInput>
  }

  /**
   * restaurants createMany
   */
  export type restaurantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many restaurants.
     */
    data: restaurantsCreateManyInput | restaurantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * restaurants update
   */
  export type restaurantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * The data needed to update a restaurants.
     */
    data: XOR<restaurantsUpdateInput, restaurantsUncheckedUpdateInput>
    /**
     * Choose, which restaurants to update.
     */
    where: restaurantsWhereUniqueInput
  }

  /**
   * restaurants updateMany
   */
  export type restaurantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update restaurants.
     */
    data: XOR<restaurantsUpdateManyMutationInput, restaurantsUncheckedUpdateManyInput>
    /**
     * Filter which restaurants to update
     */
    where?: restaurantsWhereInput
    /**
     * Limit how many restaurants to update.
     */
    limit?: number
  }

  /**
   * restaurants upsert
   */
  export type restaurantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * The filter to search for the restaurants to update in case it exists.
     */
    where: restaurantsWhereUniqueInput
    /**
     * In case the restaurants found by the `where` argument doesn't exist, create a new restaurants with this data.
     */
    create: XOR<restaurantsCreateInput, restaurantsUncheckedCreateInput>
    /**
     * In case the restaurants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<restaurantsUpdateInput, restaurantsUncheckedUpdateInput>
  }

  /**
   * restaurants delete
   */
  export type restaurantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
    /**
     * Filter which restaurants to delete.
     */
    where: restaurantsWhereUniqueInput
  }

  /**
   * restaurants deleteMany
   */
  export type restaurantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurants to delete
     */
    where?: restaurantsWhereInput
    /**
     * Limit how many restaurants to delete.
     */
    limit?: number
  }

  /**
   * restaurants.owner_verification_requests
   */
  export type restaurants$owner_verification_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner_verification_requests
     */
    select?: owner_verification_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owner_verification_requests
     */
    omit?: owner_verification_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: owner_verification_requestsInclude<ExtArgs> | null
    where?: owner_verification_requestsWhereInput
    orderBy?: owner_verification_requestsOrderByWithRelationInput | owner_verification_requestsOrderByWithRelationInput[]
    cursor?: owner_verification_requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Owner_verification_requestsScalarFieldEnum | Owner_verification_requestsScalarFieldEnum[]
  }

  /**
   * restaurants.posts
   */
  export type restaurants$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * restaurants without action
   */
  export type restaurantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurants
     */
    select?: restaurantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurants
     */
    omit?: restaurantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: restaurantsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    review_count: number | null
    restaurant_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    review_count: number | null
    restaurant_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    username: string | null
    user_type: $Enums.users_user_type | null
    tier: $Enums.users_tier | null
    review_count: number | null
    profile_image_url: string | null
    birthplace_city: string | null
    lived_cities: string | null
    current_city: string | null
    show_location_badge: boolean | null
    is_verified_owner: boolean | null
    restaurant_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    username: string | null
    user_type: $Enums.users_user_type | null
    tier: $Enums.users_tier | null
    review_count: number | null
    profile_image_url: string | null
    birthplace_city: string | null
    lived_cities: string | null
    current_city: string | null
    show_location_badge: boolean | null
    is_verified_owner: boolean | null
    restaurant_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    username: number
    user_type: number
    tier: number
    review_count: number
    profile_image_url: number
    birthplace_city: number
    lived_cities: number
    current_city: number
    show_location_badge: number
    is_verified_owner: number
    restaurant_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    review_count?: true
    restaurant_id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    review_count?: true
    restaurant_id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    username?: true
    user_type?: true
    tier?: true
    review_count?: true
    profile_image_url?: true
    birthplace_city?: true
    lived_cities?: true
    current_city?: true
    show_location_badge?: true
    is_verified_owner?: true
    restaurant_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    username?: true
    user_type?: true
    tier?: true
    review_count?: true
    profile_image_url?: true
    birthplace_city?: true
    lived_cities?: true
    current_city?: true
    show_location_badge?: true
    is_verified_owner?: true
    restaurant_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    username?: true
    user_type?: true
    tier?: true
    review_count?: true
    profile_image_url?: true
    birthplace_city?: true
    lived_cities?: true
    current_city?: true
    show_location_badge?: true
    is_verified_owner?: true
    restaurant_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password_hash: string
    username: string
    user_type: $Enums.users_user_type | null
    tier: $Enums.users_tier | null
    review_count: number | null
    profile_image_url: string | null
    birthplace_city: string | null
    lived_cities: string | null
    current_city: string | null
    show_location_badge: boolean | null
    is_verified_owner: boolean | null
    restaurant_id: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    username?: boolean
    user_type?: boolean
    tier?: boolean
    review_count?: boolean
    profile_image_url?: boolean
    birthplace_city?: boolean
    lived_cities?: boolean
    current_city?: boolean
    show_location_badge?: boolean
    is_verified_owner?: boolean
    restaurant_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner_verification_requests?: boolean | users$owner_verification_requestsArgs<ExtArgs>
    posts?: boolean | users$postsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    username?: boolean
    user_type?: boolean
    tier?: boolean
    review_count?: boolean
    profile_image_url?: boolean
    birthplace_city?: boolean
    lived_cities?: boolean
    current_city?: boolean
    show_location_badge?: boolean
    is_verified_owner?: boolean
    restaurant_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "username" | "user_type" | "tier" | "review_count" | "profile_image_url" | "birthplace_city" | "lived_cities" | "current_city" | "show_location_badge" | "is_verified_owner" | "restaurant_id" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner_verification_requests?: boolean | users$owner_verification_requestsArgs<ExtArgs>
    posts?: boolean | users$postsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      owner_verification_requests: Prisma.$owner_verification_requestsPayload<ExtArgs>[]
      posts: Prisma.$postsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password_hash: string
      username: string
      user_type: $Enums.users_user_type | null
      tier: $Enums.users_tier | null
      review_count: number | null
      profile_image_url: string | null
      birthplace_city: string | null
      lived_cities: string | null
      current_city: string | null
      show_location_badge: boolean | null
      is_verified_owner: boolean | null
      restaurant_id: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner_verification_requests<T extends users$owner_verification_requestsArgs<ExtArgs> = {}>(args?: Subset<T, users$owner_verification_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$owner_verification_requestsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends users$postsArgs<ExtArgs> = {}>(args?: Subset<T, users$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly user_type: FieldRef<"users", 'users_user_type'>
    readonly tier: FieldRef<"users", 'users_tier'>
    readonly review_count: FieldRef<"users", 'Int'>
    readonly profile_image_url: FieldRef<"users", 'String'>
    readonly birthplace_city: FieldRef<"users", 'String'>
    readonly lived_cities: FieldRef<"users", 'String'>
    readonly current_city: FieldRef<"users", 'String'>
    readonly show_location_badge: FieldRef<"users", 'Boolean'>
    readonly is_verified_owner: FieldRef<"users", 'Boolean'>
    readonly restaurant_id: FieldRef<"users", 'Int'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.owner_verification_requests
   */
  export type users$owner_verification_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owner_verification_requests
     */
    select?: owner_verification_requestsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owner_verification_requests
     */
    omit?: owner_verification_requestsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: owner_verification_requestsInclude<ExtArgs> | null
    where?: owner_verification_requestsWhereInput
    orderBy?: owner_verification_requestsOrderByWithRelationInput | owner_verification_requestsOrderByWithRelationInput[]
    cursor?: owner_verification_requestsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Owner_verification_requestsScalarFieldEnum | Owner_verification_requestsScalarFieldEnum[]
  }

  /**
   * users.posts
   */
  export type users$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Owner_verification_requestsScalarFieldEnum: {
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

  export type Owner_verification_requestsScalarFieldEnum = (typeof Owner_verification_requestsScalarFieldEnum)[keyof typeof Owner_verification_requestsScalarFieldEnum]


  export const PostsScalarFieldEnum: {
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

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const RestaurantsScalarFieldEnum: {
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

  export type RestaurantsScalarFieldEnum = (typeof RestaurantsScalarFieldEnum)[keyof typeof RestaurantsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
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
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const owner_verification_requestsOrderByRelevanceFieldEnum: {
    business_license_url: 'business_license_url',
    message: 'message'
  };

  export type owner_verification_requestsOrderByRelevanceFieldEnum = (typeof owner_verification_requestsOrderByRelevanceFieldEnum)[keyof typeof owner_verification_requestsOrderByRelevanceFieldEnum]


  export const postsOrderByRelevanceFieldEnum: {
    photo_url: 'photo_url',
    caption: 'caption',
    language: 'language'
  };

  export type postsOrderByRelevanceFieldEnum = (typeof postsOrderByRelevanceFieldEnum)[keyof typeof postsOrderByRelevanceFieldEnum]


  export const restaurantsOrderByRelevanceFieldEnum: {
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

  export type restaurantsOrderByRelevanceFieldEnum = (typeof restaurantsOrderByRelevanceFieldEnum)[keyof typeof restaurantsOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    email: 'email',
    password_hash: 'password_hash',
    username: 'username',
    profile_image_url: 'profile_image_url',
    birthplace_city: 'birthplace_city',
    lived_cities: 'lived_cities',
    current_city: 'current_city'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'owner_verification_requests_status'
   */
  export type Enumowner_verification_requests_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'owner_verification_requests_status'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'users_user_type'
   */
  export type Enumusers_user_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_user_type'>
    


  /**
   * Reference to a field of type 'users_tier'
   */
  export type Enumusers_tierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'users_tier'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type owner_verification_requestsWhereInput = {
    AND?: owner_verification_requestsWhereInput | owner_verification_requestsWhereInput[]
    OR?: owner_verification_requestsWhereInput[]
    NOT?: owner_verification_requestsWhereInput | owner_verification_requestsWhereInput[]
    id?: IntFilter<"owner_verification_requests"> | number
    user_id?: IntFilter<"owner_verification_requests"> | number
    restaurant_id?: IntFilter<"owner_verification_requests"> | number
    business_license_url?: StringNullableFilter<"owner_verification_requests"> | string | null
    message?: StringNullableFilter<"owner_verification_requests"> | string | null
    status?: Enumowner_verification_requests_statusNullableFilter<"owner_verification_requests"> | $Enums.owner_verification_requests_status | null
    reviewed_at?: DateTimeNullableFilter<"owner_verification_requests"> | Date | string | null
    created_at?: DateTimeNullableFilter<"owner_verification_requests"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"owner_verification_requests"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    restaurants?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
  }

  export type owner_verification_requestsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    restaurant_id?: SortOrder
    business_license_url?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    reviewed_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    restaurants?: restaurantsOrderByWithRelationInput
    _relevance?: owner_verification_requestsOrderByRelevanceInput
  }

  export type owner_verification_requestsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: owner_verification_requestsWhereInput | owner_verification_requestsWhereInput[]
    OR?: owner_verification_requestsWhereInput[]
    NOT?: owner_verification_requestsWhereInput | owner_verification_requestsWhereInput[]
    user_id?: IntFilter<"owner_verification_requests"> | number
    restaurant_id?: IntFilter<"owner_verification_requests"> | number
    business_license_url?: StringNullableFilter<"owner_verification_requests"> | string | null
    message?: StringNullableFilter<"owner_verification_requests"> | string | null
    status?: Enumowner_verification_requests_statusNullableFilter<"owner_verification_requests"> | $Enums.owner_verification_requests_status | null
    reviewed_at?: DateTimeNullableFilter<"owner_verification_requests"> | Date | string | null
    created_at?: DateTimeNullableFilter<"owner_verification_requests"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"owner_verification_requests"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    restaurants?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
  }, "id">

  export type owner_verification_requestsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    restaurant_id?: SortOrder
    business_license_url?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    reviewed_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: owner_verification_requestsCountOrderByAggregateInput
    _avg?: owner_verification_requestsAvgOrderByAggregateInput
    _max?: owner_verification_requestsMaxOrderByAggregateInput
    _min?: owner_verification_requestsMinOrderByAggregateInput
    _sum?: owner_verification_requestsSumOrderByAggregateInput
  }

  export type owner_verification_requestsScalarWhereWithAggregatesInput = {
    AND?: owner_verification_requestsScalarWhereWithAggregatesInput | owner_verification_requestsScalarWhereWithAggregatesInput[]
    OR?: owner_verification_requestsScalarWhereWithAggregatesInput[]
    NOT?: owner_verification_requestsScalarWhereWithAggregatesInput | owner_verification_requestsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"owner_verification_requests"> | number
    user_id?: IntWithAggregatesFilter<"owner_verification_requests"> | number
    restaurant_id?: IntWithAggregatesFilter<"owner_verification_requests"> | number
    business_license_url?: StringNullableWithAggregatesFilter<"owner_verification_requests"> | string | null
    message?: StringNullableWithAggregatesFilter<"owner_verification_requests"> | string | null
    status?: Enumowner_verification_requests_statusNullableWithAggregatesFilter<"owner_verification_requests"> | $Enums.owner_verification_requests_status | null
    reviewed_at?: DateTimeNullableWithAggregatesFilter<"owner_verification_requests"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"owner_verification_requests"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"owner_verification_requests"> | Date | string | null
  }

  export type postsWhereInput = {
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    id?: IntFilter<"posts"> | number
    user_id?: IntFilter<"posts"> | number
    restaurant_id?: IntFilter<"posts"> | number
    rating?: DecimalFilter<"posts"> | Decimal | DecimalJsLike | number | string
    photo_url?: StringFilter<"posts"> | string
    caption?: StringNullableFilter<"posts"> | string | null
    is_visible?: BoolNullableFilter<"posts"> | boolean | null
    language?: StringNullableFilter<"posts"> | string | null
    created_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    restaurants?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
  }

  export type postsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    restaurant_id?: SortOrder
    rating?: SortOrder
    photo_url?: SortOrder
    caption?: SortOrderInput | SortOrder
    is_visible?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    restaurants?: restaurantsOrderByWithRelationInput
    _relevance?: postsOrderByRelevanceInput
  }

  export type postsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    user_id?: IntFilter<"posts"> | number
    restaurant_id?: IntFilter<"posts"> | number
    rating?: DecimalFilter<"posts"> | Decimal | DecimalJsLike | number | string
    photo_url?: StringFilter<"posts"> | string
    caption?: StringNullableFilter<"posts"> | string | null
    is_visible?: BoolNullableFilter<"posts"> | boolean | null
    language?: StringNullableFilter<"posts"> | string | null
    created_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    restaurants?: XOR<RestaurantsScalarRelationFilter, restaurantsWhereInput>
  }, "id">

  export type postsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    restaurant_id?: SortOrder
    rating?: SortOrder
    photo_url?: SortOrder
    caption?: SortOrderInput | SortOrder
    is_visible?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: postsCountOrderByAggregateInput
    _avg?: postsAvgOrderByAggregateInput
    _max?: postsMaxOrderByAggregateInput
    _min?: postsMinOrderByAggregateInput
    _sum?: postsSumOrderByAggregateInput
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    OR?: postsScalarWhereWithAggregatesInput[]
    NOT?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"posts"> | number
    user_id?: IntWithAggregatesFilter<"posts"> | number
    restaurant_id?: IntWithAggregatesFilter<"posts"> | number
    rating?: DecimalWithAggregatesFilter<"posts"> | Decimal | DecimalJsLike | number | string
    photo_url?: StringWithAggregatesFilter<"posts"> | string
    caption?: StringNullableWithAggregatesFilter<"posts"> | string | null
    is_visible?: BoolNullableWithAggregatesFilter<"posts"> | boolean | null
    language?: StringNullableWithAggregatesFilter<"posts"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null
  }

  export type restaurantsWhereInput = {
    AND?: restaurantsWhereInput | restaurantsWhereInput[]
    OR?: restaurantsWhereInput[]
    NOT?: restaurantsWhereInput | restaurantsWhereInput[]
    id?: IntFilter<"restaurants"> | number
    name?: StringFilter<"restaurants"> | string
    category?: StringNullableFilter<"restaurants"> | string | null
    address?: StringNullableFilter<"restaurants"> | string | null
    city?: StringNullableFilter<"restaurants"> | string | null
    country?: StringNullableFilter<"restaurants"> | string | null
    latitude?: DecimalNullableFilter<"restaurants"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"restaurants"> | Decimal | DecimalJsLike | number | string | null
    phone_number?: StringNullableFilter<"restaurants"> | string | null
    website_url?: StringNullableFilter<"restaurants"> | string | null
    instagram_url?: StringNullableFilter<"restaurants"> | string | null
    description?: StringNullableFilter<"restaurants"> | string | null
    is_verified?: BoolNullableFilter<"restaurants"> | boolean | null
    created_at?: DateTimeNullableFilter<"restaurants"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"restaurants"> | Date | string | null
    owner_verification_requests?: Owner_verification_requestsListRelationFilter
    posts?: PostsListRelationFilter
  }

  export type restaurantsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    website_url?: SortOrderInput | SortOrder
    instagram_url?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    is_verified?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    owner_verification_requests?: owner_verification_requestsOrderByRelationAggregateInput
    posts?: postsOrderByRelationAggregateInput
    _relevance?: restaurantsOrderByRelevanceInput
  }

  export type restaurantsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: restaurantsWhereInput | restaurantsWhereInput[]
    OR?: restaurantsWhereInput[]
    NOT?: restaurantsWhereInput | restaurantsWhereInput[]
    name?: StringFilter<"restaurants"> | string
    category?: StringNullableFilter<"restaurants"> | string | null
    address?: StringNullableFilter<"restaurants"> | string | null
    city?: StringNullableFilter<"restaurants"> | string | null
    country?: StringNullableFilter<"restaurants"> | string | null
    latitude?: DecimalNullableFilter<"restaurants"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"restaurants"> | Decimal | DecimalJsLike | number | string | null
    phone_number?: StringNullableFilter<"restaurants"> | string | null
    website_url?: StringNullableFilter<"restaurants"> | string | null
    instagram_url?: StringNullableFilter<"restaurants"> | string | null
    description?: StringNullableFilter<"restaurants"> | string | null
    is_verified?: BoolNullableFilter<"restaurants"> | boolean | null
    created_at?: DateTimeNullableFilter<"restaurants"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"restaurants"> | Date | string | null
    owner_verification_requests?: Owner_verification_requestsListRelationFilter
    posts?: PostsListRelationFilter
  }, "id">

  export type restaurantsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    website_url?: SortOrderInput | SortOrder
    instagram_url?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    is_verified?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: restaurantsCountOrderByAggregateInput
    _avg?: restaurantsAvgOrderByAggregateInput
    _max?: restaurantsMaxOrderByAggregateInput
    _min?: restaurantsMinOrderByAggregateInput
    _sum?: restaurantsSumOrderByAggregateInput
  }

  export type restaurantsScalarWhereWithAggregatesInput = {
    AND?: restaurantsScalarWhereWithAggregatesInput | restaurantsScalarWhereWithAggregatesInput[]
    OR?: restaurantsScalarWhereWithAggregatesInput[]
    NOT?: restaurantsScalarWhereWithAggregatesInput | restaurantsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"restaurants"> | number
    name?: StringWithAggregatesFilter<"restaurants"> | string
    category?: StringNullableWithAggregatesFilter<"restaurants"> | string | null
    address?: StringNullableWithAggregatesFilter<"restaurants"> | string | null
    city?: StringNullableWithAggregatesFilter<"restaurants"> | string | null
    country?: StringNullableWithAggregatesFilter<"restaurants"> | string | null
    latitude?: DecimalNullableWithAggregatesFilter<"restaurants"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"restaurants"> | Decimal | DecimalJsLike | number | string | null
    phone_number?: StringNullableWithAggregatesFilter<"restaurants"> | string | null
    website_url?: StringNullableWithAggregatesFilter<"restaurants"> | string | null
    instagram_url?: StringNullableWithAggregatesFilter<"restaurants"> | string | null
    description?: StringNullableWithAggregatesFilter<"restaurants"> | string | null
    is_verified?: BoolNullableWithAggregatesFilter<"restaurants"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"restaurants"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"restaurants"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    user_type?: Enumusers_user_typeNullableFilter<"users"> | $Enums.users_user_type | null
    tier?: Enumusers_tierNullableFilter<"users"> | $Enums.users_tier | null
    review_count?: IntNullableFilter<"users"> | number | null
    profile_image_url?: StringNullableFilter<"users"> | string | null
    birthplace_city?: StringNullableFilter<"users"> | string | null
    lived_cities?: StringNullableFilter<"users"> | string | null
    current_city?: StringNullableFilter<"users"> | string | null
    show_location_badge?: BoolNullableFilter<"users"> | boolean | null
    is_verified_owner?: BoolNullableFilter<"users"> | boolean | null
    restaurant_id?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    owner_verification_requests?: Owner_verification_requestsListRelationFilter
    posts?: PostsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    username?: SortOrder
    user_type?: SortOrderInput | SortOrder
    tier?: SortOrderInput | SortOrder
    review_count?: SortOrderInput | SortOrder
    profile_image_url?: SortOrderInput | SortOrder
    birthplace_city?: SortOrderInput | SortOrder
    lived_cities?: SortOrderInput | SortOrder
    current_city?: SortOrderInput | SortOrder
    show_location_badge?: SortOrderInput | SortOrder
    is_verified_owner?: SortOrderInput | SortOrder
    restaurant_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    owner_verification_requests?: owner_verification_requestsOrderByRelationAggregateInput
    posts?: postsOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    user_type?: Enumusers_user_typeNullableFilter<"users"> | $Enums.users_user_type | null
    tier?: Enumusers_tierNullableFilter<"users"> | $Enums.users_tier | null
    review_count?: IntNullableFilter<"users"> | number | null
    profile_image_url?: StringNullableFilter<"users"> | string | null
    birthplace_city?: StringNullableFilter<"users"> | string | null
    lived_cities?: StringNullableFilter<"users"> | string | null
    current_city?: StringNullableFilter<"users"> | string | null
    show_location_badge?: BoolNullableFilter<"users"> | boolean | null
    is_verified_owner?: BoolNullableFilter<"users"> | boolean | null
    restaurant_id?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    owner_verification_requests?: Owner_verification_requestsListRelationFilter
    posts?: PostsListRelationFilter
  }, "id" | "email" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    username?: SortOrder
    user_type?: SortOrderInput | SortOrder
    tier?: SortOrderInput | SortOrder
    review_count?: SortOrderInput | SortOrder
    profile_image_url?: SortOrderInput | SortOrder
    birthplace_city?: SortOrderInput | SortOrder
    lived_cities?: SortOrderInput | SortOrder
    current_city?: SortOrderInput | SortOrder
    show_location_badge?: SortOrderInput | SortOrder
    is_verified_owner?: SortOrderInput | SortOrder
    restaurant_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    user_type?: Enumusers_user_typeNullableWithAggregatesFilter<"users"> | $Enums.users_user_type | null
    tier?: Enumusers_tierNullableWithAggregatesFilter<"users"> | $Enums.users_tier | null
    review_count?: IntNullableWithAggregatesFilter<"users"> | number | null
    profile_image_url?: StringNullableWithAggregatesFilter<"users"> | string | null
    birthplace_city?: StringNullableWithAggregatesFilter<"users"> | string | null
    lived_cities?: StringNullableWithAggregatesFilter<"users"> | string | null
    current_city?: StringNullableWithAggregatesFilter<"users"> | string | null
    show_location_badge?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    is_verified_owner?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    restaurant_id?: IntNullableWithAggregatesFilter<"users"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type owner_verification_requestsCreateInput = {
    business_license_url?: string | null
    message?: string | null
    status?: $Enums.owner_verification_requests_status | null
    reviewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutOwner_verification_requestsInput
    restaurants: restaurantsCreateNestedOneWithoutOwner_verification_requestsInput
  }

  export type owner_verification_requestsUncheckedCreateInput = {
    id?: number
    user_id: number
    restaurant_id: number
    business_license_url?: string | null
    message?: string | null
    status?: $Enums.owner_verification_requests_status | null
    reviewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type owner_verification_requestsUpdateInput = {
    business_license_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumowner_verification_requests_statusFieldUpdateOperationsInput | $Enums.owner_verification_requests_status | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutOwner_verification_requestsNestedInput
    restaurants?: restaurantsUpdateOneRequiredWithoutOwner_verification_requestsNestedInput
  }

  export type owner_verification_requestsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    restaurant_id?: IntFieldUpdateOperationsInput | number
    business_license_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumowner_verification_requests_statusFieldUpdateOperationsInput | $Enums.owner_verification_requests_status | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type owner_verification_requestsCreateManyInput = {
    id?: number
    user_id: number
    restaurant_id: number
    business_license_url?: string | null
    message?: string | null
    status?: $Enums.owner_verification_requests_status | null
    reviewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type owner_verification_requestsUpdateManyMutationInput = {
    business_license_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumowner_verification_requests_statusFieldUpdateOperationsInput | $Enums.owner_verification_requests_status | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type owner_verification_requestsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    restaurant_id?: IntFieldUpdateOperationsInput | number
    business_license_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumowner_verification_requests_statusFieldUpdateOperationsInput | $Enums.owner_verification_requests_status | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsCreateInput = {
    rating: Decimal | DecimalJsLike | number | string
    photo_url: string
    caption?: string | null
    is_visible?: boolean | null
    language?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutPostsInput
    restaurants: restaurantsCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateInput = {
    id?: number
    user_id: number
    restaurant_id: number
    rating: Decimal | DecimalJsLike | number | string
    photo_url: string
    caption?: string | null
    is_visible?: boolean | null
    language?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type postsUpdateInput = {
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutPostsNestedInput
    restaurants?: restaurantsUpdateOneRequiredWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    restaurant_id?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsCreateManyInput = {
    id?: number
    user_id: number
    restaurant_id: number
    rating: Decimal | DecimalJsLike | number | string
    photo_url: string
    caption?: string | null
    is_visible?: boolean | null
    language?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type postsUpdateManyMutationInput = {
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    restaurant_id?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type restaurantsCreateInput = {
    name: string
    category?: string | null
    address?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone_number?: string | null
    website_url?: string | null
    instagram_url?: string | null
    description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    owner_verification_requests?: owner_verification_requestsCreateNestedManyWithoutRestaurantsInput
    posts?: postsCreateNestedManyWithoutRestaurantsInput
  }

  export type restaurantsUncheckedCreateInput = {
    id?: number
    name: string
    category?: string | null
    address?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone_number?: string | null
    website_url?: string | null
    instagram_url?: string | null
    description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    owner_verification_requests?: owner_verification_requestsUncheckedCreateNestedManyWithoutRestaurantsInput
    posts?: postsUncheckedCreateNestedManyWithoutRestaurantsInput
  }

  export type restaurantsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner_verification_requests?: owner_verification_requestsUpdateManyWithoutRestaurantsNestedInput
    posts?: postsUpdateManyWithoutRestaurantsNestedInput
  }

  export type restaurantsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner_verification_requests?: owner_verification_requestsUncheckedUpdateManyWithoutRestaurantsNestedInput
    posts?: postsUncheckedUpdateManyWithoutRestaurantsNestedInput
  }

  export type restaurantsCreateManyInput = {
    id?: number
    name: string
    category?: string | null
    address?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone_number?: string | null
    website_url?: string | null
    instagram_url?: string | null
    description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type restaurantsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type restaurantsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    email: string
    password_hash: string
    username: string
    user_type?: $Enums.users_user_type | null
    tier?: $Enums.users_tier | null
    review_count?: number | null
    profile_image_url?: string | null
    birthplace_city?: string | null
    lived_cities?: string | null
    current_city?: string | null
    show_location_badge?: boolean | null
    is_verified_owner?: boolean | null
    restaurant_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    owner_verification_requests?: owner_verification_requestsCreateNestedManyWithoutUsersInput
    posts?: postsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password_hash: string
    username: string
    user_type?: $Enums.users_user_type | null
    tier?: $Enums.users_tier | null
    review_count?: number | null
    profile_image_url?: string | null
    birthplace_city?: string | null
    lived_cities?: string | null
    current_city?: string | null
    show_location_badge?: boolean | null
    is_verified_owner?: boolean | null
    restaurant_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    owner_verification_requests?: owner_verification_requestsUncheckedCreateNestedManyWithoutUsersInput
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    user_type?: NullableEnumusers_user_typeFieldUpdateOperationsInput | $Enums.users_user_type | null
    tier?: NullableEnumusers_tierFieldUpdateOperationsInput | $Enums.users_tier | null
    review_count?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birthplace_city?: NullableStringFieldUpdateOperationsInput | string | null
    lived_cities?: NullableStringFieldUpdateOperationsInput | string | null
    current_city?: NullableStringFieldUpdateOperationsInput | string | null
    show_location_badge?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_verified_owner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restaurant_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner_verification_requests?: owner_verification_requestsUpdateManyWithoutUsersNestedInput
    posts?: postsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    user_type?: NullableEnumusers_user_typeFieldUpdateOperationsInput | $Enums.users_user_type | null
    tier?: NullableEnumusers_tierFieldUpdateOperationsInput | $Enums.users_tier | null
    review_count?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birthplace_city?: NullableStringFieldUpdateOperationsInput | string | null
    lived_cities?: NullableStringFieldUpdateOperationsInput | string | null
    current_city?: NullableStringFieldUpdateOperationsInput | string | null
    show_location_badge?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_verified_owner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restaurant_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner_verification_requests?: owner_verification_requestsUncheckedUpdateManyWithoutUsersNestedInput
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password_hash: string
    username: string
    user_type?: $Enums.users_user_type | null
    tier?: $Enums.users_tier | null
    review_count?: number | null
    profile_image_url?: string | null
    birthplace_city?: string | null
    lived_cities?: string | null
    current_city?: string | null
    show_location_badge?: boolean | null
    is_verified_owner?: boolean | null
    restaurant_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    user_type?: NullableEnumusers_user_typeFieldUpdateOperationsInput | $Enums.users_user_type | null
    tier?: NullableEnumusers_tierFieldUpdateOperationsInput | $Enums.users_tier | null
    review_count?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birthplace_city?: NullableStringFieldUpdateOperationsInput | string | null
    lived_cities?: NullableStringFieldUpdateOperationsInput | string | null
    current_city?: NullableStringFieldUpdateOperationsInput | string | null
    show_location_badge?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_verified_owner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restaurant_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    user_type?: NullableEnumusers_user_typeFieldUpdateOperationsInput | $Enums.users_user_type | null
    tier?: NullableEnumusers_tierFieldUpdateOperationsInput | $Enums.users_tier | null
    review_count?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birthplace_city?: NullableStringFieldUpdateOperationsInput | string | null
    lived_cities?: NullableStringFieldUpdateOperationsInput | string | null
    current_city?: NullableStringFieldUpdateOperationsInput | string | null
    show_location_badge?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_verified_owner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restaurant_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumowner_verification_requests_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.owner_verification_requests_status | Enumowner_verification_requests_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.owner_verification_requests_status[] | null
    notIn?: $Enums.owner_verification_requests_status[] | null
    not?: NestedEnumowner_verification_requests_statusNullableFilter<$PrismaModel> | $Enums.owner_verification_requests_status | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type RestaurantsScalarRelationFilter = {
    is?: restaurantsWhereInput
    isNot?: restaurantsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type owner_verification_requestsOrderByRelevanceInput = {
    fields: owner_verification_requestsOrderByRelevanceFieldEnum | owner_verification_requestsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type owner_verification_requestsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    restaurant_id?: SortOrder
    business_license_url?: SortOrder
    message?: SortOrder
    status?: SortOrder
    reviewed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type owner_verification_requestsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    restaurant_id?: SortOrder
  }

  export type owner_verification_requestsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    restaurant_id?: SortOrder
    business_license_url?: SortOrder
    message?: SortOrder
    status?: SortOrder
    reviewed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type owner_verification_requestsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    restaurant_id?: SortOrder
    business_license_url?: SortOrder
    message?: SortOrder
    status?: SortOrder
    reviewed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type owner_verification_requestsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    restaurant_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumowner_verification_requests_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.owner_verification_requests_status | Enumowner_verification_requests_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.owner_verification_requests_status[] | null
    notIn?: $Enums.owner_verification_requests_status[] | null
    not?: NestedEnumowner_verification_requests_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.owner_verification_requests_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumowner_verification_requests_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumowner_verification_requests_statusNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type postsOrderByRelevanceInput = {
    fields: postsOrderByRelevanceFieldEnum | postsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type postsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    restaurant_id?: SortOrder
    rating?: SortOrder
    photo_url?: SortOrder
    caption?: SortOrder
    is_visible?: SortOrder
    language?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type postsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    restaurant_id?: SortOrder
    rating?: SortOrder
  }

  export type postsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    restaurant_id?: SortOrder
    rating?: SortOrder
    photo_url?: SortOrder
    caption?: SortOrder
    is_visible?: SortOrder
    language?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type postsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    restaurant_id?: SortOrder
    rating?: SortOrder
    photo_url?: SortOrder
    caption?: SortOrder
    is_visible?: SortOrder
    language?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type postsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    restaurant_id?: SortOrder
    rating?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Owner_verification_requestsListRelationFilter = {
    every?: owner_verification_requestsWhereInput
    some?: owner_verification_requestsWhereInput
    none?: owner_verification_requestsWhereInput
  }

  export type PostsListRelationFilter = {
    every?: postsWhereInput
    some?: postsWhereInput
    none?: postsWhereInput
  }

  export type owner_verification_requestsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type restaurantsOrderByRelevanceInput = {
    fields: restaurantsOrderByRelevanceFieldEnum | restaurantsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type restaurantsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone_number?: SortOrder
    website_url?: SortOrder
    instagram_url?: SortOrder
    description?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type restaurantsAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type restaurantsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone_number?: SortOrder
    website_url?: SortOrder
    instagram_url?: SortOrder
    description?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type restaurantsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    address?: SortOrder
    city?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    phone_number?: SortOrder
    website_url?: SortOrder
    instagram_url?: SortOrder
    description?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type restaurantsSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Enumusers_user_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_user_type | Enumusers_user_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_user_type[] | null
    notIn?: $Enums.users_user_type[] | null
    not?: NestedEnumusers_user_typeNullableFilter<$PrismaModel> | $Enums.users_user_type | null
  }

  export type Enumusers_tierNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_tier | Enumusers_tierFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_tier[] | null
    notIn?: $Enums.users_tier[] | null
    not?: NestedEnumusers_tierNullableFilter<$PrismaModel> | $Enums.users_tier | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    username?: SortOrder
    user_type?: SortOrder
    tier?: SortOrder
    review_count?: SortOrder
    profile_image_url?: SortOrder
    birthplace_city?: SortOrder
    lived_cities?: SortOrder
    current_city?: SortOrder
    show_location_badge?: SortOrder
    is_verified_owner?: SortOrder
    restaurant_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    review_count?: SortOrder
    restaurant_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    username?: SortOrder
    user_type?: SortOrder
    tier?: SortOrder
    review_count?: SortOrder
    profile_image_url?: SortOrder
    birthplace_city?: SortOrder
    lived_cities?: SortOrder
    current_city?: SortOrder
    show_location_badge?: SortOrder
    is_verified_owner?: SortOrder
    restaurant_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    username?: SortOrder
    user_type?: SortOrder
    tier?: SortOrder
    review_count?: SortOrder
    profile_image_url?: SortOrder
    birthplace_city?: SortOrder
    lived_cities?: SortOrder
    current_city?: SortOrder
    show_location_badge?: SortOrder
    is_verified_owner?: SortOrder
    restaurant_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    review_count?: SortOrder
    restaurant_id?: SortOrder
  }

  export type Enumusers_user_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_user_type | Enumusers_user_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_user_type[] | null
    notIn?: $Enums.users_user_type[] | null
    not?: NestedEnumusers_user_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_user_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_user_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_user_typeNullableFilter<$PrismaModel>
  }

  export type Enumusers_tierNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_tier | Enumusers_tierFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_tier[] | null
    notIn?: $Enums.users_tier[] | null
    not?: NestedEnumusers_tierNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_tier | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_tierNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_tierNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutOwner_verification_requestsInput = {
    create?: XOR<usersCreateWithoutOwner_verification_requestsInput, usersUncheckedCreateWithoutOwner_verification_requestsInput>
    connectOrCreate?: usersCreateOrConnectWithoutOwner_verification_requestsInput
    connect?: usersWhereUniqueInput
  }

  export type restaurantsCreateNestedOneWithoutOwner_verification_requestsInput = {
    create?: XOR<restaurantsCreateWithoutOwner_verification_requestsInput, restaurantsUncheckedCreateWithoutOwner_verification_requestsInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutOwner_verification_requestsInput
    connect?: restaurantsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumowner_verification_requests_statusFieldUpdateOperationsInput = {
    set?: $Enums.owner_verification_requests_status | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneRequiredWithoutOwner_verification_requestsNestedInput = {
    create?: XOR<usersCreateWithoutOwner_verification_requestsInput, usersUncheckedCreateWithoutOwner_verification_requestsInput>
    connectOrCreate?: usersCreateOrConnectWithoutOwner_verification_requestsInput
    upsert?: usersUpsertWithoutOwner_verification_requestsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOwner_verification_requestsInput, usersUpdateWithoutOwner_verification_requestsInput>, usersUncheckedUpdateWithoutOwner_verification_requestsInput>
  }

  export type restaurantsUpdateOneRequiredWithoutOwner_verification_requestsNestedInput = {
    create?: XOR<restaurantsCreateWithoutOwner_verification_requestsInput, restaurantsUncheckedCreateWithoutOwner_verification_requestsInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutOwner_verification_requestsInput
    upsert?: restaurantsUpsertWithoutOwner_verification_requestsInput
    connect?: restaurantsWhereUniqueInput
    update?: XOR<XOR<restaurantsUpdateToOneWithWhereWithoutOwner_verification_requestsInput, restaurantsUpdateWithoutOwner_verification_requestsInput>, restaurantsUncheckedUpdateWithoutOwner_verification_requestsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutPostsInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    connect?: usersWhereUniqueInput
  }

  export type restaurantsCreateNestedOneWithoutPostsInput = {
    create?: XOR<restaurantsCreateWithoutPostsInput, restaurantsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutPostsInput
    connect?: restaurantsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usersUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    upsert?: usersUpsertWithoutPostsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPostsInput, usersUpdateWithoutPostsInput>, usersUncheckedUpdateWithoutPostsInput>
  }

  export type restaurantsUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<restaurantsCreateWithoutPostsInput, restaurantsUncheckedCreateWithoutPostsInput>
    connectOrCreate?: restaurantsCreateOrConnectWithoutPostsInput
    upsert?: restaurantsUpsertWithoutPostsInput
    connect?: restaurantsWhereUniqueInput
    update?: XOR<XOR<restaurantsUpdateToOneWithWhereWithoutPostsInput, restaurantsUpdateWithoutPostsInput>, restaurantsUncheckedUpdateWithoutPostsInput>
  }

  export type owner_verification_requestsCreateNestedManyWithoutRestaurantsInput = {
    create?: XOR<owner_verification_requestsCreateWithoutRestaurantsInput, owner_verification_requestsUncheckedCreateWithoutRestaurantsInput> | owner_verification_requestsCreateWithoutRestaurantsInput[] | owner_verification_requestsUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: owner_verification_requestsCreateOrConnectWithoutRestaurantsInput | owner_verification_requestsCreateOrConnectWithoutRestaurantsInput[]
    createMany?: owner_verification_requestsCreateManyRestaurantsInputEnvelope
    connect?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
  }

  export type postsCreateNestedManyWithoutRestaurantsInput = {
    create?: XOR<postsCreateWithoutRestaurantsInput, postsUncheckedCreateWithoutRestaurantsInput> | postsCreateWithoutRestaurantsInput[] | postsUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutRestaurantsInput | postsCreateOrConnectWithoutRestaurantsInput[]
    createMany?: postsCreateManyRestaurantsInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type owner_verification_requestsUncheckedCreateNestedManyWithoutRestaurantsInput = {
    create?: XOR<owner_verification_requestsCreateWithoutRestaurantsInput, owner_verification_requestsUncheckedCreateWithoutRestaurantsInput> | owner_verification_requestsCreateWithoutRestaurantsInput[] | owner_verification_requestsUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: owner_verification_requestsCreateOrConnectWithoutRestaurantsInput | owner_verification_requestsCreateOrConnectWithoutRestaurantsInput[]
    createMany?: owner_verification_requestsCreateManyRestaurantsInputEnvelope
    connect?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutRestaurantsInput = {
    create?: XOR<postsCreateWithoutRestaurantsInput, postsUncheckedCreateWithoutRestaurantsInput> | postsCreateWithoutRestaurantsInput[] | postsUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutRestaurantsInput | postsCreateOrConnectWithoutRestaurantsInput[]
    createMany?: postsCreateManyRestaurantsInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type owner_verification_requestsUpdateManyWithoutRestaurantsNestedInput = {
    create?: XOR<owner_verification_requestsCreateWithoutRestaurantsInput, owner_verification_requestsUncheckedCreateWithoutRestaurantsInput> | owner_verification_requestsCreateWithoutRestaurantsInput[] | owner_verification_requestsUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: owner_verification_requestsCreateOrConnectWithoutRestaurantsInput | owner_verification_requestsCreateOrConnectWithoutRestaurantsInput[]
    upsert?: owner_verification_requestsUpsertWithWhereUniqueWithoutRestaurantsInput | owner_verification_requestsUpsertWithWhereUniqueWithoutRestaurantsInput[]
    createMany?: owner_verification_requestsCreateManyRestaurantsInputEnvelope
    set?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    disconnect?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    delete?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    connect?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    update?: owner_verification_requestsUpdateWithWhereUniqueWithoutRestaurantsInput | owner_verification_requestsUpdateWithWhereUniqueWithoutRestaurantsInput[]
    updateMany?: owner_verification_requestsUpdateManyWithWhereWithoutRestaurantsInput | owner_verification_requestsUpdateManyWithWhereWithoutRestaurantsInput[]
    deleteMany?: owner_verification_requestsScalarWhereInput | owner_verification_requestsScalarWhereInput[]
  }

  export type postsUpdateManyWithoutRestaurantsNestedInput = {
    create?: XOR<postsCreateWithoutRestaurantsInput, postsUncheckedCreateWithoutRestaurantsInput> | postsCreateWithoutRestaurantsInput[] | postsUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutRestaurantsInput | postsCreateOrConnectWithoutRestaurantsInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutRestaurantsInput | postsUpsertWithWhereUniqueWithoutRestaurantsInput[]
    createMany?: postsCreateManyRestaurantsInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutRestaurantsInput | postsUpdateWithWhereUniqueWithoutRestaurantsInput[]
    updateMany?: postsUpdateManyWithWhereWithoutRestaurantsInput | postsUpdateManyWithWhereWithoutRestaurantsInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type owner_verification_requestsUncheckedUpdateManyWithoutRestaurantsNestedInput = {
    create?: XOR<owner_verification_requestsCreateWithoutRestaurantsInput, owner_verification_requestsUncheckedCreateWithoutRestaurantsInput> | owner_verification_requestsCreateWithoutRestaurantsInput[] | owner_verification_requestsUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: owner_verification_requestsCreateOrConnectWithoutRestaurantsInput | owner_verification_requestsCreateOrConnectWithoutRestaurantsInput[]
    upsert?: owner_verification_requestsUpsertWithWhereUniqueWithoutRestaurantsInput | owner_verification_requestsUpsertWithWhereUniqueWithoutRestaurantsInput[]
    createMany?: owner_verification_requestsCreateManyRestaurantsInputEnvelope
    set?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    disconnect?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    delete?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    connect?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    update?: owner_verification_requestsUpdateWithWhereUniqueWithoutRestaurantsInput | owner_verification_requestsUpdateWithWhereUniqueWithoutRestaurantsInput[]
    updateMany?: owner_verification_requestsUpdateManyWithWhereWithoutRestaurantsInput | owner_verification_requestsUpdateManyWithWhereWithoutRestaurantsInput[]
    deleteMany?: owner_verification_requestsScalarWhereInput | owner_verification_requestsScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutRestaurantsNestedInput = {
    create?: XOR<postsCreateWithoutRestaurantsInput, postsUncheckedCreateWithoutRestaurantsInput> | postsCreateWithoutRestaurantsInput[] | postsUncheckedCreateWithoutRestaurantsInput[]
    connectOrCreate?: postsCreateOrConnectWithoutRestaurantsInput | postsCreateOrConnectWithoutRestaurantsInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutRestaurantsInput | postsUpsertWithWhereUniqueWithoutRestaurantsInput[]
    createMany?: postsCreateManyRestaurantsInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutRestaurantsInput | postsUpdateWithWhereUniqueWithoutRestaurantsInput[]
    updateMany?: postsUpdateManyWithWhereWithoutRestaurantsInput | postsUpdateManyWithWhereWithoutRestaurantsInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type owner_verification_requestsCreateNestedManyWithoutUsersInput = {
    create?: XOR<owner_verification_requestsCreateWithoutUsersInput, owner_verification_requestsUncheckedCreateWithoutUsersInput> | owner_verification_requestsCreateWithoutUsersInput[] | owner_verification_requestsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: owner_verification_requestsCreateOrConnectWithoutUsersInput | owner_verification_requestsCreateOrConnectWithoutUsersInput[]
    createMany?: owner_verification_requestsCreateManyUsersInputEnvelope
    connect?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
  }

  export type postsCreateNestedManyWithoutUsersInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type owner_verification_requestsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<owner_verification_requestsCreateWithoutUsersInput, owner_verification_requestsUncheckedCreateWithoutUsersInput> | owner_verification_requestsCreateWithoutUsersInput[] | owner_verification_requestsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: owner_verification_requestsCreateOrConnectWithoutUsersInput | owner_verification_requestsCreateOrConnectWithoutUsersInput[]
    createMany?: owner_verification_requestsCreateManyUsersInputEnvelope
    connect?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type NullableEnumusers_user_typeFieldUpdateOperationsInput = {
    set?: $Enums.users_user_type | null
  }

  export type NullableEnumusers_tierFieldUpdateOperationsInput = {
    set?: $Enums.users_tier | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type owner_verification_requestsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<owner_verification_requestsCreateWithoutUsersInput, owner_verification_requestsUncheckedCreateWithoutUsersInput> | owner_verification_requestsCreateWithoutUsersInput[] | owner_verification_requestsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: owner_verification_requestsCreateOrConnectWithoutUsersInput | owner_verification_requestsCreateOrConnectWithoutUsersInput[]
    upsert?: owner_verification_requestsUpsertWithWhereUniqueWithoutUsersInput | owner_verification_requestsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: owner_verification_requestsCreateManyUsersInputEnvelope
    set?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    disconnect?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    delete?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    connect?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    update?: owner_verification_requestsUpdateWithWhereUniqueWithoutUsersInput | owner_verification_requestsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: owner_verification_requestsUpdateManyWithWhereWithoutUsersInput | owner_verification_requestsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: owner_verification_requestsScalarWhereInput | owner_verification_requestsScalarWhereInput[]
  }

  export type postsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutUsersInput | postsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutUsersInput | postsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: postsUpdateManyWithWhereWithoutUsersInput | postsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type owner_verification_requestsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<owner_verification_requestsCreateWithoutUsersInput, owner_verification_requestsUncheckedCreateWithoutUsersInput> | owner_verification_requestsCreateWithoutUsersInput[] | owner_verification_requestsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: owner_verification_requestsCreateOrConnectWithoutUsersInput | owner_verification_requestsCreateOrConnectWithoutUsersInput[]
    upsert?: owner_verification_requestsUpsertWithWhereUniqueWithoutUsersInput | owner_verification_requestsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: owner_verification_requestsCreateManyUsersInputEnvelope
    set?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    disconnect?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    delete?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    connect?: owner_verification_requestsWhereUniqueInput | owner_verification_requestsWhereUniqueInput[]
    update?: owner_verification_requestsUpdateWithWhereUniqueWithoutUsersInput | owner_verification_requestsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: owner_verification_requestsUpdateManyWithWhereWithoutUsersInput | owner_verification_requestsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: owner_verification_requestsScalarWhereInput | owner_verification_requestsScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput> | postsCreateWithoutUsersInput[] | postsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: postsCreateOrConnectWithoutUsersInput | postsCreateOrConnectWithoutUsersInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutUsersInput | postsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: postsCreateManyUsersInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutUsersInput | postsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: postsUpdateManyWithWhereWithoutUsersInput | postsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumowner_verification_requests_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.owner_verification_requests_status | Enumowner_verification_requests_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.owner_verification_requests_status[] | null
    notIn?: $Enums.owner_verification_requests_status[] | null
    not?: NestedEnumowner_verification_requests_statusNullableFilter<$PrismaModel> | $Enums.owner_verification_requests_status | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumowner_verification_requests_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.owner_verification_requests_status | Enumowner_verification_requests_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.owner_verification_requests_status[] | null
    notIn?: $Enums.owner_verification_requests_status[] | null
    not?: NestedEnumowner_verification_requests_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.owner_verification_requests_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumowner_verification_requests_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumowner_verification_requests_statusNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumusers_user_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_user_type | Enumusers_user_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_user_type[] | null
    notIn?: $Enums.users_user_type[] | null
    not?: NestedEnumusers_user_typeNullableFilter<$PrismaModel> | $Enums.users_user_type | null
  }

  export type NestedEnumusers_tierNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.users_tier | Enumusers_tierFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_tier[] | null
    notIn?: $Enums.users_tier[] | null
    not?: NestedEnumusers_tierNullableFilter<$PrismaModel> | $Enums.users_tier | null
  }

  export type NestedEnumusers_user_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_user_type | Enumusers_user_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_user_type[] | null
    notIn?: $Enums.users_user_type[] | null
    not?: NestedEnumusers_user_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_user_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_user_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_user_typeNullableFilter<$PrismaModel>
  }

  export type NestedEnumusers_tierNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.users_tier | Enumusers_tierFieldRefInput<$PrismaModel> | null
    in?: $Enums.users_tier[] | null
    notIn?: $Enums.users_tier[] | null
    not?: NestedEnumusers_tierNullableWithAggregatesFilter<$PrismaModel> | $Enums.users_tier | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumusers_tierNullableFilter<$PrismaModel>
    _max?: NestedEnumusers_tierNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type usersCreateWithoutOwner_verification_requestsInput = {
    email: string
    password_hash: string
    username: string
    user_type?: $Enums.users_user_type | null
    tier?: $Enums.users_tier | null
    review_count?: number | null
    profile_image_url?: string | null
    birthplace_city?: string | null
    lived_cities?: string | null
    current_city?: string | null
    show_location_badge?: boolean | null
    is_verified_owner?: boolean | null
    restaurant_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    posts?: postsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOwner_verification_requestsInput = {
    id?: number
    email: string
    password_hash: string
    username: string
    user_type?: $Enums.users_user_type | null
    tier?: $Enums.users_tier | null
    review_count?: number | null
    profile_image_url?: string | null
    birthplace_city?: string | null
    lived_cities?: string | null
    current_city?: string | null
    show_location_badge?: boolean | null
    is_verified_owner?: boolean | null
    restaurant_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    posts?: postsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOwner_verification_requestsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOwner_verification_requestsInput, usersUncheckedCreateWithoutOwner_verification_requestsInput>
  }

  export type restaurantsCreateWithoutOwner_verification_requestsInput = {
    name: string
    category?: string | null
    address?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone_number?: string | null
    website_url?: string | null
    instagram_url?: string | null
    description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    posts?: postsCreateNestedManyWithoutRestaurantsInput
  }

  export type restaurantsUncheckedCreateWithoutOwner_verification_requestsInput = {
    id?: number
    name: string
    category?: string | null
    address?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone_number?: string | null
    website_url?: string | null
    instagram_url?: string | null
    description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    posts?: postsUncheckedCreateNestedManyWithoutRestaurantsInput
  }

  export type restaurantsCreateOrConnectWithoutOwner_verification_requestsInput = {
    where: restaurantsWhereUniqueInput
    create: XOR<restaurantsCreateWithoutOwner_verification_requestsInput, restaurantsUncheckedCreateWithoutOwner_verification_requestsInput>
  }

  export type usersUpsertWithoutOwner_verification_requestsInput = {
    update: XOR<usersUpdateWithoutOwner_verification_requestsInput, usersUncheckedUpdateWithoutOwner_verification_requestsInput>
    create: XOR<usersCreateWithoutOwner_verification_requestsInput, usersUncheckedCreateWithoutOwner_verification_requestsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOwner_verification_requestsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOwner_verification_requestsInput, usersUncheckedUpdateWithoutOwner_verification_requestsInput>
  }

  export type usersUpdateWithoutOwner_verification_requestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    user_type?: NullableEnumusers_user_typeFieldUpdateOperationsInput | $Enums.users_user_type | null
    tier?: NullableEnumusers_tierFieldUpdateOperationsInput | $Enums.users_tier | null
    review_count?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birthplace_city?: NullableStringFieldUpdateOperationsInput | string | null
    lived_cities?: NullableStringFieldUpdateOperationsInput | string | null
    current_city?: NullableStringFieldUpdateOperationsInput | string | null
    show_location_badge?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_verified_owner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restaurant_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOwner_verification_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    user_type?: NullableEnumusers_user_typeFieldUpdateOperationsInput | $Enums.users_user_type | null
    tier?: NullableEnumusers_tierFieldUpdateOperationsInput | $Enums.users_tier | null
    review_count?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birthplace_city?: NullableStringFieldUpdateOperationsInput | string | null
    lived_cities?: NullableStringFieldUpdateOperationsInput | string | null
    current_city?: NullableStringFieldUpdateOperationsInput | string | null
    show_location_badge?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_verified_owner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restaurant_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type restaurantsUpsertWithoutOwner_verification_requestsInput = {
    update: XOR<restaurantsUpdateWithoutOwner_verification_requestsInput, restaurantsUncheckedUpdateWithoutOwner_verification_requestsInput>
    create: XOR<restaurantsCreateWithoutOwner_verification_requestsInput, restaurantsUncheckedCreateWithoutOwner_verification_requestsInput>
    where?: restaurantsWhereInput
  }

  export type restaurantsUpdateToOneWithWhereWithoutOwner_verification_requestsInput = {
    where?: restaurantsWhereInput
    data: XOR<restaurantsUpdateWithoutOwner_verification_requestsInput, restaurantsUncheckedUpdateWithoutOwner_verification_requestsInput>
  }

  export type restaurantsUpdateWithoutOwner_verification_requestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUpdateManyWithoutRestaurantsNestedInput
  }

  export type restaurantsUncheckedUpdateWithoutOwner_verification_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUncheckedUpdateManyWithoutRestaurantsNestedInput
  }

  export type usersCreateWithoutPostsInput = {
    email: string
    password_hash: string
    username: string
    user_type?: $Enums.users_user_type | null
    tier?: $Enums.users_tier | null
    review_count?: number | null
    profile_image_url?: string | null
    birthplace_city?: string | null
    lived_cities?: string | null
    current_city?: string | null
    show_location_badge?: boolean | null
    is_verified_owner?: boolean | null
    restaurant_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    owner_verification_requests?: owner_verification_requestsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    password_hash: string
    username: string
    user_type?: $Enums.users_user_type | null
    tier?: $Enums.users_tier | null
    review_count?: number | null
    profile_image_url?: string | null
    birthplace_city?: string | null
    lived_cities?: string | null
    current_city?: string | null
    show_location_badge?: boolean | null
    is_verified_owner?: boolean | null
    restaurant_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    owner_verification_requests?: owner_verification_requestsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPostsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
  }

  export type restaurantsCreateWithoutPostsInput = {
    name: string
    category?: string | null
    address?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone_number?: string | null
    website_url?: string | null
    instagram_url?: string | null
    description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    owner_verification_requests?: owner_verification_requestsCreateNestedManyWithoutRestaurantsInput
  }

  export type restaurantsUncheckedCreateWithoutPostsInput = {
    id?: number
    name: string
    category?: string | null
    address?: string | null
    city?: string | null
    country?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    phone_number?: string | null
    website_url?: string | null
    instagram_url?: string | null
    description?: string | null
    is_verified?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    owner_verification_requests?: owner_verification_requestsUncheckedCreateNestedManyWithoutRestaurantsInput
  }

  export type restaurantsCreateOrConnectWithoutPostsInput = {
    where: restaurantsWhereUniqueInput
    create: XOR<restaurantsCreateWithoutPostsInput, restaurantsUncheckedCreateWithoutPostsInput>
  }

  export type usersUpsertWithoutPostsInput = {
    update: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPostsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
  }

  export type usersUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    user_type?: NullableEnumusers_user_typeFieldUpdateOperationsInput | $Enums.users_user_type | null
    tier?: NullableEnumusers_tierFieldUpdateOperationsInput | $Enums.users_tier | null
    review_count?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birthplace_city?: NullableStringFieldUpdateOperationsInput | string | null
    lived_cities?: NullableStringFieldUpdateOperationsInput | string | null
    current_city?: NullableStringFieldUpdateOperationsInput | string | null
    show_location_badge?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_verified_owner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restaurant_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner_verification_requests?: owner_verification_requestsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    user_type?: NullableEnumusers_user_typeFieldUpdateOperationsInput | $Enums.users_user_type | null
    tier?: NullableEnumusers_tierFieldUpdateOperationsInput | $Enums.users_tier | null
    review_count?: NullableIntFieldUpdateOperationsInput | number | null
    profile_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    birthplace_city?: NullableStringFieldUpdateOperationsInput | string | null
    lived_cities?: NullableStringFieldUpdateOperationsInput | string | null
    current_city?: NullableStringFieldUpdateOperationsInput | string | null
    show_location_badge?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_verified_owner?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restaurant_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner_verification_requests?: owner_verification_requestsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type restaurantsUpsertWithoutPostsInput = {
    update: XOR<restaurantsUpdateWithoutPostsInput, restaurantsUncheckedUpdateWithoutPostsInput>
    create: XOR<restaurantsCreateWithoutPostsInput, restaurantsUncheckedCreateWithoutPostsInput>
    where?: restaurantsWhereInput
  }

  export type restaurantsUpdateToOneWithWhereWithoutPostsInput = {
    where?: restaurantsWhereInput
    data: XOR<restaurantsUpdateWithoutPostsInput, restaurantsUncheckedUpdateWithoutPostsInput>
  }

  export type restaurantsUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner_verification_requests?: owner_verification_requestsUpdateManyWithoutRestaurantsNestedInput
  }

  export type restaurantsUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    website_url?: NullableStringFieldUpdateOperationsInput | string | null
    instagram_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner_verification_requests?: owner_verification_requestsUncheckedUpdateManyWithoutRestaurantsNestedInput
  }

  export type owner_verification_requestsCreateWithoutRestaurantsInput = {
    business_license_url?: string | null
    message?: string | null
    status?: $Enums.owner_verification_requests_status | null
    reviewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutOwner_verification_requestsInput
  }

  export type owner_verification_requestsUncheckedCreateWithoutRestaurantsInput = {
    id?: number
    user_id: number
    business_license_url?: string | null
    message?: string | null
    status?: $Enums.owner_verification_requests_status | null
    reviewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type owner_verification_requestsCreateOrConnectWithoutRestaurantsInput = {
    where: owner_verification_requestsWhereUniqueInput
    create: XOR<owner_verification_requestsCreateWithoutRestaurantsInput, owner_verification_requestsUncheckedCreateWithoutRestaurantsInput>
  }

  export type owner_verification_requestsCreateManyRestaurantsInputEnvelope = {
    data: owner_verification_requestsCreateManyRestaurantsInput | owner_verification_requestsCreateManyRestaurantsInput[]
    skipDuplicates?: boolean
  }

  export type postsCreateWithoutRestaurantsInput = {
    rating: Decimal | DecimalJsLike | number | string
    photo_url: string
    caption?: string | null
    is_visible?: boolean | null
    language?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users: usersCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutRestaurantsInput = {
    id?: number
    user_id: number
    rating: Decimal | DecimalJsLike | number | string
    photo_url: string
    caption?: string | null
    is_visible?: boolean | null
    language?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type postsCreateOrConnectWithoutRestaurantsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutRestaurantsInput, postsUncheckedCreateWithoutRestaurantsInput>
  }

  export type postsCreateManyRestaurantsInputEnvelope = {
    data: postsCreateManyRestaurantsInput | postsCreateManyRestaurantsInput[]
    skipDuplicates?: boolean
  }

  export type owner_verification_requestsUpsertWithWhereUniqueWithoutRestaurantsInput = {
    where: owner_verification_requestsWhereUniqueInput
    update: XOR<owner_verification_requestsUpdateWithoutRestaurantsInput, owner_verification_requestsUncheckedUpdateWithoutRestaurantsInput>
    create: XOR<owner_verification_requestsCreateWithoutRestaurantsInput, owner_verification_requestsUncheckedCreateWithoutRestaurantsInput>
  }

  export type owner_verification_requestsUpdateWithWhereUniqueWithoutRestaurantsInput = {
    where: owner_verification_requestsWhereUniqueInput
    data: XOR<owner_verification_requestsUpdateWithoutRestaurantsInput, owner_verification_requestsUncheckedUpdateWithoutRestaurantsInput>
  }

  export type owner_verification_requestsUpdateManyWithWhereWithoutRestaurantsInput = {
    where: owner_verification_requestsScalarWhereInput
    data: XOR<owner_verification_requestsUpdateManyMutationInput, owner_verification_requestsUncheckedUpdateManyWithoutRestaurantsInput>
  }

  export type owner_verification_requestsScalarWhereInput = {
    AND?: owner_verification_requestsScalarWhereInput | owner_verification_requestsScalarWhereInput[]
    OR?: owner_verification_requestsScalarWhereInput[]
    NOT?: owner_verification_requestsScalarWhereInput | owner_verification_requestsScalarWhereInput[]
    id?: IntFilter<"owner_verification_requests"> | number
    user_id?: IntFilter<"owner_verification_requests"> | number
    restaurant_id?: IntFilter<"owner_verification_requests"> | number
    business_license_url?: StringNullableFilter<"owner_verification_requests"> | string | null
    message?: StringNullableFilter<"owner_verification_requests"> | string | null
    status?: Enumowner_verification_requests_statusNullableFilter<"owner_verification_requests"> | $Enums.owner_verification_requests_status | null
    reviewed_at?: DateTimeNullableFilter<"owner_verification_requests"> | Date | string | null
    created_at?: DateTimeNullableFilter<"owner_verification_requests"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"owner_verification_requests"> | Date | string | null
  }

  export type postsUpsertWithWhereUniqueWithoutRestaurantsInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutRestaurantsInput, postsUncheckedUpdateWithoutRestaurantsInput>
    create: XOR<postsCreateWithoutRestaurantsInput, postsUncheckedCreateWithoutRestaurantsInput>
  }

  export type postsUpdateWithWhereUniqueWithoutRestaurantsInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutRestaurantsInput, postsUncheckedUpdateWithoutRestaurantsInput>
  }

  export type postsUpdateManyWithWhereWithoutRestaurantsInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutRestaurantsInput>
  }

  export type postsScalarWhereInput = {
    AND?: postsScalarWhereInput | postsScalarWhereInput[]
    OR?: postsScalarWhereInput[]
    NOT?: postsScalarWhereInput | postsScalarWhereInput[]
    id?: IntFilter<"posts"> | number
    user_id?: IntFilter<"posts"> | number
    restaurant_id?: IntFilter<"posts"> | number
    rating?: DecimalFilter<"posts"> | Decimal | DecimalJsLike | number | string
    photo_url?: StringFilter<"posts"> | string
    caption?: StringNullableFilter<"posts"> | string | null
    is_visible?: BoolNullableFilter<"posts"> | boolean | null
    language?: StringNullableFilter<"posts"> | string | null
    created_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"posts"> | Date | string | null
  }

  export type owner_verification_requestsCreateWithoutUsersInput = {
    business_license_url?: string | null
    message?: string | null
    status?: $Enums.owner_verification_requests_status | null
    reviewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    restaurants: restaurantsCreateNestedOneWithoutOwner_verification_requestsInput
  }

  export type owner_verification_requestsUncheckedCreateWithoutUsersInput = {
    id?: number
    restaurant_id: number
    business_license_url?: string | null
    message?: string | null
    status?: $Enums.owner_verification_requests_status | null
    reviewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type owner_verification_requestsCreateOrConnectWithoutUsersInput = {
    where: owner_verification_requestsWhereUniqueInput
    create: XOR<owner_verification_requestsCreateWithoutUsersInput, owner_verification_requestsUncheckedCreateWithoutUsersInput>
  }

  export type owner_verification_requestsCreateManyUsersInputEnvelope = {
    data: owner_verification_requestsCreateManyUsersInput | owner_verification_requestsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type postsCreateWithoutUsersInput = {
    rating: Decimal | DecimalJsLike | number | string
    photo_url: string
    caption?: string | null
    is_visible?: boolean | null
    language?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    restaurants: restaurantsCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutUsersInput = {
    id?: number
    restaurant_id: number
    rating: Decimal | DecimalJsLike | number | string
    photo_url: string
    caption?: string | null
    is_visible?: boolean | null
    language?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type postsCreateOrConnectWithoutUsersInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput>
  }

  export type postsCreateManyUsersInputEnvelope = {
    data: postsCreateManyUsersInput | postsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type owner_verification_requestsUpsertWithWhereUniqueWithoutUsersInput = {
    where: owner_verification_requestsWhereUniqueInput
    update: XOR<owner_verification_requestsUpdateWithoutUsersInput, owner_verification_requestsUncheckedUpdateWithoutUsersInput>
    create: XOR<owner_verification_requestsCreateWithoutUsersInput, owner_verification_requestsUncheckedCreateWithoutUsersInput>
  }

  export type owner_verification_requestsUpdateWithWhereUniqueWithoutUsersInput = {
    where: owner_verification_requestsWhereUniqueInput
    data: XOR<owner_verification_requestsUpdateWithoutUsersInput, owner_verification_requestsUncheckedUpdateWithoutUsersInput>
  }

  export type owner_verification_requestsUpdateManyWithWhereWithoutUsersInput = {
    where: owner_verification_requestsScalarWhereInput
    data: XOR<owner_verification_requestsUpdateManyMutationInput, owner_verification_requestsUncheckedUpdateManyWithoutUsersInput>
  }

  export type postsUpsertWithWhereUniqueWithoutUsersInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutUsersInput, postsUncheckedUpdateWithoutUsersInput>
    create: XOR<postsCreateWithoutUsersInput, postsUncheckedCreateWithoutUsersInput>
  }

  export type postsUpdateWithWhereUniqueWithoutUsersInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutUsersInput, postsUncheckedUpdateWithoutUsersInput>
  }

  export type postsUpdateManyWithWhereWithoutUsersInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutUsersInput>
  }

  export type owner_verification_requestsCreateManyRestaurantsInput = {
    id?: number
    user_id: number
    business_license_url?: string | null
    message?: string | null
    status?: $Enums.owner_verification_requests_status | null
    reviewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type postsCreateManyRestaurantsInput = {
    id?: number
    user_id: number
    rating: Decimal | DecimalJsLike | number | string
    photo_url: string
    caption?: string | null
    is_visible?: boolean | null
    language?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type owner_verification_requestsUpdateWithoutRestaurantsInput = {
    business_license_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumowner_verification_requests_statusFieldUpdateOperationsInput | $Enums.owner_verification_requests_status | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutOwner_verification_requestsNestedInput
  }

  export type owner_verification_requestsUncheckedUpdateWithoutRestaurantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    business_license_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumowner_verification_requests_statusFieldUpdateOperationsInput | $Enums.owner_verification_requests_status | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type owner_verification_requestsUncheckedUpdateManyWithoutRestaurantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    business_license_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumowner_verification_requests_statusFieldUpdateOperationsInput | $Enums.owner_verification_requests_status | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUpdateWithoutRestaurantsInput = {
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutRestaurantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUncheckedUpdateManyWithoutRestaurantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type owner_verification_requestsCreateManyUsersInput = {
    id?: number
    restaurant_id: number
    business_license_url?: string | null
    message?: string | null
    status?: $Enums.owner_verification_requests_status | null
    reviewed_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type postsCreateManyUsersInput = {
    id?: number
    restaurant_id: number
    rating: Decimal | DecimalJsLike | number | string
    photo_url: string
    caption?: string | null
    is_visible?: boolean | null
    language?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type owner_verification_requestsUpdateWithoutUsersInput = {
    business_license_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumowner_verification_requests_statusFieldUpdateOperationsInput | $Enums.owner_verification_requests_status | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restaurants?: restaurantsUpdateOneRequiredWithoutOwner_verification_requestsNestedInput
  }

  export type owner_verification_requestsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    restaurant_id?: IntFieldUpdateOperationsInput | number
    business_license_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumowner_verification_requests_statusFieldUpdateOperationsInput | $Enums.owner_verification_requests_status | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type owner_verification_requestsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    restaurant_id?: IntFieldUpdateOperationsInput | number
    business_license_url?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumowner_verification_requests_statusFieldUpdateOperationsInput | $Enums.owner_verification_requests_status | null
    reviewed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUpdateWithoutUsersInput = {
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    restaurants?: restaurantsUpdateOneRequiredWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    restaurant_id?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type postsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    restaurant_id?: IntFieldUpdateOperationsInput | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    photo_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    is_visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}