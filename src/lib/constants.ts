import GoogleIcon from "@/components/svgs/icon-google";
import MetaIcon from "@/components/svgs/icon-meta";
import { siteConfig } from "@/config";
import { FeatureSectionContent } from "@/interfaces";
import { AppWindow, UsersRound } from "lucide-react";
import { NextTopLoaderProps } from "nextjs-toploader";

export const maxAge = 60 * 60 * 24;
export const LoginPagePath = "/login";

export const LoaderStyles: NextTopLoaderProps = {
  color: siteConfig.notificationBar ? "hsl(var(--card))" : "hsl(var(--primary))",
  height: 5,
  speed: 300,
  showSpinner: false,
};

export const avatars = ["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg", "/images/avatar-4.jpg", "/images/avatar-5.jpg"];

export const navMenu = [
  {
    text: "Pricing",
    id: "pricing",
  },
  {
    text: "Blog",
    url: "/blog",
  },
  {
    text: "FAQ",
    id: "faq",
  },
];

export const waitListNavMenu = [
  {
    text: "Features",
    id: "features",
  },
  {
    text: "How it works",
    id: "howitworks",
  },
  {
    text: "FAQ",
    id: "faq",
  },
];

export const faqs = [
  {
    question: "What is this?",
    answer: "A starter kit to help you launch a web app quickly with essential features built in.",
  },
  {
    question: "Do I need coding skills?",
    answer: "Basic knowledge helps, but setup guides make it beginner-friendly.",
  },
  {
    question: "What tech is used?",
    answer: "Built with Next.js, React, Tailwind CSS, TypeScript, and modern tools like Stripe and Prisma.",
  },
  {
    question: "Can I get a refund?",
    answer: "Refunds are only available if you haven’t accessed or downloaded the product.",
  },
];

export const highlights = [
  {
    title: "Lorem Ipsum",
    description: "Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "🔥",
  },
  {
    title: "Lorem Ipsum",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: "🔥",
  },
  {
    title: "Lorem Ipsum",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: "🔥",
  },
  {
    title: "Lorem Ipsum",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    icon: "🔥",
  },
  {
    title: "Lorem Ipsum",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    icon: "🔥",
  },
  {
    title: "Lorem Ipsum",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    icon: "🔥",
  },
];

export const featuresSection: FeatureSectionContent[] = [
  {
    title: "Lorem Ipsum Dolor",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    imageUrl: "/images/saaspack-demo-image.webp",
    contentPosition: "left",
    iconTextItems: [
      {
        icon: GoogleIcon,
        name: "Lorem Ipsum",
      },
      {
        icon: MetaIcon,
        name: "Dolor Sit",
      },
    ],
    featureItems: [
      {
        icon: UsersRound,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: UsersRound,
        title: "Dolor Sit Amet",
        description: "Aenean ut turpis vestibulum, tincidunt felis sit amet, aliquet orci.",
      },
      {
        icon: UsersRound,
        title: "Vivamus Lacinia",
        description: "Mauris vel nunc ultricies, malesuada est sed, aliquam justo.",
      },
      {
        icon: UsersRound,
        title: "Vestibulum Viverra",
        description: "Ut dictum ante ut leo cursus, et facilisis urna congue.",
      },
    ],
  },
  {
    title: "Lorem Ipsum Dolor",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    imageUrl: "/images/saaspack-demo-image.webp",
    contentPosition: "left",
    iconTextItems: [
      {
        icon: GoogleIcon,
        name: "Lorem Ipsum",
      },
      {
        icon: MetaIcon,
        name: "Dolor Sit",
      },
    ],
    featureItems: [
      {
        icon: UsersRound,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: UsersRound,
        title: "Dolor Sit Amet",
        description: "Aenean ut turpis vestibulum, tincidunt felis sit amet, aliquet orci.",
      },
      {
        icon: UsersRound,
        title: "Vivamus Lacinia",
        description: "Mauris vel nunc ultricies, malesuada est sed, aliquam justo.",
      },
      {
        icon: UsersRound,
        title: "Vestibulum Viverra",
        description: "Ut dictum ante ut leo cursus, et facilisis urna congue.",
      },
    ],
  },
  {
    title: "Lorem Ipsum Dolor",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    imageUrl: "/images/saaspack-demo-image.webp",
    contentPosition: "left",
    iconTextItems: [
      {
        icon: GoogleIcon,
        name: "Lorem Ipsum",
      },
      {
        icon: MetaIcon,
        name: "Dolor Sit",
      },
    ],
    featureItems: [
      {
        icon: UsersRound,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: UsersRound,
        title: "Dolor Sit Amet",
        description: "Aenean ut turpis vestibulum, tincidunt felis sit amet, aliquet orci.",
      },
      {
        icon: UsersRound,
        title: "Vivamus Lacinia",
        description: "Mauris vel nunc ultricies, malesuada est sed, aliquam justo.",
      },
      {
        icon: UsersRound,
        title: "Vestibulum Viverra",
        description: "Ut dictum ante ut leo cursus, et facilisis urna congue.",
      },
    ],
  },
  {
    title: "Lorem Ipsum Dolor",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    imageUrl: "/images/saaspack-demo-image.webp",
    contentPosition: "left",
    iconTextItems: [
      {
        icon: GoogleIcon,
        name: "Lorem Ipsum",
      },
      {
        icon: MetaIcon,
        name: "Dolor Sit",
      },
    ],
    featureItems: [
      {
        icon: UsersRound,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: UsersRound,
        title: "Dolor Sit Amet",
        description: "Aenean ut turpis vestibulum, tincidunt felis sit amet, aliquet orci.",
      },
      {
        icon: UsersRound,
        title: "Vivamus Lacinia",
        description: "Mauris vel nunc ultricies, malesuada est sed, aliquam justo.",
      },
      {
        icon: UsersRound,
        title: "Vestibulum Viverra",
        description: "Ut dictum ante ut leo cursus, et facilisis urna congue.",
      },
    ],
  },
];

