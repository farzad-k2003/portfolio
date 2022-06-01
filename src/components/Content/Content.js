const Content = ({ title, subtitle, text }) => {
  return (
    <div className="content">
      {subtitle && <div className="content-subtitle">{subtitle}</div>}
      {title && <h2 className="content-title">{title}</h2>}
      <div className="content-line"></div>
      {text && <p className="content-text">{text}</p>}
    </div>
  );
};

export default Content;
