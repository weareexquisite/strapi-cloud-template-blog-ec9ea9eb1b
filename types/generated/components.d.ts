import type { Schema, Struct } from '@strapi/strapi';

export interface BadgeYearEarned extends Struct.ComponentSchema {
  collectionName: 'components_badge_years_earned';
  info: {
    displayName: 'Year earned';
  };
  attributes: {
    year: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2100;
          min: 2010;
        },
        number
      >;
  };
}

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

export interface ProductProvinceOverride extends Struct.ComponentSchema {
  collectionName: 'components_product_province_overrides';
  info: {
    description: 'Per-province variation (Quebec cost-of-borrowing etc., Appendix D)';
    displayName: 'Province override';
  };
  attributes: {
    amount_max: Schema.Attribute.BigInteger;
    amount_min: Schema.Attribute.BigInteger;
    display_copy: Schema.Attribute.Text;
    province: Schema.Attribute.Enumeration<
      [
        'AB',
        'BC',
        'MB',
        'NB',
        'NL',
        'NS',
        'NT',
        'NU',
        'ON',
        'PE',
        'QC',
        'SK',
        'YT',
      ]
    > &
      Schema.Attribute.Required;
    rate_max: Schema.Attribute.Decimal;
    rate_min: Schema.Attribute.Decimal;
    term_max_months: Schema.Attribute.Integer;
    term_min_months: Schema.Attribute.Integer;
  };
}

export interface ReportDataTable extends Struct.ComponentSchema {
  collectionName: 'components_report_data_tables';
  info: {
    description: 'Standalone crawlable table (e.g. provincial index when charts are withheld)';
    displayName: 'Data table';
  };
  attributes: {
    footnote: Schema.Attribute.Text;
    table_headers: Schema.Attribute.JSON;
    table_rows: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface ReportFigureWithTable extends Struct.ComponentSchema {
  collectionName: 'components_report_figures_with_tables';
  info: {
    description: 'A chart never ships without its data table - the table is the machine-readable version';
    displayName: 'Figure with table';
  };
  attributes: {
    caption: Schema.Attribute.String;
    footnote: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    table_headers: Schema.Attribute.JSON;
    table_rows: Schema.Attribute.JSON;
  };
}

export interface ReportKeyFinding extends Struct.ComponentSchema {
  collectionName: 'components_report_key_findings';
  info: {
    displayName: 'Key finding';
  };
  attributes: {
    body: Schema.Attribute.Text;
    stat: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ReportMethodologyRule extends Struct.ComponentSchema {
  collectionName: 'components_report_methodology_rules';
  info: {
    displayName: 'Methodology rule';
  };
  attributes: {
    detail: Schema.Attribute.Text;
    rule: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ReportPullQuote extends Struct.ComponentSchema {
  collectionName: 'components_report_pull_quotes';
  info: {
    displayName: 'Pull quote';
  };
  attributes: {
    attribution: Schema.Attribute.String;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ReportSectionText extends Struct.ComponentSchema {
  collectionName: 'components_report_section_texts';
  info: {
    description: 'Section titles are findings, not labels';
    displayName: 'Section text';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    og_description: Schema.Attribute.Text;
    og_title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'badge.year-earned': BadgeYearEarned;
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
      'product.province-override': ProductProvinceOverride;
      'report.data-table': ReportDataTable;
      'report.figure-with-table': ReportFigureWithTable;
      'report.key-finding': ReportKeyFinding;
      'report.methodology-rule': ReportMethodologyRule;
      'report.pull-quote': ReportPullQuote;
      'report.section-text': ReportSectionText;
      'shared.seo': SharedSeo;
    }
  }
}
