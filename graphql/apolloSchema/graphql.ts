/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  content?: Maybe<Comment_Content_Document>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  model?: Maybe<Model>;
};

export type CommentCreateInput = {
  author?: InputMaybe<UserRelateToOneForCreateInput>;
  content?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  model?: InputMaybe<ModelRelateToOneForCreateInput>;
};

export type CommentManyRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type CommentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  create?: InputMaybe<Array<CommentCreateInput>>;
};

export type CommentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  create?: InputMaybe<Array<CommentCreateInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
};

export type CommentUpdateArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateInput = {
  author?: InputMaybe<UserRelateToOneForUpdateInput>;
  content?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  model?: InputMaybe<ModelRelateToOneForUpdateInput>;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  author?: InputMaybe<UserWhereInput>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  model?: InputMaybe<ModelWhereInput>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Comment_Content_Document = {
  __typename?: 'Comment_content_Document';
  document: Scalars['JSON'];
};


export type Comment_Content_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type FileFieldInput = {
  upload: Scalars['Upload'];
};

export type FileFieldOutput = {
  __typename?: 'FileFieldOutput';
  filename: Scalars['String'];
  filesize: Scalars['Int'];
  url: Scalars['String'];
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  upload: Scalars['Upload'];
};

export type ImageFieldOutput = {
  __typename?: 'ImageFieldOutput';
  extension: ImageExtension;
  filesize: Scalars['Int'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  isSingleton: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Model = {
  __typename?: 'Model';
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Model_Description_Document>;
  doUserLikesIt?: Maybe<Scalars['Boolean']>;
  files?: Maybe<Array<ModelFile>>;
  filesCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  images?: Maybe<Array<ModelImage>>;
  imagesCount?: Maybe<Scalars['Int']>;
  likedBy?: Maybe<Array<User>>;
  likedByCount?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  recommendedInfill?: Maybe<Scalars['Int']>;
  recommendedMaterial?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  supports?: Maybe<Scalars['String']>;
};


export type ModelCommentsArgs = {
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CommentWhereInput;
};


export type ModelCommentsCountArgs = {
  where?: CommentWhereInput;
};


export type ModelFilesArgs = {
  orderBy?: Array<ModelFileOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ModelFileWhereInput;
};


export type ModelFilesCountArgs = {
  where?: ModelFileWhereInput;
};


export type ModelImagesArgs = {
  orderBy?: Array<ModelImageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ModelImageWhereInput;
};


export type ModelImagesCountArgs = {
  where?: ModelImageWhereInput;
};


export type ModelLikedByArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type ModelLikedByCountArgs = {
  where?: UserWhereInput;
};

export type ModelCreateInput = {
  comments?: InputMaybe<CommentRelateToManyForCreateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  description?: InputMaybe<Scalars['JSON']>;
  files?: InputMaybe<ModelFileRelateToManyForCreateInput>;
  images?: InputMaybe<ModelImageRelateToManyForCreateInput>;
  likedBy?: InputMaybe<UserRelateToManyForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  recommendedInfill?: InputMaybe<Scalars['Int']>;
  recommendedMaterial?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  supports?: InputMaybe<Scalars['String']>;
};

export type ModelFile = {
  __typename?: 'ModelFile';
  createdBy?: Maybe<User>;
  file?: Maybe<FileFieldOutput>;
  id: Scalars['ID'];
  model?: Maybe<Model>;
};

export type ModelFileCreateInput = {
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  file?: InputMaybe<FileFieldInput>;
  model?: InputMaybe<ModelRelateToOneForCreateInput>;
};

export type ModelFileManyRelationFilter = {
  every?: InputMaybe<ModelFileWhereInput>;
  none?: InputMaybe<ModelFileWhereInput>;
  some?: InputMaybe<ModelFileWhereInput>;
};

export type ModelFileOrderByInput = {
  id?: InputMaybe<OrderDirection>;
};

export type ModelFileRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ModelFileWhereUniqueInput>>;
  create?: InputMaybe<Array<ModelFileCreateInput>>;
};

export type ModelFileRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ModelFileWhereUniqueInput>>;
  create?: InputMaybe<Array<ModelFileCreateInput>>;
  disconnect?: InputMaybe<Array<ModelFileWhereUniqueInput>>;
  set?: InputMaybe<Array<ModelFileWhereUniqueInput>>;
};

export type ModelFileUpdateArgs = {
  data: ModelFileUpdateInput;
  where: ModelFileWhereUniqueInput;
};

export type ModelFileUpdateInput = {
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  file?: InputMaybe<FileFieldInput>;
  model?: InputMaybe<ModelRelateToOneForUpdateInput>;
};

export type ModelFileWhereInput = {
  AND?: InputMaybe<Array<ModelFileWhereInput>>;
  NOT?: InputMaybe<Array<ModelFileWhereInput>>;
  OR?: InputMaybe<Array<ModelFileWhereInput>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  model?: InputMaybe<ModelWhereInput>;
};

export type ModelFileWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ModelImage = {
  __typename?: 'ModelImage';
  createdBy?: Maybe<User>;
  id: Scalars['ID'];
  image?: Maybe<ImageFieldOutput>;
  model?: Maybe<Model>;
};

export type ModelImageCreateInput = {
  createdBy?: InputMaybe<UserRelateToOneForCreateInput>;
  image?: InputMaybe<ImageFieldInput>;
  model?: InputMaybe<ModelRelateToOneForCreateInput>;
};

export type ModelImageManyRelationFilter = {
  every?: InputMaybe<ModelImageWhereInput>;
  none?: InputMaybe<ModelImageWhereInput>;
  some?: InputMaybe<ModelImageWhereInput>;
};

export type ModelImageOrderByInput = {
  id?: InputMaybe<OrderDirection>;
};

export type ModelImageRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ModelImageWhereUniqueInput>>;
  create?: InputMaybe<Array<ModelImageCreateInput>>;
};

