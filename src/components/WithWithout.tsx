import Section from "./common/Section";
import CrossIcon from "./svgs/icon-cross";
import { CheckCheck } from "lucide-react";
import { appConfig } from "@/config/appConfig";
import Block from "./common/Block";

type Props = {
  list: string[];
  isCheckIcon: boolean;
  title: string;
};

const withoutItemsList = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Curabitur pretium tincidunt lacus.",
  "Praesent libero. Sed cursus ante dapibus diam.",
];

const withItemsList = [
  "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  "Duis sagittis ipsum. Praesent mauris.",
  "Fusce nec tellus sed augue semper porta.",
  "Mauris massa. Vestibulum lacinia arcu eget nulla.",
  "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
];
const WithWithoutConatiner = ({ list, isCheckIcon, title }: Props) => {
  return (
    <div className="border border-black dark:border-white rounded-xl px-10 py-12 flex gap-3 flex-col w-full">
      <span className="font-bold text-2xl">{title}</span>
      <div className="flex flex-col gap-3">
        {list?.map((el, index) => {
          return (
            <li key={index} className={`flex dark:text-gray-300 gap-2 items-start`}>
              <span className="flex">{isCheckIcon ? <CheckCheck className="text-green-400" /> : <CrossIcon className="fill-red-400" />}</span>
              {el}
            </li>
          );
        })}
      </div>
    </div>
  );
};
function WithWithout() {
  return (
    <Block>
      <Section className="flex flex-col justify-center items-center gap-4">
        <h2 className="font-bold text-2xl whitespace-nowrap md:text-3xl text-primary capitalize">Why Choose {appConfig.appName}!</h2>
        <p className="text-xl md:text-2xl text-center mb-8 opacity-80">
          Launch faster with pre-built features, full ownership, and customization options
        </p>
        <Section className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-0 px-0">
          <WithWithoutConatiner title={`Without ${appConfig.appName}`} list={withoutItemsList} isCheckIcon={false} />
          <WithWithoutConatiner title={`With ${appConfig.appName}`} list={withItemsList} isCheckIcon={true} />
        </Section>
      </Section>
    </Block>
  );
}

export default WithWithout;
