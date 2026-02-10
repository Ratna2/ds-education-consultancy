export type AdminRole = "super" | "staff";

export const ADMIN_USERS: Record<string, AdminRole> = {
  "consultancy708@gmail.com": "super",
  "ratnarbbhowmik@gmail.com": "staff",
};

export function getAdminRole(email?: string | null): AdminRole | null {
  if (!email) return null;
  return ADMIN_USERS[email] || null;
}
