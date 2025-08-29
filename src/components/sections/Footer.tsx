
"use client";

import { useScopedI18n } from '@/locales/client';

function Footer() {
  const footer = useScopedI18n('footer');
  
  return (
    <footer className=" py-8 mt-2">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {footer('copyright')}
        </p>
      </div>
    </footer>
  );
}
export default Footer;
