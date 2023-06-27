export const parseAddress = (address,number) => {
    return (
      address?.substring?.(0, number) +
      "..." +
      address?.substring?.(address?.length - number)
    );
  };