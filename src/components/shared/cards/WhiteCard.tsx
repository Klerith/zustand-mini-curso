import classNames from 'classnames';

interface Props {
  children?: React.ReactNode;
  centered?: boolean;
  className?: string;
}


export const WhiteCard = ( { children, centered, className }: Props ) => {
  return (
    <div className={
      classNames( 'bg-white rounded-2xl border shadow-lg p-10', className, {
        'text-center': centered,
      } ) }>
      { children }
    </div>
  );
};