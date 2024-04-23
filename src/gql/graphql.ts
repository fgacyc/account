/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date wihout time information */
  Date: { input: string; output: string; }
  /** A date and time */
  Datetime: { input: string; output: string; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: string; output: string; }
  /** A universally unique identifier */
  UUID: { input: string; output: string; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `attendance` collection */
  deleteFromattendanceCollection: AttendanceDeleteResponse;
  /** Deletes zero or more records from the `connect_group` collection */
  deleteFromconnect_groupCollection: Connect_GroupDeleteResponse;
  /** Deletes zero or more records from the `currency` collection */
  deleteFromcurrencyCollection: CurrencyDeleteResponse;
  /** Deletes zero or more records from the `event` collection */
  deleteFromeventCollection: EventDeleteResponse;
  /** Deletes zero or more records from the `event_type` collection */
  deleteFromevent_typeCollection: Event_TypeDeleteResponse;
  /** Deletes zero or more records from the `form_field_type` collection */
  deleteFromform_field_typeCollection: Form_Field_TypeDeleteResponse;
  /** Deletes zero or more records from the `ministry` collection */
  deleteFromministryCollection: MinistryDeleteResponse;
  /** Deletes zero or more records from the `ministry_department` collection */
  deleteFromministry_departmentCollection: Ministry_DepartmentDeleteResponse;
  /** Deletes zero or more records from the `ministry_role` collection */
  deleteFromministry_roleCollection: Ministry_RoleDeleteResponse;
  /** Deletes zero or more records from the `ministry_team` collection */
  deleteFromministry_teamCollection: Ministry_TeamDeleteResponse;
  /** Deletes zero or more records from the `pastoral_role` collection */
  deleteFrompastoral_roleCollection: Pastoral_RoleDeleteResponse;
  /** Deletes zero or more records from the `price` collection */
  deleteFrompriceCollection: PriceDeleteResponse;
  /** Deletes zero or more records from the `registration` collection */
  deleteFromregistrationCollection: RegistrationDeleteResponse;
  /** Deletes zero or more records from the `registration_form_field` collection */
  deleteFromregistration_form_fieldCollection: Registration_Form_FieldDeleteResponse;
  /** Deletes zero or more records from the `registration_form_field_data` collection */
  deleteFromregistration_form_field_dataCollection: Registration_Form_Field_DataDeleteResponse;
  /** Deletes zero or more records from the `satellite` collection */
  deleteFromsatelliteCollection: SatelliteDeleteResponse;
  /** Deletes zero or more records from the `session` collection */
  deleteFromsessionCollection: SessionDeleteResponse;
  /** Deletes zero or more records from the `user` collection */
  deleteFromuserCollection: UserDeleteResponse;
  /** Deletes zero or more records from the `user_connect_group` collection */
  deleteFromuser_connect_groupCollection: User_Connect_GroupDeleteResponse;
  /** Deletes zero or more records from the `user_ministry` collection */
  deleteFromuser_ministryCollection: User_MinistryDeleteResponse;
  /** Adds one or more `attendance` records to the collection */
  insertIntoattendanceCollection?: Maybe<AttendanceInsertResponse>;
  /** Adds one or more `connect_group` records to the collection */
  insertIntoconnect_groupCollection?: Maybe<Connect_GroupInsertResponse>;
  /** Adds one or more `currency` records to the collection */
  insertIntocurrencyCollection?: Maybe<CurrencyInsertResponse>;
  /** Adds one or more `event` records to the collection */
  insertIntoeventCollection?: Maybe<EventInsertResponse>;
  /** Adds one or more `event_type` records to the collection */
  insertIntoevent_typeCollection?: Maybe<Event_TypeInsertResponse>;
  /** Adds one or more `form_field_type` records to the collection */
  insertIntoform_field_typeCollection?: Maybe<Form_Field_TypeInsertResponse>;
  /** Adds one or more `ministry` records to the collection */
  insertIntoministryCollection?: Maybe<MinistryInsertResponse>;
  /** Adds one or more `ministry_department` records to the collection */
  insertIntoministry_departmentCollection?: Maybe<Ministry_DepartmentInsertResponse>;
  /** Adds one or more `ministry_role` records to the collection */
  insertIntoministry_roleCollection?: Maybe<Ministry_RoleInsertResponse>;
  /** Adds one or more `ministry_team` records to the collection */
  insertIntoministry_teamCollection?: Maybe<Ministry_TeamInsertResponse>;
  /** Adds one or more `pastoral_role` records to the collection */
  insertIntopastoral_roleCollection?: Maybe<Pastoral_RoleInsertResponse>;
  /** Adds one or more `price` records to the collection */
  insertIntopriceCollection?: Maybe<PriceInsertResponse>;
  /** Adds one or more `registration` records to the collection */
  insertIntoregistrationCollection?: Maybe<RegistrationInsertResponse>;
  /** Adds one or more `registration_form_field` records to the collection */
  insertIntoregistration_form_fieldCollection?: Maybe<Registration_Form_FieldInsertResponse>;
  /** Adds one or more `registration_form_field_data` records to the collection */
  insertIntoregistration_form_field_dataCollection?: Maybe<Registration_Form_Field_DataInsertResponse>;
  /** Adds one or more `satellite` records to the collection */
  insertIntosatelliteCollection?: Maybe<SatelliteInsertResponse>;
  /** Adds one or more `session` records to the collection */
  insertIntosessionCollection?: Maybe<SessionInsertResponse>;
  /** Adds one or more `user` records to the collection */
  insertIntouserCollection?: Maybe<UserInsertResponse>;
  /** Adds one or more `user_connect_group` records to the collection */
  insertIntouser_connect_groupCollection?: Maybe<User_Connect_GroupInsertResponse>;
  /** Adds one or more `user_ministry` records to the collection */
  insertIntouser_ministryCollection?: Maybe<User_MinistryInsertResponse>;
  /** Updates zero or more records in the `attendance` collection */
  updateattendanceCollection: AttendanceUpdateResponse;
  /** Updates zero or more records in the `connect_group` collection */
  updateconnect_groupCollection: Connect_GroupUpdateResponse;
  /** Updates zero or more records in the `currency` collection */
  updatecurrencyCollection: CurrencyUpdateResponse;
  /** Updates zero or more records in the `event` collection */
  updateeventCollection: EventUpdateResponse;
  /** Updates zero or more records in the `event_type` collection */
  updateevent_typeCollection: Event_TypeUpdateResponse;
  /** Updates zero or more records in the `form_field_type` collection */
  updateform_field_typeCollection: Form_Field_TypeUpdateResponse;
  /** Updates zero or more records in the `ministry` collection */
  updateministryCollection: MinistryUpdateResponse;
  /** Updates zero or more records in the `ministry_department` collection */
  updateministry_departmentCollection: Ministry_DepartmentUpdateResponse;
  /** Updates zero or more records in the `ministry_role` collection */
  updateministry_roleCollection: Ministry_RoleUpdateResponse;
  /** Updates zero or more records in the `ministry_team` collection */
  updateministry_teamCollection: Ministry_TeamUpdateResponse;
  /** Updates zero or more records in the `pastoral_role` collection */
  updatepastoral_roleCollection: Pastoral_RoleUpdateResponse;
  /** Updates zero or more records in the `price` collection */
  updatepriceCollection: PriceUpdateResponse;
  /** Updates zero or more records in the `registration` collection */
  updateregistrationCollection: RegistrationUpdateResponse;
  /** Updates zero or more records in the `registration_form_field` collection */
  updateregistration_form_fieldCollection: Registration_Form_FieldUpdateResponse;
  /** Updates zero or more records in the `registration_form_field_data` collection */
  updateregistration_form_field_dataCollection: Registration_Form_Field_DataUpdateResponse;
  /** Updates zero or more records in the `satellite` collection */
  updatesatelliteCollection: SatelliteUpdateResponse;
  /** Updates zero or more records in the `session` collection */
  updatesessionCollection: SessionUpdateResponse;
  /** Updates zero or more records in the `user` collection */
  updateuserCollection: UserUpdateResponse;
  /** Updates zero or more records in the `user_connect_group` collection */
  updateuser_connect_groupCollection: User_Connect_GroupUpdateResponse;
  /** Updates zero or more records in the `user_ministry` collection */
  updateuser_ministryCollection: User_MinistryUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromattendanceCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AttendanceFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromconnect_GroupCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Connect_GroupFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcurrencyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CurrencyFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromeventCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EventFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromevent_TypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Event_TypeFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromform_Field_TypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Form_Field_TypeFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromministryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MinistryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromministry_DepartmentCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Ministry_DepartmentFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromministry_RoleCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Ministry_RoleFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromministry_TeamCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Ministry_TeamFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompastoral_RoleCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pastoral_RoleFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompriceCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PriceFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromregistrationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RegistrationFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromregistration_Form_FieldCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Registration_Form_FieldFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromregistration_Form_Field_DataCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Registration_Form_Field_DataFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromsatelliteCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SatelliteFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromsessionCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SessionFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromuserCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromuser_Connect_GroupCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_Connect_GroupFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromuser_MinistryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_MinistryFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoattendanceCollectionArgs = {
  objects: Array<AttendanceInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoconnect_GroupCollectionArgs = {
  objects: Array<Connect_GroupInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocurrencyCollectionArgs = {
  objects: Array<CurrencyInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoeventCollectionArgs = {
  objects: Array<EventInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoevent_TypeCollectionArgs = {
  objects: Array<Event_TypeInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoform_Field_TypeCollectionArgs = {
  objects: Array<Form_Field_TypeInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoministryCollectionArgs = {
  objects: Array<MinistryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoministry_DepartmentCollectionArgs = {
  objects: Array<Ministry_DepartmentInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoministry_RoleCollectionArgs = {
  objects: Array<Ministry_RoleInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoministry_TeamCollectionArgs = {
  objects: Array<Ministry_TeamInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopastoral_RoleCollectionArgs = {
  objects: Array<Pastoral_RoleInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopriceCollectionArgs = {
  objects: Array<PriceInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoregistrationCollectionArgs = {
  objects: Array<RegistrationInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoregistration_Form_FieldCollectionArgs = {
  objects: Array<Registration_Form_FieldInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoregistration_Form_Field_DataCollectionArgs = {
  objects: Array<Registration_Form_Field_DataInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntosatelliteCollectionArgs = {
  objects: Array<SatelliteInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntosessionCollectionArgs = {
  objects: Array<SessionInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntouserCollectionArgs = {
  objects: Array<UserInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntouser_Connect_GroupCollectionArgs = {
  objects: Array<User_Connect_GroupInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntouser_MinistryCollectionArgs = {
  objects: Array<User_MinistryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateattendanceCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AttendanceFilter>;
  set: AttendanceUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateconnect_GroupCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Connect_GroupFilter>;
  set: Connect_GroupUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecurrencyCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CurrencyFilter>;
  set: CurrencyUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateeventCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<EventFilter>;
  set: EventUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateevent_TypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Event_TypeFilter>;
  set: Event_TypeUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateform_Field_TypeCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Form_Field_TypeFilter>;
  set: Form_Field_TypeUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateministryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MinistryFilter>;
  set: MinistryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateministry_DepartmentCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Ministry_DepartmentFilter>;
  set: Ministry_DepartmentUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateministry_RoleCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Ministry_RoleFilter>;
  set: Ministry_RoleUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateministry_TeamCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Ministry_TeamFilter>;
  set: Ministry_TeamUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepastoral_RoleCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Pastoral_RoleFilter>;
  set: Pastoral_RoleUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepriceCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PriceFilter>;
  set: PriceUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateregistrationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<RegistrationFilter>;
  set: RegistrationUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateregistration_Form_FieldCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Registration_Form_FieldFilter>;
  set: Registration_Form_FieldUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateregistration_Form_Field_DataCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Registration_Form_Field_DataFilter>;
  set: Registration_Form_Field_DataUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatesatelliteCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SatelliteFilter>;
  set: SatelliteUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatesessionCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<SessionFilter>;
  set: SessionUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateuserCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserFilter>;
  set: UserUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateuser_Connect_GroupCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_Connect_GroupFilter>;
  set: User_Connect_GroupUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateuser_MinistryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_MinistryFilter>;
  set: User_MinistryUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `attendance` */
  attendanceCollection?: Maybe<AttendanceConnection>;
  /** A pagable collection of type `connect_group` */
  connect_groupCollection?: Maybe<Connect_GroupConnection>;
  /** A pagable collection of type `currency` */
  currencyCollection?: Maybe<CurrencyConnection>;
  /** A pagable collection of type `event` */
  eventCollection?: Maybe<EventConnection>;
  /** A pagable collection of type `event_type` */
  event_typeCollection?: Maybe<Event_TypeConnection>;
  /** A pagable collection of type `form_field_type` */
  form_field_typeCollection?: Maybe<Form_Field_TypeConnection>;
  /** A pagable collection of type `ministry` */
  ministryCollection?: Maybe<MinistryConnection>;
  /** A pagable collection of type `ministry_department` */
  ministry_departmentCollection?: Maybe<Ministry_DepartmentConnection>;
  /** A pagable collection of type `ministry_role` */
  ministry_roleCollection?: Maybe<Ministry_RoleConnection>;
  /** A pagable collection of type `ministry_team` */
  ministry_teamCollection?: Maybe<Ministry_TeamConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `pastoral_role` */
  pastoral_roleCollection?: Maybe<Pastoral_RoleConnection>;
  /** A pagable collection of type `price` */
  priceCollection?: Maybe<PriceConnection>;
  /** A pagable collection of type `registration` */
  registrationCollection?: Maybe<RegistrationConnection>;
  /** A pagable collection of type `registration_form_field` */
  registration_form_fieldCollection?: Maybe<Registration_Form_FieldConnection>;
  /** A pagable collection of type `registration_form_field_data` */
  registration_form_field_dataCollection?: Maybe<Registration_Form_Field_DataConnection>;
  /** A pagable collection of type `satellite` */
  satelliteCollection?: Maybe<SatelliteConnection>;
  /** A pagable collection of type `session` */
  sessionCollection?: Maybe<SessionConnection>;
  /** A pagable collection of type `user` */
  userCollection?: Maybe<UserConnection>;
  /** A pagable collection of type `user_connect_group` */
  user_connect_groupCollection?: Maybe<User_Connect_GroupConnection>;
  /** A pagable collection of type `user_ministry` */
  user_ministryCollection?: Maybe<User_MinistryConnection>;
};


/** The root type for querying data */
export type QueryAttendanceCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AttendanceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AttendanceOrderBy>>;
};


/** The root type for querying data */
export type QueryConnect_GroupCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Connect_GroupFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Connect_GroupOrderBy>>;
};


/** The root type for querying data */
export type QueryCurrencyCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CurrencyFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CurrencyOrderBy>>;
};


/** The root type for querying data */
export type QueryEventCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderBy>>;
};


/** The root type for querying data */
export type QueryEvent_TypeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Event_TypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Event_TypeOrderBy>>;
};


/** The root type for querying data */
export type QueryForm_Field_TypeCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Form_Field_TypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Form_Field_TypeOrderBy>>;
};


/** The root type for querying data */
export type QueryMinistryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MinistryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MinistryOrderBy>>;
};


/** The root type for querying data */
export type QueryMinistry_DepartmentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Ministry_DepartmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Ministry_DepartmentOrderBy>>;
};


/** The root type for querying data */
export type QueryMinistry_RoleCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Ministry_RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Ministry_RoleOrderBy>>;
};


/** The root type for querying data */
export type QueryMinistry_TeamCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Ministry_TeamFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Ministry_TeamOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryPastoral_RoleCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Pastoral_RoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Pastoral_RoleOrderBy>>;
};


/** The root type for querying data */
export type QueryPriceCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PriceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriceOrderBy>>;
};


/** The root type for querying data */
export type QueryRegistrationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RegistrationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RegistrationOrderBy>>;
};


/** The root type for querying data */
export type QueryRegistration_Form_FieldCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Registration_Form_FieldFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Registration_Form_FieldOrderBy>>;
};


/** The root type for querying data */
export type QueryRegistration_Form_Field_DataCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Registration_Form_Field_DataFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Registration_Form_Field_DataOrderBy>>;
};


/** The root type for querying data */
export type QuerySatelliteCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<SatelliteFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SatelliteOrderBy>>;
};


/** The root type for querying data */
export type QuerySessionCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<SessionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SessionOrderBy>>;
};


/** The root type for querying data */
export type QueryUserCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
};


/** The root type for querying data */
export type QueryUser_Connect_GroupCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_Connect_GroupFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_Connect_GroupOrderBy>>;
};


/** The root type for querying data */
export type QueryUser_MinistryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_MinistryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_MinistryOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

export type Attendance = Node & {
  __typename?: 'attendance';
  created_at: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  session: Session;
  session_id: Scalars['String']['output'];
  updated_at: Scalars['Datetime']['output'];
  user_id: Scalars['String']['output'];
};

export type AttendanceConnection = {
  __typename?: 'attendanceConnection';
  edges: Array<AttendanceEdge>;
  pageInfo: PageInfo;
};

export type AttendanceDeleteResponse = {
  __typename?: 'attendanceDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Attendance>;
};

export type AttendanceEdge = {
  __typename?: 'attendanceEdge';
  cursor: Scalars['String']['output'];
  node: Attendance;
};

export type AttendanceFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AttendanceFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AttendanceFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AttendanceFilter>>;
  session_id?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type AttendanceInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  session_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type AttendanceInsertResponse = {
  __typename?: 'attendanceInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Attendance>;
};

export type AttendanceOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  session_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type AttendanceUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  session_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type AttendanceUpdateResponse = {
  __typename?: 'attendanceUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Attendance>;
};

export type Connect_Group = Node & {
  __typename?: 'connect_group';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  no: Scalars['Int']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  satellite: Satellite;
  satellite_id: Scalars['String']['output'];
  updated_at: Scalars['Datetime']['output'];
  user_connect_groupCollection?: Maybe<User_Connect_GroupConnection>;
  variant?: Maybe<Scalars['String']['output']>;
};


export type Connect_GroupUser_Connect_GroupCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_Connect_GroupFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_Connect_GroupOrderBy>>;
};

export type Connect_GroupConnection = {
  __typename?: 'connect_groupConnection';
  edges: Array<Connect_GroupEdge>;
  pageInfo: PageInfo;
};

export type Connect_GroupDeleteResponse = {
  __typename?: 'connect_groupDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Connect_Group>;
};

export type Connect_GroupEdge = {
  __typename?: 'connect_groupEdge';
  cursor: Scalars['String']['output'];
  node: Connect_Group;
};

export type Connect_GroupFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Connect_GroupFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  no?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Connect_GroupFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Connect_GroupFilter>>;
  satellite_id?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  variant?: InputMaybe<StringFilter>;
};

