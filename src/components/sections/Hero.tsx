"use client";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useScopedI18n } from '@/locales/client';

function Hero() {
  const hero = useScopedI18n('hero');

  return (
    <section className="border-grid mt-12">
      <div className="container-wrapper">
        <div className="container flex flex-col items-center py-8 text-center gap-2 md:py-16 lg:py-20">
          <Badge className="bg-muted badge-text rounded-2xl">
            {hero('badge.text')} <span><ArrowRightIcon className="h-3" /></span>
          </Badge>
          <h1 className="text-primary leading-tight max-w-2xl text-4xl font-[610] tracking-tight text-balance lg:font-semibold xl:text-5xl xl:tracking-tighter">
            {hero('title')}
          </h1>
          <p className="text-foreground max-w-3xl text-base text-balance sm:text-lg px-4">
            {hero('description')}
          </p>
          <div className="flex items-center justify-center pt-2 gap-2 w-full">
            <Button>{hero('buttons.getStarted')}</Button>
            <Button className="bg-white text-black dark:bg-black dark:text-white  hover:bg-muted">{hero('buttons.browseBlocks')}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