export const TwoColumnLayoutFeatures = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageSrc: "/images/saaspack-demo-image.webp",
    alignImageRight: false,
  },
  {
    title: "Consectetur Adipiscing Elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageSrc: "/images/saaspack-demo-image.webp",
    alignImageRight: true,
  },
  {
    title: "Sed Do Eiusmod Tempor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    imageSrc: "/images/saaspack-demo-image.webp",
    alignImageRight: false,
  },
  {
    title: "Ut Enim Ad Minim Veniam",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    imageSrc: "/images/saaspack-demo-image.webp",
    alignImageRight: true,
  },
];

import { Crown } from "lucide-react";

export const featuresGridOne = [
  {
    icon: Crown,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items: [
      {
        name: "Lorem ipsum dolor sit amet.",
      },
      {
        name: "Consectetur adipiscing elit.",
      },
      {
        name: "Sed do eiusmod tempor incididunt.",
      },
    ],
    timeSaved: "25",
  },
  {
    icon: Crown,
    title: "Authentication & Security",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items: [
      {
        name: "Lorem ipsum dolor sit amet.",
      },
      {
        name: "Ut enim ad minim veniam.",
      },
      {
        name: "Duis aute irure dolor in reprehenderit.",
      },
    ],
    timeSaved: "30",
  },
  {
    icon: Crown,
    title: "Payment Integrations",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items: [
      {
        name: "Lorem ipsum dolor sit amet.",
      },
      {
        name: "Sed do eiusmod tempor incididunt.",
      },
    ],
    timeSaved: "10",
  },
  {
    icon: Crown,
    title: "Blog",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items: [
      {
        name: "Lorem ipsum dolor sit amet.",
      },
      {
        name: "Consectetur adipiscing elit.",
      },
      {
        name: "Sed do eiusmod tempor incididunt.",
      },
    ],
    timeSaved: "35",
  },
  {
    icon: Crown,
    title: "Reusable Components",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items: [
      {
        name: "Lorem ipsum dolor sit amet.",
      },
      {
        name: "Consectetur adipiscing elit.",
      },
      {
        name: "Sed do eiusmod tempor incididunt.",
      },
    ],
    timeSaved: "40",
  },
  {
    icon: Crown,
    title: "Transactional Emails",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items: [
      {
        name: "Lorem ipsum dolor sit amet.",
      },
      {
        name: "Consectetur adipiscing elit.",
      },
      {
        name: "Sed do eiusmod tempor incididunt.",
      },
    ],
    timeSaved: "15",
  },
  {
    icon: Crown,
    title: "Pre-Launch Pages",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items: [
      {
        name: "Lorem ipsum dolor sit amet.",
      },
      {
        name: "Consectetur adipiscing elit.",
      },
      {
        name: "Sed do eiusmod tempor incididunt.",
      },
    ],
    timeSaved: "15",
  },
  {
    icon: Crown,
    title: "Database",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items: [
      {
        name: "Lorem ipsum dolor sit amet.",
      },
      {
        name: "Consectetur adipiscing elit.",
      },
      {
        name: "Sed do eiusmod tempor incididunt.",
      },
    ],
    timeSaved: "10",
  },
  {
    icon: Crown,
    title: "Lightning-Fast Page Speed",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    items: [
      {
        name: "Lorem ipsum dolor sit amet.",
      },
      {
        name: "Consectetur adipiscing elit.",
      },
      {
        name: "Sed do eiusmod tempor incididunt.",
      },
    ],
    timeSaved: "6",
  },
];

export const featuresGridTwo = [
  {
    title: "Lorem Ipsum",
    icon: AppWindow,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod ex eget nisi euismod, ut facilisis quam tristique.</>",
  },
  {
    title: "Lorem Ipsum",
    icon: AppWindow,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Lorem Ipsum",
    icon: AppWindow,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Curabitur consequat, nunc sit amet tristique vehicula, nisi sapien condimentum orci, eget vehicula orci mi in nisi!",
  },
  {
    title: "Lorem Ipsum",
    icon: AppWindow,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Curabitur consequat, nunc sit amet tristique vehicula, nisi sapien condimentum orci, eget vehicula orci mi in nisi!",
  },
  {
    title: "Lorem Ipsum",
    icon: AppWindow,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Curabitur consequat, nunc sit amet tristique vehicula, nisi sapien condimentum orci, eget vehicula orci mi in nisi!",
  },
  {
    title: "Lorem Ipsum",
    icon: AppWindow,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Curabitur consequat, nunc sit amet tristique vehicula, nisi sapien condimentum orci, eget vehicula orci mi in nisi!",
  },
];
