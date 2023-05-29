import clsx from 'clsx';

const formClasses =
  'block w-full appearance-none rounded-lg border border-neutral-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-neutral-900 placeholder:text-neutral-400 focus:border-accent-500 focus:outline-none focus:ring-accent-500 sm:text-sm';

function Label({ id, children }: any) {
  return (
    <label htmlFor={id} className="mb-2 block text-sm font-semibold text-neutral-900">
      {children}
    </label>
  );
}

export function TextField({ id, label, type = 'text', className, ...props }: any) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  );
}

export function SelectField({ id, label, className, ...props }: any) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  );
}
