import "@scss/common/components/Loading.scss";

interface LoadingProps {
  className?: string;
}

const Loading = ({ className }: LoadingProps) => {
  const divClassName = className || "";

  return (
    <div className={`spinner ${divClassName}`}>
      <div className="cube1"></div>
      <div className="cube2"></div>
    </div>
  );
};

export default Loading;
