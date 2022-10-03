function Loading({ className }: { className?: string }) {
  const classNames = ['loading', className].join(' ');

  return <div className={classNames} role="status" aria-label="loading"></div>;
}

export default Loading;
