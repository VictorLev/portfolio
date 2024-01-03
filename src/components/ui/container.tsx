interface ContainerProps {
  children: React.ReactNode;

}

const Container: React.FC<ContainerProps> = ( {
  children
}) => {
  return (
      <div className="flex justify-center max-w-6xl px-8 flex-col mx-auto">
          {children}
      </div>
   );
}

export default Container;
