export type Nonprofit = {
    description: string;
    name: string;
    profileUrl: string;
    logoUrl: string;
    coverImageUrl?: string;
    logoCloudinaryId: string;
    matchedTerms: string[];
    slug: string;
    tags?: string[];
    ein?: string;
    location?: string;
};
  
export type NonprofitList = {
    nonprofits: Nonprofit[];
};