export type Connect_GroupInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  satellite_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type Connect_GroupInsertResponse = {
  __typename?: 'connect_groupInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Connect_Group>;
};

export type Connect_GroupOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  no?: InputMaybe<OrderByDirection>;
  satellite_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  variant?: InputMaybe<OrderByDirection>;
};

export type Connect_GroupUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  satellite_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type Connect_GroupUpdateResponse = {
  __typename?: 'connect_groupUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Connect_Group>;
};

export type Currency = Node & {
  __typename?: 'currency';
  code: Scalars['String']['output'];
  countries: Array<Maybe<Scalars['String']['output']>>;
  denominator: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  num: Scalars['Int']['output'];
  priceCollection?: Maybe<PriceConnection>;
};


export type CurrencyPriceCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PriceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriceOrderBy>>;
};

export type CurrencyConnection = {
  __typename?: 'currencyConnection';
  edges: Array<CurrencyEdge>;
  pageInfo: PageInfo;
};

export type CurrencyDeleteResponse = {
  __typename?: 'currencyDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Currency>;
};

export type CurrencyEdge = {
  __typename?: 'currencyEdge';
  cursor: Scalars['String']['output'];
  node: Currency;
};

export type CurrencyFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CurrencyFilter>>;
  code?: InputMaybe<StringFilter>;
  denominator?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CurrencyFilter>;
  num?: InputMaybe<IntFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CurrencyFilter>>;
};

