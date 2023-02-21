import fetch from 'jest-fetch-mock';
import { getAllSponsors } from './cms-api';

const MOCK_SPONSORS = {
  data: {
    allCompanies: [
      {
        name: 'Watheia',
        description:
          'Watheia Labs redefines what it means to develop, providing you the cutting-edge technology with half the effort.',
        slug: 'watheia',
        website: 'https://watheia.com',
        callToAction: 'Learn More',
        callToActionLink: 'https://watheia.com',
        discord: 'https://discord.com',
        youtubeSlug: '1-NzQ9ObsfM',
        tier: 'gold',
        links: [
          {
            url: 'https://watheia.com',
            text: 'Learn about ACME',
          },
          {
            url: 'https://watheia.com',
            text: 'Resources for Developers',
          },
          {
            url: 'https://watheia.com',
            text: 'Sign Up Today',
          },
        ],
        cardImage: {
          url: 'https://www.datocms-assets.com/94807/1676919338-wa-card.png?fit=crop&fm=jpg',
        },
        logo: {
          url: 'https://www.datocms-assets.com/94807/1676919317-icon.png?fit=crop&fm=jpg&h=100&w=100',
        },
      },
      {
        name: 'ACME',
        description:
          'ACME redefines what it means to develop, providing you the cutting-edge technology with half the effort.',
        slug: 'acme',
        website: 'https://vercel.com',
        callToAction: 'Learn More',
        callToActionLink: 'https://vercel.com',
        discord: 'https://discord.com',
        youtubeSlug: '1-NzQ9ObsfM',
        tier: 'gold',
        links: [
          {
            url: 'https://vercel.com',
            text: 'Learn about ACME',
          },
          {
            url: 'https://vercel.com',
            text: 'Resources for Developers',
          },
          {
            url: 'https://vercel.com',
            text: 'Sign Up Today',
          },
        ],
        cardImage: {
          url: 'https://www.datocms-assets.com/94807/1605544157-image.png?fit=crop&fm=jpg',
        },
        logo: {
          url: 'https://www.datocms-assets.com/94807/1605544174-cleanshot-2020-11-16-at-10-29-25.png?fit=crop&fm=jpg&h=100&w=100',
        },
      },
    ],
  },
};

describe('cms-api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('getAllSponsors()', () => {
    it('should return a list of all Instructor instances', async () => {
      fetch.mockResponseOnce(JSON.stringify(MOCK_SPONSORS));
      const instructors = await getAllSponsors();
      expect(instructors).toBeTruthy();
    });
  });
});
