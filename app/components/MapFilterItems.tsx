"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { categoryItems } from "../lib/categories";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

usePathname;
useSearchParams;

export function MapFilterItems() {
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("filter");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );
  //

  return (
    <div className="flex gap-x-0 gap-y-2 md:gap-x-3 mt-5 w-full justify-center flex-wrap">
      {categoryItems.map((item) => (
        <div key={item.id} className="">
          <div>
            <Link
              href={`${currentPath}?${createQueryString("filter", item.name)}`}
              className={cn(
                search === item.name ? "border-b-2" : "opacity-70",
                "flex flex-col w-16 md:w-24 gap-y-3 items-center hover:opacity-100 hover:scale-110 py-1 rounded-sm"
              )}
            >
              <div className="relative w-6 h-6">
                <Image
                  src={item.imageUrl}
                  alt={"category"}
                  width={600}
                  height={600}
                  className="w-6 h-6"
                />
              </div>
              <p className="text-[8px] md:text-xs font-medium">{item.title}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