export type CurrencyInsertInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  countries?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  denominator?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  num?: InputMaybe<Scalars['Int']['input']>;
};

export type CurrencyInsertResponse = {
  __typename?: 'currencyInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Currency>;
};

export type CurrencyOrderBy = {
  code?: InputMaybe<OrderByDirection>;
  denominator?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  num?: InputMaybe<OrderByDirection>;
};

export type CurrencyUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  countries?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  denominator?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  num?: InputMaybe<Scalars['Int']['input']>;
};

export type CurrencyUpdateResponse = {
  __typename?: 'currencyUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Currency>;
};

export type Event = Node & {
  __typename?: 'event';
  created_at: Scalars['Datetime']['output'];
  description: Scalars['String']['output'];
  event_type: Event_Type;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  priceCollection?: Maybe<PriceConnection>;
  registrationCollection?: Maybe<RegistrationConnection>;
  sessionCollection?: Maybe<SessionConnection>;
  type: Scalars['String']['output'];
  updated_at: Scalars['Datetime']['output'];
};


export type EventPriceCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PriceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriceOrderBy>>;
};


export type EventRegistrationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<RegistrationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RegistrationOrderBy>>;
};


export type EventSessionCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<SessionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SessionOrderBy>>;
};

export type EventConnection = {
  __typename?: 'eventConnection';
  edges: Array<EventEdge>;
  pageInfo: PageInfo;
};

