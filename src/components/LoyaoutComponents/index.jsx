import './styles.css';
export const LayoutComponents = (props) => {
  return (
    <div className="layout-components">
      <div className="container-layout-components">
        <div className="wrap-layout-components">{props.children}</div>
      </div>
    </div>
  );
};
