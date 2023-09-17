export const EazyLabel: React.FC<EazyLabelProperties> = ({
  className,
  id,
  text,
}) => {
  return (
    <label className={className} htmlFor={id}>
      {text}
    </label>
  );
};

interface EazyLabelProperties {
  className?: string;
  id: string;
  text: string;
}
