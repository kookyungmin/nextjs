import React from "react";

export default function DashboardLayout({
    children,
}: { children: React.ReactNode }) {
  return (
    <section>
      <nav>Nav</nav>
      {children}
    </section>
  )
}