export type EventDeleteResponse = {
  __typename?: 'eventDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Event>;
};

export type EventEdge = {
  __typename?: 'eventEdge';
  cursor: Scalars['String']['output'];
  node: Event;
};

export type EventFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<EventFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<EventFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<EventFilter>>;
  type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type EventInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type EventInsertResponse = {
  __typename?: 'eventInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Event>;
};

export type EventOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type EventUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type EventUpdateResponse = {
  __typename?: 'eventUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Event>;
};

export type Event_Type = Node & {
  __typename?: 'event_type';
  created_at: Scalars['Datetime']['output'];
  eventCollection?: Maybe<EventConnection>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at: Scalars['Datetime']['output'];
};


export type Event_TypeEventCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<EventFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventOrderBy>>;
};

export type Event_TypeConnection = {
  __typename?: 'event_typeConnection';
  edges: Array<Event_TypeEdge>;
  pageInfo: PageInfo;
};

export type Event_TypeDeleteResponse = {
  __typename?: 'event_typeDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Event_Type>;
};

export type Event_TypeEdge = {
  __typename?: 'event_typeEdge';
  cursor: Scalars['String']['output'];
  node: Event_Type;
};

export type Event_TypeFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Event_TypeFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Event_TypeFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Event_TypeFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Event_TypeInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Event_TypeInsertResponse = {
  __typename?: 'event_typeInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Event_Type>;
};

export type Event_TypeOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Event_TypeUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Event_TypeUpdateResponse = {
  __typename?: 'event_typeUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Event_Type>;
};

export type Form_Field_Type = Node & {
  __typename?: 'form_field_type';
  created_at: Scalars['Datetime']['output'];
  description: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  registration_form_fieldCollection: Registration_Form_FieldConnection;
  type: Scalars['String']['output'];
  updated_at: Scalars['Datetime']['output'];
};


export type Form_Field_TypeRegistration_Form_FieldCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Registration_Form_FieldFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Registration_Form_FieldOrderBy>>;
};

export type Form_Field_TypeConnection = {
  __typename?: 'form_field_typeConnection';
  edges: Array<Form_Field_TypeEdge>;
  pageInfo: PageInfo;
};

export type Form_Field_TypeDeleteResponse = {
  __typename?: 'form_field_typeDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Form_Field_Type>;
};

