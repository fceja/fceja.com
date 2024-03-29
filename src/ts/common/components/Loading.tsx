import "@scss/common/components/Loading.scss";

interface LoadingProps {
  className?: string;
}

const Loading = ({ className }: LoadingProps) => {
  const divClassName = className || "";

  return (
    <div className={`sk-cube-grid ${divClassName}`}>
      <div className="sk-cube sk-cube1"></div>
      <div className="sk-cube sk-cube2"></div>
      <div className="sk-cube sk-cube3"></div>
      <div className="sk-cube sk-cube4"></div>
      <div className="sk-cube sk-cube5"></div>
      <div className="sk-cube sk-cube6"></div>
      <div className="sk-cube sk-cube7"></div>
      <div className="sk-cube sk-cube8"></div>
      <div className="sk-cube sk-cube9"></div>
    </div>
  );
};

export default Loading;
