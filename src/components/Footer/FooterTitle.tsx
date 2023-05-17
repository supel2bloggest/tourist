interface Props {
  title: string;
}

export default function FooterTitle({ title }: Props) {
  return <div className="font-bold">{title}</div>;
}
