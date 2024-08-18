interface Seo {
  title: string;
  text: string;
  h1: string;
}

interface Page {
  seo: Seo;
  noindex: boolean;
}

interface Avatar {
  id: string;
  url: string;
  preview: string;
  placeholder_color: string;
  width: number;
  height: number;
}

interface Profile {
  id: number;
  login: string;
  name: string;
  avatar: Avatar;
  vk_link: string;
  tw_link: string;
  fb_link: string;
  in_link: string;
}

interface ListItem {
  id: number;
  user_id: number;
  user_login: string;
  name: string;
  url: string;
  category_id: number;
  category_name: string;
  price: number;
  currency: string;
  price_format: string;
  dedline: string;
  publish_date: number;
  publish_date_format: string;
  text: string;
  text_html: string;
}

interface Data {
  profile: Profile;
  list: ListItem[];
}

interface Response {
  page: Page;
  data: Data;
}

interface ApiResponse {
  error_message: string;
  error: number;
  response: Response;
}
