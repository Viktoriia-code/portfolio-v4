export interface Place {
  date: string,
  date_title: string,
  name: string,
  place_name: string,
  location: string,
  image_src: string,
  link?: string;
  width: number,
  height: number,
  job_tasks?: string[],
  tech_stack?: string[],
}