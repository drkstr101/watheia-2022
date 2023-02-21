export type Image = {
  url: string;
  blurDataURL?: string;
};

export type Instructor = {
  name: string;
  bio: string;
  title: string;
  slug: string;
  twitter: string;
  github: string;
  company: string;
  presentation: Presentation;
  image: Image;
  imageSquare: Image;
};

export type Course = {
  name: string;
  slug: string;
  stream: string;
  discord: string;
  schedule: Presentation[];
  isLive: boolean;
  roomId: string;
  coursePeers: string[];
  backstagePeers: string[];
};

export type Presentation = {
  title: string;
  description: string;
  start: string;
  end: string;
  instructor: Instructor[];
};

export type Link = {
  url: string;
};

export type Sponsor = {
  name: string;
  description: string;
  slug: string;
  website: string;
  callToAction: string;
  callToActionLink: string;
  links: SponsorLink[];
  discord: string;
  tier: string;
  cardImage: Image;
  logo: Image;
  youtubeSlug: string;
};

export type SponsorLink = {
  text: string;
  url: string;
};

export type Job = {
  id: string;
  companyName: string;
  title: string;
  description: string;
  discord: string;
  link: string;
  rank: number;
};

export type ConfUser = {
  id?: string;
  email?: string;
  ticketNumber?: number | null;
  name?: string | null;
  username?: string | null;
  createdAt?: number | null;
};

export type GitHubOAuthData =
  | {
      type: 'token';
      token: string;
    }
  | {
      type: 'user';
      name: string;
      login: string;
    };