export type ModelImageRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ModelImageWhereUniqueInput>>;
  create?: InputMaybe<Array<ModelImageCreateInput>>;
  disconnect?: InputMaybe<Array<ModelImageWhereUniqueInput>>;
  set?: InputMaybe<Array<ModelImageWhereUniqueInput>>;
};

export type ModelImageUpdateArgs = {
  data: ModelImageUpdateInput;
  where: ModelImageWhereUniqueInput;
};

export type ModelImageUpdateInput = {
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  image?: InputMaybe<ImageFieldInput>;
  model?: InputMaybe<ModelRelateToOneForUpdateInput>;
};

export type ModelImageWhereInput = {
  AND?: InputMaybe<Array<ModelImageWhereInput>>;
  NOT?: InputMaybe<Array<ModelImageWhereInput>>;
  OR?: InputMaybe<Array<ModelImageWhereInput>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<IdFilter>;
  model?: InputMaybe<ModelWhereInput>;
};

export type ModelImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ModelManyRelationFilter = {
  every?: InputMaybe<ModelWhereInput>;
  none?: InputMaybe<ModelWhereInput>;
  some?: InputMaybe<ModelWhereInput>;
};

export type ModelOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  recommendedInfill?: InputMaybe<OrderDirection>;
  recommendedMaterial?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  supports?: InputMaybe<OrderDirection>;
};

export type ModelRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<ModelWhereUniqueInput>>;
  create?: InputMaybe<Array<ModelCreateInput>>;
};

export type ModelRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<ModelWhereUniqueInput>>;
  create?: InputMaybe<Array<ModelCreateInput>>;
  disconnect?: InputMaybe<Array<ModelWhereUniqueInput>>;
  set?: InputMaybe<Array<ModelWhereUniqueInput>>;
};

export type ModelRelateToOneForCreateInput = {
  connect?: InputMaybe<ModelWhereUniqueInput>;
  create?: InputMaybe<ModelCreateInput>;
};

