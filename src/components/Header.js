import PropTypes from "prop-types"; //defines if a property is a string, int, etc
import Button from "./Button";

// const Header = (props) => {

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Clicked");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS styling in JS
// - use ' style={headingStyle} ' within an html element -
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header;