export type Form_Field_TypeEdge = {
  __typename?: 'form_field_typeEdge';
  cursor: Scalars['String']['output'];
  node: Form_Field_Type;
};

export type Form_Field_TypeFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Form_Field_TypeFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Form_Field_TypeFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Form_Field_TypeFilter>>;
  type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Form_Field_TypeInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Form_Field_TypeInsertResponse = {
  __typename?: 'form_field_typeInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Form_Field_Type>;
};

export type Form_Field_TypeOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Form_Field_TypeUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Form_Field_TypeUpdateResponse = {
  __typename?: 'form_field_typeUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Form_Field_Type>;
};

export enum Gender {
  Female = 'female',
  Male = 'male'
}

/** Boolean expression comparing fields on type "gender" */
export type GenderFilter = {
  eq?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Gender>;
};

export type Ministry = Node & {
  __typename?: 'ministry';
  created_at: Scalars['Datetime']['output'];
  department_id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  ministry_department: Ministry_Department;
  ministry_team: Ministry_Team;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  satellite: Satellite;
  satellite_id: Scalars['String']['output'];
  team_id: Scalars['String']['output'];
  updated_at: Scalars['Datetime']['output'];
  user_ministryCollection?: Maybe<User_MinistryConnection>;
};


export type MinistryUser_MinistryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_MinistryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_MinistryOrderBy>>;
};

export type MinistryConnection = {
  __typename?: 'ministryConnection';
  edges: Array<MinistryEdge>;
  pageInfo: PageInfo;
};

export type MinistryDeleteResponse = {
  __typename?: 'ministryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Ministry>;
};

export type MinistryEdge = {
  __typename?: 'ministryEdge';
  cursor: Scalars['String']['output'];
  node: Ministry;
};

export type MinistryFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<MinistryFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  department_id?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<MinistryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<MinistryFilter>>;
  satellite_id?: InputMaybe<StringFilter>;
  team_id?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type MinistryInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  department_id?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  satellite_id?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type MinistryInsertResponse = {
  __typename?: 'ministryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Ministry>;
};

export type MinistryOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  department_id?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  satellite_id?: InputMaybe<OrderByDirection>;
  team_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type MinistryUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  department_id?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  satellite_id?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type MinistryUpdateResponse = {
  __typename?: 'ministryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Ministry>;
};

export type Ministry_Department = Node & {
  __typename?: 'ministry_department';
  created_at: Scalars['Datetime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  ministryCollection?: Maybe<MinistryConnection>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at: Scalars['Datetime']['output'];
};


export type Ministry_DepartmentMinistryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MinistryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MinistryOrderBy>>;
};

export type Ministry_DepartmentConnection = {
  __typename?: 'ministry_departmentConnection';
  edges: Array<Ministry_DepartmentEdge>;
  pageInfo: PageInfo;
};

export type Ministry_DepartmentDeleteResponse = {
  __typename?: 'ministry_departmentDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Ministry_Department>;
};

export type Ministry_DepartmentEdge = {
  __typename?: 'ministry_departmentEdge';
  cursor: Scalars['String']['output'];
  node: Ministry_Department;
};

export type Ministry_DepartmentFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Ministry_DepartmentFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Ministry_DepartmentFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Ministry_DepartmentFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Ministry_DepartmentInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Ministry_DepartmentInsertResponse = {
  __typename?: 'ministry_departmentInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Ministry_Department>;
};

export type Ministry_DepartmentOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Ministry_DepartmentUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Ministry_DepartmentUpdateResponse = {
  __typename?: 'ministry_departmentUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Ministry_Department>;
};

export type Ministry_Role = Node & {
  __typename?: 'ministry_role';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  user_ministryCollection?: Maybe<User_MinistryConnection>;
  weight: Scalars['Int']['output'];
};


export type Ministry_RoleUser_MinistryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_MinistryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_MinistryOrderBy>>;
};

export type Ministry_RoleConnection = {
  __typename?: 'ministry_roleConnection';
  edges: Array<Ministry_RoleEdge>;
  pageInfo: PageInfo;
};

export type Ministry_RoleDeleteResponse = {
  __typename?: 'ministry_roleDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Ministry_Role>;
};

export type Ministry_RoleEdge = {
  __typename?: 'ministry_roleEdge';
  cursor: Scalars['String']['output'];
  node: Ministry_Role;
};

export type Ministry_RoleFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Ministry_RoleFilter>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Ministry_RoleFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Ministry_RoleFilter>>;
  weight?: InputMaybe<IntFilter>;
};

export type Ministry_RoleInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type Ministry_RoleInsertResponse = {
  __typename?: 'ministry_roleInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Ministry_Role>;
};

export type Ministry_RoleOrderBy = {
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  weight?: InputMaybe<OrderByDirection>;
};

export type Ministry_RoleUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type Ministry_RoleUpdateResponse = {
  __typename?: 'ministry_roleUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Ministry_Role>;
};

export type Ministry_Team = Node & {
  __typename?: 'ministry_team';
  created_at: Scalars['Datetime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  ministryCollection?: Maybe<MinistryConnection>;
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at: Scalars['Datetime']['output'];
};


export type Ministry_TeamMinistryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MinistryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MinistryOrderBy>>;
};

export type Ministry_TeamConnection = {
  __typename?: 'ministry_teamConnection';
  edges: Array<Ministry_TeamEdge>;
  pageInfo: PageInfo;
};

export type Ministry_TeamDeleteResponse = {
  __typename?: 'ministry_teamDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Ministry_Team>;
};

export type Ministry_TeamEdge = {
  __typename?: 'ministry_teamEdge';
  cursor: Scalars['String']['output'];
  node: Ministry_Team;
};

export type Ministry_TeamFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Ministry_TeamFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Ministry_TeamFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Ministry_TeamFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type Ministry_TeamInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Ministry_TeamInsertResponse = {
  __typename?: 'ministry_teamInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Ministry_Team>;
};

export type Ministry_TeamOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type Ministry_TeamUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Ministry_TeamUpdateResponse = {
  __typename?: 'ministry_teamUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Ministry_Team>;
};

