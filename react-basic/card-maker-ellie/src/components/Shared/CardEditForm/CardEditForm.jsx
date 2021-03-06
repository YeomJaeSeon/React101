import React, {memo} from 'react';
import Button from '../Button/Button';
import styles from './CardEditForm.module.css';

const CardEditForm = memo(({
  FileInput,
  card,
  onDeleteHandler,
  onUpdateHandler,
}) => {
  const { id, name, company, theme, job, email, comment, fileName } = card;

  const onDelete = () => {
    onDeleteHandler(id);
  };


  const onUpdate = (e) => {
    e.preventDefault();
    if (e.currentTarget === null) return;
    // object key에 변수로바로 접근하려면 [string]을 이용함.
    onUpdateHandler({ ...card, [e.currentTarget.name]: e.currentTarget.value });
  };

  const fileUpdate = (file) => {
    onUpdateHandler({ ...card, fileName: file.name, fileURL: file.url });
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={styles.row1}>
        <input
          className={styles.name}
          type="text"
          name="name"
          value={name}
          onChange={onUpdate}
        />
        <input
          name="company"
          className={styles.company}
          type="text"
          value={company}
          onChange={onUpdate}
        />
        <select
          name="theme"
          className={styles.theme}
          value={theme}
          onChange={onUpdate}
        >
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
          <option value="Colorful">Colorful</option>
        </select>
      </div>
      <div className={styles.row2}>
        <input
          name="job"
          className={styles.job}
          type="text"
          value={job}
          onChange={onUpdate}
        />
        <input
          name="email"
          className={styles.email}
          type="text"
          value={email}
          onChange={onUpdate}
        />
      </div>
      <div className={styles.row3}>
        <textarea
          name="comment"
          className={styles.comment}
          value={comment}
          onChange={onUpdate}
        />
      </div>
      <div className={styles.row4}>
        <FileInput fileUpdate={fileUpdate} fileName={fileName} />
        <Button name="Delete" onClick={onDelete} />
      </div>
    </form>
  );
})

export default CardEditForm;
