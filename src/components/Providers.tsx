"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const Providers = (props: { children: ReactNode }) => {
  return <SessionProvider>{props.children}</SessionProvider>;
};

export default Providers;