export type Pastoral_Role = Node & {
  __typename?: 'pastoral_role';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  user_connect_groupCollection?: Maybe<User_Connect_GroupConnection>;
  weight: Scalars['Int']['output'];
};


export type Pastoral_RoleUser_Connect_GroupCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_Connect_GroupFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_Connect_GroupOrderBy>>;
};

export type Pastoral_RoleConnection = {
  __typename?: 'pastoral_roleConnection';
  edges: Array<Pastoral_RoleEdge>;
  pageInfo: PageInfo;
};

export type Pastoral_RoleDeleteResponse = {
  __typename?: 'pastoral_roleDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pastoral_Role>;
};

export type Pastoral_RoleEdge = {
  __typename?: 'pastoral_roleEdge';
  cursor: Scalars['String']['output'];
  node: Pastoral_Role;
};

export type Pastoral_RoleFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Pastoral_RoleFilter>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Pastoral_RoleFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Pastoral_RoleFilter>>;
  weight?: InputMaybe<IntFilter>;
};

export type Pastoral_RoleInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type Pastoral_RoleInsertResponse = {
  __typename?: 'pastoral_roleInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pastoral_Role>;
};

export type Pastoral_RoleOrderBy = {
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  weight?: InputMaybe<OrderByDirection>;
};

export type Pastoral_RoleUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

export type Pastoral_RoleUpdateResponse = {
  __typename?: 'pastoral_roleUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Pastoral_Role>;
};

export type Price = Node & {
  __typename?: 'price';
  created_at: Scalars['Datetime']['output'];
  currency: Currency;
  currency_code: Scalars['String']['output'];
  event: Event;
  event_id: Scalars['String']['output'];
  fee: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at: Scalars['Datetime']['output'];
};

export type PriceConnection = {
  __typename?: 'priceConnection';
  edges: Array<PriceEdge>;
  pageInfo: PageInfo;
};

export type PriceDeleteResponse = {
  __typename?: 'priceDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Price>;
};

export type PriceEdge = {
  __typename?: 'priceEdge';
  cursor: Scalars['String']['output'];
  node: Price;
};

export type PriceFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PriceFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  currency_code?: InputMaybe<StringFilter>;
  event_id?: InputMaybe<StringFilter>;
  fee?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PriceFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PriceFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type PriceInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  currency_code?: InputMaybe<Scalars['String']['input']>;
  event_id?: InputMaybe<Scalars['String']['input']>;
  fee?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PriceInsertResponse = {
  __typename?: 'priceInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Price>;
};

export type PriceOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  currency_code?: InputMaybe<OrderByDirection>;
  event_id?: InputMaybe<OrderByDirection>;
  fee?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type PriceUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  currency_code?: InputMaybe<Scalars['String']['input']>;
  event_id?: InputMaybe<Scalars['String']['input']>;
  fee?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type PriceUpdateResponse = {
  __typename?: 'priceUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Price>;
};

export type Registration = Node & {
  __typename?: 'registration';
  close_at: Scalars['Datetime']['output'];
  created_at: Scalars['Datetime']['output'];
  event: Event;
  event_id: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  registration_form_fieldCollection?: Maybe<Registration_Form_FieldConnection>;
  updated_at: Scalars['Datetime']['output'];
};


export type RegistrationRegistration_Form_FieldCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Registration_Form_FieldFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Registration_Form_FieldOrderBy>>;
};

export type RegistrationConnection = {
  __typename?: 'registrationConnection';
  edges: Array<RegistrationEdge>;
  pageInfo: PageInfo;
};

export type RegistrationDeleteResponse = {
  __typename?: 'registrationDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Registration>;
};

export type RegistrationEdge = {
  __typename?: 'registrationEdge';
  cursor: Scalars['String']['output'];
  node: Registration;
};

export type RegistrationFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<RegistrationFilter>>;
  close_at?: InputMaybe<DatetimeFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  event_id?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<RegistrationFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<RegistrationFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type RegistrationInsertInput = {
  close_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  event_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type RegistrationInsertResponse = {
  __typename?: 'registrationInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Registration>;
};

export type RegistrationOrderBy = {
  close_at?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  event_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type RegistrationUpdateInput = {
  close_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  event_id?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type RegistrationUpdateResponse = {
  __typename?: 'registrationUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Registration>;
};

export type Registration_Form_Field = Node & {
  __typename?: 'registration_form_field';
  created_at: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  form_field_type: Form_Field_Type;
  label: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  registration: Registration;
  registration_form_field_dataCollection: Registration_Form_Field_DataConnection;
  registration_id: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updated_at: Scalars['Datetime']['output'];
  weight: Scalars['Int']['output'];
};


export type Registration_Form_FieldRegistration_Form_Field_DataCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Registration_Form_Field_DataFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Registration_Form_Field_DataOrderBy>>;
};

export type Registration_Form_FieldConnection = {
  __typename?: 'registration_form_fieldConnection';
  edges: Array<Registration_Form_FieldEdge>;
  pageInfo: PageInfo;
};

export type Registration_Form_FieldDeleteResponse = {
  __typename?: 'registration_form_fieldDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Registration_Form_Field>;
};

export type Registration_Form_FieldEdge = {
  __typename?: 'registration_form_fieldEdge';
  cursor: Scalars['String']['output'];
  node: Registration_Form_Field;
};

export type Registration_Form_FieldFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Registration_Form_FieldFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Registration_Form_FieldFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Registration_Form_FieldFilter>>;
  registration_id?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  weight?: InputMaybe<IntFilter>;
};

export type Registration_Form_FieldInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  registration_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Registration_Form_FieldInsertResponse = {
  __typename?: 'registration_form_fieldInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Registration_Form_Field>;
};

export type Registration_Form_FieldOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  label?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  registration_id?: InputMaybe<OrderByDirection>;
  type?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  weight?: InputMaybe<OrderByDirection>;
};

export type Registration_Form_FieldUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  registration_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Registration_Form_FieldUpdateResponse = {
  __typename?: 'registration_form_fieldUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Registration_Form_Field>;
};

