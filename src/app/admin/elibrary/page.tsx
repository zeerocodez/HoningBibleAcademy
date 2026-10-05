import styles from './page.module.css';

export default function ELibraryAdmin() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Manage e-Library</h1>
        <button className={styles.button}>Upload New Material</button>
      </div>
      
      <div className={styles.uploadSection}>
        <h2>Upload Document</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" className={styles.input} placeholder="Document Title" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" className={styles.input} placeholder="Author Name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="category">Category</label>
            <select id="category" className={styles.input}>
              <option value="ebooks">E-books</option>
              <option value="bible_study">Bible study materials</option>
              <option value="research_papers">Research papers</option>
              <option value="audio_lectures">Audio lectures</option>
              <option value="video_lectures">Video lectures</option>
              <option value="academic_articles">Academic articles</option>
              <option value="exegetical">Exegetical resources</option>
              <option value="templates">Research templates</option>
              <option value="sermons">Sermons</option>
              <option value="lecture_notes">Lecture notes</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="file">File (PDF, DOCX)</label>
            <input type="file" id="file" className={styles.inputFile} />
          </div>
          <button type="button" className={styles.submitButton}>Upload</button>
        </form>
      </div>
      
      <div className={styles.materialsList}>
        <h2>Current Materials</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Do You Understand What You Are Reading?</td>
              <td>Clifford Stephen Ph.D, D.Div</td>
              <td>Biblical Studies</td>
              <td>
                <button className={styles.actionBtn}>Edit</button>
                <button className={styles.actionBtnDelete}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
