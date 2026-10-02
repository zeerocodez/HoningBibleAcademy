import styles from './page.module.css';

export default function LearningJournal() {
  return (
    <div className={styles.journalContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Learning Journal</h1>
        <button className="button button-primary">New Entry</button>
      </div>

      <div className={styles.editorSection}>
        <div className={styles.editor}>
          <input 
            type="text" 
            placeholder="Entry Title (e.g. Reflections on Genesis 1)" 
            className={styles.inputField} 
          />
          <textarea 
            placeholder="Write your reflections here..." 
            className={styles.textArea}
          ></textarea>
          <div className={styles.editorActions}>
            <button className="button button-secondary">Cancel</button>
            <button className="button button-primary">Save Entry</button>
          </div>
        </div>
      </div>

      <div className={styles.historySection}>
        <h2>Previous Entries</h2>
        <div className={styles.entryList}>
          {/* Mock empty state since no real db is connected */}
          <div className={styles.emptyState}>
            <p>Your saved journal entries will appear here.</p>
            <p className={styles.hint}>Journal entries are private and only visible to you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
