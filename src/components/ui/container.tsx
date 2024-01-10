interface ContainerProps {
  children: React.ReactNode;

}

const Container: React.FC<ContainerProps> = ( {
  children
}) => {
  return (
      <div className="flex justify-center max-w-6xl px-3 sm:px-8 mx-auto">
          {children}
      </div>
   );
}

export default Container;
