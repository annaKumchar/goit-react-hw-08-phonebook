import { Form } from 'components/Form/ContactsForm';
import { Section } from 'components/Section/Section';
import { PhonebookWrap } from 'components/Section/Section.styled';
import { List } from 'components/List/List';
import { Filter } from 'components/Filter/Filter';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selector';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <PhonebookWrap>
        <Section title="Phonebook">
          <Form></Form>
        </Section>
        {isLoading && <p>Loading contacts...</p>}
        {error && <p>{error}</p>}
        {contacts.length > 0 && !isLoading && (
          <Section title="Contacts">
            <Filter />
            <List></List>
          </Section>
        )}
      </PhonebookWrap>
    </div>
  );
}
