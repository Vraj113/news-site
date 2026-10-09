export default function NewsAlert({ title, message }) {
  return (
    <div
      className="mx-auto max-w-xl rounded-2xl border border-amber-200/80 bg-amber-50 px-6 py-5 text-center shadow-sm dark:border-amber-900/50 dark:bg-amber-950/40"
      role="alert"
    >
      <p className="font-serif text-lg font-semibold text-amber-950 dark:text-amber-100">
        {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-amber-900/80 dark:text-amber-200/80">
        {message}
      </p>
    </div>
  );
}
