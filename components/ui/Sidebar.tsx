"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathName = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={44}
            height={44}
            alt="Nova Logo"
            className="size-[44px] max-xl:size-10"
          ></Image>
          <h1 className="sidebar-logo text-5xl">Nova</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            pathName === item.route || pathName.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ "brightness-[3] invert-0": isActive })}
                ></Image>
              </div>
              <p className={cn("sidebar-label", { "text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}

        
        USER
      </nav>

      FOOTER
      
    </section>
  );
};

export default Sidebar;
