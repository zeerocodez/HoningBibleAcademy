'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

interface Resource {
  id: string;
  title: string;
  author: string | null;
  category: string;
  fileUrl: string;
}

export default function ELibraryAdmin() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchResources = async () => {
    try {
      const res = await fetch('/api/admin/library');
      if (res.ok) {
        const data = await res.json();
        setResources(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/admin/library', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setSuccess('Materials uploaded successfully!');
        form.reset();
        fetchResources();
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to upload materials');
      }
    } catch (err) {
      setError('An error occurred during upload.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Manage e-Library</h1>
      </div>
      
      <div className={styles.uploadSection}>
        <h2>Upload Document(s)</h2>
        {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
        {success && <p style={{ color: 'green', marginBottom: '1rem' }}>{success}</p>}
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" className={styles.input} placeholder="Document Title" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="author">Author</label>
            <input type="text" name="author" id="author" className={styles.input} placeholder="Author Name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="category">Category</label>
            <select name="category" id="category" className={styles.input} required>
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
            <label htmlFor="files">Files (PDF, DOCX, Images, etc.)</label>
            <input type="file" name="files" id="files" className={styles.inputFile} multiple required />
            <small style={{ color: '#666', marginTop: '5px', display: 'block' }}>You can select multiple files at once.</small>
          </div>
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Uploading...' : 'Upload'}
          </button>
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
            {resources.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ textAlign: 'center', padding: '1rem' }}>No materials uploaded yet.</td>
              </tr>
            ) : (
              resources.map(resource => (
                <tr key={resource.id}>
                  <td>
                    <a href={resource.fileUrl} target="_blank" rel="noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                      {resource.title}
                    </a>
                  </td>
                  <td>{resource.author || 'N/A'}</td>
                  <td>{resource.category.replace('_', ' ')}</td>
                  <td>
                    <button className={styles.actionBtnDelete}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
