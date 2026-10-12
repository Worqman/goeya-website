export type LegalSection = {
  heading: string;
  body: string;
};

export type LegalDocument = {
  title: string;
  subtitle: string;
  effectiveDate: string;
  sections: LegalSection[];
};
