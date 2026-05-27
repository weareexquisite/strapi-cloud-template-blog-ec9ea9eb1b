import type { Schema, Struct } from '@strapi/strapi';

export interface CompanyLoanOffered extends Struct.ComponentSchema {
  collectionName: 'components_company_loan_offereds';
  info: {
    displayName: 'Company Loan Offered';
    icon: 'briefcase';
  };
  attributes: {
    column1: Schema.Attribute.RichText;
    column2: Schema.Attribute.RichText;
    column3: Schema.Attribute.RichText;
    customButtonLabel: Schema.Attribute.String;
    customButtonLink: Schema.Attribute.String;
    customLinkTarget: Schema.Attribute.String;
    itemTitle: Schema.Attribute.String;
  };
}

export interface GlobalLogoItem extends Struct.ComponentSchema {
  collectionName: 'components_global_logo_items';
  info: {
    displayName: 'Logo Item';
    icon: 'picture';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface GlobalQuickLink extends Struct.ComponentSchema {
  collectionName: 'components_global_quick_links';
  info: {
    displayName: 'Quick Link';
    icon: 'link';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HomeMoreItem extends Struct.ComponentSchema {
  collectionName: 'components_home_more_items';
  info: {
    displayName: 'More Item';
    icon: 'grid';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HomeProductLink extends Struct.ComponentSchema {
  collectionName: 'components_home_product_links';
  info: {
    displayName: 'Product Link';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeTextPoint extends Struct.ComponentSchema {
  collectionName: 'components_home_text_points';
  info: {
    displayName: 'Text Point';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface HomeTrustedLogo extends Struct.ComponentSchema {
  collectionName: 'components_home_trusted_logos';
  info: {
    displayName: 'Trusted Logo';
    icon: 'picture';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    maxHeight: Schema.Attribute.String;
  };
}

export interface LenderFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_lender_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface LenderLoanOffered extends Struct.ComponentSchema {
  collectionName: 'components_lender_loan_offereds';
  info: {
    displayName: 'Loan Offered';
    icon: 'briefcase';
  };
  attributes: {
    column1: Schema.Attribute.RichText;
    column2: Schema.Attribute.RichText;
    column3: Schema.Attribute.RichText;
    itemTitle: Schema.Attribute.String;
  };
}

export interface LenderSupportOffer extends Struct.ComponentSchema {
  collectionName: 'components_lender_support_offers';
  info: {
    displayName: 'Support Offer';
    icon: 'phone';
  };
  attributes: {
    supportOffered: Schema.Attribute.String;
  };
}

export interface LenderVideo extends Struct.ComponentSchema {
  collectionName: 'components_lender_videos';
  info: {
    displayName: 'Video';
    icon: 'play';
  };
  attributes: {
    videoDescription: Schema.Attribute.Text;
    videoEmbed: Schema.Attribute.Text;
  };
}

export interface PagePersonalLoanOffered extends Struct.ComponentSchema {
  collectionName: 'components_page_personal_loan_offereds';
  info: {
    displayName: 'Personal Loan Offered';
    icon: 'list';
  };
  attributes: {
    offering: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    focusKeyword: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'company.loan-offered': CompanyLoanOffered;
      'global.logo-item': GlobalLogoItem;
      'global.quick-link': GlobalQuickLink;
      'home.more-item': HomeMoreItem;
      'home.product-link': HomeProductLink;
      'home.text-point': HomeTextPoint;
      'home.trusted-logo': HomeTrustedLogo;
      'lender.faq-item': LenderFaqItem;
      'lender.loan-offered': LenderLoanOffered;
      'lender.support-offer': LenderSupportOffer;
      'lender.video': LenderVideo;
      'page.personal-loan-offered': PagePersonalLoanOffered;
      'shared.seo': SharedSeo;
    }
  }
}