export type Registration_Form_Field_Data = Node & {
  __typename?: 'registration_form_field_data';
  created_at: Scalars['Datetime']['output'];
  data: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  registration_form_field: Registration_Form_Field;
  registration_id: Scalars['String']['output'];
  updated_at: Scalars['Datetime']['output'];
  user_id: Scalars['String']['output'];
};

export type Registration_Form_Field_DataConnection = {
  __typename?: 'registration_form_field_dataConnection';
  edges: Array<Registration_Form_Field_DataEdge>;
  pageInfo: PageInfo;
};

export type Registration_Form_Field_DataDeleteResponse = {
  __typename?: 'registration_form_field_dataDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Registration_Form_Field_Data>;
};

export type Registration_Form_Field_DataEdge = {
  __typename?: 'registration_form_field_dataEdge';
  cursor: Scalars['String']['output'];
  node: Registration_Form_Field_Data;
};

export type Registration_Form_Field_DataFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Registration_Form_Field_DataFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  data?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Registration_Form_Field_DataFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Registration_Form_Field_DataFilter>>;
  registration_id?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type Registration_Form_Field_DataInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  registration_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type Registration_Form_Field_DataInsertResponse = {
  __typename?: 'registration_form_field_dataInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Registration_Form_Field_Data>;
};

export type Registration_Form_Field_DataOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  data?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  registration_id?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type Registration_Form_Field_DataUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  registration_id?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type Registration_Form_Field_DataUpdateResponse = {
  __typename?: 'registration_form_field_dataUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Registration_Form_Field_Data>;
};

export type Satellite = Node & {
  __typename?: 'satellite';
  address: Scalars['Opaque']['output'];
  connect_groupCollection?: Maybe<Connect_GroupConnection>;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['String']['output'];
  ministryCollection?: Maybe<MinistryConnection>;
  name: Scalars['String']['output'];
  no: Scalars['Int']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  updated_at: Scalars['Datetime']['output'];
};


export type SatelliteConnect_GroupCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Connect_GroupFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Connect_GroupOrderBy>>;
};


export type SatelliteMinistryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MinistryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MinistryOrderBy>>;
};

export type SatelliteConnection = {
  __typename?: 'satelliteConnection';
  edges: Array<SatelliteEdge>;
  pageInfo: PageInfo;
};

export type SatelliteDeleteResponse = {
  __typename?: 'satelliteDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Satellite>;
};

export type SatelliteEdge = {
  __typename?: 'satelliteEdge';
  cursor: Scalars['String']['output'];
  node: Satellite;
};

