export default props => {
  const { children, ...rest } = props;

  return (
    <span {...rest}>
      {children}
    </span>
  );
};
