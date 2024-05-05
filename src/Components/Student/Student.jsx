import styles from './Student.module.css';
import PropTypes from "prop-types";

// <Student name="AlexShi" age={21} isStudent={true}/>
// <Student name="WangErde" age={25} isStudent={false}/>
// <Student/>
// {name="Unknown", age=0, isStudent=false} 是默认值
function Student({name="Unknown", age=0, isStudent=false}) {

  return (
    <div className={styles.Student}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent?"yes":"no"}</p>
    </div>
  );
}
Student.propTypes= {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}

export default Student