export type ModelRelateToOneForUpdateInput = {
  connect?: InputMaybe<ModelWhereUniqueInput>;
  create?: InputMaybe<ModelCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type ModelUpdateArgs = {
  data: ModelUpdateInput;
  where: ModelWhereUniqueInput;
};

export type ModelUpdateInput = {
  comments?: InputMaybe<CommentRelateToManyForUpdateInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdBy?: InputMaybe<UserRelateToOneForUpdateInput>;
  description?: InputMaybe<Scalars['JSON']>;
  files?: InputMaybe<ModelFileRelateToManyForUpdateInput>;
  images?: InputMaybe<ModelImageRelateToManyForUpdateInput>;
  likedBy?: InputMaybe<UserRelateToManyForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  recommendedInfill?: InputMaybe<Scalars['Int']>;
  recommendedMaterial?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  supports?: InputMaybe<Scalars['String']>;
};

export type ModelWhereInput = {
  AND?: InputMaybe<Array<ModelWhereInput>>;
  NOT?: InputMaybe<Array<ModelWhereInput>>;
  OR?: InputMaybe<Array<ModelWhereInput>>;
  comments?: InputMaybe<CommentManyRelationFilter>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  createdBy?: InputMaybe<UserWhereInput>;
  files?: InputMaybe<ModelFileManyRelationFilter>;
  id?: InputMaybe<IdFilter>;
  images?: InputMaybe<ModelImageManyRelationFilter>;
  likedBy?: InputMaybe<UserManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  recommendedInfill?: InputMaybe<IntNullableFilter>;
  recommendedMaterial?: InputMaybe<StringNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  supports?: InputMaybe<StringNullableFilter>;
};

export type ModelWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Model_Description_Document = {
  __typename?: 'Model_description_Document';
  document: Scalars['JSON'];
};


export type Model_Description_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createComment?: Maybe<Comment>;
  createComments?: Maybe<Array<Maybe<Comment>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createModel?: Maybe<Model>;
  createModelFile?: Maybe<ModelFile>;
  createModelFiles?: Maybe<Array<Maybe<ModelFile>>>;
  createModelImage?: Maybe<ModelImage>;
  createModelImages?: Maybe<Array<Maybe<ModelImage>>>;
  createModels?: Maybe<Array<Maybe<Model>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteComment?: Maybe<Comment>;
  deleteComments?: Maybe<Array<Maybe<Comment>>>;
  deleteModel?: Maybe<Model>;
  deleteModelFile?: Maybe<ModelFile>;
  deleteModelFiles?: Maybe<Array<Maybe<ModelFile>>>;
  deleteModelImage?: Maybe<ModelImage>;
  deleteModelImages?: Maybe<Array<Maybe<ModelImage>>>;
  deleteModels?: Maybe<Array<Maybe<Model>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  updateComment?: Maybe<Comment>;
  updateComments?: Maybe<Array<Maybe<Comment>>>;
  updateModel?: Maybe<Model>;
  updateModelFile?: Maybe<ModelFile>;
  updateModelFiles?: Maybe<Array<Maybe<ModelFile>>>;
  updateModelImage?: Maybe<ModelImage>;
  updateModelImages?: Maybe<Array<Maybe<ModelImage>>>;
  updateModels?: Maybe<Array<Maybe<Model>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateCommentsArgs = {
  data: Array<CommentCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateModelArgs = {
  data: ModelCreateInput;
};


export type MutationCreateModelFileArgs = {
  data: ModelFileCreateInput;
};


export type MutationCreateModelFilesArgs = {
  data: Array<ModelFileCreateInput>;
};


export type MutationCreateModelImageArgs = {
  data: ModelImageCreateInput;
};


export type MutationCreateModelImagesArgs = {
  data: Array<ModelImageCreateInput>;
};


export type MutationCreateModelsArgs = {
  data: Array<ModelCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteCommentsArgs = {
  where: Array<CommentWhereUniqueInput>;
};


export type MutationDeleteModelArgs = {
  where: ModelWhereUniqueInput;
};


export type MutationDeleteModelFileArgs = {
  where: ModelFileWhereUniqueInput;
};


export type MutationDeleteModelFilesArgs = {
  where: Array<ModelFileWhereUniqueInput>;
};


export type MutationDeleteModelImageArgs = {
  where: ModelImageWhereUniqueInput;
};


export type MutationDeleteModelImagesArgs = {
  where: Array<ModelImageWhereUniqueInput>;
};


export type MutationDeleteModelsArgs = {
  where: Array<ModelWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateCommentsArgs = {
  data: Array<CommentUpdateArgs>;
};


export type MutationUpdateModelArgs = {
  data: ModelUpdateInput;
  where: ModelWhereUniqueInput;
};


export type MutationUpdateModelFileArgs = {
  data: ModelFileUpdateInput;
  where: ModelFileWhereUniqueInput;
};


export type MutationUpdateModelFilesArgs = {
  data: Array<ModelFileUpdateArgs>;
};


export type MutationUpdateModelImageArgs = {
  data: ModelImageUpdateInput;
  where: ModelImageWhereUniqueInput;
};


export type MutationUpdateModelImagesArgs = {
  data: Array<ModelImageUpdateArgs>;
};


export type MutationUpdateModelsArgs = {
  data: Array<ModelUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  model?: Maybe<Model>;
  modelFile?: Maybe<ModelFile>;
  modelFiles?: Maybe<Array<ModelFile>>;
  modelFilesCount?: Maybe<Scalars['Int']>;
  modelImage?: Maybe<ModelImage>;
  modelImages?: Maybe<Array<ModelImage>>;
  modelImagesCount?: Maybe<Scalars['Int']>;
  models?: Maybe<Array<Model>>;
  modelsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryCommentsArgs = {
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CommentWhereInput;
};


export type QueryCommentsCountArgs = {
  where?: CommentWhereInput;
};


export type QueryModelArgs = {
  where: ModelWhereUniqueInput;
};


export type QueryModelFileArgs = {
  where: ModelFileWhereUniqueInput;
};


export type QueryModelFilesArgs = {
  orderBy?: Array<ModelFileOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ModelFileWhereInput;
};


export type QueryModelFilesCountArgs = {
  where?: ModelFileWhereInput;
};


export type QueryModelImageArgs = {
  where: ModelImageWhereUniqueInput;
};


export type QueryModelImagesArgs = {
  orderBy?: Array<ModelImageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ModelImageWhereInput;
};


export type QueryModelImagesCountArgs = {
  where?: ModelImageWhereInput;
};


export type QueryModelsArgs = {
  orderBy?: Array<ModelOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ModelWhereInput;
};


export type QueryModelsCountArgs = {
  where?: ModelWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  comments?: Maybe<Array<Comment>>;
  commentsCount?: Maybe<Scalars['Int']>;
  createdFiles?: Maybe<Array<ModelFile>>;
  createdFilesCount?: Maybe<Scalars['Int']>;
  createdImages?: Maybe<Array<ModelImage>>;
  createdImagesCount?: Maybe<Scalars['Int']>;
  createdModels?: Maybe<Array<Model>>;
  createdModelsCount?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  likedModels?: Maybe<Array<Model>>;
  likedModelsCount?: Maybe<Scalars['Int']>;
  password?: Maybe<PasswordState>;
  username?: Maybe<Scalars['String']>;
};


export type UserCommentsArgs = {
  orderBy?: Array<CommentOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CommentWhereInput;
};


export type UserCommentsCountArgs = {
  where?: CommentWhereInput;
};


export type UserCreatedFilesArgs = {
  orderBy?: Array<ModelFileOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ModelFileWhereInput;
};


export type UserCreatedFilesCountArgs = {
  where?: ModelFileWhereInput;
};


export type UserCreatedImagesArgs = {
  orderBy?: Array<ModelImageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ModelImageWhereInput;
};


export type UserCreatedImagesCountArgs = {
  where?: ModelImageWhereInput;
};


export type UserCreatedModelsArgs = {
  orderBy?: Array<ModelOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ModelWhereInput;
};


export type UserCreatedModelsCountArgs = {
  where?: ModelWhereInput;
};


export type UserLikedModelsArgs = {
  orderBy?: Array<ModelOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: ModelWhereInput;
};


export type UserLikedModelsCountArgs = {
  where?: ModelWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  comments?: InputMaybe<CommentRelateToManyForCreateInput>;
  createdFiles?: InputMaybe<ModelFileRelateToManyForCreateInput>;
  createdImages?: InputMaybe<ModelImageRelateToManyForCreateInput>;
  createdModels?: InputMaybe<ModelRelateToManyForCreateInput>;
  email?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  likedModels?: InputMaybe<ModelRelateToManyForCreateInput>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserManyRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByInput = {
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  isAdmin?: InputMaybe<OrderDirection>;
  username?: InputMaybe<OrderDirection>;
};

export type UserRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
};

export type UserRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  create?: InputMaybe<Array<UserCreateInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  comments?: InputMaybe<CommentRelateToManyForUpdateInput>;
  createdFiles?: InputMaybe<ModelFileRelateToManyForUpdateInput>;
  createdImages?: InputMaybe<ModelImageRelateToManyForUpdateInput>;
  createdModels?: InputMaybe<ModelRelateToManyForUpdateInput>;
  email?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  likedModels?: InputMaybe<ModelRelateToManyForUpdateInput>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  comments?: InputMaybe<CommentManyRelationFilter>;
  createdFiles?: InputMaybe<ModelFileManyRelationFilter>;
  createdImages?: InputMaybe<ModelImageManyRelationFilter>;
  createdModels?: InputMaybe<ModelManyRelationFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  isAdmin?: InputMaybe<BooleanFilter>;
  likedModels?: InputMaybe<ModelManyRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type ModelsQueryVariables = Exact<{
  query?: InputMaybe<Scalars['String']>;
}>;


export type ModelsQuery = { __typename?: 'Query', models?: Array<{ __typename?: 'Model', id: string, name?: string | null, slug?: string | null, doUserLikesIt?: boolean | null, description?: { __typename?: 'Model_description_Document', document: any } | null, images?: Array<{ __typename?: 'ModelImage', id: string, image?: { __typename?: 'ImageFieldOutput', url: string } | null }> | null, files?: Array<{ __typename?: 'ModelFile', id: string, file?: { __typename?: 'FileFieldOutput', url: string } | null }> | null, createdBy?: { __typename?: 'User', username?: string | null } | null, likedBy?: Array<{ __typename?: 'User', username?: string | null }> | null }> | null };

export type ModelQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type ModelQuery = { __typename?: 'Query', model?: { __typename?: 'Model', id: string, name?: string | null, createdAt?: any | null, likedByCount?: number | null, doUserLikesIt?: boolean | null, recommendedInfill?: number | null, recommendedMaterial?: string | null, supports?: string | null, description?: { __typename?: 'Model_description_Document', document: any } | null, images?: Array<{ __typename?: 'ModelImage', id: string, image?: { __typename?: 'ImageFieldOutput', url: string } | null }> | null, files?: Array<{ __typename?: 'ModelFile', id: string, file?: { __typename?: 'FileFieldOutput', url: string } | null }> | null, comments?: Array<{ __typename?: 'Comment', createdAt?: any | null, author?: { __typename?: 'User', username?: string | null } | null, content?: { __typename?: 'Comment_content_Document', document: any } | null }> | null, createdBy?: { __typename?: 'User', username?: string | null } | null } | null };

export type CreateModelMutationVariables = Exact<{
  data: ModelCreateInput;
}>;


export type CreateModelMutation = { __typename?: 'Mutation', createModel?: { __typename?: 'Model', id: string, slug?: string | null } | null };

export type UpdateModelMutationVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
  data: ModelUpdateInput;
}>;


export type UpdateModelMutation = { __typename?: 'Mutation', updateModel?: { __typename?: 'Model', id: string, slug?: string | null } | null };

export type DeleteModelMutationVariables = Exact<{
  slug: Scalars['String'];
}>;


export type DeleteModelMutation = { __typename?: 'Mutation', deleteModel?: { __typename?: 'Model', id: string, slug?: string | null } | null };

export type CreateCommentMutationVariables = Exact<{
  data: CommentCreateInput;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'Comment', id: string } | null };

export type ModelFragment = { __typename?: 'Model', id: string, name?: string | null, slug?: string | null, doUserLikesIt?: boolean | null, description?: { __typename?: 'Model_description_Document', document: any } | null, images?: Array<{ __typename?: 'ModelImage', image?: { __typename?: 'ImageFieldOutput', url: string } | null }> | null, createdBy?: { __typename?: 'User', username?: string | null } | null, likedBy?: Array<{ __typename?: 'User', username?: string | null }> | null } & { ' $fragmentName'?: 'ModelFragment' };

export type AuthenticateMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthenticateMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'UserAuthenticationWithPasswordFailure' } | { __typename?: 'UserAuthenticationWithPasswordSuccess', sessionToken: string, item: { __typename?: 'User', id: string, username?: string | null, email?: string | null, isAdmin?: boolean | null, createdModels?: Array<(
        { __typename?: 'Model' }
        & { ' $fragmentRefs'?: { 'ModelFragment': ModelFragment } }
      )> | null, likedModels?: Array<(
        { __typename?: 'Model' }
        & { ' $fragmentRefs'?: { 'ModelFragment': ModelFragment } }
      )> | null } } | null };

export type CheckTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckTokenQuery = { __typename?: 'Query', authenticatedItem?: { __typename?: 'User', id: string, username?: string | null, email?: string | null, isAdmin?: boolean | null, createdModels?: Array<(
      { __typename?: 'Model' }
      & { ' $fragmentRefs'?: { 'ModelFragment': ModelFragment } }
    )> | null, likedModels?: Array<(
      { __typename?: 'Model' }
      & { ' $fragmentRefs'?: { 'ModelFragment': ModelFragment } }
    )> | null } | null };

export type EndSessionMutationVariables = Exact<{ [key: string]: never; }>;


export type EndSessionMutation = { __typename?: 'Mutation', endSession: boolean };

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string } | null };

