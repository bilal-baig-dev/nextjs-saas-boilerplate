import { ButtonProps } from "@/components/ui/button";
import { Session } from "next-auth";

export interface SiteConfig {
  maintenanceMode: boolean;
  comingSoonMode: boolean;
  waitlistMode: boolean;
  notificationBar: boolean;
}

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  className?: string;
}

export interface BlogSearchRequestParams {
  tags: string[];
  search?: string;
  page?: number;
  limit?: number;
}
export type CategoyProps = {
  name: string;
  isSelected: boolean;
};

export type BlogPostsResponse = { posts: BlogPostProps[]; categories: CategoyProps[] };

export type UserSession = Session | null;
export type CustomButtonProps = ButtonProps & { text?: string | React.ReactElement };
export type BlogCardProps = {
  title: string;
  description: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
  slug: string;
  avatar: string;
  link: string;
  featured: boolean;
  tags: string;
  keywords: string;
  draft: boolean;
};

export type BlogPostProps = BlogCardProps & {
  fileName: string;
};

export type NavItem = {
  url?: string;
  id?: string;
  text: string;
};

export type NavMenuProps = {
  menu: NavItem[];
  isSideBar?: boolean;
};

type IconTextItems = {
  icon: any;
  name: string;
};

type FeatureItem = {
  icon: any;
  title: string;
  description: string;
};

export type FeatureSectionContent = {
  title: string;
  subtitle: string;
  imageUrl: string;
  iconTextItems: IconTextItems[];
  featureItems: FeatureItem[];
  contentPosition?: string;
};

export type FeaturesSectionProps = {
  features: FeatureSectionContent[];
};

export interface OrderEmailProps {
  name: string;
  email: string;
  companyName: string;
  total: string;
  orderId: string;
  startEndPeriod?: string;
  date?: string;
  description: string;
  amount: string;
  tax: string;
  actionUrl: string;
  supportUrl: string;
  websiteLogoURL: string;
}
