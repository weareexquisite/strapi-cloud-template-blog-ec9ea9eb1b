import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    adminPermissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::permission'
    >;
    adminUserOwner: Schema.Attribute.Relation<'manyToOne', 'admin::user'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    kind: Schema.Attribute.Enumeration<['content-api', 'admin']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'content-api'>;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    apiToken: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    metadata: Schema.Attribute.JSON & Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    apiTokens: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordTokenExpiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAuthorAuthor extends Struct.CollectionTypeSchema {
  collectionName: 'authors';
  info: {
    description: 'Article authors and contributors';
    displayName: 'Author';
    pluralName: 'authors';
    singularName: 'author';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email;
    facebook: Schema.Attribute.String;
    firstName: Schema.Attribute.String;
    lastName: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::author.author'
    > &
      Schema.Attribute.Private;
    longBio: Schema.Attribute.RichText;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    shortBio: Schema.Attribute.Text;
    slug: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    twitter: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    website: Schema.Attribute.String;
    wp_id: Schema.Attribute.Integer & Schema.Attribute.Unique;
  };
}

export interface ApiBadgeBadge extends Struct.CollectionTypeSchema {
  collectionName: 'badges';
  info: {
    description: 'Earned Badges programme (Section 17): Quality Lender, Customer Favourite, Enduring Excellence, Video Verified';
    displayName: 'Badge';
    pluralName: 'badges';
    singularName: 'badge';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    criteria_text: Schema.Attribute.RichText & Schema.Attribute.Required;
    lenders: Schema.Attribute.Relation<'manyToMany', 'api::lender.lender'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::badge.badge'> &
      Schema.Attribute.Private;
    medal: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    review_date: Schema.Attribute.Date & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    withdrawn: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    years_earned: Schema.Attribute.Component<'badge.year-earned', true>;
  };
}

