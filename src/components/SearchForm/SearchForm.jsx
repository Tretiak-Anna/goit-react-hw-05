import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchForm.module.css';

const notify = () => toast('You forgot to describe the movie');

export default function SearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, actions) => {
        if (values.query === '') {
          notify();
        } else {
          onSearch(values.query);
          actions.resetForm();
        }
      }}
    >
      <Form className={css.form}>
        <Field
          className={css.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
        <Toaster position="top-center" />
      </Form>
    </Formik>
  );
}
