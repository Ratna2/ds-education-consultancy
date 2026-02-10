"use client";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAdminRole } from "@/lib/adminRoles";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      const role = getAdminRole(user?.email);
      if (!user || !role) {
        router.replace("/login");
      } else {
        setReady(true);
      }
    });
    return () => unsub();
  }, [router]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Verifying admin access…
      </div>
    );
  }

  return <>{children}</>;
}
