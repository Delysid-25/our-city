import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Tab,
  Tabs,
} from "@nextui-org/react";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { useNavigate } from "react-router-dom";
import { useObserver } from "mobx-react";
import { store } from "../store/store";
// import clsx from "clsx";
// 合并类名参考此写法
//  className={clsx(
//   linkStyles({ color: "foreground" }),
//   "data-[active=true]:text-primary data-[active=true]:font-medium",

import { BookIcon, ChevronDown, PhoneIcon } from "./Icons";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
// import { Logo } from "@/components/icons";
import { useDebounceFn } from "ahooks";

export const Navbar = () => {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };
  let navigate = useNavigate();

  const changeState = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    state: string
  ) => {
    e.stopPropagation();
    store.changeShowState(state);
  };

  const dChangeState = useDebounceFn(changeState, { wait: 100 });

  return useObserver(() => (
    <NextUINavbar maxWidth="xl" position={store.showState === "flat" ? "sticky" : "static"}>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            {/* <Logo /> */}
            <p className="font-bold text-inherit">OUR CITY</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Tabs
            aria-label="Options"
            size="sm"
            onSelectionChange={(v) => {
              store.changeShowState(String(v));
            }}
            selectedKey={store.showState}
          >
            <Tab key="flat" title="瀑布" />
            <Tab key="book" title="拟书" />
          </Tabs>
        </NavbarItem>

        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                往期
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              {siteConfig.navMenuItems.map((item, index) => (
                <DropdownItem
                  key={`${item}-${index}`}
                  onClick={() => navigate(item.href)}
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {store.showState === "book" ? (
          <div className="px-px transition-opacity hover:opacity-50 cursor-pointer">
            <PhoneIcon
              size={22}
              onClick={(e) => {
                dChangeState.run(e, "flat");
              }}
            />
          </div>
        ) : (
          <div className="px-px transition-opacity hover:opacity-50 cursor-pointer">
            <BookIcon
              size={22}
              onClick={(e) => {
                dChangeState.run(e, "book");
              }}
            />
          </div>
        )}
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className="text-right"
              onClick={() => navigate(item.href)}
            >
              {item.label}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  ));
};