export type ChangePasswordMutationVariables = Exact<{
  username: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string } | null };

export type LikeModelMutationVariables = Exact<{
  modelSlug: Scalars['String'];
  username: Scalars['String'];
}>;


export type LikeModelMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string } | null };

export type DislikeModelMutationVariables = Exact<{
  modelSlug: Scalars['String'];
  username: Scalars['String'];
}>;


export type DislikeModelMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string } | null };

export type LikedModelsQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type LikedModelsQuery = { __typename?: 'Query', models?: Array<{ __typename?: 'Model', id: string, name?: string | null }> | null };

export const ModelFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Model"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Model"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"doUserLikesIt"}}]}}]} as unknown as DocumentNode<ModelFragment, unknown>;
export const ModelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Models"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"models"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"mode"},"value":{"kind":"EnumValue","value":"insensitive"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"doUserLikesIt"}}]}}]}}]} as unknown as DocumentNode<ModelsQuery, ModelsQueryVariables>;
export const ModelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Model"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"model"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likedByCount"}},{"kind":"Field","name":{"kind":"Name","value":"doUserLikesIt"}},{"kind":"Field","name":{"kind":"Name","value":"recommendedInfill"}},{"kind":"Field","name":{"kind":"Name","value":"recommendedMaterial"}},{"kind":"Field","name":{"kind":"Name","value":"supports"}}]}}]}}]} as unknown as DocumentNode<ModelQuery, ModelQueryVariables>;
export const CreateModelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateModel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModelCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createModel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<CreateModelMutation, CreateModelMutationVariables>;
export const UpdateModelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateModel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModelUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateModel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<UpdateModelMutation, UpdateModelMutationVariables>;
export const DeleteModelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteModel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteModel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<DeleteModelMutation, DeleteModelMutationVariables>;
export const CreateCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateCommentMutation, CreateCommentMutationVariables>;
export const AuthenticateDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Authenticate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticateUserWithPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}},{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"createdModels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Model"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likedModels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Model"}}]}}]}}]}}]}}]}},...ModelFragmentDoc.definitions]} as unknown as DocumentNode<AuthenticateMutation, AuthenticateMutationVariables>;
export const CheckTokenDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CheckToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticatedItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"createdModels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Model"}}]}},{"kind":"Field","name":{"kind":"Name","value":"likedModels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Model"}}]}}]}}]}}]}},...ModelFragmentDoc.definitions]} as unknown as DocumentNode<CheckTokenQuery, CheckTokenQueryVariables>;
export const EndSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EndSession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endSession"}}]}}]} as unknown as DocumentNode<EndSessionMutation, EndSessionMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const ChangePasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangePassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const LikeModelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeModel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"modelSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"likedModels"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"modelSlug"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<LikeModelMutation, LikeModelMutationVariables>;
export const DislikeModelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DislikeModel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"modelSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"likedModels"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"disconnect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"modelSlug"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DislikeModelMutation, DislikeModelMutationVariables>;
export const LikedModelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LikedModels"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"models"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"likedBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"some"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<LikedModelsQuery, LikedModelsQueryVariables>;