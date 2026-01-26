function Button({ type, children }) {
  const buttonClass = `btn btn-${type}`;

  return <button className={buttonClass}>{children}</button>;
}

export default Button;
