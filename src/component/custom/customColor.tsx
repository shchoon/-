interface IProps {
  color: string;
}

export default function CustomColor({ color }: IProps) {
  return (
    <button style={{ background: `${color}` }}>
      {color}
      <div className="custom_toolTip" style={{ background: `${color}` }}>
        {color}
      </div>
    </button>
  );
}
