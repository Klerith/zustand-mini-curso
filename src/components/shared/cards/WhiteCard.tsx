interface Props {
  children?: React.ReactNode;
}


export const WhiteCard = ({ children }: Props) => {
  return (
    <div className="bg-white text-center rounded-2xl border shadow-lg p-10">
      {children}
    </div>
  );
};