import { Course, Instructor, Job, Sponsor } from '@watheia/api/types';

const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(
  query: string,
  { variables }: { variables?: Record<string, any> } = {}
) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    // eslint-disable-next-line no-console
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllInstructors(): Promise<Instructor[]> {
  const data = await fetchCmsAPI(`
     {
       allInstructors(first: 100) {
         name
         bio
         title
         slug
         twitter
         github
         company
         presentation {
           title
           description
         }
         image {
           url(imgixParams: {fm: jpg, fit: crop, w: 300, h: 400})
           blurDataURL: blurUpThumb
         }
         imageSquare: image {
           url(imgixParams: {fm: jpg, fit: crop, w: 192, h: 192})
           blurDataURL: blurUpThumb
         }
       }
     }
   `);

  return data.allInstructors;
}

export async function getAllCourses(): Promise<Course[]> {
  const data = await fetchCmsAPI(`
     {
       allCourses(first: 100, orderBy: order_ASC) {
         name
         slug
         stream
         discord
         isLive
         roomId
         schedule {
           title
           start
           end
           instructor {
             name
             slug
             image {
               url(imgixParams: {fm: jpg, fit: crop, w: 120, h: 120})
               blurDataURL: blurUpThumb
             }
           }
         }
       }
     }
   `);

  return data.allCourses;
}

export async function getAllSponsors(): Promise<Sponsor[]> {
  const data = await fetchCmsAPI(`
     {
       allCompanies(first: 100, orderBy: tierRank_ASC) {
         name
         description
         slug
         website
         callToAction
         callToActionLink
         discord
         youtubeSlug
         tier
         links {
           url
           text
         }
         cardImage {
           url(imgixParams: {fm: jpg, fit: crop})
         }
         logo {
           url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100})
         }
       }
     }
   `);

  return data.allCompanies;
}

export async function getAllJobs(): Promise<Job[]> {
  const data = await fetchCmsAPI(`
     {
       allJobs(first: 100, orderBy: rank_ASC) {
         id
         companyName
         title
         description
         discord
         link
         rank
       }
     }
   `);

  return data.allJobs;
}
