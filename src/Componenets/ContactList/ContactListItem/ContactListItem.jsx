import { ContactItem } from "./ContactListItemStyled";
import PropTypes from "prop-types";

const ContactListItem = ({
  id,
  name,
  number,
  onDeleteContact,
  onUpdateContact,
}) => {
  return (
    <ContactItem>
      <p className="contactItem">
        <span className="nameContact">{name}:</span>
        <span className="numberContact">{number}</span>
      </p>
      <div className="buttonWrapper">
        <button className="buttonUpdate" onClick={() => onUpdateContact(id)}>
          Update
        </button>
        <button className="buttonDelete" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </div>
    </ContactItem>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
