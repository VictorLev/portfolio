
interface SvgComponentProps {
  image: Object
}



const SvgComponent: React.FC<SvgComponentProps> = ({image}) => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
      <path
        fill="#FF0000"
        d="M49.6-53.5C61.1-38.1 65.1-19.1 65.2 0c0 19.1-3.9 38.2-15.5 49.4C38.2 60.5 19.1 63.6-2.1 65.7c-21.1 2.1-44.4 3-56.5-8.1-12.2-11.1-13.2-34.4-9.5-53.9 3.8-19.4 12.3-35.2 24.5-50.5 12.1-15.4 27.9-30.4 45.3-32 17.4-1.7 36.4 10 47.9 25.3z"
        transform="translate(100 100)"
      />
    </svg>
  )
}

export default SvgComponent
