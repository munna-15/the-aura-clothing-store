const ActionSlot = ({ children, className = "" }) => {
  return (
    <div
      className={`
        flex
        h-11
        shrink-0
        items-center
        justify-center
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ActionSlot;