import { Course, Instructor, Job, Sponsor } from '@watheia/api/types';

import * as datoCmsApi from './dato';

const cmsApi: {
  getAllInstructors: () => Promise<Instructor[]>;
  getAllCourses: () => Promise<Course[]>;
  getAllSponsors: () => Promise<Sponsor[]>;
  getAllJobs: () => Promise<Job[]>;
} = datoCmsApi;

export async function getAllInstructors(): Promise<Instructor[]> {
  return cmsApi.getAllInstructors();
}

export async function getAllCourses(): Promise<Course[]> {
  return cmsApi.getAllCourses();
}

export async function getAllSponsors(): Promise<Sponsor[]> {
  return cmsApi.getAllSponsors();
}

export async function getAllJobs(): Promise<Job[]> {
  return cmsApi.getAllJobs();
}
