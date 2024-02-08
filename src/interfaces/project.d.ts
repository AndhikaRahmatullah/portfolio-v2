export interface ProjectInterface {
  id: string;
  name: string;
  descriptions: string;
  image: string;
  url?: string | undefined;
  jobDesc: string;
  techs: string[];
}
