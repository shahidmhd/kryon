// Page transitions disabled — they re-animate on every route change.
// Instant nav is smoother.
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
