import styles from './shared.module.css';

export interface SharedProps {
  name?: string;
}

export function Shared({ name }: SharedProps) {
  return (
    <div className={styles['container']}>
      <h1>This is a shared component, {name || 'anonymous person!'}!</h1>
    </div>
  );
}

export default Shared;
