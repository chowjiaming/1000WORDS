import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  classnames: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  value: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  handleClick,
  classnames,
  type,
  value,
}) => {
  return (
    <button
      className={`button ${classnames}`}
      type={type}
      onClick={handleClick}
      value={value}
    >
      {children}
    </button>
  );
};

export default Button;
