import { ForwardRefExoticComponent, HtmlHTMLAttributes, RefAttributes, SVGProps } from 'react';

type IconComponent = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & RefAttributes<SVGSVGElement>
>;

export interface NavItem {
  name: string;
  href: string;
  description?: string;
  icon?: IconComponent;
}

export interface IPostAuthor {
  name: string;
  handle: string;
  imageUrl?: string;
  logoUrl?: string;
}

export interface IPost {
  body: string;
  author: IPostAuthor;
}

export interface HomeViewProps extends HtmlHTMLAttributes<HTMLDivElement> {
  featuredPost?: IPost;
  recentPosts?: IPost[];
}
