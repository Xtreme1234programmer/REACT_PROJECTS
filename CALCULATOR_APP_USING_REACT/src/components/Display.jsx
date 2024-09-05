import styles from'./Display.module.css'
export function Display({displayValue})
{
  return(
    <input className={styles.display} type='text' value={displayValue} readOnly></input>
  );
}