export interface ApiCategoryCategory extends Struct.CollectionTypeSchema {
  collectionName: 'categories';
  info: {
    description: 'Flat taxonomy terms migrated from WP (loan/credit-card/card-type/card-provider/company/videos categories)';
    displayName: 'Category';
    pluralName: 'categories';
    singularName: 'category';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    action_log_refs: Schema.Attribute.JSON;
    contentAfterTable: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    faqContent: Schema.Attribute.Component<'lender.faq-item', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.String;
    taxonomy: Schema.Attribute.Enumeration<
      [
        'loan_category',
        'credit_card_category',
        'card_type',
        'card_provider',
        'company_category',
        'videos_category',
      ]
    > &
      Schema.Attribute.Required;
    tldr_answer: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    wp_id: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ApiCompanyProductCompanyProduct
  extends Struct.CollectionTypeSchema {
  collectionName: 'company_products';
  info: {
    description: 'Company Data Standard product record - one block per product, never blended (financial sphere package)';
    displayName: 'Company Product';
    pluralName: 'company-products';
    singularName: 'company-product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    amount_max: Schema.Attribute.BigInteger;
    amount_min: Schema.Attribute.BigInteger;
    company: Schema.Attribute.Relation<'manyToOne', 'api::company.company'>;
    confidence: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fees: Schema.Attribute.RichText;
    good_to_know: Schema.Attribute.Text;
    headline_rate: Schema.Attribute.String;
    insurance_protection: Schema.Attribute.String;
    interest_rate: Schema.Attribute.Decimal;
    last_verified: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company-product.company-product'
    > &
      Schema.Attribute.Private;
    minimums: Schema.Attribute.Text;
    monthly_fee: Schema.Attribute.Decimal;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    product_type: Schema.Attribute.Enumeration<
      [
        'savings_account',
        'chequing_account',
        'hybrid_account',
        'gic',
        'prepaid_card',
        'credit_builder',
        'debt_management_plan',
        'debt_restructuring',
        'consumer_proposal_admin',
        'insurance',
        'money_transfer',
        'business_account',
        'payment_processing',
        'accounting_software',
        'incorporation_service',
        'payroll_service',
        'other',
      ]
    > &
      Schema.Attribute.Required;
    province_overrides: Schema.Attribute.Component<
      'product.province-override',
      true
    >;
    provinces_served: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    rate_basis: Schema.Attribute.String;
    rates_last_reviewed: Schema.Attribute.Date;
    referral_url: Schema.Attribute.String;
    source_url: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCompanyCompany extends Struct.CollectionTypeSchema {
  collectionName: 'companies';
  info: {
    description: 'Financial-services companies migrated from WP CPT "company"';
    displayName: 'Company';
    pluralName: 'companies';
    singularName: 'company';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    action_log_refs: Schema.Attribute.JSON;
    addFaqToThePage: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    amount: Schema.Attribute.String;
    analyst: Schema.Attribute.String;
    availability: Schema.Attribute.String;
    best_for: Schema.Attribute.Text;
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    callCenterTiming: Schema.Attribute.String;
    canadianStates: Schema.Attribute.JSON;
    categories: Schema.Attribute.JSON;
    cities: Schema.Attribute.JSON;
    company_type: Schema.Attribute.Enumeration<
      [
        'bank',
        'credit_union',
        'debt_relief',
        'credit_counselling',
        'insolvency_trustee',
        'fintech',
        'other',
      ]
    >;
    companyCategories: Schema.Attribute.Relation<
      'manyToMany',
      'api::category.category'
    >;
    confidence: Schema.Attribute.String;
    cons: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    customField1: Schema.Attribute.Text;
    customField2: Schema.Attribute.Text;
    customField3: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    facebook: Schema.Attribute.String;
    faqContent: Schema.Attribute.Component<'lender.faq-item', true>;
    former_names: Schema.Attribute.JSON;
    founded: Schema.Attribute.String;
    hoAddress: Schema.Attribute.Text;
    howLongInBusiness: Schema.Attribute.String;
    howManyBranches: Schema.Attribute.String;
    hq_province: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    introVideo: Schema.Attribute.Text;
    last_verified: Schema.Attribute.Date;
    legal_name: Schema.Attribute.String;
    linkedIn: Schema.Attribute.String;
    linkTarget: Schema.Attribute.String;
    loanOffered: Schema.Attribute.Component<'company.loan-offered', true>;
    loanOfferedInfo: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::company.company'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    not_for: Schema.Attribute.Text;
    numberOfCustomers: Schema.Attribute.String;
    one_liner: Schema.Attribute.Text;
    parent_company: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    phone2: Schema.Attribute.String;
    physicalLocations: Schema.Attribute.Text;
    pinterest: Schema.Attribute.String;
    primaryCompanyCategory: Schema.Attribute.Relation<
      'oneToOne',
      'api::category.category'
    >;
    products: Schema.Attribute.Relation<
      'oneToMany',
      'api::company-product.company-product'
    >;
    pros: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    rates_last_reviewed: Schema.Attribute.Date;
    referral_url: Schema.Attribute.String;
    regulator_registration: Schema.Attribute.String;
    review_date: Schema.Attribute.Date;
    reviewed_by: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'name'>;
    source_url: Schema.Attribute.String;
    sphere: Schema.Attribute.Enumeration<['consumer', 'business']>;
    stage: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['active', 'acquired', 'pivoted', 'wound_down']
    >;
    supportOffer: Schema.Attribute.Component<'lender.support-offer', true>;
    tldr_answer: Schema.Attribute.Text;
    totalFunded: Schema.Attribute.String;
    trading_name: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    verification_notes: Schema.Attribute.Text;
    videos: Schema.Attribute.Component<'lender.video', true>;
    website: Schema.Attribute.String;
    wp_id: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    youtube: Schema.Attribute.String;
  };
}

export interface ApiCreditCardCreditCard extends Struct.CollectionTypeSchema {
  collectionName: 'credit_cards';
  info: {
    description: 'Credit cards migrated from WP CPT "credit-cards"';
    displayName: 'Credit Card';
    pluralName: 'credit-cards';
    singularName: 'credit-card';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    action_log_refs: Schema.Attribute.JSON;
    annual_fee_amount: Schema.Attribute.Decimal;
    annualFee: Schema.Attribute.String;
    balanceTransferApr: Schema.Attribute.String;
    card_type: Schema.Attribute.Enumeration<
      [
        'cash_back',
        'travel',
        'low_interest',
        'secured',
        'credit_builder',
        'no_fee',
        'rewards',
        'student',
        'business',
        'other',
      ]
    >;
    cardImage: Schema.Attribute.Media<'images'>;
    cardIssuer: Schema.Attribute.String;
    cardName: Schema.Attribute.String & Schema.Attribute.Required;
    cardProviders: Schema.Attribute.Relation<
      'manyToMany',
      'api::category.category'
    >;
    cardSummary: Schema.Attribute.RichText;
    cardTypes: Schema.Attribute.Relation<
      'manyToMany',
      'api::category.category'
    >;
    cash_advance_apr_value: Schema.Attribute.Decimal;
    cashAdvanceApr: Schema.Attribute.String;
    checked_date: Schema.Attribute.Date;
    compliance_copy: Schema.Attribute.Text;
    cons: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    credit_needed: Schema.Attribute.Enumeration<
      ['any', 'poor', 'fair', 'good', 'excellent']
    >;
    creditCardCategories: Schema.Attribute.Relation<
      'manyToMany',
      'api::category.category'
    >;
    ctaUrl: Schema.Attribute.String;
    currencyConversionFee: Schema.Attribute.String;
    issuerLogo: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::credit-card.credit-card'
    > &
      Schema.Attribute.Private;
    min_deposit: Schema.Attribute.Decimal;
    minimumCreditScore: Schema.Attribute.String;
    minimumDepositToOpen: Schema.Attribute.String;
    ourRating: Schema.Attribute.Decimal;
    ourVerdict: Schema.Attribute.Text;
    primaryCreditCardCategory: Schema.Attribute.Relation<
      'oneToOne',
      'api::category.category'
    >;
    pros: Schema.Attribute.RichText;
    province_overrides: Schema.Attribute.Component<
      'product.province-override',
      true
    >;
    publishedAt: Schema.Attribute.DateTime;
    purchase_apr_value: Schema.Attribute.Decimal;
    purchaseApr: Schema.Attribute.String;
    referral_url: Schema.Attribute.String;
    requirements: Schema.Attribute.Text;
    rewards: Schema.Attribute.Text;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'cardName'>;
    tldr_answer: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    welcomeOffer: Schema.Attribute.Text;
    wp_id: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ApiDebtSolutionDebtSolution
  extends Struct.CollectionTypeSchema {
  collectionName: 'debt_solutions';
  info: {
    description: 'The four debt paths powering the Debt Solutions finder and education module (Section 18)';
    displayName: 'Debt Solution';
    pluralName: 'debt-solutions';
    singularName: 'debt-solution';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    action_log_refs: Schema.Attribute.JSON;
    best_when: Schema.Attribute.String & Schema.Attribute.Required;
    cost_impact: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    credit_impact: Schema.Attribute.String & Schema.Attribute.Required;
    cta_label: Schema.Attribute.String;
    cta_url: Schema.Attribute.String;
    debt_reduced: Schema.Attribute.String & Schema.Attribute.Required;
    detail: Schema.Attribute.RichText;
    faqContent: Schema.Attribute.Component<'lender.faq-item', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::debt-solution.debt-solution'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    path_type: Schema.Attribute.Enumeration<
      [
        'debt_consolidation_loan',
        'credit_counselling',
        'consumer_proposal',
        'bankruptcy',
      ]
    > &
      Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    routes_to_funnel: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    sort_order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    summary: Schema.Attribute.Text & Schema.Attribute.Required;
    tldr_answer: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiExpertExpert extends Struct.CollectionTypeSchema {
  collectionName: 'experts';
  info: {
    description: 'Author/expert E-E-A-T entities migrated from WP CPT "experts"';
    displayName: 'Expert';
    pluralName: 'experts';
    singularName: 'expert';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bio: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    designation: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::expert.expert'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    photo: Schema.Attribute.Media<'images'>;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'name'>;
    socialMediaLinks: Schema.Attribute.JSON;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    wp_id: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ApiGeoStatGeoStat extends Struct.CollectionTypeSchema {
  collectionName: 'geo_stats';
  info: {
    description: 'Location-page first-party stats, one row per geography x vertical, keyed vertical/geo_code (LOC-03). 125 rows for H1 2026.';
    displayName: 'Geo Stat';
    pluralName: 'geo-stats';
    singularName: 'geo-stat';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    application_count: Schema.Attribute.Integer;
    avg_by_purpose: Schema.Attribute.JSON;
    avg_request: Schema.Attribute.Integer;
    band_coverage: Schema.Attribute.JSON;
    band_distribution: Schema.Attribute.JSON;
    city_share_within_province: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    fair_poor_share: Schema.Attribute.Decimal;
    fair_poor_suppress: Schema.Attribute.Boolean;
    geo_code: Schema.Attribute.String & Schema.Attribute.Required;
    geo_name: Schema.Attribute.String;
    geo_type: Schema.Attribute.Enumeration<['national', 'province', 'city']> &
      Schema.Attribute.Required;
    ingest_notes: Schema.Attribute.JSON;
    key: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::geo-stat.geo-stat'
    > &
      Schema.Attribute.Private;
    metric_flags: Schema.Attribute.JSON;
    period: Schema.Attribute.String & Schema.Attribute.Required;
    prior_period: Schema.Attribute.String;
    province: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    purpose_distribution: Schema.Attribute.JSON;
    sample_n: Schema.Attribute.Integer;
    share_under_10k: Schema.Attribute.Decimal;
    share_under_5k: Schema.Attribute.Decimal;
    suppress: Schema.Attribute.Boolean & Schema.Attribute.Required;
    suppress_reasons: Schema.Attribute.JSON;
    top_industries: Schema.Attribute.JSON;
    top_purpose: Schema.Attribute.String;
    unknown_band_share: Schema.Attribute.Decimal;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    verify: Schema.Attribute.Boolean & Schema.Attribute.Required;
    verify_reasons: Schema.Attribute.JSON;
    vertical: Schema.Attribute.Enumeration<
      [
        'personal',
        'payday',
        'business',
        'auto',
        'home-equity',
        'mortgage',
        'equipment',
      ]
    > &
      Schema.Attribute.Required;
    yoy: Schema.Attribute.JSON;
  };
}

export interface ApiGlobalSettingGlobalSetting extends Struct.SingleTypeSchema {
  collectionName: 'global_setting';
  info: {
    description: 'Site-wide chrome from the WP ACF Options page (footer, social, contact, header)';
    displayName: 'Global Settings';
    pluralName: 'global-settings';
    singularName: 'global-setting';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    footerLogo: Schema.Attribute.Media<'images'>;
    footerSslImage: Schema.Attribute.Media<'images'>;
    getInTouchEmail: Schema.Attribute.String;
    getInTouchLocation: Schema.Attribute.Text;
    getInTouchPhone: Schema.Attribute.String;
    getInTouchTitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::global-setting.global-setting'
    > &
      Schema.Attribute.Private;
    logosAsSeenOn: Schema.Attribute.Component<'global.logo-item', true>;
    mainDescription: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    quickLinks: Schema.Attribute.Component<'global.quick-link', true>;
    quickLinksTitle: Schema.Attribute.String;
    recentArticlesTitle: Schema.Attribute.String;
    socialFacebook: Schema.Attribute.String;
    socialInstagram: Schema.Attribute.String;
    socialLinkedin: Schema.Attribute.String;
    socialX: Schema.Attribute.String;
    socialYoutube: Schema.Attribute.String;
    textBelowHeader: Schema.Attribute.String;
    titleAsSeenOn: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiGovernmentProgramGovernmentProgram
  extends Struct.CollectionTypeSchema {
  collectionName: 'government_programs';
  info: {
    description: 'Government financing cluster: 30 program records feeding the hub, checker, program and browse pages (government financing package, Aug 2026)';
    displayName: 'Government Program';
    pluralName: 'government-programs';
    singularName: 'government-program';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    action_log_refs: Schema.Attribute.JSON;
    administered_by: Schema.Attribute.String;
    amount_max: Schema.Attribute.BigInteger;
    amount_min: Schema.Attribute.BigInteger;
    amount_structure: Schema.Attribute.Text;
    apply_through: Schema.Attribute.Text;
    confidence: Schema.Attribute.String;
    cost: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    eligibility: Schema.Attribute.JSON;
    entity_label: Schema.Attribute.String;
    entity_type: Schema.Attribute.Enumeration<
      [
        'federal_government',
        'federal_government_via_partners',
        'provincial_government',
        'provincial_agency',
        'crown_corporation',
        'provincial_crown_corporation',
        'non_profit',
        'industry_non_profit',
        'indigenous_financial_institutions',
      ]
    >;
    faqContent: Schema.Attribute.Component<'lender.faq-item', true>;
    guarantee_note: Schema.Attribute.Text;
    industries: Schema.Attribute.JSON;
    intake_note: Schema.Attribute.Text;
    intake_status: Schema.Attribute.String;
    last_verified: Schema.Attribute.Date;
    level: Schema.Attribute.Enumeration<
      ['federal', 'federal_regional', 'provincial']
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::government-program.government-program'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    notable: Schema.Attribute.Text;
    one_liner: Schema.Attribute.Text;
    page_url: Schema.Attribute.String;
    province: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    repayable: Schema.Attribute.Boolean;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    short_name: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'name'> & Schema.Attribute.Required;
    source_url: Schema.Attribute.String;
    timeline_weeks: Schema.Attribute.String;
    tldr_answer: Schema.Attribute.Text;
    type: Schema.Attribute.Enumeration<
      [
        'grant',
        'loan',
        'loan_guarantee',
        'tax_credit',
        'wage_subsidy',
        'training_grant',
        'mixed',
        'directory',
      ]
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    use_of_funds: Schema.Attribute.JSON;
    variants: Schema.Attribute.JSON;
    verify_note: Schema.Attribute.Text;
  };
}

export interface ApiHomepageHomepage extends Struct.SingleTypeSchema {
  collectionName: 'homepage';
  info: {
    description: 'Front-page content (hero, why-choose, deals, reviews, FAQ). Dynamic lists queried by frontend.';
    displayName: 'Homepage';
    pluralName: 'homepages';
    singularName: 'homepage';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    dealWithImage: Schema.Attribute.Media<'images'>;
    dealWithText: Schema.Attribute.Text;
    dealWithTitle: Schema.Attribute.String;
    faqList: Schema.Attribute.Component<'lender.faq-item', true>;
    faqTitle: Schema.Attribute.String;
    findLoansApplyCtaTitle: Schema.Attribute.String;
    findLoansApplyCtaUrl: Schema.Attribute.String;
    findLoansTitle: Schema.Attribute.String;
    googleRating: Schema.Attribute.String;
    heroReviewsText: Schema.Attribute.String;
    heroTrustedByText: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homepage.homepage'
    > &
      Schema.Attribute.Private;
    moreImage: Schema.Attribute.Media<'images'>;
    moreItems: Schema.Attribute.Component<'home.more-item', true>;
    moreTitle: Schema.Attribute.String;
    productsList: Schema.Attribute.Component<'home.product-link', true>;
    publishedAt: Schema.Attribute.DateTime;
    reviewsText: Schema.Attribute.Text;
    reviewsTitle: Schema.Attribute.String;
    trustedByLogos: Schema.Attribute.Component<'home.trusted-logo', true>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    whyImage: Schema.Attribute.Media<'images'>;
    whyPoints: Schema.Attribute.Component<'home.text-point', true>;
    whyTitle: Schema.Attribute.String;
  };
}

export interface ApiLenderProductLenderProduct
  extends Struct.CollectionTypeSchema {
  collectionName: 'lender_products';
  info: {
    description: 'Per-product structured record - the lender data standard (Section 5)';
    displayName: 'Lender Product';
    pluralName: 'lender-products';
    singularName: 'lender-product';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    amount_max: Schema.Attribute.BigInteger;
    amount_min: Schema.Attribute.BigInteger;
    apply_slug: Schema.Attribute.String;
    audience: Schema.Attribute.Enumeration<['business', 'personal']> &
      Schema.Attribute.Required;
    completeness_missing: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    docs_required: Schema.Attribute.JSON;
    fees: Schema.Attribute.RichText;
    funding_speed_hours: Schema.Attribute.Integer;
    good_to_know: Schema.Attribute.Text;
    income_types_accepted: Schema.Attribute.JSON;
    is_complete: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    lender: Schema.Attribute.Relation<'manyToOne', 'api::lender.lender'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::lender-product.lender-product'
    > &
      Schema.Attribute.Private;
    min_credit_band: Schema.Attribute.Enumeration<
      ['any', 'poor', 'fair', 'good', 'excellent']
    >;
    min_credit_score: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 900;
          min: 300;
        },
        number
      >;
    min_income_monthly: Schema.Attribute.Integer;
    min_monthly_revenue: Schema.Attribute.Integer;
    min_time_in_business_months: Schema.Attribute.Integer;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    prepayment: Schema.Attribute.Text;
    product_type: Schema.Attribute.Enumeration<
      [
        'term_loan',
        'line_of_credit',
        'merchant_cash_advance',
        'equipment_financing',
        'invoice_factoring',
        'instalment_loan',
        'personal_line_of_credit',
        'secured_personal_loan',
        'home_equity_loan',
        'mortgage',
        'auto_loan',
        'truck_loan',
        'payday_loan',
        'other',
      ]
    > &
      Schema.Attribute.Required;
    province_overrides: Schema.Attribute.Component<
      'product.province-override',
      true
    >;
    provinces_served: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    rate_max: Schema.Attribute.Decimal;
    rate_min: Schema.Attribute.Decimal;
    rate_type: Schema.Attribute.Enumeration<
      ['apr', 'factor', 'monthly', 'fee_per_100', 'fee_based']
    >;
    rates_last_reviewed: Schema.Attribute.Date;
    term_max_months: Schema.Attribute.Integer;
    term_min_months: Schema.Attribute.Integer;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiLenderLender extends Struct.CollectionTypeSchema {
  collectionName: 'lenders';
  info: {
    description: 'Loan providers migrated from WordPress CPT "lenders"';
    displayName: 'Lender';
    pluralName: 'lenders';
    singularName: 'lender';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    action_log_refs: Schema.Attribute.JSON;
    addFaqToThePage: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    alternatives: Schema.Attribute.Relation<'oneToMany', 'api::lender.lender'>;
    amount: Schema.Attribute.String;
    amountHighForFilters: Schema.Attribute.Integer;
    amountLowForFilters: Schema.Attribute.Integer;
    applyButtonTarget: Schema.Attribute.String;
    applyButtonUrl: Schema.Attribute.String;
    availability: Schema.Attribute.String;
    badge_years: Schema.Attribute.JSON;
    best_for: Schema.Attribute.Text;
    callCenterTiming: Schema.Attribute.String;
    canadianStates: Schema.Attribute.JSON;
    cities: Schema.Attribute.JSON;
    cons: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    creditScore: Schema.Attribute.JSON;
    customers_served: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    earned_badges: Schema.Attribute.Relation<'manyToMany', 'api::badge.badge'>;
    email: Schema.Attribute.Email;
    facebook: Schema.Attribute.String;
    faqContent: Schema.Attribute.Component<'lender.faq-item', true>;
    founded_year: Schema.Attribute.Integer;
    hoAddress: Schema.Attribute.Text;
    howLongInBusiness: Schema.Attribute.String;
    howManyBranches: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    interestRate: Schema.Attribute.String;
    introVideo: Schema.Attribute.Text;
    lenderBadges: Schema.Attribute.JSON;
    linkedIn: Schema.Attribute.String;
    loanCategories: Schema.Attribute.Relation<
      'manyToMany',
      'api::category.category'
    >;
    loanOffered: Schema.Attribute.Component<'lender.loan-offered', true>;
    loanOfferedInfo: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::lender.lender'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    not_for: Schema.Attribute.Text;
    numberOfCustomers: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    phone2: Schema.Attribute.String;
    preferred_lender_id: Schema.Attribute.Integer;
    primaryLoanCategory: Schema.Attribute.Relation<
      'oneToOne',
      'api::category.category'
    >;
    products: Schema.Attribute.Relation<
      'oneToMany',
      'api::lender-product.lender-product'
    >;
    productType: Schema.Attribute.JSON;
    pros: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    rates_last_reviewed: Schema.Attribute.Date;
    review_date: Schema.Attribute.Date;
    reviewed_by: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
    reviews: Schema.Attribute.Relation<'oneToMany', 'api::review.review'>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    showArticlesSection: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    showInTabs: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    slug: Schema.Attribute.UID<'name'>;
    smarterLoansReview: Schema.Attribute.RichText;
    sortOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    state: Schema.Attribute.String;
    supportOffer: Schema.Attribute.Component<'lender.support-offer', true>;
    terms: Schema.Attribute.String;
    tldr_answer: Schema.Attribute.Text;
    totalFunded: Schema.Attribute.String;
    trustedLender: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    twitter: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    verified_by_lender: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    verified_date: Schema.Attribute.Date;
    videos: Schema.Attribute.Component<'lender.video', true>;
    website: Schema.Attribute.String;
    wp_id: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    youtube: Schema.Attribute.String;
  };
}

export interface ApiLocalProgramLocalProgram
  extends Struct.CollectionTypeSchema {
  collectionName: 'local_programs';
  info: {
    description: 'Location-page local programs (LOC-03). Created empty; populated in a later pass.';
    displayName: 'Local Program';
    pluralName: 'local-programs';
    singularName: 'local-program';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    geo_code: Schema.Attribute.String & Schema.Attribute.Required;
    geo_level: Schema.Attribute.Enumeration<['federal', 'province', 'city']>;
    last_verified: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::local-program.local-program'
    > &
      Schema.Attribute.Private;
    one_liner: Schema.Attribute.Text;
    program_name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String;
  };
}

export interface ApiLocationPageContentLocationPageContent
  extends Struct.CollectionTypeSchema {
  collectionName: 'location_page_contents';
  info: {
    description: 'Per-page editorial modules for location pages (LOC-03 Wave 1, 46 pages). Tokens like [lender_count] are stored verbatim and resolve at render.';
    displayName: 'Location Page Content';
    pluralName: 'location-page-contents';
    singularName: 'location-page-content';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    city_lender_facts: Schema.Attribute.JSON;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    faqs: Schema.Attribute.JSON;
    geo_code: Schema.Attribute.String & Schema.Attribute.Required;
    level: Schema.Attribute.Enumeration<['provincial', 'city']>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::location-page-content.location-page-content'
    > &
      Schema.Attribute.Private;
    meta_description: Schema.Attribute.Text;
    meta_title: Schema.Attribute.String;
    page_url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    regulator: Schema.Attribute.String;
    rules_block: Schema.Attribute.JSON;
    rules_line_override: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    vertical: Schema.Attribute.Enumeration<
      [
        'personal',
        'payday',
        'business',
        'auto',
        'home-equity',
        'mortgage',
        'equipment',
      ]
    >;
  };
}

export interface ApiPagePage extends Struct.CollectionTypeSchema {
  collectionName: 'pages';
  info: {
    description: 'Static pages migrated from WP "page" type (ACF-heavy; body via fallback chain)';
    displayName: 'Page';
    pluralName: 'pages';
    singularName: 'page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    action_log_refs: Schema.Attribute.JSON;
    addFaqToThePage: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    author: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
    body: Schema.Attribute.RichText;
    buttonLink: Schema.Attribute.Text;
    buttonTitle: Schema.Attribute.Text;
    callToAction: Schema.Attribute.Text;
    checkmark1: Schema.Attribute.Text;
    checkmark2: Schema.Attribute.Text;
    checkmark3: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ctaUrl: Schema.Attribute.Text;
    faqContent: Schema.Attribute.Component<'lender.faq-item', true>;
    featuredImageUrl: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
    leftContent: Schema.Attribute.RichText;
    loanTypeDetail: Schema.Attribute.RichText;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::page.page'> &
      Schema.Attribute.Private;
    needsReview: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    pageDescription: Schema.Attribute.Text;
    pageType: Schema.Attribute.Enumeration<['city', 'loan']>;
    parent: Schema.Attribute.Relation<'oneToOne', 'api::page.page'>;
    personalLoanOffered: Schema.Attribute.Component<
      'page.personal-loan-offered',
      true
    >;
    publishedAt: Schema.Attribute.DateTime;
    relatedLenders: Schema.Attribute.Relation<
      'oneToMany',
      'api::lender.lender'
    >;
    reviewed_date: Schema.Attribute.Date;
    reviewer: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
    reviewNote: Schema.Attribute.Text;
    rightContent: Schema.Attribute.RichText;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    showPageTitleAndBanner: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    tldr_answer: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    wp_id: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ApiPostPost extends Struct.CollectionTypeSchema {
  collectionName: 'posts';
  info: {
    description: 'Blog posts migrated from WP "post" type (flat blog \u2014 no categories/tags)';
    displayName: 'Post';
    pluralName: 'posts';
    singularName: 'post';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    action_log_refs: Schema.Attribute.JSON;
    author: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
    body: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    excerpt: Schema.Attribute.Text;
    featuredImage: Schema.Attribute.Media<'images'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::post.post'> &
      Schema.Attribute.Private;
    needsReview: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    publishDate: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    reviewed_date: Schema.Attribute.Date;
    reviewer: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
    reviewNote: Schema.Attribute.Text;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    tldr_answer: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    wp_id: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ApiProvincialRuleProvincialRule
  extends Struct.CollectionTypeSchema {
  collectionName: 'provincial_rules';
  info: {
    description: 'Regulator-verified lending rules per province/territory. Fields mirror provincial-rules-matrix-v2 columns. RENDER GATE: content whose confidence is VERIFY or UNRESOLVED must not render on live pages.';
    displayName: 'Provincial Rule';
    pluralName: 'provincial-rules';
    singularName: 'provincial-rule';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    confidence: Schema.Attribute.String;
    cooling_off: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    extended_payment_plan: Schema.Attribute.Text;
    high_cost_credit_regime: Schema.Attribute.Text;
    last_reviewed: Schema.Attribute.Date;
    licence_register: Schema.Attribute.String;
    licensing_regulator: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::provincial-rule.provincial-rule'
    > &
      Schema.Attribute.Private;
    notes: Schema.Attribute.Text;
    payday_cap_per_100: Schema.Attribute.Decimal;
    payday_max_loan: Schema.Attribute.String;
    payday_max_pct_net_pay: Schema.Attribute.String;
    payday_max_term_days: Schema.Attribute.String;
    payday_regime_designated: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    region: Schema.Attribute.String & Schema.Attribute.Required;
    rollover_ban: Schema.Attribute.String;
    source_url: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiReportReport extends Struct.CollectionTypeSchema {
  collectionName: 'reports';
  info: {
    description: 'Smarter Loans Research editions (research hub package, Aug 2026)';
    displayName: 'Report';
    pluralName: 'reports';
    singularName: 'report';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    action_log_refs: Schema.Attribute.JSON;
    author: Schema.Attribute.Relation<'manyToOne', 'api::author.author'>;
    cadence: Schema.Attribute.Enumeration<['quarterly', 'annual']> &
      Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    data_period_end: Schema.Attribute.Date;
    data_period_start: Schema.Attribute.Date;
    dek: Schema.Attribute.Text;
    edition_label: Schema.Attribute.String;
    executive_quote: Schema.Attribute.Text;
    faqContent: Schema.Attribute.Component<'lender.faq-item', true>;
    hero_figure: Schema.Attribute.Media<'images'>;
    hub_figure: Schema.Attribute.Media<'images'>;
    key_findings: Schema.Attribute.Component<'report.key-finding', true>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::report.report'
    > &
      Schema.Attribute.Private;
    methodology: Schema.Attribute.RichText & Schema.Attribute.Required;
    next_release_label: Schema.Attribute.String;
    next_release_month: Schema.Attribute.String;
    pdf: Schema.Attribute.Media<'files'>;
    period_label: Schema.Attribute.String;
    permanent_slug: Schema.Attribute.UID<'title'> & Schema.Attribute.Required;
    publication_date: Schema.Attribute.Date;
    publishedAt: Schema.Attribute.DateTime;
    quote_attribution: Schema.Attribute.String;
    report_family: Schema.Attribute.Enumeration<
      [
        'lending_demand_index',
        'loan_purpose',
        'business_funding_by_industry',
        'provincial_snapshots',
        'requested_amounts_benchmark',
        'credit_band_demand_mix',
        'state_of_borrowing',
      ]
    > &
      Schema.Attribute.Required;
    reviewed_date: Schema.Attribute.Date;
    sections: Schema.Attribute.DynamicZone<
      [
        'report.section-text',
        'report.figure-with-table',
        'report.pull-quote',
        'report.data-table',
      ]
    >;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    tldr_answer: Schema.Attribute.Text & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiResearchMethodologyResearchMethodology
  extends Struct.SingleTypeSchema {
  collectionName: 'research_methodologies';
  info: {
    description: 'Standing methodology page - cited externally, must be stable';
    displayName: 'Research Methodology';
    pluralName: 'research-methodologies';
    singularName: 'research-methodology';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    body: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    intro: Schema.Attribute.RichText;
    last_updated: Schema.Attribute.Date;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::research-methodology.research-methodology'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    rules: Schema.Attribute.Component<'report.methodology-rule', true>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiReviewReview extends Struct.CollectionTypeSchema {
  collectionName: 'reviews';
  info: {
    description: 'Customer reviews migrated from WordPress CPT "reviews"';
    displayName: 'Review';
    pluralName: 'reviews';
    singularName: 'review';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    company: Schema.Attribute.Relation<'manyToOne', 'api::company.company'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    displayOnHomepage: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    email: Schema.Attribute.Email;
    lender: Schema.Attribute.Relation<'manyToOne', 'api::lender.lender'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::review.review'
    > &
      Schema.Attribute.Private;
    moderated_at: Schema.Attribute.DateTime;
    moderated_by: Schema.Attribute.String;
    product_label: Schema.Attribute.String;
    product_used: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    rating: Schema.Attribute.Decimal;
    review: Schema.Attribute.Text;
    review_date: Schema.Attribute.Date;
    reviewer_region: Schema.Attribute.String;
    reviewerName: Schema.Attribute.String;
    reviewTitle: Schema.Attribute.String;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    subject_type: Schema.Attribute.Enumeration<['lender', 'company']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    verification_method: Schema.Attribute.Enumeration<
      ['crm_match', 'referral_click', 'solicited_survey', 'unverified']
    >;
    verified_borrower: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    wp_id: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ApiTestimonialTestimonial extends Struct.CollectionTypeSchema {
  collectionName: 'testimonials';
  info: {
    description: 'Site testimonials migrated from WP CPT "testimonials"';
    displayName: 'Testimonial';
    pluralName: 'testimonials';
    singularName: 'testimonial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    displayOnHomepage: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    email: Schema.Attribute.Email;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images'>;
    publishedAt: Schema.Attribute.DateTime;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    review: Schema.Attribute.Text;
    reviewDate: Schema.Attribute.Date;
    reviewerName: Schema.Attribute.String;
    reviewTitle: Schema.Attribute.String;
    source: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    wp_id: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ApiVideoEntryVideoEntry extends Struct.CollectionTypeSchema {
  collectionName: 'video_entries';
  info: {
    description: 'Videos migrated from WP CPT "videos"';
    displayName: 'Video';
    pluralName: 'video-entries';
    singularName: 'video-entry';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    duration_seconds: Schema.Attribute.Integer;
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::video-entry.video-entry'
    > &
      Schema.Attribute.Private;
    primaryVideoCategory: Schema.Attribute.Relation<
      'oneToOne',
      'api::category.category'
    >;
    publishedAt: Schema.Attribute.DateTime;
    related_company: Schema.Attribute.Relation<
      'manyToOne',
      'api::company.company'
    >;
    related_lender: Schema.Attribute.Relation<
      'manyToOne',
      'api::lender.lender'
    >;
    related_post: Schema.Attribute.Relation<'manyToOne', 'api::post.post'>;
    seo: Schema.Attribute.Component<'shared.seo', false>;
    slug: Schema.Attribute.UID<'title'>;
    thumbnail: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    transcript: Schema.Attribute.RichText;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    videoCategories: Schema.Attribute.Relation<
      'manyToMany',
      'api::category.category'
    >;
    videoLink: Schema.Attribute.String;
    wp_id: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    focalPoint: Schema.Attribute.JSON;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::author.author': ApiAuthorAuthor;
      'api::badge.badge': ApiBadgeBadge;
      'api::category.category': ApiCategoryCategory;
      'api::company-product.company-product': ApiCompanyProductCompanyProduct;
      'api::company.company': ApiCompanyCompany;
      'api::credit-card.credit-card': ApiCreditCardCreditCard;
      'api::debt-solution.debt-solution': ApiDebtSolutionDebtSolution;
      'api::expert.expert': ApiExpertExpert;
      'api::geo-stat.geo-stat': ApiGeoStatGeoStat;
      'api::global-setting.global-setting': ApiGlobalSettingGlobalSetting;
      'api::government-program.government-program': ApiGovernmentProgramGovernmentProgram;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::lender-product.lender-product': ApiLenderProductLenderProduct;
      'api::lender.lender': ApiLenderLender;
      'api::local-program.local-program': ApiLocalProgramLocalProgram;
      'api::location-page-content.location-page-content': ApiLocationPageContentLocationPageContent;
      'api::page.page': ApiPagePage;
      'api::post.post': ApiPostPost;
      'api::provincial-rule.provincial-rule': ApiProvincialRuleProvincialRule;
      'api::report.report': ApiReportReport;
      'api::research-methodology.research-methodology': ApiResearchMethodologyResearchMethodology;
      'api::review.review': ApiReviewReview;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'api::video-entry.video-entry': ApiVideoEntryVideoEntry;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
