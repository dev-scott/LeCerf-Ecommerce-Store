interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children
}) => {
  return ( 
    <div className="mx-auto max-w-[1600px]">
      {children}
    </div>
   );
};

export default Container;