export type SatelliteFilter = {
  address?: InputMaybe<OpaqueFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<SatelliteFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  no?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<SatelliteFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<SatelliteFilter>>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type SatelliteInsertInput = {
  address?: InputMaybe<Scalars['Opaque']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type SatelliteInsertResponse = {
  __typename?: 'satelliteInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Satellite>;
};

export type SatelliteOrderBy = {
  address?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  no?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type SatelliteUpdateInput = {
  address?: InputMaybe<Scalars['Opaque']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type SatelliteUpdateResponse = {
  __typename?: 'satelliteUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Satellite>;
};

export type Session = Node & {
  __typename?: 'session';
  actual_end_at?: Maybe<Scalars['Datetime']['output']>;
  actual_start_at?: Maybe<Scalars['Datetime']['output']>;
  attendanceCollection?: Maybe<AttendanceConnection>;
  created_at: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  end_at: Scalars['Datetime']['output'];
  event: Event;
  event_id: Scalars['String']['output'];
  expected_attendees: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  start_at: Scalars['Datetime']['output'];
  updated_at: Scalars['Datetime']['output'];
};


export type SessionAttendanceCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AttendanceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AttendanceOrderBy>>;
};

export type SessionConnection = {
  __typename?: 'sessionConnection';
  edges: Array<SessionEdge>;
  pageInfo: PageInfo;
};

export type SessionDeleteResponse = {
  __typename?: 'sessionDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Session>;
};

export type SessionEdge = {
  __typename?: 'sessionEdge';
  cursor: Scalars['String']['output'];
  node: Session;
};

export type SessionFilter = {
  actual_end_at?: InputMaybe<DatetimeFilter>;
  actual_start_at?: InputMaybe<DatetimeFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<SessionFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  end_at?: InputMaybe<DatetimeFilter>;
  event_id?: InputMaybe<StringFilter>;
  expected_attendees?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<SessionFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<SessionFilter>>;
  start_at?: InputMaybe<DatetimeFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
};

export type SessionInsertInput = {
  actual_end_at?: InputMaybe<Scalars['Datetime']['input']>;
  actual_start_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_at?: InputMaybe<Scalars['Datetime']['input']>;
  event_id?: InputMaybe<Scalars['String']['input']>;
  expected_attendees?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_at?: InputMaybe<Scalars['Datetime']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type SessionInsertResponse = {
  __typename?: 'sessionInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Session>;
};

export type SessionOrderBy = {
  actual_end_at?: InputMaybe<OrderByDirection>;
  actual_start_at?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  end_at?: InputMaybe<OrderByDirection>;
  event_id?: InputMaybe<OrderByDirection>;
  expected_attendees?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  start_at?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
};

export type SessionUpdateInput = {
  actual_end_at?: InputMaybe<Scalars['Datetime']['input']>;
  actual_start_at?: InputMaybe<Scalars['Datetime']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_at?: InputMaybe<Scalars['Datetime']['input']>;
  event_id?: InputMaybe<Scalars['String']['input']>;
  expected_attendees?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  start_at?: InputMaybe<Scalars['Datetime']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type SessionUpdateResponse = {
  __typename?: 'sessionUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Session>;
};

export type User = Node & {
  __typename?: 'user';
  address?: Maybe<Scalars['Opaque']['output']>;
  avatar_url?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['Datetime']['output'];
  date_of_birth?: Maybe<Scalars['Datetime']['output']>;
  email: Scalars['String']['output'];
  email_verified: Scalars['Boolean']['output'];
  family_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Gender>;
  given_name?: Maybe<Scalars['String']['output']>;
  ic_number?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  no: Scalars['Int']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  phone_number?: Maybe<Scalars['String']['output']>;
  phone_number_verified?: Maybe<Scalars['Boolean']['output']>;
  updated_at: Scalars['Datetime']['output'];
  user_connect_groupCollection?: Maybe<User_Connect_GroupConnection>;
  user_ministryCollection?: Maybe<User_MinistryConnection>;
  username?: Maybe<Scalars['String']['output']>;
};


export type UserUser_Connect_GroupCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_Connect_GroupFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_Connect_GroupOrderBy>>;
};


export type UserUser_MinistryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_MinistryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_MinistryOrderBy>>;
};

export type UserConnection = {
  __typename?: 'userConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserDeleteResponse = {
  __typename?: 'userDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User>;
};

export type UserEdge = {
  __typename?: 'userEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserFilter = {
  address?: InputMaybe<OpaqueFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UserFilter>>;
  avatar_url?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  date_of_birth?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  email_verified?: InputMaybe<BooleanFilter>;
  family_name?: InputMaybe<StringFilter>;
  gender?: InputMaybe<GenderFilter>;
  given_name?: InputMaybe<StringFilter>;
  ic_number?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nickname?: InputMaybe<StringFilter>;
  no?: InputMaybe<IntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UserFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UserFilter>>;
  phone_number?: InputMaybe<StringFilter>;
  phone_number_verified?: InputMaybe<BooleanFilter>;
  updated_at?: InputMaybe<DatetimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserInsertInput = {
  address?: InputMaybe<Scalars['Opaque']['input']>;
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  date_of_birth?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['Boolean']['input']>;
  family_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  given_name?: InputMaybe<Scalars['String']['input']>;
  ic_number?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  phone_number_verified?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserInsertResponse = {
  __typename?: 'userInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User>;
};

export type UserOrderBy = {
  address?: InputMaybe<OrderByDirection>;
  avatar_url?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  date_of_birth?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  email_verified?: InputMaybe<OrderByDirection>;
  family_name?: InputMaybe<OrderByDirection>;
  gender?: InputMaybe<OrderByDirection>;
  given_name?: InputMaybe<OrderByDirection>;
  ic_number?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<OrderByDirection>;
  nickname?: InputMaybe<OrderByDirection>;
  no?: InputMaybe<OrderByDirection>;
  phone_number?: InputMaybe<OrderByDirection>;
  phone_number_verified?: InputMaybe<OrderByDirection>;
  updated_at?: InputMaybe<OrderByDirection>;
  username?: InputMaybe<OrderByDirection>;
};

export type UserUpdateInput = {
  address?: InputMaybe<Scalars['Opaque']['input']>;
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  date_of_birth?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified?: InputMaybe<Scalars['Boolean']['input']>;
  family_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  given_name?: InputMaybe<Scalars['String']['input']>;
  ic_number?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  phone_number_verified?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['Datetime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateResponse = {
  __typename?: 'userUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User>;
};

export type User_Connect_Group = Node & {
  __typename?: 'user_connect_group';
  connect_group: Connect_Group;
  connect_group_id: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pastoral_role: Pastoral_Role;
  user: User;
  user_id: Scalars['String']['output'];
  user_role: Scalars['String']['output'];
};

export type User_Connect_GroupConnection = {
  __typename?: 'user_connect_groupConnection';
  edges: Array<User_Connect_GroupEdge>;
  pageInfo: PageInfo;
};

export type User_Connect_GroupDeleteResponse = {
  __typename?: 'user_connect_groupDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Connect_Group>;
};

export type User_Connect_GroupEdge = {
  __typename?: 'user_connect_groupEdge';
  cursor: Scalars['String']['output'];
  node: User_Connect_Group;
};

export type User_Connect_GroupFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<User_Connect_GroupFilter>>;
  connect_group_id?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<User_Connect_GroupFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<User_Connect_GroupFilter>>;
  user_id?: InputMaybe<StringFilter>;
  user_role?: InputMaybe<StringFilter>;
};

export type User_Connect_GroupInsertInput = {
  connect_group_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  user_role?: InputMaybe<Scalars['String']['input']>;
};

export type User_Connect_GroupInsertResponse = {
  __typename?: 'user_connect_groupInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Connect_Group>;
};

export type User_Connect_GroupOrderBy = {
  connect_group_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
  user_role?: InputMaybe<OrderByDirection>;
};

export type User_Connect_GroupUpdateInput = {
  connect_group_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  user_role?: InputMaybe<Scalars['String']['input']>;
};

export type User_Connect_GroupUpdateResponse = {
  __typename?: 'user_connect_groupUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Connect_Group>;
};

export type User_Ministry = Node & {
  __typename?: 'user_ministry';
  ministry: Ministry;
  ministry_id: Scalars['String']['output'];
  ministry_role: Ministry_Role;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  user: User;
  user_id: Scalars['String']['output'];
  user_role: Scalars['String']['output'];
};

export type User_MinistryConnection = {
  __typename?: 'user_ministryConnection';
  edges: Array<User_MinistryEdge>;
  pageInfo: PageInfo;
};

export type User_MinistryDeleteResponse = {
  __typename?: 'user_ministryDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Ministry>;
};

export type User_MinistryEdge = {
  __typename?: 'user_ministryEdge';
  cursor: Scalars['String']['output'];
  node: User_Ministry;
};

export type User_MinistryFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<User_MinistryFilter>>;
  ministry_id?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<User_MinistryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<User_MinistryFilter>>;
  user_id?: InputMaybe<StringFilter>;
  user_role?: InputMaybe<StringFilter>;
};

export type User_MinistryInsertInput = {
  ministry_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  user_role?: InputMaybe<Scalars['String']['input']>;
};

export type User_MinistryInsertResponse = {
  __typename?: 'user_ministryInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Ministry>;
};

export type User_MinistryOrderBy = {
  ministry_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
  user_role?: InputMaybe<OrderByDirection>;
};

export type User_MinistryUpdateInput = {
  ministry_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  user_role?: InputMaybe<Scalars['String']['input']>;
};

export type User_MinistryUpdateResponse = {
  __typename?: 'user_ministryUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Ministry>;
};
